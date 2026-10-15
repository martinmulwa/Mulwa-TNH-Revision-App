/**
 * Mulwa Clinical Exam Portal
 * SAQ Question Bank Data Provider & Index
 *
 * Provides categorized access to the 29 high-yield SAQs sorted by decreasing
 * exam appearance frequency across 12 past papers (2011 to 2026).
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 2.0.0
 */

import saqDataRaw from './saqQuestionBank.json';
import { SAQBankData, SAQQuestion, SAQPart } from '../types';

export const SAQ_BANK = saqDataRaw as unknown as SAQBankData;

/** Condition categories sorted in decreasing order of exam frequency */
export const SAQ_CATEGORIES: SAQPart[] = SAQ_BANK.parts;

export const ALL_SAQ_QUESTIONS: SAQQuestion[] = SAQ_BANK.parts.flatMap(
  (part) => part.questions
);

export function getCategoryById(categoryId: string): SAQPart | undefined {
  return SAQ_CATEGORIES.find((c) => c.id === categoryId);
}

export function getSAQsByCategory(categoryId: string): SAQQuestion[] {
  const cat = getCategoryById(categoryId);
  return cat ? cat.questions : [];
}

export function getSAQById(id: string): SAQQuestion | undefined {
  return ALL_SAQ_QUESTIONS.find(
    (q) => q.id === id || q.qNumber.toLowerCase() === id.toLowerCase()
  );
}

export const SAQ_PARTS = SAQ_CATEGORIES;
