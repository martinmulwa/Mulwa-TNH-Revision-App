/**
 * Mulwa Clinical Exam Portal
 * TNH Practice Exam — Chronic Conditions (Respiratory Disorders)
 * Asthma, Status Asthmaticus, Emphysema & COPD
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../../types';

export const TNH_PRACTICE_CHRONIC_CONDITIONS: PastPaper = {
  id: "tnh-respiratory-disorders-chronic-conditions",
  year: "Practice",
  month: "",
  examType: "Practice",
  title: "TNH Practice: Chronic Conditions",
  category: "Respiratory Disorders",
  block: "TNH Practice",
  unit: "Chronic Conditions",
  totalQuestions: 60,
  totalSets: 2,
  sets: [
    {
      setNumber: 1,
      title: "Set 1: Knowledge and Recall",
      description: "30 MCQs testing definitions, causes, pathophysiology, clinical manifestations and assessment findings from the lecture notes on asthma, status asthmaticus, emphysema and COPD.",
      questionCount: 30
    },
    {
      setNumber: 2,
      title: "Set 2: Application and Clinical Scenarios",
      description: "30 MCQs testing management, nursing care, complications and clinical scenarios from the same lecture notes on asthma, status asthmaticus, emphysema and COPD.",
      questionCount: 30
    }
  ],
  questions: [
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q1",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 1,
      questionType: "mcq",
      text: "Asthma is best described as:",
      options: {
        A: "A disease with airflow limitation that is progressive and not fully reversible",
        B: "A chronic inflammatory disease of the airways that causes airway hyperresponsiveness, mucosal oedema and mucus production",
        C: "An abnormal distention of the airspaces beyond the terminal bronchioles with destruction of the alveolar walls",
        D: "A severe and persistent attack that does not respond to conventional therapy"
      },
      correctAnswer: "B",
      explanation: "A chronic inflammatory disease of the airways that causes airway hyperresponsiveness, mucosal oedema and mucus production (B) is correct because asthma is a chronic inflammatory airway disease whose inflammation leads to recurrent episodes of cough, chest tightness, wheezing and dyspnea. A disease with airflow limitation that is progressive and not fully reversible (A) is incorrect because this describes chronic obstructive pulmonary disease (COPD), whereas asthma is characterised by recurrent episodes of symptoms. An abnormal distention of the airspaces beyond the terminal bronchioles with destruction of the alveolar walls (C) is incorrect because this describes emphysema, in which the alveolar walls are destroyed. A severe and persistent attack that does not respond to conventional therapy (D) is incorrect because this describes status asthmaticus, which is a complication of asthma and not the disease itself.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: definition",
      markingPoint: "Chronic inflammatory disease with hyperresponsiveness, oedema, mucus"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q2",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 2,
      questionType: "mcq",
      text: "The strongest predisposing factor for asthma is:",
      options: {
        A: "Air pollution from burning fossil fuels",
        B: "Loss of elastic recoil with ageing",
        C: "Cigarette smoking",
        D: "Allergy"
      },
      correctAnswer: "D",
      explanation: "Allergy (D) is correct because allergy is the strongest predisposing factor, and the common allergens may be seasonal (grass, tree and weed pollens) or perennial (mould, dust, cockroaches, animal dander). Air pollution from burning fossil fuels (A) is incorrect because air pollution from fossil fuels is listed as a risk factor for COPD. Loss of elastic recoil with ageing (B) is incorrect because loss of elastic recoil with ageing is a risk factor for COPD. Cigarette smoking (C) is incorrect because cigarette smoking is the major risk factor for COPD and not the strongest predisposing factor for asthma.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: predisposing factors",
      markingPoint: "Allergy is the strongest predisposing factor"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q3",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 3,
      questionType: "mcq",
      text: "Which of the following allergens is perennial rather than seasonal?",
      options: {
        A: "Tree pollen",
        B: "Weed pollen",
        C: "Animal dander",
        D: "Grass pollen"
      },
      correctAnswer: "C",
      explanation: "Animal dander (C) is correct because perennial allergens occur throughout the year and include mould, dust, cockroaches and animal dander. Tree pollen (A) is incorrect because tree pollen is a seasonal allergen. Weed pollen (B) is incorrect because weed pollen is a seasonal allergen. Grass pollen (D) is incorrect because grass pollen is a seasonal allergen.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: allergens",
      markingPoint: "Seasonal (pollens) vs perennial (mould, dust, cockroaches, dander) allergens"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q4",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 4,
      questionType: "mcq",
      text: "Which group of medications can trigger asthma symptoms and exacerbations?",
      options: {
        A: "Corticosteroids such as beclomethasone",
        B: "Short-acting beta2-adrenergic agonists such as albuterol",
        C: "Leukotriene modifiers such as montelukast",
        D: "Aspirin, NSAIDs and beta-adrenergic blockers"
      },
      correctAnswer: "D",
      explanation: "Aspirin, NSAIDs and beta-adrenergic blockers (D) is correct because aspirin, NSAIDs and beta-adrenergic blockers are among the medications that can trigger asthma symptoms and exacerbations. Corticosteroids such as beclomethasone (A) is incorrect because beclomethasone is a potent anti-inflammatory used for long-term control. Short-acting beta2-adrenergic agonists such as albuterol (B) is incorrect because albuterol is a quick-relief bronchodilator used to treat an attack. Leukotriene modifiers such as montelukast (C) is incorrect because montelukast is a long-acting medication used to maintain control of asthma.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: triggers",
      markingPoint: "Medication triggers: aspirin, NSAIDs, beta blockers"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q5",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 5,
      questionType: "mcq",
      text: "The primary pathophysiologic process in asthma is:",
      options: {
        A: "Breakdown of elastin with loss of lung elasticity",
        B: "Permanent fibrosis of the airways caused by smoking",
        C: "Increased pulmonary capillary hydrostatic pressure",
        D: "Chronic inflammation, which leads to airway hyperresponsiveness and acute airway limitation"
      },
      correctAnswer: "D",
      explanation: "Chronic inflammation, which leads to airway hyperresponsiveness and acute airway limitation (D) is correct because exposure to allergens or irritants starts an inflammatory cascade, and the resulting chronic inflammation causes airway hyperresponsiveness and acute airway limitation. Breakdown of elastin with loss of lung elasticity (A) is incorrect because breakdown of elastin is the process that leads to loss of lung elasticity in emphysema. Permanent fibrosis of the airways caused by smoking (B) is incorrect because permanent fibrosis from smoking belongs to chronic bronchitis and COPD, not to the primary process of asthma. Increased pulmonary capillary hydrostatic pressure (C) is incorrect because raised capillary pressure causes pulmonary oedema.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: pathophysiology",
      markingPoint: "Chronic inflammation leads to hyperresponsiveness and airway limitation"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q6",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 6,
      questionType: "mcq",
      text: "When mast cells degranulate in asthma, the inflammatory mediators they release include:",
      options: {
        A: "Haemoglobin and erythropoietin",
        B: "Elastase and other protease enzymes",
        C: "Alpha-1 antitrypsin and surfactant",
        D: "Leukotrienes, histamine, cytokines and prostaglandins"
      },
      correctAnswer: "D",
      explanation: "Leukotrienes, histamine, cytokines and prostaglandins (D) is correct because these mediators perpetuate the inflammation, causing increased blood flow, vasoconstriction, increased capillary permeability with oedema, bronchoconstriction and attraction of white blood cells. Haemoglobin and erythropoietin (A) is incorrect because haemoglobin and erythropoietin are not inflammatory mediators released by mast cells. Elastase and other protease enzymes (B) is incorrect because elastase and protease enzymes destroy the alveolar walls in emphysema and COPD. Alpha-1 antitrypsin and surfactant (C) is incorrect because alpha-1 antitrypsin deficiency is a hereditary predisposing factor for emphysema and COPD, and it is not a mast cell mediator.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: pathophysiology",
      markingPoint: "Mediators: leukotrienes, histamine, cytokines, prostaglandins"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q7",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 7,
      questionType: "mcq",
      text: "During an asthma attack, which phase of breathing needs more effort, and why is wheezing heard?",
      options: {
        A: "Both phases equally, because the alveoli are filled with fluid",
        B: "Inspiration, because the bronchi are dilated and secretions are reduced",
        C: "Expiration, because air squeezes out through narrowed bronchi with increased secretions",
        D: "Neither phase, because wheezing is produced by friction in the pleural space"
      },
      correctAnswer: "C",
      explanation: "Expiration, because air squeezes out through narrowed bronchi with increased secretions (C) is correct because breathing in becomes easier while expiration needs more effort because the bronchi are narrowed and secretions are increased, and the air squeezing out produces the wheeze. Both phases equally, because the alveoli are filled with fluid (A) is incorrect because fluid in the alveoli describes pulmonary oedema, and in asthma expiration is the phase that needs more effort. Inspiration, because the bronchi are dilated and secretions are reduced (B) is incorrect because in asthma the bronchi are narrowed and not dilated, and secretions are increased. Neither phase, because wheezing is produced by friction in the pleural space (D) is incorrect because wheezing is produced by air passing through the constricted bronchi and not by the pleura.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: pathophysiology",
      markingPoint: "Expiration needs more effort; wheeze from constricted bronchi"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q8",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 8,
      questionType: "mcq",
      text: "Following exposure to an allergen, the inflammatory response in asthma can occur within:",
      options: {
        A: "5 to 10 minutes",
        B: "30 to 60 minutes",
        C: "6 to 8 hours",
        D: "2 to 3 days"
      },
      correctAnswer: "B",
      explanation: "30 to 60 minutes (B) is correct because the inflammatory response, with mediator release and bronchoconstriction, can occur within 30 to 60 minutes. 5 to 10 minutes (A) is incorrect because 5 to 10 minutes is shorter than the stated time frame. 6 to 8 hours (C) is incorrect because 6 to 8 hours is much longer than the stated time frame. 2 to 3 days (D) is incorrect because 2 to 3 days is far longer than the stated time frame.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: pathophysiology",
      markingPoint: "Response can occur within 30 to 60 minutes"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q9",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 9,
      questionType: "mcq",
      text: "Extrinsic asthma is characterised by:",
      options: {
        A: "Onset in adulthood without a clear external allergic trigger",
        B: "A mixture of allergic and non-allergic characteristics",
        C: "An IgE-mediated allergic reaction, a history of eczema or allergic rhinitis, and recovery with age in many children",
        D: "Attacks that become more severe and frequent with time and may progress to emphysema"
      },
      correctAnswer: "C",
      explanation: "An IgE-mediated allergic reaction, a history of eczema or allergic rhinitis, and recovery with age in many children (C) is correct because patients usually have earlier allergic conditions such as eczema or allergic rhinitis and known allergies to pollens, animals and food; the asthma is IgE mediated, and children with this type usually recover with age, especially in adolescence. Onset in adulthood without a clear external allergic trigger (A) is incorrect because this describes intrinsic (non-allergic) asthma. A mixture of allergic and non-allergic characteristics (B) is incorrect because this describes mixed asthma, which has the characteristics of both intrinsic and extrinsic types. Attacks that become more severe and frequent with time and may progress to emphysema (D) is incorrect because this describes intrinsic asthma, which can progress to chronic bronchitis or emphysema.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: types",
      markingPoint: "Extrinsic: IgE mediated, history of allergy, children recover with age"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q10",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 10,
      questionType: "mcq",
      text: "Which statement describes intrinsic asthma?",
      options: {
        A: "It is non-allergic, usually develops in adulthood, and can progress to chronic bronchitis or emphysema",
        B: "It is the most common type and has features of both types",
        C: "It is IgE mediated and children usually outgrow it in adolescence",
        D: "It is triggered only by pollens, animals and food"
      },
      correctAnswer: "A",
      explanation: "It is non-allergic, usually develops in adulthood, and can progress to chronic bronchitis or emphysema (A) is correct because intrinsic asthma occurs without a clear external allergic trigger and is not primarily IgE mediated; it is triggered by pollutants, cold weather, exercise, respiratory infection or drugs such as aspirin. It is the most common type and has features of both types (B) is incorrect because this describes mixed asthma. It is IgE mediated and children usually outgrow it in adolescence (C) is incorrect because this describes extrinsic asthma. It is triggered only by pollens, animals and food (D) is incorrect because pollens, animals and food are the known allergens of extrinsic asthma.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: types",
      markingPoint: "Intrinsic: non-allergic, adulthood, may progress to chronic bronchitis or emphysema"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q11",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 11,
      questionType: "mcq",
      text: "The most common type of asthma is:",
      options: {
        A: "Mixed asthma",
        B: "Intrinsic asthma",
        C: "Extrinsic asthma",
        D: "Exercise-induced asthma"
      },
      correctAnswer: "A",
      explanation: "Mixed asthma (A) is correct because mixed asthma is the most common type and has the characteristics of both the intrinsic and extrinsic types. Intrinsic asthma (B) is incorrect because intrinsic asthma is the non-allergic type and is not the most common. Extrinsic asthma (C) is incorrect because extrinsic asthma is the allergic, IgE-mediated type and is not the most common. Exercise-induced asthma (D) is incorrect because exercise is a trigger of asthma attacks and not one of the three types.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: types",
      markingPoint: "Mixed asthma is the most common"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q12",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 12,
      questionType: "mcq",
      text: "The three most common symptoms of asthma are:",
      options: {
        A: "Cough, clubbing of the fingers and weight loss",
        B: "Wheezing, diaphoresis and clubbing of the fingers",
        C: "Dyspnea, polycythaemia and barrel chest",
        D: "Cough, dyspnea and wheezing"
      },
      correctAnswer: "D",
      explanation: "Cough, dyspnea and wheezing (D) is correct because cough, dyspnea and wheezing are the three most common symptoms; chest tightness, diaphoresis, tachycardia and central cyanosis are other symptoms. Cough, clubbing of the fingers and weight loss (A) is incorrect because clubbing of the fingers and weight loss are features of emphysema. Wheezing, diaphoresis and clubbing of the fingers (B) is incorrect because diaphoresis is a less common symptom and clubbing of the fingers is a feature of emphysema. Dyspnea, polycythaemia and barrel chest (C) is incorrect because polycythaemia and barrel chest are findings in emphysema and COPD.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: clinical manifestations",
      markingPoint: "Cough, dyspnea, wheezing"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q13",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 13,
      questionType: "mcq",
      text: "The medication of choice to relieve an acute asthma attack is:",
      options: {
        A: "A leukotriene modifier such as montelukast",
        B: "A short-acting beta2-adrenergic agonist such as albuterol",
        C: "A long-acting beta2-adrenergic agent such as salmeterol",
        D: "A mast cell stabiliser such as cromolyn sodium"
      },
      correctAnswer: "B",
      explanation: "A short-acting beta2-adrenergic agonist such as albuterol (B) is correct because short-acting beta2-adrenergic agonists such as albuterol are bronchodilators that relax smooth muscle and give rapid relief of symptoms. A leukotriene modifier such as montelukast (A) is incorrect because montelukast is a long-acting leukotriene modifier used to maintain control of persistent asthma. A long-acting beta2-adrenergic agent such as salmeterol (C) is incorrect because salmeterol is a long-acting agent used for long-term control and to prevent exercise-induced asthma. A mast cell stabiliser such as cromolyn sodium (D) is incorrect because cromolyn sodium is used prophylactically, for example to prevent exercise-induced asthma, and not for rapid relief.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: medical management",
      markingPoint: "SABA (albuterol) is the medication of choice for acute asthma"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q14",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 14,
      questionType: "mcq",
      text: "Status asthmaticus is:",
      options: {
        A: "A short-term inflammation of the bronchi that resolves in 7 to 10 days",
        B: "Asthma that develops in adulthood without a clear allergic trigger",
        C: "Severe and persistent asthma that does not respond to conventional therapy",
        D: "An asthma attack that always gives clear warning before it starts"
      },
      correctAnswer: "C",
      explanation: "Severe and persistent asthma that does not respond to conventional therapy (C) is correct because status asthmaticus is severe and persistent asthma that does not respond to conventional therapy, and attacks can occur with no warning and progress to asphyxiation. A short-term inflammation of the bronchi that resolves in 7 to 10 days (A) is incorrect because this describes acute bronchitis. Asthma that develops in adulthood without a clear allergic trigger (B) is incorrect because this describes intrinsic asthma. An asthma attack that always gives clear warning before it starts (D) is incorrect because attacks of status asthmaticus can occur with no warning.",
      sourceType: "lecture_notes",
      sourceRef: "Status asthmaticus: definition",
      markingPoint: "Severe persistent asthma unresponsive to conventional therapy"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q15",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 15,
      questionType: "mcq",
      text: "Which group lists causes of status asthmaticus?",
      options: {
        A: "Unresolved infection, anxiety, dehydration and hypersensitivity to aspirin",
        B: "Removal of a lung, burns and liver failure",
        C: "Over-infusion of IV fluids, hypervolaemia and left ventricular failure",
        D: "Smoking, alpha-1 antitrypsin deficiency and ageing"
      },
      correctAnswer: "A",
      explanation: "Unresolved infection, anxiety, dehydration and hypersensitivity to aspirin (A) is correct because status asthmaticus can be caused by an unresolved infection, anxiety, dehydration, a non-specific irritant, hypersensitivity to aspirin and nebulizer abuse. Removal of a lung, burns and liver failure (B) is incorrect because these are causes of pulmonary oedema. Over-infusion of IV fluids, hypervolaemia and left ventricular failure (C) is incorrect because these are causes of pulmonary oedema. Smoking, alpha-1 antitrypsin deficiency and ageing (D) is incorrect because these are risk and predisposing factors for COPD and emphysema.",
      sourceType: "lecture_notes",
      sourceRef: "Status asthmaticus: causes",
      markingPoint: "Unresolved infection, anxiety, dehydration, irritant, aspirin hypersensitivity, nebulizer abuse"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q16",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 16,
      questionType: "mcq",
      text: "In status asthmaticus, the acid-base picture typically progresses from:",
      options: {
        A: "Respiratory acidosis initially to respiratory alkalosis",
        B: "Metabolic alkalosis initially to metabolic acidosis",
        C: "Normal blood gases throughout until respiratory failure",
        D: "Respiratory alkalosis initially to respiratory acidosis as the condition persists"
      },
      correctAnswer: "D",
      explanation: "Respiratory alkalosis initially to respiratory acidosis as the condition persists (D) is correct because narrowing of the bronchi with bronchospasm, swelling and increased mucus limits air movement and causes hypoxaemia; the patient has respiratory alkalosis at first, and as the condition persists this progresses to acidosis. Respiratory acidosis initially to respiratory alkalosis (A) is incorrect because the sequence is reversed in this option. Metabolic alkalosis initially to metabolic acidosis (B) is incorrect because the disturbance is respiratory in origin and not metabolic. Normal blood gases throughout until respiratory failure (C) is incorrect because blood gases change from the early stages and are not normal throughout.",
      sourceType: "lecture_notes",
      sourceRef: "Status asthmaticus: pathophysiology",
      markingPoint: "Respiratory alkalosis initially, progressing to acidosis"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q17",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 17,
      questionType: "mcq",
      text: "Which set of clinical features is typical of status asthmaticus?",
      options: {
        A: "Labored breathing, prolonged exhalation, engorged neck veins and wheezing",
        B: "Foamy blood-tinged sputum, air hunger and basal crackles",
        C: "Decreased breath sounds, a dull percussion note and tracheal deviation",
        D: "Slowly progressive dyspnea, clubbing of the fingers and barrel chest"
      },
      correctAnswer: "A",
      explanation: "Labored breathing, prolonged exhalation, engorged neck veins and wheezing (A) is correct because labored breathing, prolonged exhalation, engorged neck veins and wheezing are the clinical manifestations of status asthmaticus. Foamy blood-tinged sputum, air hunger and basal crackles (B) is incorrect because these are features of pulmonary oedema. Decreased breath sounds, a dull percussion note and tracheal deviation (C) is incorrect because these are the findings of a pleural effusion. Slowly progressive dyspnea, clubbing of the fingers and barrel chest (D) is incorrect because these are features of emphysema and COPD, which develop slowly.",
      sourceType: "lecture_notes",
      sourceRef: "Status asthmaticus: clinical manifestations",
      markingPoint: "Labored breathing, prolonged exhalation, engorged neck veins, wheezing"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q18",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 18,
      questionType: "mcq",
      text: "Arterial blood gas analysis in a patient with status asthmaticus most commonly shows:",
      options: {
        A: "Respiratory alkalosis (low PaCO2)",
        B: "Metabolic alkalosis with a high bicarbonate",
        C: "Metabolic acidosis with a low bicarbonate",
        D: "A normal PaCO2 with a high PaO2"
      },
      correctAnswer: "A",
      explanation: "Respiratory alkalosis (low PaCO2) (A) is correct because respiratory alkalosis with a low PaCO2 is the most common finding. Metabolic alkalosis with a high bicarbonate (B) is incorrect because the usual disturbance is respiratory and not metabolic. Metabolic acidosis with a low bicarbonate (C) is incorrect because the usual disturbance is respiratory and not metabolic. A normal PaCO2 with a high PaO2 (D) is incorrect because the patient is hypoxaemic, so the PaO2 is not high.",
      sourceType: "lecture_notes",
      sourceRef: "Status asthmaticus: assessment and diagnostic findings",
      markingPoint: "Respiratory alkalosis (low PaCO2) is the most common finding"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q19",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 19,
      questionType: "mcq",
      text: "Emphysema is best described as:",
      options: {
        A: "An abnormal distention of the airspaces beyond the terminal bronchioles with destruction of the walls of the alveoli",
        B: "An accumulation of fluid in the lung tissue and alveoli",
        C: "Cough and sputum production for at least 3 months of each year for 2 consecutive years",
        D: "Inflammation of the airways that causes hyperresponsiveness, oedema and mucus production"
      },
      correctAnswer: "A",
      explanation: "An abnormal distention of the airspaces beyond the terminal bronchioles with destruction of the walls of the alveoli (A) is correct because emphysema damages the tiny air sacs (alveoli), making it harder to breathe out and reducing how efficiently oxygen enters the blood. An accumulation of fluid in the lung tissue and alveoli (B) is incorrect because this describes pulmonary oedema. Cough and sputum production for at least 3 months of each year for 2 consecutive years (C) is incorrect because this is the definition of chronic bronchitis. Inflammation of the airways that causes hyperresponsiveness, oedema and mucus production (D) is incorrect because this describes asthma.",
      sourceType: "lecture_notes",
      sourceRef: "Emphysema: definition",
      markingPoint: "Distention of airspaces beyond terminal bronchioles; alveolar wall destruction"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q20",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 20,
      questionType: "mcq",
      text: "Which statement about the lung damage in emphysema is correct?",
      options: {
        A: "It is fully reversible once the patient stops smoking",
        B: "It generally cannot be reversed, and emphysema is an example of COPD",
        C: "It affects only the pleural space and not the alveoli",
        D: "It resolves within 4 to 6 weeks"
      },
      correctAnswer: "B",
      explanation: "It generally cannot be reversed, and emphysema is an example of COPD (B) is correct because the lung damage from emphysema generally cannot be reversed, and emphysema is an example of chronic obstructive pulmonary disease. It is fully reversible once the patient stops smoking (A) is incorrect because the damage to the alveolar walls is permanent. It affects only the pleural space and not the alveoli (C) is incorrect because emphysema damages the alveoli. It resolves within 4 to 6 weeks (D) is incorrect because 4 to 6 weeks is the period during which airway hyperactivity persists after an asthma attack, not the time for emphysema to resolve.",
      sourceType: "lecture_notes",
      sourceRef: "Emphysema: definition",
      markingPoint: "Damage cannot be reversed; example of COPD"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q21",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 21,
      questionType: "mcq",
      text: "A hereditary predisposing factor for emphysema is:",
      options: {
        A: "Hypersensitivity to aspirin",
        B: "Alpha-1 antitrypsin deficiency",
        C: "An IgE-mediated allergic reaction",
        D: "Allergy to pollens"
      },
      correctAnswer: "B",
      explanation: "Alpha-1 antitrypsin deficiency (B) is correct because alpha-1 antitrypsin deficiency is the hereditary factor; smoking, acute inflammation, chronic cough and congenital defects are other predisposing factors. Hypersensitivity to aspirin (A) is incorrect because aspirin hypersensitivity is a cause of status asthmaticus. An IgE-mediated allergic reaction (C) is incorrect because IgE-mediated reactions characterise extrinsic asthma. Allergy to pollens (D) is incorrect because allergy is the strongest predisposing factor for asthma.",
      sourceType: "lecture_notes",
      sourceRef: "Emphysema: predisposing factors",
      markingPoint: "Hereditary alpha-1 antitrypsin deficiency"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q22",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 22,
      questionType: "mcq",
      text: "Which process leads to loss of lung elasticity in emphysema?",
      options: {
        A: "Breakdown of elastin and destruction of the walls between adjacent alveoli by protease enzymes",
        B: "Backup of blood into the pulmonary veins",
        C: "Degranulation of mast cells with release of histamine and leukotrienes",
        D: "Narrowing of the bronchi by bronchospasm alone"
      },
      correctAnswer: "A",
      explanation: "Breakdown of elastin and destruction of the walls between adjacent alveoli by protease enzymes (A) is correct because prolonged exposure to respiratory irritants breaks down elastin and protease enzymes destroy the septa between alveoli, so the lungs lose their elasticity and inhaled air becomes trapped in the alveoli. Backup of blood into the pulmonary veins (B) is incorrect because backup of blood into the pulmonary veins leads to pulmonary oedema. Degranulation of mast cells with release of histamine and leukotrienes (C) is incorrect because mast cell degranulation is part of the inflammatory cascade in asthma. Narrowing of the bronchi by bronchospasm alone (D) is incorrect because bronchospasm is a feature of asthma, whereas emphysema involves destruction of the alveolar walls.",
      sourceType: "lecture_notes",
      sourceRef: "Emphysema: pathophysiology",
      markingPoint: "Elastin breakdown; septa destroyed by protease; air trapping"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q23",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 23,
      questionType: "mcq",
      text: "In emphysema, air is trapped in the alveoli and abnormal ventilation-perfusion results in:",
      options: {
        A: "Eosinophilia with a raised serum IgE",
        B: "Accumulation of fluid in the pleural space",
        C: "Hypoxaemia and dyspnea",
        D: "A raised PaO2 with relief of breathlessness"
      },
      correctAnswer: "C",
      explanation: "Hypoxaemia and dyspnea (C) is correct because the abnormal ventilation-perfusion relationship impairs gas exchange and leads to hypoxaemia and dyspnea. Eosinophilia with a raised serum IgE (A) is incorrect because eosinophilia and raised IgE are findings in allergic asthma. Accumulation of fluid in the pleural space (B) is incorrect because pleural fluid is not a feature of emphysema. A raised PaO2 with relief of breathlessness (D) is incorrect because gas exchange is impaired, so the PaO2 falls.",
      sourceType: "lecture_notes",
      sourceRef: "Emphysema: pathophysiology",
      markingPoint: "Abnormal V/Q leads to hypoxaemia and dyspnea"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q24",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 24,
      questionType: "mcq",
      text: "Chronic obstructive pulmonary disease (COPD) is best described as:",
      options: {
        A: "A preventable and treatable disease with airflow limitation that is not fully reversible and is usually progressive",
        B: "A collection of fluid in the pleural space",
        C: "Episodes of airway narrowing that always resolve completely",
        D: "An acute, self-limiting infection of the bronchi"
      },
      correctAnswer: "A",
      explanation: "A preventable and treatable disease with airflow limitation that is not fully reversible and is usually progressive (A) is correct because COPD is a preventable and treatable disease with airflow limitation that is not fully reversible, usually progressive and associated with an inflammatory response of the lungs to noxious stimuli such as cigarette smoking. A collection of fluid in the pleural space (B) is incorrect because a pleural effusion is a separate condition of the pleural space. Episodes of airway narrowing that always resolve completely (C) is incorrect because airflow limitation in COPD is not fully reversible. An acute, self-limiting infection of the bronchi (D) is incorrect because this describes acute bronchitis, which is short-term and self-limiting.",
      sourceType: "lecture_notes",
      sourceRef: "COPD: definition",
      markingPoint: "Preventable, treatable, airflow limitation not fully reversible"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q25",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 25,
      questionType: "mcq",
      text: "COPD encompasses:",
      options: {
        A: "Asthma and status asthmaticus",
        B: "Acute bronchitis and pneumonia",
        C: "Pulmonary oedema and pleural effusion",
        D: "Emphysema and chronic bronchitis"
      },
      correctAnswer: "D",
      explanation: "Emphysema and chronic bronchitis (D) is correct because emphysema and chronic bronchitis are the two conditions that COPD encompasses. Asthma and status asthmaticus (A) is incorrect because asthma and status asthmaticus are covered as a separate chronic inflammatory airway disease and its complication. Acute bronchitis and pneumonia (B) is incorrect because acute bronchitis and pneumonia are acute infections. Pulmonary oedema and pleural effusion (C) is incorrect because pulmonary oedema and pleural effusion are acute conditions involving fluid.",
      sourceType: "lecture_notes",
      sourceRef: "COPD: definition",
      markingPoint: "Encompasses emphysema and chronic bronchitis"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q26",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 26,
      questionType: "mcq",
      text: "Besides cigarette smoking, which group lists risk factors for COPD?",
      options: {
        A: "Nebulizer abuse, dehydration and anxiety",
        B: "Occupational chemicals and dusts, air pollution from fossil fuels, infections, alpha-1 antitrypsin deficiency and ageing",
        C: "Pollen allergy, perennial allergens and eczema",
        D: "Over-infusion of IV fluids, kidney failure and burns"
      },
      correctAnswer: "B",
      explanation: "Occupational chemicals and dusts, air pollution from fossil fuels, infections, alpha-1 antitrypsin deficiency and ageing (B) is correct because cigarette smoking is the major risk factor, and other risk factors are occupational chemicals and dusts, air pollution from fossil fuels, infections such as pneumonia and influenza, hereditary alpha-1 antitrypsin deficiency and ageing with loss of lung elastic recoil. Nebulizer abuse, dehydration and anxiety (A) is incorrect because these are causes of status asthmaticus. Pollen allergy, perennial allergens and eczema (C) is incorrect because allergens are the predisposing factors of asthma. Over-infusion of IV fluids, kidney failure and burns (D) is incorrect because these are causes of pulmonary oedema.",
      sourceType: "lecture_notes",
      sourceRef: "COPD: risk factors",
      markingPoint: "Smoking major; occupational dusts, pollution, infections, hereditary, ageing"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q27",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 27,
      questionType: "mcq",
      text: "Which changes in the airways cause the mucus hypersecretion and narrowing seen in COPD?",
      options: {
        A: "Degranulation of mast cells with release of histamine",
        B: "Destruction of the alveolar septa by elastase alone",
        C: "Increased goblet cells and enlarged submucosal glands, with scar tissue formation and thickening of the airway wall",
        D: "Thinning of the airway wall with loss of mucus glands"
      },
      correctAnswer: "C",
      explanation: "Increased goblet cells and enlarged submucosal glands, with scar tissue formation and thickening of the airway wall (C) is correct because chronic inflammation increases the goblet cells and enlarges the submucosal glands, which causes hypersecretion of mucus, and increased collagen and scar tissue thicken the airway wall and narrow the airway, which further raises airway resistance. Degranulation of mast cells with release of histamine (A) is incorrect because mast cell degranulation is part of the asthma inflammatory cascade. Destruction of the alveolar septa by elastase alone (B) is incorrect because elastase destroys the alveolar walls and does not explain mucus hypersecretion. Thinning of the airway wall with loss of mucus glands (D) is incorrect because the airway walls become thickened and the mucus glands enlarge, so this is the opposite of the changes in COPD.",
      sourceType: "lecture_notes",
      sourceRef: "COPD: pathophysiology",
      markingPoint: "Goblet cell increase, enlarged submucosal glands, scarring, thickened airway wall"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q28",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 28,
      questionType: "mcq",
      text: "Inflammatory enzymes such as elastase in COPD cause:",
      options: {
        A: "Constriction of the bronchial smooth muscle within 30 to 60 minutes",
        B: "Destruction of the alveolar walls, which reduces the surface area for gas exchange and the elastic recoil of the lungs",
        C: "Thickening of the pleura with fluid accumulation",
        D: "An increase in the surface area available for gas exchange"
      },
      correctAnswer: "B",
      explanation: "Destruction of the alveolar walls, which reduces the surface area for gas exchange and the elastic recoil of the lungs (B) is correct because elastase and other inflammatory enzymes destroy the alveolar walls, which reduces the surface area available for gas exchange and decreases the elastic recoil of the lungs. Constriction of the bronchial smooth muscle within 30 to 60 minutes (A) is incorrect because bronchoconstriction within 30 to 60 minutes is the response in asthma. Thickening of the pleura with fluid accumulation (C) is incorrect because the pleura is not involved in this process. An increase in the surface area available for gas exchange (D) is incorrect because the surface area for gas exchange is reduced and not increased.",
      sourceType: "lecture_notes",
      sourceRef: "COPD: pathophysiology",
      markingPoint: "Elastase destroys alveolar walls; reduced surface area and recoil"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q29",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 29,
      questionType: "mcq",
      text: "Why do patients with COPD have difficulty fully exhaling?",
      options: {
        A: "The respiratory muscles are paralysed by hypercapnia",
        B: "The lungs lose their recoil and the attachments that keep the airways open, so the small airways collapse during expiration, causing air trapping and hyperinflation",
        C: "The alveolar walls become thicker and stiffer, so air leaves too quickly",
        D: "The airways dilate during expiration and fill with fluid"
      },
      correctAnswer: "B",
      explanation: "The lungs lose their recoil and the attachments that keep the airways open, so the small airways collapse during expiration, causing air trapping and hyperinflation (B) is correct because because the lungs cannot recoil effectively and the airways lose the attachments that hold them open, the small airways tend to collapse on expiration, and the patient cannot exhale fully, which causes air trapping and hyperinflation. The respiratory muscles are paralysed by hypercapnia (A) is incorrect because paralysis of the respiratory muscles is not the mechanism of air trapping in COPD. The alveolar walls become thicker and stiffer, so air leaves too quickly (C) is incorrect because the alveolar walls are destroyed rather than thickened, and air is trapped rather than lost too fast. The airways dilate during expiration and fill with fluid (D) is incorrect because the small airways collapse during expiration and do not dilate.",
      sourceType: "lecture_notes",
      sourceRef: "COPD: pathophysiology",
      markingPoint: "Loss of recoil; airway collapse on expiration; air trapping, hyperinflation"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q30",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 1,
      questionNumberInSet: 30,
      questionType: "mcq",
      text: "Continued destruction of lung tissue and airway obstruction in COPD eventually cause:",
      options: {
        A: "Improved gas exchange with a falling PaCO2",
        B: "Eosinophilia with a raised serum IgE",
        C: "Impaired ventilation and gas exchange, with hypoxaemia and, in advanced disease, hypercapnia",
        D: "Respiratory alkalosis with a raised PaO2 in all patients"
      },
      correctAnswer: "C",
      explanation: "Impaired ventilation and gas exchange, with hypoxaemia and, in advanced disease, hypercapnia (C) is correct because impaired ventilation and gas exchange lead to hypoxaemia and, in advanced COPD, hypercapnia, and the extra work of breathing produces dyspnea, fatigue and reduced exercise tolerance. Improved gas exchange with a falling PaCO2 (A) is incorrect because gas exchange worsens as the lung tissue is destroyed. Eosinophilia with a raised serum IgE (B) is incorrect because eosinophilia and raised IgE are findings in allergic asthma. Respiratory alkalosis with a raised PaO2 in all patients (D) is incorrect because oxygenation worsens in COPD, and hypercapnia, not alkalosis, develops in advanced disease.",
      sourceType: "lecture_notes",
      sourceRef: "COPD: pathophysiology",
      markingPoint: "Hypoxaemia and hypercapnia in advanced COPD; dyspnea, fatigue"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q31",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 1,
      questionType: "mcq",
      text: "Which group lists only recognised triggers of asthma symptoms?",
      options: {
        A: "Exercise, emotional upset, viral respiratory infections and strong odours or perfumes",
        B: "Albuterol, ipratropium and beclomethasone",
        C: "Low-flow oxygen, upright positioning and reassurance",
        D: "Rest, hydration, vaccination and warm humid air"
      },
      correctAnswer: "A",
      explanation: "Exercise, emotional upset, viral respiratory infections and strong odours or perfumes (A) is correct because triggers include airway irritants (pollutants, cold, heat, weather changes, strong odours or perfumes, smoke), exercise, stress or emotional upset, certain medications, viral respiratory tract infections and gastroesophageal reflux. Albuterol, ipratropium and beclomethasone (B) is incorrect because these are medications used to treat asthma. Low-flow oxygen, upright positioning and reassurance (C) is incorrect because these are nursing measures used to treat an attack. Rest, hydration, vaccination and warm humid air (D) is incorrect because these are supportive measures and not triggers.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: triggers",
      markingPoint: "Irritants, exercise, stress, viral infections, GERD"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q32",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 2,
      questionType: "mcq",
      text: "Besides cough, dyspnea and wheezing, which findings may accompany an asthma attack?",
      options: {
        A: "A dull percussion note and tracheal deviation",
        B: "Chest tightness, diaphoresis, tachycardia and central cyanosis",
        C: "Frothy blood-tinged sputum and basal crackles",
        D: "Clubbing of the fingers, barrel chest and weight loss"
      },
      correctAnswer: "B",
      explanation: "Chest tightness, diaphoresis, tachycardia and central cyanosis (B) is correct because chest tightness, diaphoresis, tachycardia and central cyanosis are the other symptoms of asthma. A dull percussion note and tracheal deviation (A) is incorrect because these are findings of a pleural effusion. Frothy blood-tinged sputum and basal crackles (C) is incorrect because these are features of pulmonary oedema. Clubbing of the fingers, barrel chest and weight loss (D) is incorrect because these are features of emphysema and COPD.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: clinical manifestations",
      markingPoint: "Chest tightness, diaphoresis, tachycardia, central cyanosis"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q33",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 3,
      questionType: "mcq",
      text: "Which findings support the diagnosis of asthma?",
      options: {
        A: "Increased anteroposterior diameter on chest x-ray and polycythaemia",
        B: "Reduced eosinophils and normal blood gases during an attack",
        C: "Alpha-1 antitrypsin deficiency on screening in every patient",
        D: "A positive family history, hypoxaemia with increased PCO2 on blood gases, eosinophilia and a raised serum IgE when allergy is present"
      },
      correctAnswer: "D",
      explanation: "A positive family history, hypoxaemia with increased PCO2 on blood gases, eosinophilia and a raised serum IgE when allergy is present (D) is correct because the history may show a positive family history and environmental factors such as high pollen counts, mould and pet dander; blood gases show hypoxaemia with increased PCO2, sputum and blood tests show eosinophilia, and serum IgE is elevated if allergy is present. Increased anteroposterior diameter on chest x-ray and polycythaemia (A) is incorrect because these findings are associated with emphysema. Reduced eosinophils and normal blood gases during an attack (B) is incorrect because eosinophilia is expected, and blood gases are abnormal during an attack. Alpha-1 antitrypsin deficiency on screening in every patient (C) is incorrect because screening for alpha-1 antitrypsin deficiency is relevant to COPD in selected patients and not to asthma.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: assessment and diagnostic findings",
      markingPoint: "History; ABG hypoxaemia with raised PCO2; eosinophilia; raised IgE"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q34",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 4,
      questionType: "mcq",
      text: "Ipratropium bromide is used in asthma because it:",
      options: {
        A: "Inhibits muscarinic cholinergic receptors and reduces vagal tone to prevent bronchoconstriction, and is used in patients who cannot tolerate short-acting beta2 agonists",
        B: "Inhibits IgE to reduce the allergic response",
        C: "Modifies leukotrienes to reduce airway inflammation",
        D: "Stabilises mast cells to prevent exercise-induced asthma"
      },
      correctAnswer: "A",
      explanation: "Inhibits muscarinic cholinergic receptors and reduces vagal tone to prevent bronchoconstriction, and is used in patients who cannot tolerate short-acting beta2 agonists (A) is correct because ipratropium is an anticholinergic that inhibits muscarinic cholinergic receptors and reduces the intrinsic vagal tone of the airway, and it is a quick-relief medication for patients who cannot tolerate the short-acting ones. Inhibits IgE to reduce the allergic response (B) is incorrect because this is the action of immunomodulators. Modifies leukotrienes to reduce airway inflammation (C) is incorrect because this is the action of leukotriene modifiers such as montelukast. Stabilises mast cells to prevent exercise-induced asthma (D) is incorrect because this is the action of mast cell stabilisers such as cromolyn sodium and nedocromil.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: medical management",
      markingPoint: "Anticholinergic (ipratropium): inhibits muscarinic receptors, reduces vagal tone"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q35",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 5,
      questionType: "mcq",
      text: "Which statement about long-term control of persistent asthma is correct?",
      options: {
        A: "Corticosteroids such as beclomethasone and prednisone are potent anti-inflammatory medications, and cromolyn sodium and nedocromil are mast cell stabilisers that can prevent exercise-induced asthma",
        B: "Corticosteroids are used only in patients who cannot tolerate short-acting beta2 agonists",
        C: "Beclomethasone and prednisone relax bronchial smooth muscle for immediate relief",
        D: "Cromolyn sodium and nedocromil are quick-relief bronchodilators, and beclomethasone is a mast cell stabiliser"
      },
      correctAnswer: "A",
      explanation: "Corticosteroids such as beclomethasone and prednisone are potent anti-inflammatory medications, and cromolyn sodium and nedocromil are mast cell stabilisers that can prevent exercise-induced asthma (A) is correct because corticosteroids are the potent anti-inflammatory long-acting medications, while mast cell stabilisers can also be given prophylactically to prevent exercise-induced asthma. Corticosteroids are used only in patients who cannot tolerate short-acting beta2 agonists (B) is incorrect because anticholinergics such as ipratropium are the ones used in patients who cannot tolerate short-acting beta2 agonists. Beclomethasone and prednisone relax bronchial smooth muscle for immediate relief (C) is incorrect because bronchodilators such as albuterol give immediate relief, whereas corticosteroids act on inflammation. Cromolyn sodium and nedocromil are quick-relief bronchodilators, and beclomethasone is a mast cell stabiliser (D) is incorrect because the drug classes are mixed up in this statement.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: medical management",
      markingPoint: "Corticosteroids (beclomethasone, prednisone); mast cell stabilisers (cromolyn, nedocromil)"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q36",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 6,
      questionType: "mcq",
      text: "Which pair of drugs and their classes is correctly matched?",
      options: {
        A: "Montelukast: leukotriene modifier; salmeterol: long-acting beta2-adrenergic agent",
        B: "Montelukast: immunomodulator; salmeterol: corticosteroid",
        C: "Montelukast: xanthine derivative; salmeterol: mast cell stabiliser",
        D: "Montelukast: mast cell stabiliser; salmeterol: leukotriene modifier"
      },
      correctAnswer: "A",
      explanation: "Montelukast: leukotriene modifier; salmeterol: long-acting beta2-adrenergic agent (A) is correct because montelukast is a leukotriene modifier (inhibitor), and salmeterol is a long-acting beta2-adrenergic agent used to prevent exercise-induced asthma. Montelukast: immunomodulator; salmeterol: corticosteroid (B) is incorrect because immunomodulators inhibit IgE, and salmeterol is not a corticosteroid. Montelukast: xanthine derivative; salmeterol: mast cell stabiliser (C) is incorrect because montelukast is not a xanthine derivative and salmeterol is not a mast cell stabiliser. Montelukast: mast cell stabiliser; salmeterol: leukotriene modifier (D) is incorrect because the classes of the two drugs are swapped and wrong.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: medical management",
      markingPoint: "Montelukast (leukotriene modifier); salmeterol (LABA)"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q37",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 7,
      questionType: "mcq",
      text: "Which statement about asthma medications is correct?",
      options: {
        A: "Aminophylline and theophylline are corticosteroids, and immunomodulators inhibit leukotrienes",
        B: "Aminophylline and theophylline are anticholinergics, and immunomodulators stabilise mast cells",
        C: "Aminophylline and theophylline are xanthine derivatives, and immunomodulators are used to inhibit IgE",
        D: "Aminophylline and theophylline are mast cell stabilisers, and immunomodulators relax smooth muscle"
      },
      correctAnswer: "C",
      explanation: "Aminophylline and theophylline are xanthine derivatives, and immunomodulators are used to inhibit IgE (C) is correct because aminophylline and theophylline are xanthine derivatives used as long-acting medications, and immunomodulators are given to inhibit IgE. Aminophylline and theophylline are corticosteroids, and immunomodulators inhibit leukotrienes (A) is incorrect because the corticosteroids are beclomethasone and prednisone, and leukotrienes are inhibited by modifiers such as montelukast. Aminophylline and theophylline are anticholinergics, and immunomodulators stabilise mast cells (B) is incorrect because the anticholinergic is ipratropium, and mast cells are stabilised by cromolyn sodium and nedocromil. Aminophylline and theophylline are mast cell stabilisers, and immunomodulators relax smooth muscle (D) is incorrect because mast cell stabilisers are cromolyn sodium and nedocromil, and smooth muscle is relaxed by beta2 agonists.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: medical management",
      markingPoint: "Xanthine derivatives (aminophylline, theophylline); immunomodulators inhibit IgE"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q38",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 8,
      questionType: "mcq",
      text: "A patient in an asthma attack has hypoxaemia. Which treatment is appropriate, and what is anticipated if the airway obstruction keeps increasing?",
      options: {
        A: "Low-flow oxygen therapy, and lung transplantation",
        B: "Mucolytic agents, and a bullectomy",
        C: "Humidified air alone, and insertion of a chest tube",
        D: "Low-flow oxygen therapy, and endotracheal intubation with perhaps mechanical ventilation"
      },
      correctAnswer: "D",
      explanation: "Low-flow oxygen therapy, and endotracheal intubation with perhaps mechanical ventilation (D) is correct because low-flow oxygen treats the hypoxaemia, and with increasing airway obstruction intubation and perhaps mechanical ventilation may be needed to maintain an adequate airway and breathing. Low-flow oxygen therapy, and lung transplantation (A) is incorrect because lung transplantation is a surgical option in COPD and is not used for an acute asthma attack. Mucolytic agents, and a bullectomy (B) is incorrect because mucolytics and a bullectomy are part of COPD management. Humidified air alone, and insertion of a chest tube (C) is incorrect because humidified air alone does not correct hypoxaemia, and a chest tube drains the pleural space.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: medical management",
      markingPoint: "Low-flow oxygen; intubation and mechanical ventilation if obstruction increases"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q39",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 9,
      questionType: "mcq",
      text: "Why do patients need close follow-up after discharge from hospital following an asthma attack?",
      options: {
        A: "Pneumonia always develops immediately after an attack",
        B: "Corticosteroids must be stopped abruptly after discharge",
        C: "Asthma is cured after one attack and follow-up only confirms this",
        D: "Airway hyperactivity usually persists for 4 to 6 weeks after the event"
      },
      correctAnswer: "D",
      explanation: "Airway hyperactivity usually persists for 4 to 6 weeks after the event (D) is correct because airway hyperactivity usually persists for 4 to 6 weeks after the event, so the patient remains at risk and needs close follow-up. Pneumonia always develops immediately after an attack (A) is incorrect because pneumonia is a possible complication and does not always develop. Corticosteroids must be stopped abruptly after discharge (B) is incorrect because this is not part of the reason given for follow-up. Asthma is cured after one attack and follow-up only confirms this (C) is incorrect because asthma is a chronic inflammatory disease and is not cured by treating one attack.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: medical management",
      markingPoint: "Close follow-up; airway hyperactivity persists 4 to 6 weeks"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q40",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 10,
      questionType: "mcq",
      text: "Which nursing actions are appropriate for a patient who is having an asthma attack?",
      options: {
        A: "Provide a comfortable upright sitting position, give low humidified oxygen, and monitor vital signs, respiratory activity and blood gases",
        B: "Position the patient prone, withhold oxygen and monitor only the temperature",
        C: "Give sedatives, keep the patient supine and avoid monitoring blood gases",
        D: "Lay the patient flat, give dry high-flow oxygen and check vital signs once a shift"
      },
      correctAnswer: "A",
      explanation: "Provide a comfortable upright sitting position, give low humidified oxygen, and monitor vital signs, respiratory activity and blood gases (A) is correct because an upright position eases breathing, low humidified oxygen treats hypoxaemia, and monitoring of vital signs, respiratory activity and blood gases shows how the patient is responding. Position the patient prone, withhold oxygen and monitor only the temperature (B) is incorrect because a prone position with no oxygen is unsafe for a hypoxaemic patient. Give sedatives, keep the patient supine and avoid monitoring blood gases (C) is incorrect because sedation and a supine position are unsafe for a patient struggling to breathe. Lay the patient flat, give dry high-flow oxygen and check vital signs once a shift (D) is incorrect because lying flat worsens breathing and monitoring must be frequent.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: nursing management",
      markingPoint: "Upright position; low humidified oxygen; monitor vitals, respiration, blood gases"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q41",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 11,
      questionType: "mcq",
      text: "Which additional nursing measures help a patient with asthma?",
      options: {
        A: "Give cough suppressants, withhold fluids and allow pets in the room",
        B: "Advise deep breathing, coughing and chest physiotherapy, give fluids as prescribed, and ensure that possible allergens are absent",
        C: "Restrict fluids, discourage coughing and keep flowers at the bedside",
        D: "Keep the patient on bed rest without breathing exercises and use feather pillows"
      },
      correctAnswer: "B",
      explanation: "Advise deep breathing, coughing and chest physiotherapy, give fluids as prescribed, and ensure that possible allergens are absent (B) is correct because deep breathing, coughing and chest physiotherapy help to clear secretions, fluids are given, and allergens must be absent from the patient's surroundings. Give cough suppressants, withhold fluids and allow pets in the room (A) is incorrect because pets are a source of allergens, and fluids are not withheld. Restrict fluids, discourage coughing and keep flowers at the bedside (C) is incorrect because flowers can act as allergens or irritants, and fluids are given and not restricted. Keep the patient on bed rest without breathing exercises and use feather pillows (D) is incorrect because feather pillows can be allergenic, and breathing exercises are advised.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: nursing management",
      markingPoint: "Breathing exercises, chest physiotherapy, fluids, absence of allergens"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q42",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 12,
      questionType: "mcq",
      text: "A patient with asthma is coughing up thick secretions. Which nursing action is appropriate?",
      options: {
        A: "Give a cough suppressant and assess the secretions later",
        B: "Assess the ability to expectorate and the character, quantity and odour of the secretions, and obtain a culture and sensitivity test so that appropriate antibiotics are given",
        C: "Discourage expectoration so that the patient can rest",
        D: "Record only the colour of the secretions and give antibiotics without a culture"
      },
      correctAnswer: "B",
      explanation: "Assess the ability to expectorate and the character, quantity and odour of the secretions, and obtain a culture and sensitivity test so that appropriate antibiotics are given (B) is correct because the nurse assesses the character, quantity and odour of the secretions and the patient's ability to expectorate, and a culture and sensitivity test guides appropriate antibiotic treatment. Give a cough suppressant and assess the secretions later (A) is incorrect because the aim is to clear secretions, and the assessment is not delayed. Discourage expectoration so that the patient can rest (C) is incorrect because expectoration clears the airways and should not be discouraged. Record only the colour of the secretions and give antibiotics without a culture (D) is incorrect because secretions should be assessed fully, and antibiotics are guided by culture and sensitivity.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: nursing management",
      markingPoint: "Assess secretions (character, quantity, odour); culture and sensitivity"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q43",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 13,
      questionType: "mcq",
      text: "How should the nurse manage the anxiety of a patient who is having an asthma attack?",
      options: {
        A: "Give simple, concise explanations, and reassure the patient by staying with them and allowing full participation",
        B: "Give detailed technical explanations of each procedure",
        C: "Exclude the patient from decisions to reduce stress",
        D: "Leave the patient alone to rest quietly"
      },
      correctAnswer: "A",
      explanation: "Give simple, concise explanations, and reassure the patient by staying with them and allowing full participation (A) is correct because simple, concise explanations of situations and procedures, together with reassurance from staying with the patient and allowing full participation, reduce anxiety. Give detailed technical explanations of each procedure (B) is incorrect because long technical explanations are difficult to follow when the patient is breathless. Exclude the patient from decisions to reduce stress (C) is incorrect because allowing full participation is part of the management of anxiety. Leave the patient alone to rest quietly (D) is incorrect because leaving the patient alone increases fear.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: nursing management",
      markingPoint: "Simple concise explanations; stay with patient; full participation"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q44",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 14,
      questionType: "mcq",
      text: "Which topics belong in the health education of a patient with asthma and the family?",
      options: {
        A: "The chronic inflammatory nature of asthma, the action of each medication, the triggers to avoid and proper inhalation technique",
        B: "How to perform thoracentesis and care for a chest tube",
        C: "Smoking cessation to reverse the lung damage, and avoiding all exercise",
        D: "Only the names of the drugs, because the disease cannot be explained to lay people"
      },
      correctAnswer: "A",
      explanation: "The chronic inflammatory nature of asthma, the action of each medication, the triggers to avoid and proper inhalation technique (A) is correct because the patient and family are taught the nature of asthma as a chronic inflammatory disease, the definitions of inflammation and bronchoconstriction, the purpose and action of each medication, the triggers to avoid and how to do so, and the proper inhalation technique. How to perform thoracentesis and care for a chest tube (B) is incorrect because thoracentesis and chest tube care are related to pleural effusion. Smoking cessation to reverse the lung damage, and avoiding all exercise (C) is incorrect because avoiding all exercise is not part of the teaching, and the damage in COPD is what smoking cessation slows down. Only the names of the drugs, because the disease cannot be explained to lay people (D) is incorrect because the patient and family need to understand the disease, the drugs and the triggers.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: nursing management",
      markingPoint: "Health education: nature, medications, triggers, inhalation technique"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q45",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 15,
      questionType: "mcq",
      text: "Which of the following are complications of asthma?",
      options: {
        A: "Pneumothorax, clubbing of the fingers and polycythaemia",
        B: "Cor pulmonale, peptic ulcer disease and depression",
        C: "Status asthmaticus, respiratory failure, pneumonia and atelectasis",
        D: "Hypervolaemia, kidney failure and burns"
      },
      correctAnswer: "C",
      explanation: "Status asthmaticus, respiratory failure, pneumonia and atelectasis (C) is correct because status asthmaticus, respiratory failure, pneumonia and atelectasis are the complications of asthma. Pneumothorax, clubbing of the fingers and polycythaemia (A) is incorrect because pneumothorax and the other findings here are associated with emphysema. Cor pulmonale, peptic ulcer disease and depression (B) is incorrect because cor pulmonale, peptic ulcer disease and depression are complications of COPD. Hypervolaemia, kidney failure and burns (D) is incorrect because these are causes of pulmonary oedema and not complications of asthma.",
      sourceType: "lecture_notes",
      sourceRef: "Asthma: complications",
      markingPoint: "Status asthmaticus, respiratory failure, pneumonia, atelectasis"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q46",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 16,
      questionType: "mcq",
      text: "Mr. D is admitted with status asthmaticus. Which drugs are given in his treatment?",
      options: {
        A: "Ipratropium alone, with no corticosteroid",
        B: "Short-acting beta2-adrenergic agonists by nebulizer or spacer, and corticosteroids to decrease the intense airway inflammation and swelling",
        C: "Cromolyn sodium and montelukast as the main treatment",
        D: "Antitussive agents and mucolytic agents"
      },
      correctAnswer: "B",
      explanation: "Short-acting beta2-adrenergic agonists by nebulizer or spacer, and corticosteroids to decrease the intense airway inflammation and swelling (B) is correct because the patient is admitted and given short-acting beta2-adrenergic agonists immediately, and corticosteroids are critical in therapy because they reduce airway inflammation and swelling. Ipratropium alone, with no corticosteroid (A) is incorrect because corticosteroids are critical in the treatment of status asthmaticus. Cromolyn sodium and montelukast as the main treatment (C) is incorrect because cromolyn sodium and montelukast are used for long-term control and not as the main treatment of an acute severe attack. Antitussive agents and mucolytic agents (D) is incorrect because antitussives and mucolytics are used in COPD.",
      sourceType: "lecture_notes",
      sourceRef: "Status asthmaticus: medical management",
      markingPoint: "Admit; SABA by nebulizer or spacer; corticosteroids"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q47",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 17,
      questionType: "mcq",
      text: "How is oxygen best delivered in a patient with status asthmaticus?",
      options: {
        A: "Oxygen only when the saturation falls below 60%",
        B: "Low-flow oxygen by nasal cannula to keep the saturation above 85%",
        C: "Humidified air with no supplemental oxygen",
        D: "High-flow oxygen by a partial or complete non-rebreather mask to keep the PaO2 at a minimum of 92 mmHg or the oxygen saturation above 95%"
      },
      correctAnswer: "D",
      explanation: "High-flow oxygen by a partial or complete non-rebreather mask to keep the PaO2 at a minimum of 92 mmHg or the oxygen saturation above 95% (D) is correct because high-flow supplemental oxygen through a partial or complete non-rebreather mask is best, aiming for a PaO2 of at least 92 mmHg or an oxygen saturation above 95%, and IV fluids are also given. Oxygen only when the saturation falls below 60% (A) is incorrect because waiting for such a low saturation would allow severe hypoxaemia. Low-flow oxygen by nasal cannula to keep the saturation above 85% (B) is incorrect because the target saturation is above 95% and the oxygen is delivered at a high flow in status asthmaticus. Humidified air with no supplemental oxygen (C) is incorrect because the patient is hypoxaemic and needs supplemental oxygen.",
      sourceType: "lecture_notes",
      sourceRef: "Status asthmaticus: medical management",
      markingPoint: "High-flow oxygen by non-rebreather mask; PaO2 at least 92 mmHg or SpO2 above 95%"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q48",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 18,
      questionType: "mcq",
      text: "Which statement about magnesium sulfate and ventilation in status asthmaticus is correct?",
      options: {
        A: "Magnesium sulfate is a beta2 agonist, and mechanical ventilation is used to improve the PaCO2 only",
        B: "Magnesium sulfate, a calcium antagonist, causes bronchodilation by competing with calcium at smooth muscle binding sites, and mechanical ventilation is used if the blood gases deteriorate",
        C: "Magnesium sulfate stabilises mast cells, and mechanical ventilation is used once the attack settles",
        D: "Magnesium sulfate inhibits IgE, and mechanical ventilation is never needed"
      },
      correctAnswer: "B",
      explanation: "Magnesium sulfate, a calcium antagonist, causes bronchodilation by competing with calcium at smooth muscle binding sites, and mechanical ventilation is used if the blood gases deteriorate (B) is correct because magnesium sulfate induces smooth muscle relaxation and so causes bronchodilation, and the patient is mechanically ventilated when blood gas levels deteriorate. Magnesium sulfate is a beta2 agonist, and mechanical ventilation is used to improve the PaCO2 only (A) is incorrect because magnesium sulfate is a calcium antagonist and not a beta2 agonist. Magnesium sulfate stabilises mast cells, and mechanical ventilation is used once the attack settles (C) is incorrect because mast cell stabilisers are cromolyn sodium and nedocromil, and ventilation is for deteriorating blood gases, not for a settled attack. Magnesium sulfate inhibits IgE, and mechanical ventilation is never needed (D) is incorrect because IgE is inhibited by immunomodulators, and ventilation is needed when gases deteriorate.",
      sourceType: "lecture_notes",
      sourceRef: "Status asthmaticus: medical management",
      markingPoint: "Magnesium sulfate (calcium antagonist) for bronchodilation; mechanical ventilation if gases deteriorate"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q49",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 19,
      questionType: "mcq",
      text: "Which nursing actions are appropriate for a patient with status asthmaticus?",
      options: {
        A: "Assess the airway and response to treatment, check skin turgor, give IV fluids up to 3 to 4 L/day unless contraindicated, monitor blood pressure, and keep a quiet room free of irritants such as flowers",
        B: "Check the airway once a day, give oral fluids only, and keep the room busy",
        C: "Restrict fluids to 1 L/day, allow flowers, and use feather pillows",
        D: "Monitor the temperature only, give no IV fluids, and use scented products"
      },
      correctAnswer: "A",
      explanation: "Assess the airway and response to treatment, check skin turgor, give IV fluids up to 3 to 4 L/day unless contraindicated, monitor blood pressure, and keep a quiet room free of irritants such as flowers (A) is correct because the nurse actively assesses the airway and the response to treatment, checks skin turgor for dehydration, gives IV fluids as prescribed, monitors BP and other vital signs, and provides a quiet room with non-allergenic pillows and no irritants such as flowers. Check the airway once a day, give oral fluids only, and keep the room busy (B) is incorrect because the airway is assessed actively and the room should be quiet. Restrict fluids to 1 L/day, allow flowers, and use feather pillows (C) is incorrect because dehydration is a cause of status asthmaticus, so fluids are given and not restricted, and flowers and feather pillows are avoided. Monitor the temperature only, give no IV fluids, and use scented products (D) is incorrect because vital signs are monitored, IV fluids are given as prescribed and scented products are irritants.",
      sourceType: "lecture_notes",
      sourceRef: "Status asthmaticus: nursing management",
      markingPoint: "Assess airway; skin turgor; IV fluids 3 to 4 L/day; BP; quiet irritant-free room"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q50",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 20,
      questionType: "mcq",
      text: "Which statement describes the onset of symptoms in emphysema?",
      options: {
        A: "Dyspnea occurs at rest first and improves with exertion",
        B: "Symptoms appear suddenly within 30 to 60 minutes and resolve completely",
        C: "Symptoms appear slowly over several years, with progressive dyspnea on exertion and later at rest, and can lead to right-sided heart failure",
        D: "Symptoms start without warning and progress to asphyxiation"
      },
      correctAnswer: "C",
      explanation: "Symptoms appear slowly over several years, with progressive dyspnea on exertion and later at rest, and can lead to right-sided heart failure (C) is correct because the onset is slow, typically over several years, with dyspnea that is progressive, first on exertion and later also at rest, and the disease can lead to right-sided heart failure. Dyspnea occurs at rest first and improves with exertion (A) is incorrect because dyspnea in emphysema begins on exertion and later occurs at rest. Symptoms appear suddenly within 30 to 60 minutes and resolve completely (B) is incorrect because this describes the time course of an asthmatic inflammatory response. Symptoms start without warning and progress to asphyxiation (D) is incorrect because this describes status asthmaticus.",
      sourceType: "lecture_notes",
      sourceRef: "Emphysema: clinical manifestations",
      markingPoint: "Slow onset; progressive dyspnea; right-sided heart failure"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q51",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 21,
      questionType: "mcq",
      text: "Which findings are associated with emphysema?",
      options: {
        A: "Engorged neck veins, prolonged exhalation and respiratory alkalosis",
        B: "Progressive cough with increased sputum, use of accessory muscles, anorexia with weight loss, profound weakness, a dusky colour leading to cyanosis, and clubbing of the fingers",
        C: "Eosinophilia, raised IgE and a history of eczema",
        D: "Foamy blood-tinged sputum, air hunger and agitation"
      },
      correctAnswer: "B",
      explanation: "Progressive cough with increased sputum, use of accessory muscles, anorexia with weight loss, profound weakness, a dusky colour leading to cyanosis, and clubbing of the fingers (B) is correct because these are the clinical manifestations of emphysema, which develops slowly. Engorged neck veins, prolonged exhalation and respiratory alkalosis (A) is incorrect because these are features of status asthmaticus. Eosinophilia, raised IgE and a history of eczema (C) is incorrect because these are features of allergic (extrinsic) asthma. Foamy blood-tinged sputum, air hunger and agitation (D) is incorrect because these are features of pulmonary oedema.",
      sourceType: "lecture_notes",
      sourceRef: "Emphysema: clinical manifestations",
      markingPoint: "Cough, sputum, accessory muscles, weight loss, cyanosis, clubbing"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q52",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 22,
      questionType: "mcq",
      text: "Which investigation findings are expected in emphysema?",
      options: {
        A: "Increased interstitial markings on the chest radiograph with a falling PaCO2",
        B: "A reduced anteroposterior diameter with a decreased red blood cell count",
        C: "Increased anteroposterior diameter on the chest radiograph, increased PaCO2 with decreased PaO2, and polycythaemia",
        D: "A normal chest radiograph with eosinophilia and a raised IgE"
      },
      correctAnswer: "C",
      explanation: "Increased anteroposterior diameter on the chest radiograph, increased PaCO2 with decreased PaO2, and polycythaemia (C) is correct because the chest radiograph shows an increased anteroposterior diameter, blood gases show increased PaCO2 and decreased PaO2, and blood analysis shows polycythaemia, an increase in red blood cells in response to hypoxaemia. Increased interstitial markings on the chest radiograph with a falling PaCO2 (A) is incorrect because increased interstitial markings are a finding in pulmonary oedema, and PaCO2 rises in emphysema. A reduced anteroposterior diameter with a decreased red blood cell count (B) is incorrect because the anteroposterior diameter is increased, and the red cell count rises in response to hypoxaemia. A normal chest radiograph with eosinophilia and a raised IgE (D) is incorrect because eosinophilia and raised IgE are findings in allergic asthma.",
      sourceType: "lecture_notes",
      sourceRef: "Emphysema: diagnostic findings",
      markingPoint: "Increased AP diameter; raised PaCO2, low PaO2; polycythaemia"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q53",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 23,
      questionType: "mcq",
      text: "The management of emphysema is:",
      options: {
        A: "Surgical removal of the affected lung in all patients",
        B: "The same as that of chronic bronchitis",
        C: "The same as that of status asthmaticus, including magnesium sulfate",
        D: "Limited to bronchodilators in all cases"
      },
      correctAnswer: "B",
      explanation: "The same as that of chronic bronchitis (B) is correct because the management of emphysema is the same as that of chronic bronchitis. Surgical removal of the affected lung in all patients (A) is incorrect because surgery is not the standard management for every patient. The same as that of status asthmaticus, including magnesium sulfate (C) is incorrect because magnesium sulfate is used in status asthmaticus. Limited to bronchodilators in all cases (D) is incorrect because management includes more than bronchodilators.",
      sourceType: "lecture_notes",
      sourceRef: "Emphysema: management",
      markingPoint: "Same as that of chronic bronchitis"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q54",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 24,
      questionType: "mcq",
      text: "Which of the following are complications of emphysema?",
      options: {
        A: "Eosinophilia, eczema and allergic rhinitis",
        B: "Status asthmaticus, atelectasis and pneumonia",
        C: "Hypervolaemia, kidney failure and burns",
        D: "Respiratory failure, pneumothorax and recurrent respiratory tract infections"
      },
      correctAnswer: "D",
      explanation: "Respiratory failure, pneumothorax and recurrent respiratory tract infections (D) is correct because respiratory failure, pneumothorax and recurrent respiratory tract infections are the complications of emphysema. Eosinophilia, eczema and allergic rhinitis (A) is incorrect because these are allergic features of extrinsic asthma. Status asthmaticus, atelectasis and pneumonia (B) is incorrect because status asthmaticus and atelectasis are complications of asthma. Hypervolaemia, kidney failure and burns (C) is incorrect because these are causes of pulmonary oedema.",
      sourceType: "lecture_notes",
      sourceRef: "Emphysema: complications",
      markingPoint: "Respiratory failure, pneumothorax, recurrent respiratory tract infections"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q55",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 25,
      questionType: "mcq",
      text: "Which set of features is typical of COPD that develops slowly around the age of 50 in a long-term smoker?",
      options: {
        A: "Foamy blood-tinged sputum with air hunger and basal crackles",
        B: "Decreased breath sounds, a dull percussion note and tracheal deviation",
        C: "A morning cough with sputum, dyspnea, use of accessory muscles, barrel chest, and retraction of the supraclavicular fossae on inspiration",
        D: "Sudden wheezing, diaphoresis and central cyanosis within 30 to 60 minutes of allergen exposure"
      },
      correctAnswer: "C",
      explanation: "A morning cough with sputum, dyspnea, use of accessory muscles, barrel chest, and retraction of the supraclavicular fossae on inspiration (C) is correct because the symptoms develop slowly after years of smoking; the cough usually occurs in the morning, and the patient leans forward and uses the accessory muscles, which causes retraction of the supraclavicular fossae and heaving of the shoulders upward, together with a barrel chest, wheezing and chest tightness. Foamy blood-tinged sputum with air hunger and basal crackles (A) is incorrect because this describes pulmonary oedema. Decreased breath sounds, a dull percussion note and tracheal deviation (B) is incorrect because this describes a pleural effusion. Sudden wheezing, diaphoresis and central cyanosis within 30 to 60 minutes of allergen exposure (D) is incorrect because this describes an allergic asthma attack.",
      sourceType: "lecture_notes",
      sourceRef: "COPD: clinical manifestations",
      markingPoint: "Morning cough, sputum, dyspnea, accessory muscles, barrel chest, supraclavicular retraction"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q56",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 26,
      questionType: "mcq",
      text: "Which investigations are used in the assessment of COPD?",
      options: {
        A: "Thoracentesis and a pleural biopsy to confirm the diagnosis",
        B: "Serum IgE and an eosinophil count to confirm the diagnosis",
        C: "Pulmonary function studies to help confirm the diagnosis, arterial blood gases, a chest x-ray to exclude other diagnoses, and screening for alpha-1 antitrypsin deficiency in patients younger than 45 years or with a strong family history",
        D: "A chest x-ray alone to confirm the diagnosis"
      },
      correctAnswer: "C",
      explanation: "Pulmonary function studies to help confirm the diagnosis, arterial blood gases, a chest x-ray to exclude other diagnoses, and screening for alpha-1 antitrypsin deficiency in patients younger than 45 years or with a strong family history (C) is correct because pulmonary function studies help confirm COPD, ABGs are done, the chest x-ray is used to exclude other diagnoses, and screening for alpha-1 antitrypsin deficiency may be done in patients younger than 45 years and those with a strong family history. Thoracentesis and a pleural biopsy to confirm the diagnosis (A) is incorrect because thoracentesis and pleural biopsy are used in the assessment of pleural effusion. Serum IgE and an eosinophil count to confirm the diagnosis (B) is incorrect because IgE and eosinophils are used in the assessment of allergic asthma. A chest x-ray alone to confirm the diagnosis (D) is incorrect because the chest x-ray is used to exclude other diagnoses and not to confirm COPD by itself.",
      sourceType: "lecture_notes",
      sourceRef: "COPD: assessment and diagnostic findings",
      markingPoint: "Pulmonary function studies; ABGs; chest x-ray; alpha-1 antitrypsin screening"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q57",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 27,
      questionType: "mcq",
      text: "Which measures are part of the collaborative management of COPD?",
      options: {
        A: "Immunomodulators to inhibit IgE as the main treatment",
        B: "Smoking cessation to slow the decline in pulmonary function, bronchodilators given by MDI or nebulizer, and pneumococcal and influenza vaccination",
        C: "Smoking reduction only, because vaccines are contraindicated",
        D: "Cromolyn sodium as the main treatment, and avoidance of vaccination"
      },
      correctAnswer: "B",
      explanation: "Smoking cessation to slow the decline in pulmonary function, bronchodilators given by MDI or nebulizer, and pneumococcal and influenza vaccination (B) is correct because smoking cessation slows the decline in pulmonary function; drug therapy includes bronchodilators such as albuterol, ipratropium and salmeterol, corticosteroids, antibiotics, mucolytic and antitussive agents, vaccination, and alpha-1 antitrypsin augmentation therapy. Immunomodulators to inhibit IgE as the main treatment (A) is incorrect because immunomodulators inhibit IgE in allergic asthma and are not the main treatment of COPD. Smoking reduction only, because vaccines are contraindicated (C) is incorrect because smoking cessation is advised and the pneumococcal and influenza vaccines are recommended. Cromolyn sodium as the main treatment, and avoidance of vaccination (D) is incorrect because cromolyn sodium is used prophylactically in asthma, and the vaccines are part of COPD care.",
      sourceType: "lecture_notes",
      sourceRef: "COPD: collaborative management",
      markingPoint: "Smoking cessation; bronchodilators (MDI/nebulizer); vaccination; drug therapy"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q58",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 28,
      questionType: "mcq",
      text: "Which treatments may be used in COPD in addition to drug therapy and oxygen therapy?",
      options: {
        A: "Thoracentesis and talc pleurodesis",
        B: "Endotracheal intubation as routine care for all patients",
        C: "Chest tube insertion and a water-seal drain",
        D: "Lung transplantation and bullectomy, together with respiratory and physical therapy"
      },
      correctAnswer: "D",
      explanation: "Lung transplantation and bullectomy, together with respiratory and physical therapy (D) is correct because surgical therapy for COPD includes lung transplantation and bullectomy, and respiratory and physical therapy are also part of the management. Thoracentesis and talc pleurodesis (A) is incorrect because these are used in the management of pleural effusion. Endotracheal intubation as routine care for all patients (B) is incorrect because intubation is used when respiratory failure occurs and is not routine care. Chest tube insertion and a water-seal drain (C) is incorrect because a chest tube with a water-seal drain is used for pleural effusion.",
      sourceType: "lecture_notes",
      sourceRef: "COPD: collaborative management",
      markingPoint: "Oxygen therapy; lung transplantation; bullectomy; respiratory and physical therapy"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q59",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 29,
      questionType: "mcq",
      text: "Mr. B has advanced COPD and is losing weight because dyspnea interferes with eating and breathing uses a lot of energy. Which advice is appropriate?",
      options: {
        A: "Eat three large meals a day and exercise before each meal",
        B: "Skip meals during dyspnea and rely on one large evening meal",
        C: "Rest before eating, use a bronchodilator before meals, and take 5 to 6 frequent meals, including liquid blenderized meals",
        D: "Restrict calories to reduce the work of breathing"
      },
      correctAnswer: "C",
      explanation: "Rest before eating, use a bronchodilator before meals, and take 5 to 6 frequent meals, including liquid blenderized meals (C) is correct because nutrition is challenging because of dyspnea and high energy needs, so resting before meals, a bronchodilator before meals, frequent meals and blenderized liquid meals help, and the patient is also assisted with activities of daily living because exercise tolerance is reduced. Eat three large meals a day and exercise before each meal (A) is incorrect because large meals and exercise before eating increase dyspnea and energy use. Skip meals during dyspnea and rely on one large evening meal (B) is incorrect because skipping meals worsens the weight loss. Restrict calories to reduce the work of breathing (D) is incorrect because energy requirements are high, so calories should not be restricted.",
      sourceType: "lecture_notes",
      sourceRef: "COPD: collaborative management",
      markingPoint: "Rest before eating, bronchodilator before meals, 5-6 frequent meals, blenderized liquids"
    },
    {
      id: "tnh-respiratory-disorders-chronic-conditions_q60",
      paperId: "tnh-respiratory-disorders-chronic-conditions",
      setNumber: 2,
      questionNumberInSet: 30,
      questionType: "mcq",
      text: "Which of the following are complications of COPD?",
      options: {
        A: "Hypervolaemia, burns and nephrotic syndrome",
        B: "Status asthmaticus, atelectasis and eczema",
        C: "Pleural effusion, pulmonary oedema and tuberculosis",
        D: "Cor pulmonale, acute respiratory failure, peptic ulcer and gastroesophageal reflux disease, and depression or anxiety"
      },
      correctAnswer: "D",
      explanation: "Cor pulmonale, acute respiratory failure, peptic ulcer and gastroesophageal reflux disease, and depression or anxiety (D) is correct because cor pulmonale (hypertrophy of the right side of the heart resulting from pulmonary hypertension), acute respiratory failure, peptic ulcer, gastroesophageal reflux disease and depression or anxiety are complications of COPD. Hypervolaemia, burns and nephrotic syndrome (A) is incorrect because these are causes of pulmonary oedema. Status asthmaticus, atelectasis and eczema (B) is incorrect because status asthmaticus and atelectasis are complications of asthma. Pleural effusion, pulmonary oedema and tuberculosis (C) is incorrect because these conditions are not listed as complications of COPD.",
      sourceType: "lecture_notes",
      sourceRef: "COPD: complications",
      markingPoint: "Cor pulmonale, acute respiratory failure, peptic ulcer/GERD, depression/anxiety"
    }
  ]
};
