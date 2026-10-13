/**
 * Mulwa Clinical Exam Portal
 * March 2026 End of Block Exam — Respiratory Disorders
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../../types';

export const KRN_BLOCK1_MAR2026_RESPIRATORY_DISORDERS: PastPaper = {
  id: "krn-block1-mar2026-respiratory-disorders",
  year: "2026",
  month: "March",
  examType: "End of Block",
  title: "March 2026 End of Block Exam",
  block: "Block 1",
  unit: "Respiratory Disorders",
  totalQuestions: 36,
  totalSets: 2,
  sets: [
    {
      setNumber: 1,
      title: "Set 1: Original Exam Questions",
      description: "The original MCQs and True/False questions from the March 2026 First Block Exam paper.",
      questionCount: 16
    },
    {
      setNumber: 2,
      title: "Set 2: SAQ Mastery Questions",
      description: "MCQs and True/False questions derived from the paper's Short Answer Questions, covering every marking point.",
      questionCount: 20
    }
  ],
  questions: [
    {
      id: "krn-block1-mar2026-respiratory-disorders_q1",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 1,
      questionType: "mcq",
      text: "The correct pathway for air entry into the lungs is:",
      options: {
        A: "Nose, trachea, pharynx, larynx, bronchi, alveoli",
        B: "Nose, pharynx, larynx, trachea, bronchi, alveoli",
        C: "Nose, larynx, pharynx, trachea, bronchi, alveoli",
        D: "Nose, pharynx, trachea, larynx, bronchi, alveoli"
      },
      correctAnswer: "B",
      explanation: "Nose, pharynx, larynx, trachea, bronchi, alveoli (B) is correct because inhaled air passes from the nasal cavity to the pharynx (throat), then through the larynx (voice box and the entrance to the airway), down the trachea (windpipe), into the main bronchi and their branches, and finally into the alveoli where gas exchange occurs. Nose, trachea, pharynx, larynx (A) places the trachea too early. Nose, larynx, pharynx, trachea (C) reverses the pharynx and larynx. Nose, pharynx, trachea, larynx (D) places the larynx below the trachea, but the larynx lies above it. Clinical link: this order is the route followed when passing a suction catheter or an endotracheal tube.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q1"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q2",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 2,
      questionType: "mcq",
      text: "A term used for the bluish color of the skin, lips or nails that indicates low oxygen levels is:",
      options: {
        A: "Erythema",
        B: "Jaundice",
        C: "Cyanosis",
        D: "Clubbing"
      },
      correctAnswer: "C",
      explanation: "Cyanosis (C) is correct because it is the bluish discolouration of the skin, lips, nail beds or mucous membranes caused by an increased amount of deoxygenated haemoglobin in the blood, which signals hypoxaemia. Erythema (A) is redness of the skin from increased blood flow, for example in inflammation. Jaundice (B) is a yellow discolouration of the skin and eyes caused by raised bilirubin. Clubbing (D) is a change in the shape of the fingertips and nails (loss of the nail-bed angle) that develops slowly in chronic hypoxia, and it is not a colour change.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q2"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q3",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 3,
      questionType: "mcq",
      text: "Patient AA presents with pH 7.26, PaCO2 72 mmHg and HCO3 26 mEq/L. The nurse interprets this as:",
      options: {
        A: "Metabolic acidosis",
        B: "Metabolic alkalosis",
        C: "Respiratory alkalosis",
        D: "Respiratory acidosis"
      },
      correctAnswer: "D",
      explanation: "Respiratory acidosis (D) is correct. Step 1: a pH of 7.26 is below 7.35, so the blood is acidic. Step 2: a PaCO2 of 72 mmHg is well above the normal 35 to 45 mmHg, so carbon dioxide (an acid) is being retained through hypoventilation, which makes the cause respiratory. Step 3: the HCO3 of 26 mEq/L is at the upper limit of normal (22 to 26), so the kidneys have not yet compensated, meaning the problem is acute. Metabolic acidosis (A) would show a low pH with a low HCO3. Metabolic alkalosis (B) would show a high pH with a high HCO3. Respiratory alkalosis (C) would show a high pH with a low PaCO2.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q3"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q4",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 4,
      questionType: "mcq",
      text: "The main cause of acute bronchitis is:",
      options: {
        A: "Bacterial infection",
        B: "Allergies",
        C: "Viral infection",
        D: "Smoking"
      },
      correctAnswer: "C",
      explanation: "Viral infection (C) is correct because most cases of acute bronchitis follow a viral upper respiratory infection (for example influenza, rhinovirus or respiratory syncytial virus), which inflames the lining of the bronchi and causes a cough with or without sputum. Bacterial infection (A) is a less common cause, which is why antibiotics are usually not needed. Allergies (B) cause allergic airway conditions such as asthma, not typical acute bronchitis. Smoking (D) is the main cause of chronic bronchitis, not the acute form, although it makes acute attacks more likely.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q4"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q5",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 5,
      questionType: "mcq",
      text: "Chronic bronchitis is:",
      options: {
        A: "A sore throat lasting for a week caused by Streptococcus pyogenes",
        B: "A persistent cough for at least 3 months in 2 consecutive years",
        C: "Shortness of breath occurring at night",
        D: "A viral infection lasting for two weeks"
      },
      correctAnswer: "B",
      explanation: "A persistent cough for at least 3 months in 2 consecutive years (B) is correct because this is the standard clinical definition: a productive cough on most days for at least 3 months in each of 2 successive years, with other causes of chronic cough excluded. A sore throat caused by Streptococcus pyogenes (A) describes streptococcal pharyngitis. Shortness of breath at night (C) describes paroxysmal nocturnal dyspnoea, which is typical of heart failure. A viral infection lasting two weeks (D) describes an acute self-limiting infection, not a chronic disease.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q5"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q6",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 6,
      questionType: "mcq",
      text: "A classic clinical sign of asthma is:",
      options: {
        A: "Expiratory wheeze",
        B: "Inspiratory crackles",
        C: "Decreased respiratory rate",
        D: "Diminished breath sounds throughout"
      },
      correctAnswer: "A",
      explanation: "Expiratory wheeze (A) is correct because narrowing of the airways from bronchospasm, mucosal swelling and mucus is worse on breathing out, producing a high-pitched whistling sound on expiration. Inspiratory crackles (B) are typical of pneumonia, pulmonary oedema and fibrosis. A decreased respiratory rate (C) is not expected, because the patient breathes faster (tachypnoea) in an attack. Diminished breath sounds throughout (D) can occur in a severe attack, the silent chest, but this is an ominous late sign and not the classic sign.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q6"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q7",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 7,
      questionType: "mcq",
      text: "A physical examination consistent with a large pleural effusion is:",
      options: {
        A: "Increased tactile fremitus",
        B: "Hyperresonance on percussion",
        C: "Dullness on percussion",
        D: "Increased breath sounds"
      },
      correctAnswer: "C",
      explanation: "Dullness on percussion (C) is correct because fluid in the pleural space replaces air and gives a dull, stony note when tapped, along with reduced breath sounds and reduced tactile fremitus over the fluid. Increased tactile fremitus (A) occurs over consolidated lung, as in pneumonia, whereas fluid dampens vibrations. Hyperresonance (B) is found when there is excess air, as in pneumothorax or emphysema. Increased breath sounds (D) occur over consolidation, whereas a large effusion reduces them.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q7"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q8",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 8,
      questionType: "mcq",
      text: "Patient ZZ 35 years old was admitted to the ward 72 hours ago for treatment of a gunshot wound. He has recently developed fevers of 39.5 C and on auscultation coarse crackles are heard on the right lower lobe, the nurse suspects Mr. ZZ has:",
      options: {
        A: "Community acquired pneumonia",
        B: "Hospital acquired pneumonia",
        C: "Pneumonia in immunosuppressed person",
        D: "Aspiration pneumonia"
      },
      correctAnswer: "B",
      explanation: "Hospital acquired pneumonia (B) is correct because it is pneumonia that begins 48 hours or more after admission and was not incubating on arrival. This patient has been in hospital for 72 hours and has developed fever and crackles in the right lower lobe. Community acquired pneumonia (A) starts outside hospital or within the first 48 hours. Pneumonia in an immunosuppressed person (C) needs a cause such as advanced HIV or chemotherapy, which is not given. Aspiration pneumonia (D) needs a history of inhaling vomit or secretions, which is not described.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q8"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q9",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 9,
      questionType: "mcq",
      text: "Student XX is taking care of a patient with a chest tube 2 days post pneumonectomy for lung cancer. An intervention by the student that will require the nurse to intervene and provide assistance is:",
      options: {
        A: "Stripping the chest tube from the insertion site downwards",
        B: "Keeping all tubing as straight as possible",
        C: "Assessing for gentle bubbling in the water seal chamber",
        D: "Verifying the drainage system is below the client's chest"
      },
      correctAnswer: "A",
      explanation: "Stripping the chest tube from the insertion site downwards (A) is correct because stripping or milking creates very high negative pressure in the pleural space that can damage lung or surgical tissue, so it is not done routinely and never without an order, and the nurse must stop the student. Keeping the tubing as straight as possible (B) prevents kinks and dependent loops and is correct practice. Assessing for gentle bubbling in the water seal chamber (C) is part of routine assessment, because gentle intermittent bubbling can be expected while air leaves the pleural space. Verifying that the drainage system is below the chest (D) is correct, because gravity drains the pleural space and prevents backflow.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q9"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q10",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 10,
      questionType: "mcq",
      text: "An immediate nursing intervention for a patient post bronchoscopy is to:",
      options: {
        A: "Encourage increase in fluid intake in the next 24 hours",
        B: "Ensure return of the gag reflex before offering foods or drinks",
        C: "Ensure provision of extra blankets",
        D: "Encourage active ambulation in the next 24 hours"
      },
      correctAnswer: "B",
      explanation: "Ensure return of the gag reflex before offering foods or drinks (B) is correct because the throat is numbed with topical anaesthetic for bronchoscopy, so the gag and cough reflexes are temporarily lost (usually for 1 to 2 hours) and food or fluid could be aspirated into the lungs. The nurse keeps the patient nil by mouth until the reflex has returned. Encouraging more fluids (A) is only appropriate after the reflex returns. Extra blankets (C) are not a priority. Active ambulation (D) is not encouraged, because the patient is expected to rest after sedation.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q10"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q11",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 11,
      questionType: "mcq",
      text: "A flail chest is:",
      options: {
        A: "Fracture of two ribs on one side",
        B: "A single rib fracture with pneumothorax",
        C: "Fracture of the sternum with hemothorax",
        D: "Fracture of three adjacent ribs at two or more sites"
      },
      correctAnswer: "D",
      explanation: "Fracture of three adjacent ribs at two or more sites (D) is correct because this breaks a segment of the chest wall free so that it moves paradoxically (inward on inspiration and outward on expiration), which reduces ventilation. Fracture of two ribs on one side (A) is a simple rib fracture, because there is no free segment. A single rib fracture with pneumothorax (B) is a rib fracture with a lung complication, and not a flail segment. Fracture of the sternum with haemothorax (C) is a different chest injury. Note that some textbooks accept two or more adjacent ribs, but three is the commonly taught definition.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q11"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q12",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 12,
      questionType: "mcq",
      text: "A patient presents to the emergency department with severe dyspnea, orthopnea, and pink frothy sputum. An appropriate initial positioning for this patient is:",
      options: {
        A: "Supine with legs elevated",
        B: "High Fowler's position with legs dangling down",
        C: "Trendelenburg position",
        D: "Left lateral recumbent position"
      },
      correctAnswer: "B",
      explanation: "High Fowler's position with legs dangling down (B) is correct because these signs point to acute pulmonary oedema. Sitting upright lets the diaphragm descend and the lungs expand, and letting the legs hang pools blood in the legs, which reduces the blood returning to the heart (preload) and eases lung congestion. Supine with legs elevated (A) increases venous return and worsens breathlessness. Trendelenburg (C) pushes abdominal organs against the diaphragm and also increases venous return. Left lateral recumbent (D) does not relieve orthopnoea or reduce preload.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q12"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q13",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 13,
      questionType: "mcq",
      text: "A true statement regarding extrinsic type of asthma is:",
      options: {
        A: "It can be triggered by respiratory tract infections",
        B: "The attacks becomes more severe and frequent with progress in age",
        C: "It is not related to any allergen",
        D: "Patients usually have a history of early allergic conditions"
      },
      correctAnswer: "D",
      explanation: "Patients usually have a history of early allergic conditions (D) is correct because extrinsic (allergic or atopic) asthma starts in childhood or early adult life, is triggered by allergens such as dust mites, pollen and animal dander, and is often accompanied by eczema, hay fever or food allergy. Triggering by respiratory infections (A) is typical of intrinsic (non-allergic) asthma. Attacks becoming more severe and frequent with age (B) is also a feature of intrinsic asthma, which starts later in adult life. Being unrelated to any allergen (C) is false because allergens are the defining trigger.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q13"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q14",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 14,
      questionType: "true_false",
      text: "True or False: Segmental resection of the lung is the surgical removal of small, localized lesions that occupies only part of a segment",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. The description given, removal of a small, localized lesion that occupies only part of a segment, defines a wedge resection. A segmental resection removes an entire bronchopulmonary segment, which is larger than a wedge. The order of increasing lung tissue removed is wedge resection, segmental resection, lobectomy and pneumonectomy.",
      sourceType: "original_true_false",
      sourceRef: "Section A, Q14(a)"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q15",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 15,
      questionType: "true_false",
      text: "True or False: Bronchiectasis is the irreversible dilation of the bronchi and bronchioles",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "A",
      explanation: "TRUE. Bronchiectasis is a chronic condition in which the walls of the bronchi and bronchioles are damaged, usually after repeated infection or obstruction, so they become permanently widened. Mucus pools in the dilated airways, causing a chronic cough with large amounts of foul-smelling sputum, recurrent infections and clubbing of the fingers. The dilation does not reverse, which is why management focuses on drainage of secretions, treatment of infection and prevention of complications.",
      sourceType: "original_true_false",
      sourceRef: "Section A, Q14(b)"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q16",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 16,
      questionType: "mcq",
      text: "A patient has been diagnosed with hemothorax. An intervention that the nurse should anticipate to be performed is:",
      options: {
        A: "Administration of diuretics",
        B: "Thoracotomy",
        C: "Administration of bronchodilators",
        D: "Insertion of an underwater seal drain"
      },
      correctAnswer: "D",
      explanation: "Insertion of an underwater seal drain (D) is correct because blood in the pleural space must be drained to re-expand the lung, restore breathing and monitor ongoing blood loss, and this is done with a chest tube connected to an underwater seal. Diuretics (A) treat fluid overload and pulmonary oedema, not blood in the pleural space. Thoracotomy (B) is reserved for massive or continuing bleeding after the drain is in place. Bronchodilators (C) treat airway narrowing and do nothing for blood in the pleural space.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q15"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q17",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 1,
      questionType: "mcq",
      text: "A 24-year-old woman with known asthma is brought to the ward wheezing loudly. Her respiratory rate is 32 breaths per minute and her oxygen saturation is 88% on room air. Which nursing intervention takes priority?",
      options: {
        A: "Administer oxygen as prescribed and recheck the saturation",
        B: "Give her a large glass of cold water to drink",
        C: "Ask her family to describe her usual diet",
        D: "Explain how to keep an asthma diary"
      },
      correctAnswer: "A",
      explanation: "Administer oxygen as prescribed and recheck the saturation (A) is correct because airway, breathing and circulation come first. A saturation of 88% is hypoxaemia, so oxygen is given at once (titrated to a saturation of about 93 to 95%) alongside the prescribed reliever medicine. A large cold drink (B) is not urgent and is unsafe while she is struggling to breathe. Taking a dietary history (C) and teaching an asthma diary (D) are useful later, once she is stable and able to concentrate.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (asthma nursing interventions)",
      markingPoint: "Administer oxygen to correct hypoxaemia"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q18",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 2,
      questionType: "mcq",
      text: "Which position best helps a patient with asthma who is struggling to breathe?",
      options: {
        A: "Supine with one pillow",
        B: "Prone with the head turned to the side",
        C: "Sitting upright in high Fowler's position, leaning slightly forward",
        D: "Left lateral with the head lowered"
      },
      correctAnswer: "C",
      explanation: "Sitting upright in high Fowler's position, leaning slightly forward (C) is correct because it lets the diaphragm descend freely and the lungs expand fully, and leaning forward lets the accessory muscles of breathing work better, which lowers the work of breathing. Supine with one pillow (A) lets the abdominal contents press on the diaphragm. Prone (B) restricts chest expansion. Left lateral with the head lowered (D) pushes the abdominal organs towards the diaphragm and worsens breathlessness.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (asthma nursing interventions)",
      markingPoint: "Position the patient upright"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q19",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 3,
      questionType: "mcq",
      text: "A patient with asthma has just received nebulised salbutamol as prescribed. Which finding should the nurse monitor for as a common side effect of the drug?",
      options: {
        A: "Bradycardia and drowsiness",
        B: "Fine hand tremors and a fast pulse",
        C: "A marked fall in body temperature",
        D: "Yellow discolouration of the skin"
      },
      correctAnswer: "B",
      explanation: "Fine hand tremors and a fast pulse (B) is correct because salbutamol is a beta-2 agonist that also stimulates beta receptors in skeletal muscle and, to a lesser degree, the heart, so tremor, tachycardia and palpitations are common and the nurse checks the pulse before and after the dose. Bradycardia and drowsiness (A) are the opposite of the expected effect. A fall in body temperature (C) is not a known effect. Yellow skin (D) points to liver or blood disease and is unrelated to salbutamol.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (asthma nursing interventions)",
      markingPoint: "Administer bronchodilator and monitor for side effects"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q20",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 4,
      questionType: "true_false",
      text: "True or False: Staying with an anxious patient during an asthma attack and giving calm reassurance is an appropriate nursing intervention.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "A",
      explanation: "TRUE. Fear and anxiety make a patient breathe faster and more shallowly, raise oxygen demand and can tighten the airways further, creating a cycle of worsening breathlessness. A calm nurse who stays with the patient, uses short clear sentences and explains each action reduces anxiety and helps the patient cooperate with oxygen and nebuliser treatment. Reassurance is always given together with, and never instead of, oxygen and prescribed medicines.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (asthma nursing interventions)",
      markingPoint: "Reassure the patient"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q21",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 5,
      questionType: "mcq",
      text: "A nurse is teaching a patient to use a metered-dose inhaler with a spacer. Which instruction is correct?",
      options: {
        A: "Shake the inhaler, fire one puff into the spacer, then breathe in slowly and hold the breath for about 10 seconds",
        B: "Fire three puffs into the spacer at once, then take a single quick breath in",
        C: "Press the canister while breathing out fully, then hold the breath for two seconds",
        D: "Hold the inhaler upside down and inhale as quickly as possible through the spacer"
      },
      correctAnswer: "A",
      explanation: "Shake the inhaler, fire one puff into the spacer, then breathe in slowly and hold the breath for about 10 seconds (A) is correct because one puff at a time, with a slow breath and a breath-hold, lets the drug reach the small airways instead of landing in the throat. Firing several puffs together then a quick breath (B) wastes drug on the spacer walls and in the mouth. Pressing the canister while breathing out (C) sends the drug out of the spacer instead of into the lungs. Inhaling very fast (D) deposits the drug in the throat, and holding the inhaler upside down is not part of the technique.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (asthma nursing interventions)",
      markingPoint: "Teach correct inhaler technique"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q22",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 6,
      questionType: "mcq",
      text: "A patient's peak expiratory flow reading falls to the red zone (below 50% of personal best) and wheezing returns at home. According to the asthma action plan, what should the patient do?",
      options: {
        A: "Wait and recheck the reading the next morning",
        B: "Stop all asthma medicines and rest in bed",
        C: "Drink strong tea and lie flat until the wheeze settles",
        D: "Use the reliever inhaler immediately and seek urgent medical help"
      },
      correctAnswer: "D",
      explanation: "Use the reliever inhaler immediately and seek urgent medical help (D) is correct because the red zone signals a severe, possibly life-threatening attack, so the patient takes the reliever at once and goes to the nearest health facility. Waiting until the next morning (A) delays treatment of a worsening attack. Stopping all medicines (B) removes the protection the patient needs. Strong tea and lying flat (C) do not treat the attack, and lying flat worsens breathlessness. Teaching patients their peak flow zones is a key part of nursing care in asthma.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (asthma nursing interventions)",
      markingPoint: "Monitor peak flow and follow the asthma action plan"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q23",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 7,
      questionType: "mcq",
      text: "A patient with asthma is allergic to house dust mites. Which advice from the nurse best reduces exposure to this trigger?",
      options: {
        A: "Keep carpets and soft toys in the bedroom for comfort",
        B: "Sweep the bedroom daily with a dry broom",
        C: "Wash bedding weekly in hot water, use mattress covers and damp-dust surfaces",
        D: "Keep the windows closed and burn incense to freshen the room"
      },
      correctAnswer: "C",
      explanation: "Wash bedding weekly in hot water, use mattress covers and damp-dust surfaces (C) is correct because hot water kills mites, covers keep them from the mattress, and damp dusting removes dust without throwing it into the air. Keeping carpets and soft toys (A) gives mites places to live. Dry sweeping (B) lifts dust into the air where it is breathed in. Burning incense (D) produces smoke, itself an asthma trigger. Identifying and avoiding personal triggers is one of the most important teaching points in asthma care.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (asthma nursing interventions)",
      markingPoint: "Identify and avoid triggers / health education"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q24",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 8,
      questionType: "mcq",
      text: "Why does the doctor add oral prednisolone to the treatment of a patient with an acute asthma attack?",
      options: {
        A: "To reduce airway inflammation and swelling, which speeds recovery and lowers the chance of relapse",
        B: "To widen the airways within seconds by relaxing bronchial muscle",
        C: "To dry up bronchial secretions so that the cough stops",
        D: "To depress the cough reflex so that the patient can sleep"
      },
      correctAnswer: "A",
      explanation: "To reduce airway inflammation and swelling, which speeds recovery and lowers the chance of relapse (A) is correct because part of the airway narrowing in asthma is caused by inflamed, swollen mucosa, and corticosteroids suppress this inflammation. They take several hours to act, so they are given early alongside the fast-acting bronchodilator, not instead of it. Relaxing bronchial muscle within seconds (B) describes the action of the reliever bronchodilator. Drying secretions (C) is not their action and thick dry mucus plugs would worsen the attack. Depressing the cough reflex (D) describes cough suppressants, which are not used in asthma.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (asthma nursing interventions)",
      markingPoint: "Administer corticosteroids as prescribed"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q25",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 9,
      questionType: "mcq",
      text: "Why should a nurse encourage a patient with asthma to keep up an adequate fluid intake, unless fluids are restricted?",
      options: {
        A: "To raise the blood pressure so that more oxygen reaches the brain",
        B: "To keep bronchial secretions thin and easier to cough up, and replace fluid lost by fast breathing",
        C: "To flush allergens out of the body through the urine",
        D: "To increase the amount of oxygen dissolved in the blood"
      },
      correctAnswer: "B",
      explanation: "To keep bronchial secretions thin and easier to cough up, and replace fluid lost by fast breathing (B) is correct because rapid breathing causes water loss through the lungs, and dehydration thickens mucus into plugs that block the airways further. Raising blood pressure (A) is not the aim of hydration in asthma. Flushing allergens through the urine (C) is not a recognised effect. Increasing dissolved oxygen (D) is not affected by fluid intake. Oral fluids are given if the patient is able to drink safely, otherwise intravenous fluids are given as prescribed.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (asthma nursing interventions)",
      markingPoint: "Ensure adequate hydration"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q26",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 10,
      questionType: "true_false",
      text: "True or False: A sedative can safely be given to calm a very restless patient who is having an acute asthma attack.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. Restlessness and agitation in an acute asthma attack are usually caused by hypoxia and rising carbon dioxide, not simple anxiety. Sedatives depress the respiratory centre and the drive to breathe, and can tip the patient into respiratory failure. The correct response is to treat the cause with oxygen, bronchodilators and corticosteroids, to reassure the patient and to monitor closely. Drowsiness in a patient with asthma is a danger sign that needs urgent medical review.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (asthma nursing interventions)",
      markingPoint: "Avoid sedatives; treat hypoxia"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q27",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 11,
      questionType: "mcq",
      text: "A mother cooks indoors on a firewood stove in a small, poorly ventilated house, and her 2-year-old child has repeated chest infections. Which risk factor for pneumonia is most directly shown?",
      options: {
        A: "Poor hand hygiene",
        B: "Lack of measles vaccination",
        C: "Premature birth",
        D: "Exposure to indoor smoke from biomass fuel"
      },
      correctAnswer: "D",
      explanation: "Exposure to indoor smoke from biomass fuel (D) is correct because smoke from firewood, charcoal and similar fuels irritates the airways, damages the cilia and weakens the defences of the child's lungs, making infection more likely. Poor hand hygiene (A), lack of measles vaccination (B) and premature birth (C) are also recognised risk factors, but none of them is described in this scenario. Indoor air pollution is an important risk factor for childhood pneumonia in homes in Kenya that cook with biomass fuels.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (pneumonia risk factors)",
      markingPoint: "Indoor air pollution"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q28",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 12,
      questionType: "mcq",
      text: "Why are adults over 65 years at increased risk of developing pneumonia?",
      options: {
        A: "Their immune response is weaker and their cough and airway cleaning are less effective",
        B: "Their lungs produce more surfactant and so trap bacteria",
        C: "Their airways become wider, which lets air and germs flow freely",
        D: "Their stomach contents are more acidic, so food is digested slowly"
      },
      correctAnswer: "A",
      explanation: "Their immune response is weaker and their cough and airway cleaning are less effective (A) is correct because ageing reduces immunity, weakens cough and swallowing reflexes and slows the cilia that sweep germs out of the airways, and older people often have other chronic diseases. Producing more surfactant (B) is not a feature of ageing. Wider airways (C) are not the cause of the risk. More acidic stomach contents (D) is not a recognised explanation. Children under 5 years are also at higher risk because their immune systems are still developing.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (pneumonia risk factors)",
      markingPoint: "Extremes of age"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q29",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 13,
      questionType: "mcq",
      text: "Why does cigarette smoking increase the risk of pneumonia?",
      options: {
        A: "It increases the number of white cells in the airway",
        B: "It thickens the pleura so that bacteria cannot cross it",
        C: "It damages the cilia and impairs the clearance of mucus and germs from the airways",
        D: "It raises the blood oxygen level and so helps bacteria to grow"
      },
      correctAnswer: "C",
      explanation: "It damages the cilia and impairs the clearance of mucus and germs from the airways (C) is correct because smoke paralyses and destroys the cilia and weakens the lung's immune cells, so inhaled bacteria and viruses stay in the lungs and cause infection. Increasing the number of white cells (A) would help defence, but smoking weakens it. Thickening the pleura (B) is not an effect of smoking. Raising blood oxygen (D) is wrong because smoking lowers oxygen delivery. Smoking cessation is a key preventive measure.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (pneumonia risk factors)",
      markingPoint: "Smoking"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q30",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 14,
      questionType: "true_false",
      text: "True or False: Malnutrition weakens the body's defences and increases the risk of pneumonia, especially in young children.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "A",
      explanation: "TRUE. Malnourished children have a weaker immune response, weaker respiratory muscles and poorer repair of airway tissue, so infections reach the lungs more easily and become more severe. Undernutrition is one of the leading risk factors for childhood pneumonia in developing countries, together with indoor air pollution, lack of exclusive breastfeeding and incomplete immunisation. Good nutrition and exclusive breastfeeding for the first 6 months are therefore preventive measures.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (pneumonia risk factors)",
      markingPoint: "Malnutrition"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q31",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 15,
      questionType: "mcq",
      text: "Which patient is at greatest risk of aspiration pneumonia?",
      options: {
        A: "A stroke patient with a weak gag reflex who is fed while lying flat",
        B: "An alert patient who eats a meal while sitting upright",
        C: "A fully immunised child who has a mild cold",
        D: "A jogger who trains daily in clean air"
      },
      correctAnswer: "A",
      explanation: "A stroke patient with a weak gag reflex who is fed while lying flat (A) is correct because impaired swallowing and a weak gag reflex let food, fluid and saliva enter the airway, and lying flat makes this more likely. An alert patient sitting upright (B) can protect the airway. A child with a mild cold (C) is at low risk of aspiration. A healthy jogger (D) has no condition that impairs airway protection. Unconsciousness, seizures, sedation, alcohol intoxication and tube feeding are other aspiration risks.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (pneumonia risk factors)",
      markingPoint: "Aspiration / reduced consciousness"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q32",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 16,
      questionType: "mcq",
      text: "Which of the following puts a patient at increased risk of pneumonia because of a weakened immune system?",
      options: {
        A: "Daily use of paracetamol for headaches",
        B: "A balanced diet with a daily multivitamin",
        C: "Advanced HIV infection with a low CD4 count",
        D: "Moderate exercise three times a week"
      },
      correctAnswer: "C",
      explanation: "Advanced HIV infection with a low CD4 count (C) is correct because the loss of CD4 cells weakens the defence against organisms, including those that cause opportunistic pneumonia such as Pneumocystis jirovecii. Paracetamol (A), a balanced diet (B) and moderate exercise (D) do not weaken immunity. Cancer chemotherapy, organ transplant medicines and long-term high-dose corticosteroids also raise the risk, which is why people with weakened immunity need close monitoring for chest infection.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (pneumonia risk factors)",
      markingPoint: "Immunosuppression"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q33",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 17,
      questionType: "mcq",
      text: "Which pre-existing condition most directly impairs the lungs' defences and so raises the risk of pneumonia?",
      options: {
        A: "Osteoarthritis of the knee",
        B: "Eczema of the hands",
        C: "Migraine headaches",
        D: "Chronic obstructive pulmonary disease"
      },
      correctAnswer: "D",
      explanation: "Chronic obstructive pulmonary disease (D) is correct because damaged airways, excess mucus and weak cough in COPD allow bacteria to settle in the lungs and cause pneumonia. Osteoarthritis (A), eczema (B) and migraine (C) do not affect the lungs. Other chronic conditions that raise the risk include asthma, bronchiectasis, diabetes mellitus, heart failure, chronic kidney disease and chronic liver disease.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (pneumonia risk factors)",
      markingPoint: "Chronic lung disease"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q34",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 18,
      questionType: "true_false",
      text: "True or False: Vaccination against pneumococcus and measles has no effect on a child's risk of developing pneumonia.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. Pneumococcus (Streptococcus pneumoniae) is a leading cause of bacterial pneumonia, and measles weakens the child's immunity and is often followed by pneumonia. Immunisation against both, together with Hib vaccine, lowers a child's risk, which is why these vaccines are part of the Kenya routine immunisation schedule. Children who are not vaccinated or who are incompletely vaccinated are at higher risk.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (pneumonia risk factors)",
      markingPoint: "Lack of vaccination"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q35",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 19,
      questionType: "mcq",
      text: "A patient who had abdominal surgery lies in bed, avoids coughing because of pain, and breathes shallowly. Why does this raise the risk of pneumonia?",
      options: {
        A: "Pain medicine makes the lungs produce more surfactant",
        B: "Secretions pool in the lungs and are not cleared, so bacteria multiply",
        C: "Bed rest increases the blood oxygen level",
        D: "Surgical wounds spread bacteria directly into the alveoli"
      },
      correctAnswer: "B",
      explanation: "Secretions pool in the lungs and are not cleared, so bacteria multiply (B) is correct because shallow breathing, poor coughing and immobility let mucus collect in the dependent parts of the lungs, where it provides a place for bacteria to grow, which is why deep breathing, coughing, early mobilisation and pain relief are encouraged after surgery. More surfactant (A) is not an effect of pain medicine. A higher oxygen level (C) is not a result of bed rest. A surgical wound (D) does not spread infection directly into the alveoli.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (pneumonia risk factors)",
      markingPoint: "Hospitalisation, surgery and immobility"
    },
    {
      id: "krn-block1-mar2026-respiratory-disorders_q36",
      paperId: "krn-block1-mar2026-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 20,
      questionType: "mcq",
      text: "Why does heavy alcohol use increase the risk of pneumonia?",
      options: {
        A: "It depresses the cough and gag reflexes and impairs immunity, so aspiration and infection are more likely",
        B: "It widens the bronchi so that more air reaches the alveoli",
        C: "It increases the clearance of mucus from the airways",
        D: "It raises the level of surfactant in the alveoli"
      },
      correctAnswer: "A",
      explanation: "It depresses the cough and gag reflexes and impairs immunity, so aspiration and infection are more likely (A) is correct because alcohol reduces consciousness, weakens the airway protective reflexes, impairs the function of white cells and often goes with poor nutrition. Wider bronchi (B), better mucus clearance (C) and more surfactant (D) are not effects of heavy alcohol intake, and each would lower rather than raise the risk.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (pneumonia risk factors)",
      markingPoint: "Alcohol abuse"
    }
  ]
};
