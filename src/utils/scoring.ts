/**
 * Mulwa Clinical Exam Portal
 * Deterministic Auto-Grading Scoring Engine
 *
 * All questions are auto-gradable:
 * - mcq: single-best-answer question with exactly 4 options (A, B, C, D).
 * - true_false: statement with exactly 2 options (A = True, B = False).
 *
 * Full mark (1.0) if chosen option matches correctAnswer; 0.0 otherwise.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 4.0.0
 */

import { Question, OptionKey, QResult } from '../types';

/** Helper to round to 2 decimal places */
export function round2(num: number): number {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

/**
 * MCQ Scoring:
 * Awards 1.0 (or q.marks) if chosen option matches correctAnswer, 0 otherwise.
 *
 * Worked Example 1:
 * Question correctAnswer = 'B', marks = 1
 * Student selects 'B' -> earned = 1.0, max = 1.0, isCorrect = true
 *
 * Worked Example 2:
 * Question correctAnswer = 'B', marks = 1
 * Student selects 'C' -> earned = 0.0, max = 1.0, isCorrect = false
 */
export function scoreMcq(q: Question, selectedOption?: OptionKey | string): QResult {
  const max = q.marks ?? 1;
  const isCorrect = selectedOption === q.correctAnswer;
  return {
    earned: isCorrect ? max : 0,
    max,
    isCorrect,
    selectedOption: selectedOption as OptionKey,
    sourceType: q.sourceType,
    detail: selectedOption ? { [selectedOption]: isCorrect } : {}
  };
}

/**
 * True / False Scoring:
 * Options: A = True, B = False.
 * Awards 1.0 (or q.marks) if chosen option matches correctAnswer, 0 otherwise.
 *
 * Worked Example 1:
 * Statement correctAnswer = 'B' (False)
 * Student selects 'B' (False) -> earned = 1.0, max = 1.0, isCorrect = true
 *
 * Worked Example 2:
 * Statement correctAnswer = 'B' (False)
 * Student selects 'A' (True) -> earned = 0.0, max = 1.0, isCorrect = false
 */
export function scoreTrueFalse(q: Question, selectedOption?: OptionKey | string): QResult {
  const max = q.marks ?? 1;
  // Handle 'T'/'F' aliases for backward compatibility
  let normalizedChoice = selectedOption;
  if (selectedOption === 'T' || selectedOption === 'True') normalizedChoice = 'A';
  if (selectedOption === 'F' || selectedOption === 'False') normalizedChoice = 'B';

  let normalizedAnswer = q.correctAnswer;
  if ((normalizedAnswer as string) === 'T' || (normalizedAnswer as string) === 'True') normalizedAnswer = 'A';
  if ((normalizedAnswer as string) === 'F' || (normalizedAnswer as string) === 'False') normalizedAnswer = 'B';

  const isCorrect = normalizedChoice === normalizedAnswer;
  return {
    earned: isCorrect ? max : 0,
    max,
    isCorrect,
    selectedOption: normalizedChoice as OptionKey,
    sourceType: q.sourceType,
    detail: normalizedChoice ? { [normalizedChoice]: isCorrect } : {}
  };
}

export const scoreTf = scoreTrueFalse;

/**
 * Unified scoring dispatcher.
 */
export function scoreQuestion(q: Question, selectedOption?: OptionKey | string): QResult {
  if (q.questionType === 'true_false') {
    return scoreTrueFalse(q, selectedOption);
  }
  return scoreMcq(q, selectedOption);
}
