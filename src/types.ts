/**
 * Mulwa Clinical Exam Portal
 * Type Definitions & Domain Interfaces
 *
 * Single-Choice MCQ and True/False Examination Schema
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 4.0.0
 */

export type OptionKey = 'A' | 'B' | 'C' | 'D';

export type QuestionType = 'mcq' | 'true_false';

export type SourceType =
  | 'original_mcq'
  | 'original_true_false'
  | 'derived_saq'
  | 'derived_laq';

export type PaperCategory = 'Block 1' | 'Respiratory Disorders';

export interface PaperSet {
  setNumber: number;          // 1-based, unique, contiguous (1, 2, 3...)
  title: string;              // e.g. "Set 1: Original Exam Questions"
  description?: string;       // one sentence shown under the title
  questionCount: number;      // must equal the number of questions with this setNumber
}

export interface Question {
  id: string;
  paperId: string;
  setNumber: number;
  questionNumberInSet?: number; // NEW, 1-based position inside its set
  questionType: QuestionType;
  text: string;
  options: Partial<Record<OptionKey, string>>;
  correctAnswer: OptionKey;
  explanation: string;
  sourceType?: SourceType;
  sourceRef?: string;
  markingPoint?: string;

  // Backward compatibility fields
  type?: string;
  marks?: number;
  section?: 'A' | 'B' | 'C';
  originalText?: string;
  source?: string;
}

export interface PastPaper {
  id: string;
  year: string;
  title: string;
  category?: PaperCategory;   // optional; omitted for block papers
  block?: string;             // NEW, e.g. "Block 1"
  unit?: string;              // NEW, e.g. "Respiratory Disorders"
  totalQuestions: number;
  totalSets: number;          // = sets.length when `sets` exists, otherwise Math.ceil(totalQuestions / 20)
  sets?: PaperSet[];          // NEW, optional explicit set definitions
  questions: Question[];
  month?: string;
  examType?: string;
  totalMarks?: number;
  notes?: string;
}

export interface RevisionSet {
  id: string; // e.g. "set1"
  setNumber: number;
  name: string; // e.g. "Set 1 (Questions 1 to 20)"
  section: 'A' | 'B' | 'C';
  questionsRange: string; // e.g. "Questions 1 to 20"
  startNum: number;
  endNum: number;
  questions: Question[];
  totalMarks: number;
  description?: string;
}

export interface QResult {
  earned: number;
  max: number;
  isCorrect?: boolean;
  selectedOption?: OptionKey | string;
  detail?: Record<string, boolean>;
  sourceType?: SourceType;
  selfMarked?: boolean;
  isSelfMarked?: boolean;
}

export interface AnswerState {
  type?: QuestionType | string;
  questionType?: QuestionType;
  selectedOption?: OptionKey;
  submitted?: boolean;
  revealed?: boolean;
  confirmed?: boolean;
  result?: QResult;
  timestamp?: string;
}

export interface InProgressSetState {
  currentQuestionIndex: number;
  answers: Record<string, AnswerState>;
  timestamp: string;
}

export interface IncorrectQuestionRecord {
  id: string;
  questionId: string;
  paperId: string;
  setId: string;
  type?: string;
  earned: number;
  max: number;
  timestamp: string;
  summary?: string;
  selectedAnswer?: string;
}

export interface SessionProgress {
  schemaVersion?: number;
  completedSets: Record<string, { score: number; maxScore?: number; date: string }>;
  inProgressSets: Record<string, InProgressSetState>;
  bookmarkedQuestions: string[];
  incorrectQuestions: IncorrectQuestionRecord[];
}

export interface ActivityLog {
  id: string;
  paperId: string;
  setId: string;
  paperTitle: string;
  setName: string;
  scoreText: string;
  timestamp: string;
}
