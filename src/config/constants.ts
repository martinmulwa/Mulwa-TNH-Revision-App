/**
 * Mulwa Clinical Exam Portal
 * Application Constants & Pacing Thresholds
 */

export const MISTAKE_THRESHOLD = 0.5;
export const RESOLVE_THRESHOLD = 0.8;

export const SCORE_BANDS = {
  DISTINCTION: 80,
  CREDIT: 60
} as const;

// Set chunk size for questions
export const CHUNK_SIZE = 20;
