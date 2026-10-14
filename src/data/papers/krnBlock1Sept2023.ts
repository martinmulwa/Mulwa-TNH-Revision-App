/**
 * Mulwa Clinical Exam Portal
 * September 2023 End of Block Exam — Respiratory Disorders
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../../types';

export const KRN_BLOCK1_SEPT2023_RESPIRATORY_DISORDERS: PastPaper = {
  id: "krn-block1-sept2023-respiratory-disorders",
  year: "2023",
  month: "September",
  examType: "End of Block",
  title: "September 2023 End of Block Exam",
  category: "Respiratory Disorders",
  block: "Block 1",
  unit: "Respiratory Disorders",
  totalQuestions: 40,
  totalSets: 2,
  sets: [
    {
      setNumber: 1,
      title: "Set 1: Original Exam Questions",
      description: "The original MCQs from the September 2023 First Block Exam paper (Part A, Q1 to Q14).",
      questionCount: 14
    },
    {
      setNumber: 2,
      title: "Set 2: Matching and SAQ Mastery Questions",
      description: "MCQs and True/False questions derived from the paper's matching item and Short Answer Questions, covering every marking point.",
      questionCount: 26
    }
  ],
  questions: [
    {
      id: "krn-block1-sept2023-respiratory-disorders_q1",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 1,
      questionType: "mcq",
      text: "A true statement concerning the lungs and alveoli is:",
      options: {
        A: "Type I alveolar cells secrete surfactant",
        B: "Type II alveolar cells are fewer compared to type I",
        C: "The left lung has three lobes",
        D: "Surfactant raises the surface tension of alveolar fluid"
      },
      correctAnswer: "B",
      explanation: "Type II alveolar cells are fewer compared to type I (B) is the best answer: type I cells are thin, flat cells that line about 95% of the alveolar surface and form the gas-exchange barrier, while the small cuboidal type II cells cover only about 5% of it, so they are the smaller part of the lining. (Strictly, type II cells are more numerous by cell count, but type I cells cover far more surface, which is the sense in which this statement is taught.) Type I alveolar cells secrete surfactant (A) is incorrect because surfactant is made and secreted by type II cells. The left lung has three lobes (C) is incorrect because the left lung has two lobes (upper and lower), leaving room for the heart; the right lung has three. Surfactant raises the surface tension of alveolar fluid (D) is incorrect because surfactant lowers surface tension, which stops the alveoli from collapsing at the end of expiration.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q1"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q2",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 2,
      questionType: "mcq",
      text: "A popping sound heard on auscultation when the alveoli are filled with fluid is:",
      options: {
        A: "Stridor",
        B: "Wheezing",
        C: "Rhonchi",
        D: "Crackles"
      },
      correctAnswer: "D",
      explanation: "Crackles (D) is correct because crackles are short, popping or bubbling sounds, heard mainly on inspiration, made when fluid-filled or collapsed small airways and alveoli pop open; they are typical of pulmonary oedema, pneumonia and fibrosis. Stridor (A) is a harsh, high-pitched sound on inspiration caused by upper-airway obstruction. Wheezing (B) is a continuous, high-pitched whistling sound from narrowed small airways, typical of asthma. Rhonchi (C) are low-pitched, snoring continuous sounds from secretions in the larger airways and often clear after coughing.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q2"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q3",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 3,
      questionType: "mcq",
      text: "Mr. B, diagnosed with severe pneumonia presents with dyspnea and the arterial blood analysis results shows PaCO2: 59 mmHg, PaO2: 80 mmHg, pH: 7.1 and HCO3: 26. This indicates:",
      options: {
        A: "Respiratory alkalosis",
        B: "Metabolic alkalosis",
        C: "Respiratory acidosis",
        D: "Metabolic acidosis"
      },
      correctAnswer: "C",
      explanation: "Respiratory acidosis (C) is correct. Step 1: a pH of 7.1 is far below 7.35, so the blood is acidotic. Step 2: PaCO2 of 59 mmHg is above 45 mmHg, so carbon dioxide (an acid) is being retained through hypoventilation, which makes the cause respiratory. Step 3: HCO3 of 26 is at the upper limit of normal (22 to 26), so the kidneys have not yet compensated; this is an acute, uncompensated and severe picture. The PaO2 of 80 mmHg sits at the lower limit of normal (80 to 100) and fits impaired gas exchange in severe pneumonia. Respiratory alkalosis (A) would show a high pH with a low PaCO2. Metabolic alkalosis (B) would show a high pH with a high HCO3. Metabolic acidosis (D) would show a low pH with a low HCO3 and usually a low PaCO2 as the lungs compensate.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q3"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q4",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 4,
      questionType: "mcq",
      text: "Thoracentesis is:",
      options: {
        A: "Direct examination of the pleural cavity",
        B: "Aspiration of fluid from the pleural space",
        C: "Direct visualization of the trachea",
        D: "A surgical procedure of removing a lung segment"
      },
      correctAnswer: "B",
      explanation: "Aspiration of fluid from the pleural space (B) is correct because thoracentesis is the passing of a needle through the chest wall into the pleural space to withdraw fluid, either to test it (diagnostic) or to relieve breathlessness (therapeutic). Direct examination of the pleural cavity (A) describes thoracoscopy. Direct visualization of the trachea (C) describes bronchoscopy or tracheoscopy. A surgical procedure of removing a lung segment (D) describes segmental resection.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q4"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q5",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 5,
      questionType: "mcq",
      text: "A nurse understands that inflammation of both layers of the pleura that may develop in conjunction with pneumonia is:",
      options: {
        A: "Pleurisy",
        B: "Pleural effusion",
        C: "Emphysema",
        D: "Atelectasis"
      },
      correctAnswer: "A",
      explanation: "Pleurisy (A) is correct because pleurisy (pleuritis) is inflammation of the visceral and parietal pleura; the inflamed layers rub together and cause sharp chest pain on breathing, and it commonly accompanies pneumonia. Pleural effusion (B) is an abnormal collection of fluid between the pleural layers, not inflammation of the layers themselves. Emphysema (C) is a chronic disease with destruction of the alveolar walls. Atelectasis (D) is collapse of lung tissue.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q5"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q6",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 6,
      questionType: "mcq",
      text: "A 20-year-old male patient with no comorbidities is diagnosed with pneumonia 24 hours after hospital admission. This type of pneumonia will be classified as:",
      options: {
        A: "Hospital acquired",
        B: "Aspiration",
        C: "Community acquired",
        D: "Nosocomial"
      },
      correctAnswer: "C",
      explanation: "Community acquired (C) is correct because hospital-acquired pneumonia is defined as pneumonia that develops 48 hours or more after admission and was not incubating on admission. At 24 hours the infection was most likely already incubating when the patient arrived, so it is classed as community acquired. Hospital acquired (A) and Nosocomial (D) mean the same thing and both require the 48-hour minimum, so neither can be correct. Aspiration (B) requires inhalation of stomach or oral contents, which the question does not describe.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q6"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q7",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 7,
      questionType: "mcq",
      text: "A life-threatening condition prevented by fluid restriction in a patient diagnosed with kidney failure is:",
      options: {
        A: "Pleural effusion",
        B: "Status asthmaticus",
        C: "Empyema",
        D: "Pulmonary edema"
      },
      correctAnswer: "D",
      explanation: "Pulmonary edema (D) is correct because failing kidneys cannot excrete water and sodium; the resulting fluid overload raises pulmonary capillary pressure and forces fluid into the alveoli, causing severe breathlessness and frothy pink sputum. Restricting fluids prevents this. Pleural effusion (A) can occur with fluid overload but develops more slowly and is not the classic immediately life-threatening result. Status asthmaticus (B) is a severe, prolonged asthma attack and is not prevented by fluid restriction. Empyema (C) is a collection of pus in the pleural space caused by infection.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q7"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q8",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 8,
      questionType: "mcq",
      text: "A drug indicated for asthma management that works by modifying leukotriene is:",
      options: {
        A: "Albuterol",
        B: "Beclomethasone",
        C: "Montelukast",
        D: "Cromolyn sodium"
      },
      correctAnswer: "C",
      explanation: "Montelukast (C) is correct because it is a leukotriene receptor antagonist; it blocks the leukotrienes that cause bronchoconstriction, mucus and airway swelling and is used for long-term control. Albuterol (A) is a short-acting beta-2 agonist reliever that relaxes bronchial muscle. Beclomethasone (B) is an inhaled corticosteroid that reduces airway inflammation. Cromolyn sodium (D) is a mast cell stabiliser that prevents release of histamine and other mediators.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q8"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q9",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 9,
      questionType: "mcq",
      text: "The most effective health message to be shared to a patient after a diagnosis of chronic obstructive pulmonary disease to slow down the decline of pulmonary function is:",
      options: {
        A: "Attend all scheduled chest physiotherapy sessions",
        B: "Take smaller amounts of food but frequently",
        C: "Stop smoking",
        D: "Take fluids liberally"
      },
      correctAnswer: "C",
      explanation: "Stop smoking (C) is correct because smoking is the main cause of COPD and stopping is the single most effective measure to slow the yearly loss of lung function (FEV1). Attend all scheduled chest physiotherapy sessions (A) helps clear secretions but does not slow the decline. Take smaller amounts of food but frequently (B) helps nutrition and reduces breathlessness while eating, but it does not affect lung function loss. Take fluids liberally (D) can thin secretions but does not slow the decline and may be unsuitable if the patient has right-sided heart failure.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q9"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q10",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 10,
      questionType: "mcq",
      text: "A diagnosis of flail chest is made when:",
      options: {
        A: "One or more adjacent ribs are fractured at several sites, resulting in free-floating rib segments",
        B: "Three or more adjacent ribs are fractured at two or more sites, resulting in free-floating rib segments",
        C: "One or more adjacent ribs are fractured at two or more sites, resulting in free-floating rib segments",
        D: "Air enters the pleural cavity, causing lung collapse"
      },
      correctAnswer: "B",
      explanation: "Three or more adjacent ribs are fractured at two or more sites, resulting in free-floating rib segments (B) is correct because this is the definition most often taught in nursing texts: the free segment is no longer attached to the chest wall and moves paradoxically (inward on inspiration, outward on expiration). Options A and C (one or more adjacent ribs) are incorrect because a single fractured rib cannot form a free-floating segment, and 'several sites' in A is not the standard wording. Air enters the pleural cavity, causing lung collapse (D) describes a pneumothorax. Note: some sources use two or more adjacent ribs; the three-rib definition is the one this option reflects.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q10"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q11",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 11,
      questionType: "mcq",
      text: "A definitive diagnostic study for lung cancer is:",
      options: {
        A: "Biopsy",
        B: "Chest x-ray",
        C: "CT scan",
        D: "Thoracoscopy"
      },
      correctAnswer: "A",
      explanation: "Biopsy (A) is correct because only microscopic examination of tissue or cells (histology or cytology) confirms that a lesion is cancer and identifies its type, which decides treatment. Chest x-ray (B) can show a mass but cannot prove it is malignant. CT scan (C) shows the size, position and spread of a lesion and helps staging, but it is not proof of cancer. Thoracoscopy (D) is a way of looking into the pleural space and taking samples; it is the tissue sample, not the viewing, that gives the definitive diagnosis.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q11"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q12",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 12,
      questionType: "mcq",
      text: "On chest percussion, a dull sound is associated with:",
      options: {
        A: "Acute asthma",
        B: "Lung cancer",
        C: "Emphysema",
        D: "COPD"
      },
      correctAnswer: "B",
      explanation: "Lung cancer (B) is correct because a solid tumour, or the collapse and fluid that often accompany it, replaces air in the lung, so the percussion note over the area is dull. Acute asthma (A), emphysema (C) and COPD (D) all trap air and over-inflate the lungs, which gives a hyperresonant note, not a dull one. Clinical link: dullness is also found over consolidation, pleural effusion and atelectasis.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q12"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q13",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 13,
      questionType: "mcq",
      text: "A sign of threatening asthma exacerbation is:",
      options: {
        A: "Noticeably diminished breath sounds",
        B: "Loud wheezing",
        C: "Wheezing on expiration",
        D: "Respiratory rate of 16 breaths per minute"
      },
      correctAnswer: "A",
      explanation: "Noticeably diminished breath sounds (A) is correct because in a severe, life-threatening attack airflow falls so low that the wheeze fades and breath sounds become faint (the silent chest), warning of impending respiratory failure. Loud wheezing (B) and wheezing on expiration (C) show that air is still moving and are common in an ordinary attack. A respiratory rate of 16 breaths per minute (D) is normal; a worsening attack usually brings fast breathing.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q13"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q14",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 14,
      questionType: "mcq",
      text: "Difficulty in breathing that is relieved when the patient is seated or standing is:",
      options: {
        A: "Bradypnea",
        B: "Tachypnea",
        C: "Orthopnea",
        D: "Dyspnea"
      },
      correctAnswer: "C",
      explanation: "Orthopnea (C) is correct because it is breathlessness when lying flat that eases on sitting or standing, since the upright position lets the diaphragm descend and reduces blood return to the lungs; it is common in heart failure and COPD. Bradypnea (A) is an abnormally slow breathing rate (below 12 per minute). Tachypnea (B) is an abnormally fast rate (above 20 per minute). Dyspnea (D) is the general term for difficult breathing in any position.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q14"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q15",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 1,
      questionType: "mcq",
      text: "Atelectasis is best described as:",
      options: {
        A: "Air accumulating in the pleural cavity",
        B: "Inflammation of the lung parenchyma",
        C: "Pus accumulating in the pleural space",
        D: "Collapse of lung tissue"
      },
      correctAnswer: "D",
      explanation: "Collapse of lung tissue (D) is correct because atelectasis is partial or complete collapse of the alveoli in part or all of a lung, usually from airway blockage by mucus or from pressure on the lung, so the affected area is not ventilated. Air accumulating in the pleural cavity (A) is a pneumothorax. Inflammation of the lung parenchyma (B) is pneumonia. Pus accumulating in the pleural space (C) is empyema. Clinical link: atelectasis is common after surgery and is prevented by deep breathing, coughing and incentive spirometry.",
      sourceType: "derived_saq",
      sourceRef: "Section A, Q15 (matching)",
      markingPoint: "Atelectasis definition"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q16",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 2,
      questionType: "mcq",
      text: "Empyema is best described as:",
      options: {
        A: "Pus accumulating in the pleural space",
        B: "Air accumulating in the pleural cavity",
        C: "Inflammation of the lung parenchyma",
        D: "Collapse of lung tissue"
      },
      correctAnswer: "A",
      explanation: "Pus accumulating in the pleural space (A) is correct because empyema is a collection of infected, purulent fluid between the visceral and parietal pleura, most often spreading from a pneumonia or lung abscess; it is treated with antibiotics and chest drainage. Air accumulating in the pleural cavity (B) is a pneumothorax. Inflammation of the lung parenchyma (C) is pneumonia. Collapse of lung tissue (D) is atelectasis.",
      sourceType: "derived_saq",
      sourceRef: "Section A, Q15 (matching)",
      markingPoint: "Empyema definition"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q17",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 3,
      questionType: "mcq",
      text: "A patient returns from theatre with an underwater seal chest drain. Where should the nurse place the drainage bottle?",
      options: {
        A: "On the bed beside the patient's hip",
        B: "On the floor, below the level of the chest",
        C: "On the bedside locker at chest height",
        D: "Hanging from the drip stand above the chest"
      },
      correctAnswer: "B",
      explanation: "On the floor, below the level of the chest (B) is correct because gravity then drains air and fluid from the pleural space into the bottle and prevents drained fluid from flowing back into the chest; the unit is kept upright and secured. On the bed beside the hip (A) is unsafe because the bottle can rise to chest level or be tipped when the patient moves. On the bedside locker at chest height (C) gives poor gravity drainage and allows backflow. Hanging above the chest (D) lets fluid and air be drawn back into the pleural space, risking infection and lung collapse.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (underwater seal drain)",
      markingPoint: "Keep drainage system below chest level"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q18",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 4,
      questionType: "mcq",
      text: "Why must the tip of the water-seal tube stay below the water level (about 2 cm) in an underwater seal drain?",
      options: {
        A: "To record the volume of fluid draining from the chest",
        B: "To control the amount of suction applied to the drain",
        C: "To prevent the bottle from tipping over during walking",
        D: "To form a one-way valve that stops air re-entering"
      },
      correctAnswer: "D",
      explanation: "To form a one-way valve that stops air re-entering (D) is correct because the water seal lets air and fluid leave the pleural space but stops air being drawn back in on inspiration; this keeps the system closed and airtight, so the water level in the seal chamber must be maintained (about 2 cm). To record the volume of fluid (A) is the job of the graduated collection chamber. To control the suction (B) is the job of the suction control chamber or the wall regulator. To prevent the bottle tipping over (C) is not a function of the water seal; stability comes from keeping the unit upright and secured.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (underwater seal drain)",
      markingPoint: "Maintain a closed airtight system (water seal)"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q20",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 6,
      questionType: "mcq",
      text: "Which observations should the nurse record regularly in a patient with a chest drain to detect bleeding early?",
      options: {
        A: "Volume and colour of the drainage",
        B: "Temperature of the drainage bottle",
        C: "Type of tape holding the dressing",
        D: "Smell of the water in the seal"
      },
      correctAnswer: "A",
      explanation: "Volume and colour of the drainage (A) is correct because a sudden increase in drainage, or a change to bright red blood, signals bleeding into the pleural space; the nurse marks the level on the collection chamber with the date and time, records the amount, colour and consistency, and reports sudden changes. The temperature of the bottle (B), the type of tape (C) and the smell of the water (D) do not show how much is draining or whether it is bloody.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (underwater seal drain)",
      markingPoint: "Monitor and record drainage"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q19",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 5,
      questionType: "mcq",
      text: "Six hours after a chest drain was inserted for a haemothorax, the water level in the water-seal tube has stopped rising and falling with breathing, and the patient is becoming more breathless. What is the nurse's most appropriate first action?",
      options: {
        A: "Record it as normal and continue routine observations",
        B: "Raise the drainage bottle above the chest to flush it",
        C: "Check the tubing for kinks or clots and report",
        D: "Increase the suction until the water level swings"
      },
      correctAnswer: "C",
      explanation: "Check the tubing for kinks or clots and report (C) is correct because tidaling (the water level moving with breathing) shows that the drain is open and connected to the pleural space; loss of tidaling with new breathlessness suggests a kink, a dependent loop, a clot or a displaced tube. The nurse traces the tubing from chest to bottle, relieves any kink, assesses breathing and reports at once. Record it as normal (A) is wrong because absent tidaling with worsening breathlessness is not normal; tidaling can stop harmlessly when the lung has fully re-expanded, but not in a patient who is deteriorating. Raising the bottle above the chest (B) lets fluid flow back into the pleural space. Increasing the suction (D) is not a nursing decision and can damage lung tissue.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (underwater seal drain)",
      markingPoint: "Observe tidaling and patency"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q21",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 7,
      questionType: "true_false",
      text: "True or False: Chest drain tubing may be clamped routinely for long periods to make it easier to move the patient.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. If air is still leaking from the lung, a clamped tube traps that air in the pleural space and can cause a life-threatening tension pneumothorax. Drains are clamped only briefly in specific situations, for example when changing the drainage unit, finding the site of an air leak or testing before removal, and only as the agency policy or the doctor directs. During transfers the system is kept upright and below the chest, and two clamps are kept at the bedside for emergencies.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (underwater seal drain)",
      markingPoint: "Do not clamp the tube routinely"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q22",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 8,
      questionType: "mcq",
      text: "Which finding in a patient with a chest drain needs to be reported urgently?",
      options: {
        A: "Water level rising and falling with each breath",
        B: "Straw-coloured drainage that is slowly reducing",
        C: "Mild site soreness relieved by prescribed analgesia",
        D: "Fast breathing with falling oxygen saturation"
      },
      correctAnswer: "D",
      explanation: "Fast breathing with falling oxygen saturation (D) is correct because it signals respiratory compromise from a tension pneumothorax, a blocked drain, bleeding or re-accumulation of fluid, and needs immediate assessment and medical review. The nurse routinely checks respiratory rate, oxygen saturation, breath sounds and chest pain. Water level rising and falling with each breath (A) is normal tidaling and shows the drain is working. Straw-coloured drainage that is slowly reducing (B) is expected as the pleural space heals. Mild site soreness relieved by analgesia (C) is expected and is managed with the prescribed pain relief.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (underwater seal drain)",
      markingPoint: "Monitor respiratory status and complications"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q23",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 9,
      questionType: "mcq",
      text: "Which position and activity best help the lung to re-expand in a patient with a chest drain?",
      options: {
        A: "Lying flat with the arm on the affected side kept still",
        B: "Sitting upright with deep breathing and arm exercises",
        C: "Lying on the drained side with the bottle on the bed",
        D: "Resting in bed for the first week without moving the arm"
      },
      correctAnswer: "B",
      explanation: "Sitting upright with deep breathing and arm exercises (B) is correct because the semi-upright position lets the diaphragm move freely, and deep breathing, coughing and shoulder exercises (after pain relief) expand the lung, clear secretions and prevent a stiff shoulder. Lying flat with the arm kept still (A) restricts breathing and leads to a stiff shoulder. Lying on the drained side with the bottle on the bed (C) can compress the tubing, and a bottle on the bed risks backflow. Complete bed rest for a week (D) increases the risk of chest infection and clots; early mobilisation with the bottle kept below the chest is encouraged.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (underwater seal drain)",
      markingPoint: "Promote lung expansion"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q24",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 10,
      questionType: "mcq",
      text: "A chest drain dressing is soiled with blood-stained fluid. What should the nurse do?",
      options: {
        A: "Add clean gauze over the top of the soiled dressing",
        B: "Leave it undisturbed until the drain is removed",
        C: "Replace it aseptically with an airtight dressing",
        D: "Remove it and leave the site open to dry"
      },
      correctAnswer: "C",
      explanation: "Replace it aseptically with an airtight dressing (C) is correct because the drain gives bacteria a direct route into the pleural space, and an airtight sterile dressing also stops air entering around the tube. The nurse cleans the site with aseptic technique, secures the tube, and looks for redness, pus, swelling and crackling under the skin. Adding gauze over a soiled dressing (A) leaves a damp, contaminated layer next to the wound. Leaving it undisturbed (B) lets infection develop. Leaving the site open (D) allows air to enter and exposes the wound to infection.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (underwater seal drain)",
      markingPoint: "Aseptic site and dressing care"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q25",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 11,
      questionType: "mcq",
      text: "Mr. K is being discharged after a left lobectomy. Which instruction best helps to keep the remaining lung expanded and prevent chest infection?",
      options: {
        A: "Breathe shallowly and avoid coughing so the wound does not hurt",
        B: "Rest in bed all day and avoid coughing until the stitches are out",
        C: "Take small sips of water and avoid deep breaths when resting",
        D: "Do deep breathing and use the incentive spirometer regularly"
      },
      correctAnswer: "D",
      explanation: "Do deep breathing and use the incentive spirometer regularly (D) is correct because deep breaths re-expand the remaining lung, move secretions and prevent atelectasis and pneumonia; the patient presses a pillow over the incision when coughing to splint it. Breathing shallowly and avoiding coughing (A) lets secretions collect and the alveoli collapse. Resting in bed all day (B) and avoiding coughing leads to the same complications. Avoiding deep breaths (C) does nothing to expand the lung and increases the risk of infection.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (post-lobectomy health messages)",
      markingPoint: "Deep breathing, coughing and incentive spirometry"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q26",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 12,
      questionType: "true_false",
      text: "True or False: After discharge, the patient can stop deep-breathing and coughing exercises because the operated lung has fully healed.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. Recovery after lung surgery takes weeks, with energy returning over about 6 to 8 weeks, and the remaining lung must adjust to the lost lobe. The patient should continue deep-breathing exercises, the breathing device and supported coughing at home as instructed, to prevent collapse of lung tissue and chest infection, and should stop them only when the surgical team says so.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (post-lobectomy health messages)",
      markingPoint: "Continue breathing exercises at home"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q27",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 13,
      questionType: "mcq",
      text: "Why is Mr. K taught to exercise his left arm and shoulder regularly after the operation?",
      options: {
        A: "To prevent a stiff, painful shoulder",
        B: "To help the scar tissue to heal faster",
        C: "To drain secretions from the remaining lobe",
        D: "To reduce the risk of a blood clot in the leg"
      },
      correctAnswer: "A",
      explanation: "To prevent a stiff, painful shoulder (A) is correct because surgery through the chest wall affects muscles and ribs, and pain makes patients guard the arm, so the shoulder stiffens unless it is moved; arm and shoulder exercises restore strength and range of movement. To help the scar heal faster (B) is not the purpose; exercises do not speed wound healing. To drain secretions from the remaining lobe (C) is done by deep breathing and coughing, not arm exercises. To reduce the risk of a leg clot (D) is not served by arm exercises; leg exercises and walking do that.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (post-lobectomy health messages)",
      markingPoint: "Arm and shoulder exercises"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q28",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 14,
      questionType: "mcq",
      text: "Mr. K says he avoids his deep-breathing exercises at home because they hurt. What is the best advice?",
      options: {
        A: "Skip the exercises until the pain stops completely",
        B: "Take prescribed pain medicine before the exercises",
        C: "Do the exercises only when the pain is severe",
        D: "Replace deep breathing with bed rest until follow-up"
      },
      correctAnswer: "B",
      explanation: "Take prescribed pain medicine before the exercises (B) is correct because pain makes patients breathe shallowly and cough weakly; taking the analgesic at the right time lets him breathe deeply, cough and move well enough to protect his lungs, and he should not wait until the pain is bad. Skipping the exercises (A) risks atelectasis and pneumonia. Doing the exercises only when the pain is severe (C) is unsafe and ineffective. Replacing deep breathing with bed rest (D) removes the main protection against chest infection.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (post-lobectomy health messages)",
      markingPoint: "Take analgesia as prescribed"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q29",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 15,
      questionType: "true_false",
      text: "True or False: Once the wound looks healed, the patient may lift heavy objects straight away without asking the surgeon.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. The chest wall and lung are still healing even when the skin looks closed. Patients are told not to lift or carry heavy loads (commonly nothing heavier than about 4.5 kg, or 10 pounds) for several weeks, up to 6 to 8 weeks after open surgery, and to ask the surgeon for a specific weight limit. Activity is increased gradually, with short walks several times a day and rest breaks when tired.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (post-lobectomy health messages)",
      markingPoint: "Avoid heavy lifting and pace activity"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q30",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 16,
      questionType: "mcq",
      text: "Which symptom after discharge should prompt Mr. K to contact his doctor or return to hospital promptly?",
      options: {
        A: "Feeling tired and needing more rest than before",
        B: "Mild soreness around the scar that eases with tablets",
        C: "A scar that itches a little as it heals",
        D: "Fever, worse breathlessness or bloody sputum"
      },
      correctAnswer: "D",
      explanation: "Fever, worse breathlessness or bloody sputum (D) is correct because these suggest infection, a lung complication or bleeding and need prompt assessment. Other warning signs include a red, swollen or discharging wound, chest pain, swelling of one leg, and a cough that does not settle. Feeling tired (A) is expected because the lungs and heart are working harder, and he should rest. Mild soreness that eases with tablets (B) is expected. An itchy healing scar (C) is normal.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (post-lobectomy health messages)",
      markingPoint: "Report warning signs"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q31",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 17,
      questionType: "mcq",
      text: "Which advice about food and drink best supports healing after a lobectomy?",
      options: {
        A: "Eat as little as possible to reduce breathlessness",
        B: "Avoid all fluids so the lungs stay dry",
        C: "Eat a balanced diet with enough protein and fluids",
        D: "Eat only soft foods and avoid proteins until the scar heals"
      },
      correctAnswer: "C",
      explanation: "Eat a balanced diet with enough protein and fluids (C) is correct because tissue repair needs adequate nutrition and protein, and drinking enough fluid together with fibre prevents the constipation that pain medicines often cause. Eating as little as possible (A) leaves the body without energy for healing. Avoiding all fluids (B) causes dehydration and constipation and does not keep the lungs dry. Avoiding proteins (D) delays wound and tissue repair.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (post-lobectomy health messages)",
      markingPoint: "Nutrition and hydration"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q32",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 18,
      questionType: "mcq",
      text: "Mr. K has smoked for many years. Which message about smoking is most important after his left lobectomy?",
      options: {
        A: "He may smoke a little if he uses a filter cigarette",
        B: "He should smoke only outdoors, never inside the house",
        C: "He should smoke only when his chest feels tight",
        D: "He should stop smoking and avoid smoky places"
      },
      correctAnswer: "D",
      explanation: "He should stop smoking and avoid smoky places (D) is correct because smoking damages the cilia, reduces oxygen delivery, slows healing and raises the risk of infection and further lung disease, and other people's smoke is also harmful, so help with quitting should be offered. A filter cigarette (A) still delivers harmful smoke. Smoking only outdoors (B) removes smoke from the house but not the harm to the patient. Smoking only when the chest feels tight (C) is wrong because smoke worsens airway irritation and does not relieve tightness.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (post-lobectomy health messages)",
      markingPoint: "Stop smoking and avoid irritants"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q33",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 19,
      questionType: "mcq",
      text: "A 55-year-old man who has smoked for 30 years has a long-standing productive cough. Which event starts the pathological changes of chronic bronchitis?",
      options: {
        A: "Chronic irritation of the airway lining by smoke",
        B: "Sudden collapse of the alveoli after surgery",
        C: "A single viral infection of the lower airways",
        D: "Leakage of fluid from the capillaries into the pleura"
      },
      correctAnswer: "A",
      explanation: "Chronic irritation of the airway lining by smoke (A) is correct because prolonged exposure to irritants, mainly cigarette smoke and also air pollution, dust and fumes, injures the bronchial lining and sets up persistent inflammation, which drives all the later changes. Sudden collapse of the alveoli (B) describes atelectasis. A single viral infection (C) can cause acute bronchitis but does not by itself produce the chronic changes. Leakage of fluid into the pleura (D) describes a pleural effusion.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (pathophysiology of chronic bronchitis)",
      markingPoint: "Chronic irritation and inflammation of the bronchi"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q34",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 20,
      questionType: "mcq",
      text: "Which change in the bronchial wall causes the excess sputum of chronic bronchitis?",
      options: {
        A: "Loss of mucus-secreting cells and thinning of the wall",
        B: "Enlarged mucus glands and more goblet cells",
        C: "Destruction of the walls between the alveoli",
        D: "Thickening of the pleura around the lung"
      },
      correctAnswer: "B",
      explanation: "Enlarged mucus glands and more goblet cells (B) is correct because chronic irritation makes the mucus glands in the bronchial wall hypertrophy and the goblet cells in the lining increase in number (hyperplasia), so large amounts of thick mucus are produced. Loss of mucus-secreting cells (A) is the opposite of what happens. Destruction of the walls between the alveoli (C) is emphysema. Thickening of the pleura (D) is a pleural disease and does not cause excess sputum.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (pathophysiology of chronic bronchitis)",
      markingPoint: "Goblet cell hyperplasia and mucus gland hypertrophy"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q35",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 21,
      questionType: "mcq",
      text: "Why does mucus collect in the airways of a smoker with chronic bronchitis?",
      options: {
        A: "The cough reflex becomes too strong and wastes energy",
        B: "The mucus becomes too thin to stay in the airways",
        C: "Surfactant levels rise and trap mucus in the alveoli",
        D: "Damaged cilia cannot sweep the thick mucus upward"
      },
      correctAnswer: "D",
      explanation: "Damaged cilia cannot sweep the thick mucus upward (D) is correct because smoke and inflammation damage or reduce the cilia that normally carry mucus up the airways (the mucociliary escalator), so the thick mucus stays and coughing becomes the only way to clear it. A too-strong cough (A) is not the problem. Mucus that is too thin (B) is the opposite of the thick, sticky mucus found in the disease. Raised surfactant (C) has no role in trapping mucus in the airways.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (pathophysiology of chronic bronchitis)",
      markingPoint: "Impaired mucociliary clearance"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q36",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 22,
      questionType: "mcq",
      text: "Which combination narrows the small airways and limits airflow in chronic bronchitis?",
      options: {
        A: "Loose bronchial walls and thin secretions",
        B: "Alveolar wall destruction and loss of elastic recoil",
        C: "Swollen, thickened bronchial walls and mucus plugs",
        D: "Fluid in the alveoli and a raised pulmonary pressure"
      },
      correctAnswer: "C",
      explanation: "Swollen, thickened bronchial walls and mucus plugs (C) is correct because chronic inflammation swells and thickens the airway walls, and mucus plugs block the lumen, so airflow is limited, air is trapped and the patient has cough, wheeze and breathlessness. Loose walls and thin secretions (A) would not obstruct the airway. Alveolar wall destruction and loss of elastic recoil (B) is the main process in emphysema. Fluid in the alveoli with raised pulmonary pressure (D) describes pulmonary oedema.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (pathophysiology of chronic bronchitis)",
      markingPoint: "Mucus plugging, airway wall thickening and obstruction"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q37",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 23,
      questionType: "true_false",
      text: "True or False: The main feature of chronic bronchitis is destruction of the alveolar walls with loss of the lung's elastic recoil.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. Destruction of the alveolar walls with loss of elastic recoil is the main feature of emphysema. Chronic bronchitis is a disease of the airways, with mucus hypersecretion, airway inflammation and a productive cough on most days for at least 3 months in each of 2 successive years. The two conditions often occur together as chronic obstructive pulmonary disease (COPD).",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (pathophysiology of chronic bronchitis)",
      markingPoint: "Chronic bronchitis versus emphysema"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q38",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 24,
      questionType: "mcq",
      text: "Why are patients with chronic bronchitis prone to repeated chest infections?",
      options: {
        A: "Stagnant mucus lets bacteria multiply",
        B: "Their airways produce too little mucus to trap germs",
        C: "Their alveoli make too much surfactant",
        D: "Their white blood cells are absent from the airways"
      },
      correctAnswer: "A",
      explanation: "Stagnant mucus lets bacteria multiply (A) is correct because the thick mucus that is not cleared by the damaged cilia is an ideal place for bacteria to grow, and each infection causes further inflammation and airway damage. Too little mucus (B) is the opposite of the real problem. Too much surfactant (C) is not a feature of the disease. White blood cells absent from the airways (D) is wrong because the airways are full of inflammatory cells, yet they cannot clear the infection.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (pathophysiology of chronic bronchitis)",
      markingPoint: "Recurrent infections"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q39",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 25,
      questionType: "mcq",
      text: "How does airway obstruction in chronic bronchitis lead to hypoxaemia and carbon dioxide retention?",
      options: {
        A: "Blood flow to the lung tissue stops completely",
        B: "Poorly ventilated alveoli still receive blood flow",
        C: "Loss of surfactant makes the alveoli over-expand",
        D: "Haemoglobin loses its ability to carry oxygen to tissues"
      },
      correctAnswer: "B",
      explanation: "Poorly ventilated alveoli still receive blood flow (B) is correct because mucus plugs and narrowed airways reduce the air reaching many alveoli while their capillaries keep carrying blood; this ventilation-perfusion (V/Q) mismatch means blood leaves the lungs poorly oxygenated and carbon dioxide is not fully removed, causing hypoxaemia, hypercapnia and cyanosis. Blood flow stopping completely (A) is not what happens; the problem is mismatched ventilation. Loss of surfactant (C) is not the cause. Haemoglobin losing its ability to carry oxygen (D) is not part of this disease.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (pathophysiology of chronic bronchitis)",
      markingPoint: "Ventilation-perfusion mismatch and hypoxaemia"
    },
    {
      id: "krn-block1-sept2023-respiratory-disorders_q40",
      paperId: "krn-block1-sept2023-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 26,
      questionType: "true_false",
      text: "True or False: Long-standing hypoxaemia in chronic bronchitis can cause pulmonary hypertension and eventually right-sided heart failure (cor pulmonale).",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "A",
      explanation: "TRUE. Low oxygen in the alveoli makes the small pulmonary arteries constrict, which raises the pressure in the pulmonary circulation (pulmonary hypertension). The right ventricle has to pump against this higher pressure and, over time, enlarges and fails, giving cor pulmonale with ankle swelling and a raised neck vein pressure. Chronic hypoxaemia also stimulates the production of red blood cells (polycythaemia).",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (pathophysiology of chronic bronchitis)",
      markingPoint: "Complication: pulmonary hypertension and cor pulmonale"
    }
  ]
};
