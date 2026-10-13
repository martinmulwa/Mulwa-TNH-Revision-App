/**
 * Mulwa Clinical Exam Portal
 * Question Normalization & Helper Utilities
 *
 * Implements backward-compatible defaulting:
 * - If questionType is missing:
 *   checks if options has exactly keys A and B with values "True" and "False" -> 'true_false'
 *   otherwise defaults to 'mcq'.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 4.0.0
 */

import { Question, QuestionType, OptionKey, PastPaper } from '../types';

/**
 * Determines whether a question is mcq or true_false according to Section 2.4 rules.
 */
export function resolveQuestionType(q: {
  questionType?: string;
  type?: string;
  options?: Partial<Record<string, string>>;
}): QuestionType {
  if (q.questionType === 'mcq' || q.questionType === 'true_false') {
    return q.questionType;
  }
  if (q.type === 'tf' || q.type === 'true_false') {
    return 'true_false';
  }

  const opts = q.options || {};
  const keys = Object.keys(opts);

  if (
    keys.length === 2 &&
    keys.includes('A') &&
    keys.includes('B') &&
    opts['A']?.trim().toLowerCase() === 'true' &&
    opts['B']?.trim().toLowerCase() === 'false'
  ) {
    return 'true_false';
  }

  return 'mcq';
}

/**
 * Normalizes a raw question object into the strict Question schema.
 */
export function normalizeQuestion(rawQ: any, index: number, paperId: string, hasExplicitSets = false): Question {
  const resolvedType = resolveQuestionType(rawQ);
  const setNumber = (hasExplicitSets && rawQ.setNumber !== undefined)
    ? rawQ.setNumber
    : (rawQ.setNumber || Math.floor(index / 20) + 1);

  let options: Partial<Record<OptionKey, string>> = rawQ.options || {};
  if (resolvedType === 'true_false') {
    if (!options.A || !options.B) {
      options = { A: 'True', B: 'False' };
    }
  }

  let correctAnswer: OptionKey = rawQ.correctAnswer || 'A';
  if (resolvedType === 'true_false') {
    if (correctAnswer === ('T' as any) || correctAnswer === ('True' as any)) {
      correctAnswer = 'A';
    } else if (correctAnswer === ('F' as any) || correctAnswer === ('False' as any)) {
      correctAnswer = 'B';
    }
  }

  return {
    id: rawQ.id || `${paperId}_q${index + 1}`,
    paperId: rawQ.paperId || paperId,
    setNumber,
    questionNumberInSet: rawQ.questionNumberInSet,
    questionType: resolvedType,
    text: rawQ.text || '',
    options,
    correctAnswer,
    explanation: rawQ.explanation || '',
    sourceType: rawQ.sourceType,
    sourceRef: rawQ.sourceRef,
    markingPoint: rawQ.markingPoint,
    originalText: rawQ.originalText,
    marks: rawQ.marks ?? 1,
    section: rawQ.section || 'A'
  };
}

/**
 * Normalizes an entire PastPaper object into standard format.
 */
export function normalizePaper(rawPaper: any): PastPaper {
  const id = rawPaper.id || 'unknown-paper';
  const hasExplicitSets = Array.isArray(rawPaper.sets) && rawPaper.sets.length > 0;
  const rawQuestions = Array.isArray(rawPaper.questions) ? rawPaper.questions : [];
  const questions = rawQuestions.map((q: any, idx: number) => normalizeQuestion(q, idx, id, hasExplicitSets));
  const totalQuestions = rawPaper.totalQuestions || questions.length;
  const totalSets = hasExplicitSets ? rawPaper.sets.length : (rawPaper.totalSets || Math.ceil(totalQuestions / 20) || 1);

  return {
    id,
    title: rawPaper.title || 'Clinical Past Paper',
    year: rawPaper.year || '2024',
    category: rawPaper.category, // optional; omitted for block papers
    block: rawPaper.block,
    unit: rawPaper.unit,
    totalQuestions,
    totalSets,
    sets: rawPaper.sets,
    totalMarks: rawPaper.totalMarks ?? totalQuestions,
    notes: rawPaper.notes,
    questions
  };
}
