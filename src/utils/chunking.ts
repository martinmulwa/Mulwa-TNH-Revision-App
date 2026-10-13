/**
 * Mulwa Clinical Exam Portal
 * Question Chunking & Set Generation Engine
 *
 * Implements strict 20-question set chunking matching:
 * totalSets = Math.ceil(totalQuestions / 20)
 * setNumber = Math.floor(index / 20) + 1
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 4.0.0
 */

import { PastPaper, Question, RevisionSet } from '../types';

/**
 * Returns mark value for a question (each question is worth 1 mark).
 */
export function getQuestionMarks(q: Question): number {
  if (q.marks !== undefined && q.marks > 0) return q.marks;
  return 1;
}

/**
 * Partitions an exam paper's questions into sets.
 * If paper.sets exists, it is the source of truth for sets.
 * Otherwise, falls back to 20-item chunking.
 */
export function chunkQuestions(input: PastPaper | Question[]): RevisionSet[] {
  if (!input) return [];

  // If input is a PastPaper with explicit sets
  if (!Array.isArray(input) && input.sets && input.sets.length > 0) {
    const paper = input;
    const questions = paper.questions || [];
    return paper.sets.map(pSet => {
      const setQuestions = questions.filter(q => q.setNumber === pSet.setNumber);
      const totalMarks = setQuestions.reduce((acc, q) => acc + getQuestionMarks(q), 0);
      return {
        id: `set${pSet.setNumber}`,
        setNumber: pSet.setNumber,
        name: pSet.title,
        description: pSet.description,
        section: setQuestions[0]?.section || 'A',
        questionsRange: `${pSet.questionCount} questions`,
        startNum: 1,
        endNum: pSet.questionCount,
        questions: setQuestions,
        totalMarks
      };
    });
  }

  const questions: Question[] = Array.isArray(input) ? input : (input.questions || []);
  if (questions.length === 0) return [];

  const chunkSize = 20;
  const sets: RevisionSet[] = [];
  const totalSets = Math.ceil(questions.length / chunkSize);

  for (let s = 0; s < totalSets; s++) {
    const setNumber = s + 1;
    const startIdx = s * chunkSize;
    const endIdx = Math.min(startIdx + chunkSize, questions.length);
    const chunkQuestions = questions.slice(startIdx, endIdx);

    const startNum = startIdx + 1;
    const endNum = endIdx;
    const rangeLabel = `Questions ${startNum} to ${endNum}`;
    const name = `Set ${setNumber} (${rangeLabel})`;
    const section = chunkQuestions[0]?.section || 'A';
    const totalMarks = chunkQuestions.reduce((acc, q) => acc + getQuestionMarks(q), 0);

    sets.push({
      id: `set${setNumber}`,
      setNumber,
      name,
      section,
      questionsRange: rangeLabel,
      startNum,
      endNum,
      questions: chunkQuestions,
      totalMarks
    });
  }

  return sets;
}


