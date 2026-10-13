/**
 * Clinical Exam Portal
 * Master Papers Registry & Aggregator
 *
 * Central registry exporting all configured past examination papers.
 * New past papers can be imported and added to the ALL_PAPERS collection.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 5.0.0
 */

import { PastPaper } from '../../types';
import { KRN_BLOCK1_SEPT2024_RESPIRATORY_DISORDERS } from './krnBlock1Sept2024';
import { KRN_BLOCK1_MAR2026_RESPIRATORY_DISORDERS } from './krnBlock1Mar2026';

export {
  KRN_BLOCK1_SEPT2024_RESPIRATORY_DISORDERS,
  KRN_BLOCK1_MAR2026_RESPIRATORY_DISORDERS
};

/**
 * Master collection of past examination papers.
 * Populate this array with validated PastPaper instances.
 */
export const ALL_PAPERS: PastPaper[] = [
  KRN_BLOCK1_SEPT2024_RESPIRATORY_DISORDERS,
  KRN_BLOCK1_MAR2026_RESPIRATORY_DISORDERS
];


