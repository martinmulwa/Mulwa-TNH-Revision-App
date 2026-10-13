/**
 * Mulwa Clinical Exam Portal
 * Examination Repository & Question Bank Registry
 *
 * Central aggregator providing access to all modular exam papers, revision set
 * slicing helpers, and validation utilities.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 3.0.0
 */

import { Question, PastPaper, RevisionSet } from '../types';
import { ALL_PAPERS } from './papers';
import { validatePastPaper, validateAllPapers, PaperValidationReport } from './validator';
import { chunkQuestions } from '../utils/chunking';

/** Master collection of curated past examination papers */
export const PAST_PAPERS: PastPaper[] = ALL_PAPERS;



/**
 * Finds a past paper by exact ID, title, or substring. Defaults to the first paper if not found.
 */
export function findPaper(paperId?: string): PastPaper | undefined {
  if (!paperId) return PAST_PAPERS[0];
  return (
    PAST_PAPERS.find(p => p.id === paperId) ||
    PAST_PAPERS.find(p => p.title === paperId) ||
    PAST_PAPERS.find(p => p.id.includes(paperId))
  );
}

/**
 * Retrieves the specific questions corresponding to a revision set by filtering by question.setNumber.
 * Preserves the array order.
 */
export function getQuestionsForSet(paperId: string, setIdentifier: string | number): Question[] {
  const paper = findPaper(paperId);
  if (!paper) return [];
  const setNumber = typeof setIdentifier === 'number'
    ? setIdentifier
    : parseInt(String(setIdentifier).replace(/\D/g, ''), 10) || 1;

  return (paper.questions || []).filter(q => q.setNumber === setNumber);
}

/**
 * Returns all generated revision sets for a paper using chunkQuestions.
 */
export function getRevisionSetsForPaper(paperId: string): RevisionSet[] {
  const paper = findPaper(paperId);
  if (!paper) return [];
  return chunkQuestions(paper);
}

export {
  validatePastPaper,
  validateAllPapers,
  chunkQuestions,
  type PaperValidationReport
};
