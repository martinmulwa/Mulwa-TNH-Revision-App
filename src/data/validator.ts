/**
 * Mulwa Clinical Exam Portal
 * Question Bank Schema & Integrity Validator
 *
 * Implements strict Section 6 validation rules:
 * 1. questions.length === totalQuestions and totalSets === Math.ceil(totalQuestions / 20).
 * 2. Every question has non-empty id, paperId (matching paper), text, and explanation.
 * 3. questionType is 'mcq' or 'true_false' (applying default if missing).
 * 4. mcq: has exactly keys A, B, C, D, all non-empty and all different.
 * 5. true_false: has exactly keys A and B with values "True" and "False".
 * 6. correctAnswer is one of the keys present in options.
 * 7. setNumber === Math.floor(index / 20) + 1.
 * 8. sourceType, if present, is one of the four allowed values.
 * 9. Question ids are unique within the paper.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 4.0.0
 */

import { PastPaper, Question, QuestionType, SourceType } from '../types';
import { resolveQuestionType } from '../utils/questionHelpers';

export interface PaperValidationReport {
  isValid: boolean;
  paperId: string;
  paperTitle: string;
  totalQuestions: number;
  errors: string[];
  warnings: string[];
}

const ALLOWED_SOURCE_TYPES: Set<SourceType> = new Set([
  'original_mcq',
  'original_true_false',
  'derived_saq',
  'derived_laq'
]);

const ALLOWED_CATEGORIES = new Set<string>([
  'Block 1'
]);

/**
 * Validates a single question against the specification.
 */
export function validateQuestion(
  q: Question,
  paperId: string,
  index: number,
  hasExplicitSets = false
): string[] {
  const errors: string[] = [];
  const qId = q.id || `unidentified_q_at_${index}`;
  const prefix = `[Paper: "${paperId}", Question: "${qId}"]`;

  // Rule 2: Non-empty id, paperId (matching paper), text, and explanation
  if (!q.id || typeof q.id !== 'string' || q.id.trim() === '') {
    errors.push(`${prefix} Violation: Missing or empty 'id'`);
  }
  if (!q.paperId || q.paperId !== paperId) {
    errors.push(`${prefix} Violation: 'paperId' mismatch (expected "${paperId}", got "${q.paperId}")`);
  }
  if (!q.text || typeof q.text !== 'string' || q.text.trim() === '') {
    errors.push(`${prefix} Violation: Missing or empty 'text'`);
  }
  if (!q.explanation || typeof q.explanation !== 'string' || q.explanation.trim() === '') {
    errors.push(`${prefix} Violation: Missing or empty 'explanation'`);
  }

  // Rule 3: questionType is 'mcq' or 'true_false' (apply default if missing)
  const resolvedType: QuestionType = resolveQuestionType(q);
  if (resolvedType !== 'mcq' && resolvedType !== 'true_false') {
    errors.push(`${prefix} Violation: Invalid questionType "${q.questionType}" (must be 'mcq' or 'true_false')`);
  }

  const options = q.options || {};
  const optionKeys = Object.keys(options);

  // Rule 4: mcq has exactly keys A, B, C, D, all non-empty and all different
  if (resolvedType === 'mcq') {
    const requiredKeys = ['A', 'B', 'C', 'D'];
    const hasExactlyKeys =
      optionKeys.length === 4 &&
      requiredKeys.every(k => optionKeys.includes(k));

    if (!hasExactlyKeys) {
      errors.push(`${prefix} Violation: MCQ options must contain exactly keys A, B, C, D (found [${optionKeys.join(', ')}])`);
    } else {
      const distinctValues = new Set<string>();
      requiredKeys.forEach(k => {
        const val = options[k as keyof typeof options];
        if (!val || typeof val !== 'string' || val.trim() === '') {
          errors.push(`${prefix} Violation: MCQ option ${k} is empty`);
        } else {
          distinctValues.add(val.trim().toLowerCase());
        }
      });

      if (distinctValues.size < 4) {
        errors.push(`${prefix} Violation: MCQ options must all be different`);
      }
    }
  }

  // Rule 5: true_false has exactly keys A and B with values "True" and "False"
  if (resolvedType === 'true_false') {
    const hasKeys =
      optionKeys.length === 2 &&
      optionKeys.includes('A') &&
      optionKeys.includes('B');

    if (!hasKeys) {
      errors.push(`${prefix} Violation: True/False question must contain exactly keys A and B (found [${optionKeys.join(', ')}])`);
    } else {
      const valA = options['A']?.trim();
      const valB = options['B']?.trim();
      if (valA !== 'True' || valB !== 'False') {
        errors.push(`${prefix} Violation: True/False options must have values A: "True" and B: "False" (got A: "${valA}", B: "${valB}")`);
      }
    }
  }

  // Rule 6: correctAnswer is one of the keys present in options
  if (!q.correctAnswer || !optionKeys.includes(q.correctAnswer)) {
    errors.push(`${prefix} Violation: correctAnswer "${q.correctAnswer}" is not one of the keys present in options [${optionKeys.join(', ')}]`);
  }

  // Rule 7: setNumber === Math.floor(index / 20) + 1 applies ONLY when paper.sets is absent
  if (!hasExplicitSets) {
    const expectedSetNumber = Math.floor(index / 20) + 1;
    if (q.setNumber !== expectedSetNumber) {
      errors.push(`${prefix} Violation: setNumber is ${q.setNumber}, expected ${expectedSetNumber} for index ${index}`);
    }
  } else {
    if (!q.setNumber || q.setNumber < 1) {
      errors.push(`${prefix} Violation: setNumber must be a positive integer (got ${q.setNumber})`);
    }
  }

  // Rule 8: sourceType, if present, is one of the four allowed values
  if (q.sourceType && !ALLOWED_SOURCE_TYPES.has(q.sourceType)) {
    errors.push(`${prefix} Violation: Invalid sourceType "${q.sourceType}" (allowed: ${Array.from(ALLOWED_SOURCE_TYPES).join(', ')})`);
  }

  return errors;
}

/**
 * Validates a complete PastPaper against all specification rules.
 */
export function validatePaper(paper: PastPaper): PaperValidationReport {
  const errors: string[] = [];
  const warnings: string[] = [];

  const paperId = paper.id || 'unidentified_paper';

  if (!paper.id) errors.push(`Paper missing 'id'`);
  if (!paper.title) errors.push(`Paper "${paperId}" missing 'title'`);
  if (!paper.year) errors.push(`Paper "${paperId}" missing 'year'`);

  // Category validation: if present, must be one of allowed PaperCategory
  if (paper.category !== undefined) {
    if (!ALLOWED_CATEGORIES.has(paper.category)) {
      errors.push(`Paper "${paperId}": Invalid category "${paper.category}". Allowed: ${Array.from(ALLOWED_CATEGORIES).join(', ')}`);
    }
  }

  // Block & Unit validation: If block is present, unit must also be present, and both non-empty
  if (paper.block !== undefined) {
    if (typeof paper.block !== 'string' || paper.block.trim() === '') {
      errors.push(`Paper "${paperId}": 'block' is present but empty`);
    }
    if (paper.unit === undefined || typeof paper.unit !== 'string' || paper.unit.trim() === '') {
      errors.push(`Paper "${paperId}": 'block' is present so 'unit' must also be present and non-empty`);
    }
  }

  if (!Array.isArray(paper.questions) || paper.questions.length === 0) {
    errors.push(`Paper "${paperId}" contains no questions`);
    return {
      isValid: false,
      paperId,
      paperTitle: paper.title || 'Untitled',
      totalQuestions: 0,
      errors,
      warnings
    };
  }

  // questions.length === totalQuestions
  if (paper.questions.length !== paper.totalQuestions) {
    errors.push(
      `Paper "${paperId}": questions.length (${paper.questions.length}) does not equal totalQuestions (${paper.totalQuestions})`
    );
  }

  const hasExplicitSets = Array.isArray(paper.sets) && paper.sets.length > 0;

  if (hasExplicitSets) {
    const sets = paper.sets!;
    // 1. sets.length === totalSets
    if (sets.length !== paper.totalSets) {
      errors.push(`Paper "${paperId}": sets.length (${sets.length}) does not equal totalSets (${paper.totalSets})`);
    }

    // setNumber values are unique and contiguous starting at 1
    const setNumbers = sets.map(s => s.setNumber);
    const setNumberSet = new Set(setNumbers);
    if (setNumberSet.size !== sets.length) {
      errors.push(`Paper "${paperId}": sets contain duplicate setNumbers`);
    }
    for (let i = 1; i <= sets.length; i++) {
      if (!setNumberSet.has(i)) {
        errors.push(`Paper "${paperId}": setNumber values must be contiguous starting at 1 (missing ${i})`);
      }
    }

    // 2. For every set, questionCount equals number of questions with that setNumber
    let sumQuestionCount = 0;
    sets.forEach(s => {
      sumQuestionCount += s.questionCount;
      const matchingQuestions = paper.questions.filter(q => q.setNumber === s.setNumber);
      if (matchingQuestions.length !== s.questionCount) {
        errors.push(
          `Paper "${paperId}": Set ${s.setNumber} questionCount is ${s.questionCount}, but found ${matchingQuestions.length} questions with setNumber ${s.setNumber}`
        );
      }

      // 5. If questionNumberInSet is present, it runs 1..N without gaps within each set
      const hasQNumInSet = matchingQuestions.some(q => q.questionNumberInSet !== undefined);
      if (hasQNumInSet) {
        const inSetIndices = matchingQuestions.map(q => q.questionNumberInSet);
        for (let num = 1; num <= matchingQuestions.length; num++) {
          if (!inSetIndices.includes(num)) {
            errors.push(
              `Paper "${paperId}": Set ${s.setNumber} questionNumberInSet must run 1..${matchingQuestions.length} without gaps (missing ${num})`
            );
          }
        }
      }
    });

    // 3. Sum of all questionCount equals totalQuestions
    if (sumQuestionCount !== paper.totalQuestions) {
      errors.push(
        `Paper "${paperId}": Sum of all set questionCounts (${sumQuestionCount}) does not equal totalQuestions (${paper.totalQuestions})`
      );
    }

    // 3b. Every question.setNumber matches one defined set
    paper.questions.forEach((q, idx) => {
      if (!setNumberSet.has(q.setNumber)) {
        errors.push(`Paper "${paperId}": Question id "${q.id}" at index ${idx} has setNumber ${q.setNumber} which does not match any defined set`);
      }
    });
  } else {
    // Legacy chunking: totalSets === Math.ceil(totalQuestions / 20)
    const expectedTotalSets = Math.ceil(paper.questions.length / 20);
    if (paper.totalSets !== expectedTotalSets) {
      errors.push(
        `Paper "${paperId}": totalSets (${paper.totalSets}) does not equal Math.ceil(totalQuestions / 20) (${expectedTotalSets})`
      );
    }
  }

  // Rule 9: Question ids are unique within the paper
  const seenIds = new Set<string>();
  paper.questions.forEach((q, idx) => {
    if (q.id) {
      if (seenIds.has(q.id)) {
        errors.push(`Paper "${paperId}": Duplicate question id "${q.id}" at index ${idx}`);
      }
      seenIds.add(q.id);
    }
  });

  // Validate every question
  paper.questions.forEach((q, idx) => {
    const qErrors = validateQuestion(q, paperId, idx, hasExplicitSets);
    errors.push(...qErrors);
  });

  return {
    isValid: errors.length === 0,
    paperId,
    paperTitle: paper.title,
    totalQuestions: paper.questions.length,
    errors,
    warnings
  };
}

export const validatePastPaper = validatePaper;

/**
 * Validates an array of papers.
 */
export function validateAllPapers(papers: PastPaper[]): { valid: PastPaper[]; invalidCount: number } {
  const valid: PastPaper[] = [];
  let invalidCount = 0;

  papers.forEach(paper => {
    const report = validatePaper(paper);
    if (report.isValid) {
      valid.push(paper);
    } else {
      invalidCount++;
      console.warn(`[Validation Report] Paper "${paper.id}" has ${report.errors.length} validation errors:`, report.errors);
      valid.push(paper);
    }
  });

  return { valid, invalidCount };
}
