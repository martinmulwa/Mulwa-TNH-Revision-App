/**
 * Mulwa Clinical Exam Portal
 * September 2024 End of Block Exam — Respiratory Disorders
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../../types';

export const KRN_BLOCK1_SEPT2024_RESPIRATORY_DISORDERS: PastPaper = {
  id: "krn-block1-sept2024-respiratory-disorders",
  year: "2024",
  month: "September",
  examType: "End of Block",
  title: "September 2024 End of Block Exam",
  block: "Block 1",
  unit: "Respiratory Disorders",
  totalQuestions: 40,
  totalSets: 2,
  sets: [
    {
      setNumber: 1,
      title: "Set 1: Original Exam Questions",
      description: "The original MCQs from the September 2024 First Block Exam paper.",
      questionCount: 15
    },
    {
      setNumber: 2,
      title: "Set 2: SAQ Mastery Questions",
      description: "MCQs and True/False questions derived from the paper's Short Answer Questions, covering every marking point.",
      questionCount: 25
    }
  ],
  questions: [
    {
      id: "krn-block1-sept2024-respiratory-disorders_q1",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 1,
      questionType: "mcq",
      text: "An aspirated object is more likely to enter and lodge into the:",
      options: {
        A: "Left bronchus",
        B: "Right bronchus",
        C: "Left lung",
        D: "Right lung"
      },
      correctAnswer: "B",
      explanation: "Right bronchus (B) is correct because the right main bronchus is wider, shorter and more vertical (about 25 degrees from the midline) than the left, so inhaled foreign bodies, vomitus and secretions fall straight into it. Left bronchus (A) is incorrect because it is longer, narrower and branches off at a sharper angle (about 45 degrees), making it a less direct path. Left lung (C) and Right lung (D) are incorrect because the question asks for the airway where the object first lodges; the object lodges in a bronchus, not in the lung tissue itself. Clinical link: this is why aspiration pneumonia most often affects the right lower lobe.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q1",
      questionNumberInSet: 1
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q2",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 1,
      questionType: "mcq",
      text: "The type of chest deformity that occurs as a result of over inflation of the lungs resulting to an increase in the anteroposterior diameter of the thorax is:",
      options: {
        A: "Pigeon chest",
        B: "Kyphoscoliosis",
        C: "Barrel chest",
        D: "Funnel chest"
      },
      correctAnswer: "C",
      explanation: "Barrel chest (C) is correct because chronic air trapping (as in emphysema/COPD) keeps the lungs over-inflated, so the anteroposterior (front-to-back) diameter becomes equal to or greater than the lateral diameter and the chest looks barrel-shaped. Pigeon chest (A), also called pectus carinatum, is a forward protrusion of the sternum, usually from childhood rickets or congenital causes, not from lung over-inflation. Kyphoscoliosis (B) is a combined forward and sideways curvature of the spine. Funnel chest (D), or pectus excavatum, is a sunken sternum.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q2",
      questionNumberInSet: 2
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q3",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 1,
      questionType: "mcq",
      text: "A patient presents with difficulty in breathing and the arterial blood gas analysis shows: PaCO2 58 mmHg, PaO2 70 mmHg, pH 7.25 and HCO3 24 mEq/L. This indicates:",
      options: {
        A: "Respiratory alkalosis",
        B: "Respiratory acidosis",
        C: "Metabolic acidosis",
        D: "Metabolic alkalosis"
      },
      correctAnswer: "B",
      explanation: "Respiratory acidosis (B) is correct. Step 1: pH 7.25 is below 7.35, so it is acidosis. Step 2: PaCO2 58 mmHg is above 45 mmHg, meaning CO2 is retained (hypoventilation), and CO2 behaves as an acid, so the cause is respiratory. Step 3: HCO3 24 mEq/L is normal (22 to 26), so the kidneys have not yet compensated, which means the problem is acute and uncompensated. The PaO2 of 70 mmHg is also mildly low (normal 80 to 100). Respiratory alkalosis (A) would have a high pH and low PaCO2. Metabolic acidosis (C) would have a low pH with a low HCO3. Metabolic alkalosis (D) would have a high pH with a high HCO3.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q3",
      questionNumberInSet: 3
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q4",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 1,
      questionType: "mcq",
      text: "A clinical feature indicating chronic respiratory disease includes:",
      options: {
        A: "Central cyanosis",
        B: "Orthopnea",
        C: "Inspiratory stridor",
        D: "Clubbing of fingers"
      },
      correctAnswer: "D",
      explanation: "Clubbing of fingers (D) is correct because clubbing (loss of the nail-bed angle with bulbous fingertips) develops slowly over weeks to months from long-standing hypoxia, so it points to chronic conditions such as bronchiectasis, lung cancer, lung abscess, and fibrosis. Central cyanosis (A) can occur in acute severe hypoxia (for example acute pneumonia or an acute asthma attack) and is therefore not specific to chronic disease. Orthopnea (B) is breathlessness on lying flat and occurs in acute or chronic heart failure and acute respiratory problems alike. Inspiratory stridor (C) is a high-pitched sound of acute upper-airway obstruction (for example foreign body, croup, laryngeal oedema), which is an emergency, not a chronic sign.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q4",
      questionNumberInSet: 4
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q5",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 1,
      questionType: "mcq",
      text: "Ms. ZZ comes to the emergency department and reports difficulty in breathing while lying down. The nurse documents this as:",
      options: {
        A: "Dyspnea",
        B: "Orthopnea",
        C: "Apnea",
        D: "Bradypnea"
      },
      correctAnswer: "B",
      explanation: "Orthopnea (B) is correct because it is the term for difficulty breathing when lying flat that is relieved by sitting up; it is often quantified by the number of pillows needed. Dyspnea (A) is the general term for shortness of breath in any position. Apnea (C) means complete absence of breathing. Bradypnea (D) is an abnormally slow respiratory rate (below 12 breaths per minute).",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q5",
      questionNumberInSet: 5
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q6",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 1,
      questionType: "mcq",
      text: "Aspiration of fluid from the pleural space for diagnostic reasons is:",
      options: {
        A: "Thoracoscopy",
        B: "Needle biopsy",
        C: "Thoracentesis",
        D: "Thoracotomy"
      },
      correctAnswer: "C",
      explanation: "Thoracentesis (C) is correct because it is the procedure in which a needle is passed through the chest wall into the pleural space to withdraw pleural fluid for laboratory analysis (diagnostic) or to relieve breathlessness (therapeutic). Thoracoscopy (A) is the direct visualisation of the pleural space with an endoscope. Needle biopsy (B) removes a piece of pleural tissue, not fluid. Thoracotomy (D) is a major surgical incision into the chest wall.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q6",
      questionNumberInSet: 6
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q7",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 1,
      questionType: "mcq",
      text: "Ms. GG has had over infusion of IV fluids; suddenly she develops dyspnea, agitation and frothy-pink secretions. The likely diagnosis is:",
      options: {
        A: "Pulmonary edema",
        B: "Acute bronchitis",
        C: "Pleurisy",
        D: "Pleural effusion"
      },
      correctAnswer: "A",
      explanation: "Pulmonary edema (A) is correct because fluid overload raises pulmonary capillary pressure and forces fluid into the alveoli. The result is sudden severe breathlessness, agitation and the classic frothy, pink-tinged sputum (fluid mixed with air and a little blood). Acute bronchitis (B) causes a productive cough with fever after a viral infection, not frothy pink sputum. Pleurisy (C) causes sharp pleuritic chest pain on breathing. Pleural effusion (D) develops more slowly and gives dullness to percussion and reduced breath sounds, without frothy pink sputum.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q7",
      questionNumberInSet: 7
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q8",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 1,
      questionType: "mcq",
      text: "Chronic bronchitis is characterized by the presence of cough and sputum for:",
      options: {
        A: "1 month in 1 year",
        B: "1 month in 2 consecutive years",
        C: "3 months in 1 year",
        D: "3 months in 2 consecutive years"
      },
      correctAnswer: "D",
      explanation: "3 months in 2 consecutive years (D) is correct. This is the standard clinical definition: a productive cough on most days for at least 3 months in each of 2 successive years, with other causes of chronic cough excluded. The other options are too short in duration or too few in years to meet the definition.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q8",
      questionNumberInSet: 8
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q9",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 1,
      questionType: "mcq",
      text: "A medication that is given for the fastest relief of frequent cough, chest tightness and expiratory wheeze is:",
      options: {
        A: "Prednisone",
        B: "Montelukast",
        C: "Albuterol",
        D: "Cromolyn"
      },
      correctAnswer: "C",
      explanation: "Albuterol (C), also called salbutamol, is correct because it is a short-acting beta-2 agonist (reliever) that relaxes bronchial smooth muscle within minutes. Prednisone (A) is a systemic corticosteroid that reduces inflammation but takes hours to work. Montelukast (B) is a leukotriene receptor antagonist used for long-term control, not rescue. Cromolyn (D) is a mast cell stabiliser used to prevent attacks and is useless once an attack has started.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q9",
      questionNumberInSet: 9
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q10",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 1,
      questionType: "mcq",
      text: "In regards to COPD:",
      options: {
        A: "It is a preventable disease characterized by airflow limitation that is fully reversible",
        B: "Smoking cessation slows down the decline in pulmonary function",
        C: "It can complicate and lead to hypertrophy of the left side of the heart",
        D: "Arterial blood gases analysis will indicate hypoxemia and hypercapnia"
      },
      correctAnswer: "B",
      explanation: "Smoking cessation slows down the decline in pulmonary function (B) is correct: stopping smoking is the single most effective intervention to slow the yearly loss of lung function (FEV1) in COPD. Option A is false because the airflow limitation in COPD is progressive and NOT fully reversible (full reversibility is a feature of asthma). Option C is false because COPD causes pulmonary hypertension and hypertrophy of the RIGHT side of the heart (cor pulmonale), not the left. Option D describes findings that appear only in advanced or acute-on-chronic COPD and is not true of every patient, so it is not the best statement.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q10",
      questionNumberInSet: 10
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q11",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 1,
      questionType: "mcq",
      text: "During inspiration in a patient diagnosed to have a flail chest, the fractured ribs:",
      options: {
        A: "Move inwards and downwards",
        B: "Move outwards and upwards",
        C: "Do not move",
        D: "Move outwards and downwards"
      },
      correctAnswer: "A",
      explanation: "Move inwards and downwards (A) is correct because a flail segment (two or more adjacent ribs each broken in two or more places) is no longer attached to the rest of the chest wall. During inspiration the intrathoracic pressure becomes negative, the normal chest wall expands outward, but the free segment is sucked inward. On expiration it bulges outward. This opposite (paradoxical) movement reduces ventilation and causes hypoxia. The other options describe normal chest wall movement or no movement, which is not what happens in flail chest.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q11",
      questionNumberInSet: 11
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q12",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 1,
      questionType: "mcq",
      text: "In status asthmaticus the disappearance of wheezing is an indication of an impending:",
      options: {
        A: "Right sided heart failure",
        B: "Respiratory failure",
        C: "Pneumonia",
        D: "Pneumothorax"
      },
      correctAnswer: "B",
      explanation: "Respiratory failure (B) is correct. Wheezing needs some air movement through narrowed airways. When the airways are almost completely blocked by bronchospasm, oedema and mucus plugs, so little air moves that the wheeze disappears (the silent chest). Together with exhaustion and drowsiness, this is an ominous sign and needs immediate emergency care. Right sided heart failure (A) is a slow complication of chronic lung disease. Pneumonia (C) is an infection and does not explain the loss of wheeze. Pneumothorax (D) is a possible complication, but a silent chest in status asthmaticus is classically a warning of respiratory failure.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q12",
      questionNumberInSet: 12
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q13",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 1,
      questionType: "mcq",
      text: "The nurse is caring for a patient with a chest tube. On assessment of the drainage system, she notes continuous bubbling in the water seal chamber. The correct nursing intervention is:",
      options: {
        A: "Reposition the patient because the tubing is kinked",
        B: "Continue to monitor the drainage system",
        C: "Increase the suction to the drainage system until bubbling stops",
        D: "Check the drainage system for an air leak"
      },
      correctAnswer: "D",
      explanation: "Check the drainage system for an air leak (D) is correct because continuous bubbling in the water seal chamber means air is constantly entering the system, either from a leak in the tubing, connections, or dressing, or from a persistent air leak in the lung. The nurse should check all connections and the insertion site and notify the doctor if it persists. Reposition because of kinking (A) is wrong because a kink would stop drainage and bubbling, not cause it. Continue to monitor only (B) is wrong because continuous bubbling is abnormal and needs action. Increase the suction (C) is wrong because it does not fix the leak and can damage lung tissue.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q13",
      questionNumberInSet: 13
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q14",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 1,
      questionType: "mcq",
      text: "The surgical removal of a small, localized lesion that occupies only part of a segment is:",
      options: {
        A: "Segmental resection",
        B: "Wedge resection",
        C: "Pneumonectomy",
        D: "Lobectomy"
      },
      correctAnswer: "B",
      explanation: "Wedge resection (B) is correct because it removes a small, wedge-shaped piece of lung containing a localized lesion that does not occupy a whole segment. Segmental resection (A) removes an entire bronchopulmonary segment. Lobectomy (D) removes a whole lobe. Pneumonectomy (C) removes an entire lung. The order of increasing lung tissue removed is: wedge, segmental, lobectomy, pneumonectomy.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q14",
      questionNumberInSet: 14
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q15",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 1,
      questionType: "mcq",
      text: "A patient at risk of pneumonia is:",
      options: {
        A: "Trauma patient on mechanical ventilation",
        B: "Any hospitalized patient between 45-50 years",
        C: "Patient with blunt chest trauma",
        D: "Any patient who has not received pneumococcal vaccine"
      },
      correctAnswer: "A",
      explanation: "Trauma patient on mechanical ventilation (A) is correct because the endotracheal tube bypasses the natural defences of the upper airway, impairs cough and secretion clearance, and allows bacteria to enter the lungs, causing ventilator-associated pneumonia. Being hospitalised at age 45 to 50 (B) is not by itself a risk factor. Blunt chest trauma (C) raises risk mainly through pulmonary contusion and poor coughing, but the intubated patient has the strongest, most direct risk. Lack of pneumococcal vaccine (D) is too general, since many unvaccinated people never develop pneumonia.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q15",
      questionNumberInSet: 15
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q16",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "mcq",
      text: "A 22-year-old is brought in with an acute asthma attack. She is wheezing loudly, her respiratory rate is 30 breaths per minute, and her oxygen saturation is 89%. Which nursing action takes priority?",
      options: {
        A: "Administer oxygen as prescribed to correct the low saturation",
        B: "Encourage her to drink plenty of oral fluids",
        C: "Take a detailed history of her usual triggers",
        D: "Teach her how to use her inhaler correctly"
      },
      correctAnswer: "A",
      explanation: "Administer oxygen as prescribed to correct the low saturation (A) is correct because airway, breathing and circulation come first: a saturation of 89% means hypoxaemia that can quickly become life-threatening, so oxygen (usually titrated to keep saturation at about 93 to 95%) is given immediately together with the prescribed reliever drug. Oral fluids (B) support hydration but are not urgent and are unsafe while she is struggling to breathe. Taking a trigger history (C) and teaching inhaler technique (D) are important later, once she is stable and able to concentrate.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (acute asthma)",
      markingPoint: "Administer oxygen",
      questionNumberInSet: 1
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q17",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "mcq",
      text: "Which position is best for a patient in an acute asthma attack?",
      options: {
        A: "Flat on the back (supine)",
        B: "Lying on the stomach (prone)",
        C: "Upright in high Fowler's position, leaning slightly forward",
        D: "Head-down (Trendelenburg) position"
      },
      correctAnswer: "C",
      explanation: "Upright in high Fowler's position, leaning slightly forward (C) is correct because sitting upright lets the diaphragm move down freely and the lungs expand fully, and leaning forward (often resting arms on an overbed table, the tripod position) lets the accessory muscles of breathing work better, which lessens the work of breathing. Supine (A) and prone (B) positions press the abdominal contents against the diaphragm and restrict chest expansion. Trendelenburg (D) pushes abdominal organs against the diaphragm and worsens breathlessness.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (acute asthma)",
      markingPoint: "Position the patient upright",
      questionNumberInSet: 2
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q18",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "mcq",
      text: "A patient with acute asthma is prescribed nebulised salbutamol. How does this drug relieve wheezing?",
      options: {
        A: "It reduces mucus production by goblet cells",
        B: "It relaxes the bronchial smooth muscle by stimulating beta-2 receptors",
        C: "It slowly blocks histamine release from mast cells",
        D: "It suppresses the cough centre in the brain"
      },
      correctAnswer: "B",
      explanation: "It relaxes the bronchial smooth muscle by stimulating beta-2 receptors (B) is correct: salbutamol is a short-acting beta-2 agonist bronchodilator, so it widens the narrowed airways within minutes and relieves wheeze, chest tightness and breathlessness. Reducing mucus production (A) is not its main action. Blocking histamine release from mast cells (C) describes cromolyn, a preventer drug that is useless in an acute attack. Suppressing the cough centre (D) describes antitussives such as codeine, which are not used for asthma.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (acute asthma)",
      markingPoint: "Administer bronchodilators",
      questionNumberInSet: 3
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q19",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "mcq",
      text: "Why are systemic corticosteroids (for example prednisolone or hydrocortisone) prescribed for a patient with acute asthma?",
      options: {
        A: "To relax the bronchial muscle within seconds",
        B: "To thin the thick secretions directly",
        C: "To stimulate the respiratory centre",
        D: "To reduce airway inflammation and swelling and prevent the attack from returning"
      },
      correctAnswer: "D",
      explanation: "To reduce airway inflammation and swelling and prevent the attack from returning (D) is correct because the airway narrowing in asthma is caused partly by inflamed, oedematous mucosa. Corticosteroids suppress this inflammation, speed recovery and reduce relapse, but they take several hours to act, so they are given early alongside (not instead of) the fast-acting bronchodilator. Relaxing bronchial muscle within seconds (A) is the job of the bronchodilator. Thinning secretions (B) is achieved with hydration and humidified oxygen. Stimulating the respiratory centre (C) is not an action of corticosteroids.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (acute asthma)",
      markingPoint: "Administer corticosteroids",
      questionNumberInSet: 4
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q20",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "true_false",
      text: "True or False: Staying with an anxious patient during an acute asthma attack and giving calm reassurance is an appropriate nursing action.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "A",
      explanation: "TRUE. Fear and anxiety make a patient breathe faster and more shallowly, increase the body's oxygen demand, and can tighten the airways further, which creates a vicious cycle of worsening breathlessness. A calm nurse who stays with the patient, speaks in short clear sentences, explains what is being done, and involves the family reduces anxiety, helps the patient cooperate with oxygen and nebuliser treatment, and lessens the work of breathing. Reassurance is always given together with, never instead of, oxygen and prescribed medicines.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (acute asthma)",
      markingPoint: "Reassure the patient",
      questionNumberInSet: 5
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q21",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "mcq",
      text: "Why is the nurse encouraged to give oral or intravenous fluids to a patient with acute asthma (when prescribed and not contraindicated)?",
      options: {
        A: "To increase urine output and flush out allergens",
        B: "To raise the patient's blood pressure",
        C: "To loosen thick bronchial secretions and replace fluid lost through rapid breathing",
        D: "To dilute the oxygen being delivered"
      },
      correctAnswer: "C",
      explanation: "To loosen thick bronchial secretions and replace fluid lost through rapid breathing (C) is correct because a patient breathing fast loses a lot of water through the lungs (insensible loss) and may be too breathless to drink, which dries and thickens mucus into plugs that block the airways further. Good hydration keeps secretions thin and easier to cough up. Flushing out allergens (A) is not a recognised effect of fluids. Raising blood pressure (B) is not the aim of hydration in asthma. Diluting oxygen (D) is physiologically meaningless.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (acute asthma)",
      markingPoint: "Ensure adequate hydration",
      questionNumberInSet: 6
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q22",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "mcq",
      text: "Which set of observations best shows whether a patient with acute asthma is responding to treatment or getting worse?",
      options: {
        A: "Weekly body weight only",
        B: "Respiratory rate, oxygen saturation, peak expiratory flow, pulse and level of consciousness",
        C: "Blood glucose and urine colour only",
        D: "Urine specific gravity and bowel sounds"
      },
      correctAnswer: "B",
      explanation: "Respiratory rate, oxygen saturation, peak expiratory flow, pulse and level of consciousness (B) is correct because these directly reflect how well air is moving and how well tissues are being oxygenated. Improvement shows as a falling respiratory rate, rising saturation and peak flow, and a calmer patient. Deterioration shows as exhaustion, drowsiness, confusion, a falling saturation, and the quiet or silent chest. Weight (A), blood glucose and urine colour (C), and urine specific gravity and bowel sounds (D) say nothing about the airways or oxygenation in an acute attack.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (acute asthma)",
      markingPoint: "Monitor vital signs, SpO2 and respiratory status",
      questionNumberInSet: 7
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q23",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "true_false",
      text: "True or False: A sedative can be given to calm a very restless patient who is having an acute asthma attack.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. Restlessness and agitation in acute asthma are usually caused by hypoxia (too little oxygen) and hypercapnia (too much carbon dioxide), not simple anxiety. Sedatives depress the respiratory centre and the urge to breathe, so they can cause breathing to slow or stop and push the patient into respiratory failure. The correct response is to treat the cause with oxygen, bronchodilators and corticosteroids, to reassure the patient, and to monitor closely. Drowsiness in an asthmatic patient is a danger sign that needs urgent medical review.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (acute asthma)",
      markingPoint: "Avoid sedatives; treat hypoxia",
      questionNumberInSet: 8
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q24",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "mcq",
      text: "After recovery from an acute asthma attack, which teaching best helps to prevent another attack?",
      options: {
        A: "Identify and avoid personal triggers such as dust, smoke and pollen, take preventer medicines as prescribed, and always carry the reliever inhaler",
        B: "Stop all inhalers once the wheeze has disappeared",
        C: "Use the reliever inhaler only at bedtime",
        D: "Stay indoors permanently and avoid all physical activity"
      },
      correctAnswer: "A",
      explanation: "Identify and avoid personal triggers, take preventer medicines as prescribed, and always carry the reliever inhaler (A) is correct because recurrent attacks are prevented by controlling the cause: removing triggers (dust mites, tobacco smoke, pollen, pets, cold air, respiratory infections), taking controller medicines regularly, and having the reliever ready at all times. Stopping inhalers when the wheeze clears (B) lets inflammation return. Using the reliever only at bedtime (C) leaves attacks untreated during the day. Staying indoors permanently (D) is unnecessary and unhealthy; most asthmatics can exercise safely when their asthma is controlled.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (acute asthma)",
      markingPoint: "Identify and avoid triggers / patient education",
      questionNumberInSet: 9
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q25",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "mcq",
      text: "A man who has not been in hospital recently develops fever, productive cough, and consolidation on chest X-ray after catching a cold at home. This is classified as:",
      options: {
        A: "Hospital-acquired pneumonia",
        B: "Aspiration pneumonia",
        C: "Community-acquired pneumonia",
        D: "Ventilator-associated pneumonia"
      },
      correctAnswer: "C",
      explanation: "Community-acquired pneumonia (C) is correct because the infection was acquired outside a hospital or health-care facility, in a person with no recent hospital stay. It is commonly caused by Streptococcus pneumoniae. Hospital-acquired pneumonia (A) begins 48 hours or more after admission. Aspiration pneumonia (B) follows inhalation of stomach contents or oral secretions. Ventilator-associated pneumonia (D) occurs in a patient on mechanical ventilation.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (types of pneumonia)",
      markingPoint: "Community-acquired pneumonia",
      questionNumberInSet: 10
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q26",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "mcq",
      text: "A patient admitted for a fractured femur develops pneumonia on the fourth day in hospital. This type of pneumonia is called:",
      options: {
        A: "Hospital-acquired (nosocomial) pneumonia",
        B: "Community-acquired pneumonia",
        C: "Opportunistic pneumonia",
        D: "Aspiration pneumonia"
      },
      correctAnswer: "A",
      explanation: "Hospital-acquired (nosocomial) pneumonia (A) is correct because it is pneumonia that begins at least 48 hours after admission and was not incubating at the time of admission. It is usually caused by resistant organisms such as Staphylococcus aureus, Klebsiella, and Pseudomonas, and is more dangerous than community-acquired pneumonia. Community-acquired pneumonia (B) starts outside hospital. Opportunistic pneumonia (C) arises in people with weakened immunity. Aspiration pneumonia (D) follows inhalation of gastric or oral contents, which is not described here.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (types of pneumonia)",
      markingPoint: "Hospital-acquired (nosocomial) pneumonia",
      questionNumberInSet: 11
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q27",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "mcq",
      text: "A patient who has been intubated and on a mechanical ventilator for 3 days develops fever, purulent tracheal secretions and a new infiltrate on chest X-ray. This is:",
      options: {
        A: "Community-acquired pneumonia",
        B: "Opportunistic pneumonia",
        C: "Aspiration pneumonia",
        D: "Ventilator-associated pneumonia"
      },
      correctAnswer: "D",
      explanation: "Ventilator-associated pneumonia (D) is correct because it is pneumonia that develops 48 hours or more after endotracheal intubation and starting mechanical ventilation. The tube bypasses the upper-airway defences and allows bacteria to enter the lungs. Community-acquired pneumonia (A) begins outside hospital. Opportunistic pneumonia (B) occurs in immunocompromised patients. Aspiration pneumonia (C) is caused by inhaling gastric or oropharyngeal contents, which is not the mechanism described.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (types of pneumonia)",
      markingPoint: "Ventilator-associated pneumonia",
      questionNumberInSet: 12
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q28",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "mcq",
      text: "An unconscious patient vomits and inhales the stomach contents, and later develops pneumonia in the right lower lobe. This type of pneumonia is:",
      options: {
        A: "Hospital-acquired pneumonia",
        B: "Aspiration pneumonia",
        C: "Community-acquired pneumonia",
        D: "Ventilator-associated pneumonia"
      },
      correctAnswer: "B",
      explanation: "Aspiration pneumonia (B) is correct because it results from inhaling food, vomitus, saliva or other foreign material into the lungs, which causes chemical irritation by stomach acid and bacterial infection. It typically affects the right lower lobe because the right bronchus is wider and more vertical. It is a risk in unconscious patients, stroke patients with swallowing problems, and those with alcohol intoxication or seizures. The other options are classified by where or how the infection was acquired, not by inhalation of stomach contents.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (types of pneumonia)",
      markingPoint: "Aspiration pneumonia",
      questionNumberInSet: 13
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q29",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "mcq",
      text: "A patient with advanced HIV infection and a very low CD4 count develops pneumonia caused by Pneumocystis jirovecii. This type of pneumonia is best called:",
      options: {
        A: "Aspiration pneumonia",
        B: "Community-acquired pneumonia",
        C: "Opportunistic pneumonia",
        D: "Ventilator-associated pneumonia"
      },
      correctAnswer: "C",
      explanation: "Opportunistic pneumonia (C) is correct because it is caused by organisms (such as Pneumocystis jirovecii, fungi, cytomegalovirus) that rarely harm people with healthy immunity but take advantage of a weakened immune system, as in advanced HIV/AIDS, cancer chemotherapy, and long-term steroid use. Aspiration pneumonia (A) is caused by inhaled stomach or oral contents. Community-acquired pneumonia (B) usually affects people with normal immunity and common pathogens. Ventilator-associated pneumonia (D) is linked to mechanical ventilation.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (types of pneumonia)",
      markingPoint: "Opportunistic (immunocompromised) pneumonia",
      questionNumberInSet: 14
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q30",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "true_false",
      text: "True or False: Bronchopneumonia is characterised by patchy inflammation around the bronchi that often affects more than one lobe of the lungs.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "A",
      explanation: "TRUE. In bronchopneumonia the infection starts in the bronchi and bronchioles and spreads to the surrounding alveoli in scattered patches, most often in both lower lobes. This is different from lobar pneumonia, in which one whole lobe (or a large part of it) becomes uniformly consolidated. Bronchopneumonia is common in infants, the elderly, and bed-bound or debilitated patients. Describing pneumonia by how it spreads in the lungs (lobar or bronchopneumonia) is another way of classifying its types.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (types of pneumonia)",
      markingPoint: "Bronchopneumonia / lobar pneumonia (anatomical types)",
      questionNumberInSet: 15
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q31",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "true_false",
      text: "True or False: Pneumonia is classified only according to the organism that causes it.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. Pneumonia can be classified in several ways. (1) By where it was acquired: community-acquired, hospital-acquired, and ventilator-associated. (2) By the mechanism: aspiration pneumonia. (3) By the patient's immune state: opportunistic pneumonia. (4) By the part of the lung affected: lobar pneumonia and bronchopneumonia. (5) By the causative organism: bacterial, viral, fungal, and atypical. Classification by setting is clinically useful because it predicts which organisms are likely and therefore which antibiotics to choose.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (types of pneumonia)",
      markingPoint: "Classification of pneumonia",
      questionNumberInSet: 16
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q32",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "mcq",
      text: "Before a chest drain is inserted, which nursing responsibility is most appropriate?",
      options: {
        A: "Insert the tube in the ward without informing the patient to reduce anxiety",
        B: "Explain the procedure, confirm that informed consent has been obtained, and prepare the patient and sterile equipment",
        C: "Withhold all pain relief so that the doctor can assess pain",
        D: "Ask the patient to lie flat and avoid asking questions"
      },
      correctAnswer: "B",
      explanation: "Explain the procedure, confirm that informed consent has been obtained, and prepare the patient and sterile equipment (B) is correct because patients have the right to know what will be done and to consent, and a well-informed patient is less anxious and cooperates better. The nurse also positions the patient as directed, gives analgesia or local anaesthetic as prescribed, assembles the sterile chest drain set and underwater seal bottle, and assists the doctor under aseptic technique. Inserting without informing (A) breaches the patient's rights. Withholding pain relief (C) is inhumane and unnecessary. Lying flat without questions (D) ignores communication and the usual positioning for insertion.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (chest drain)",
      markingPoint: "Explain procedure, consent, prepare patient and equipment, assist with insertion",
      questionNumberInSet: 17
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q33",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "mcq",
      text: "Where should the chest drainage bottle or collection chamber be kept in relation to the patient's chest?",
      options: {
        A: "Level with the chest, held in the patient's lap",
        B: "Above the level of the chest, hung on the drip stand",
        C: "On the bed beside the patient's pillow",
        D: "Below the level of the chest and upright at all times"
      },
      correctAnswer: "D",
      explanation: "Below the level of the chest and upright at all times (D) is correct because gravity then drains air and fluid out of the pleural space into the bottle and prevents drained fluid or air from flowing back into the chest. Keeping the bottle upright also maintains the water seal. Level with the chest (A) does not give enough gravity drainage. Above the chest (B) or on the bed near the pillow (C) lets fluid siphon back into the pleural space, which risks infection and a collapsed lung.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (chest drain)",
      markingPoint: "Keep drainage system below chest level",
      questionNumberInSet: 18
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q34",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "mcq",
      text: "The nurse observes that the water level in the water-seal tube rises and falls with the patient's breathing. This finding means:",
      options: {
        A: "The chest drain is patent and functioning properly in the pleural space",
        B: "The drain is blocked by a blood clot",
        C: "The lung has been punctured again",
        D: "The bottle is full and must be replaced immediately"
      },
      correctAnswer: "A",
      explanation: "The chest drain is patent and functioning properly in the pleural space (A) is correct. This movement, called tidaling or fluctuation, happens because pressure in the pleural space changes with breathing: the water level rises on inspiration and falls on expiration (in a spontaneously breathing patient). It shows the tubing is open and connected to the pleural space. Absence of tidaling would suggest a blocked or kinked tube, a drain that is not in the pleural space, or full re-expansion of the lung. A clot (B), a new puncture (C), and a full bottle (D) do not produce normal breathing-related swinging of the water level.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (chest drain)",
      markingPoint: "Observe for tidaling and patency",
      questionNumberInSet: 19
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q35",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "mcq",
      text: "While measuring chest drain output, the nurse notes a sudden increase in bright red blood draining into the collection chamber. What is the most appropriate action?",
      options: {
        A: "Document it and check again at the end of the shift",
        B: "Clamp the tube and send the patient to the bathroom",
        C: "Check vital signs and report to the doctor immediately",
        D: "Empty the bottle to reduce the volume"
      },
      correctAnswer: "C",
      explanation: "Check vital signs and report to the doctor immediately (C) is correct because a sudden rise in bright red drainage suggests active bleeding into the pleural space (haemothorax), which can quickly lead to hypovolaemic shock. The nurse checks pulse, blood pressure, respiratory rate and oxygen saturation, reports at once, and prepares for urgent measures such as IV fluids, blood transfusion, or surgery. Waiting until the end of the shift (A) is dangerous. Clamping the tube (B) risks tension pneumothorax. Emptying the bottle (D) hides the volume and delays reporting. The nurse should also routinely record the amount, colour, and consistency of drainage.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (chest drain)",
      markingPoint: "Monitor and record the amount and colour of drainage",
      questionNumberInSet: 20
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q36",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "true_false",
      text: "True or False: Chest drain tubing should be clamped routinely whenever the patient is moved to another ward or to the X-ray department.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. Routine clamping is not recommended because, if air is still leaking from the lung, a clamped tube traps air in the pleural space and can cause a life-threatening tension pneumothorax. The drainage system should be kept below the chest level and upright during transport. A chest drain is clamped only briefly in specific situations, for example to find an air leak, to change the drainage system, or when the doctor orders it, and never for long. The nurse should always keep two chest clamps at the bedside for emergencies.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (chest drain)",
      markingPoint: "Do not clamp the tube routinely; maintain an air-tight system",
      questionNumberInSet: 21
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q37",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "mcq",
      text: "Which nursing intervention helps to re-expand the lung and prevent complications in a patient with a chest drain?",
      options: {
        A: "Strict bed rest in a flat position",
        B: "Avoid moving the arm and shoulder on the affected side",
        C: "Withholding analgesia so that the patient does not become drowsy",
        D: "Encourage deep breathing, coughing and arm and shoulder exercises, with analgesia given beforehand"
      },
      correctAnswer: "D",
      explanation: "Encourage deep breathing, coughing and arm and shoulder exercises, with analgesia given beforehand (D) is correct because deep breathing and coughing help the lung re-expand and clear secretions, while arm and shoulder exercises prevent stiffness caused by the drain. Giving pain relief first makes the patient more willing to breathe deeply and move. Strict flat bed rest (A) increases the risk of chest infection and clots; the patient should sit in a semi-Fowler's position and be mobilised early. Avoiding shoulder movement (B) causes a stiff, painful shoulder. Withholding analgesia (C) causes shallow breathing from pain and increases complications.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (chest drain)",
      markingPoint: "Promote lung expansion: deep breathing, coughing, exercises, pain relief, positioning",
      questionNumberInSet: 22
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q38",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "mcq",
      text: "While checking a patient with a chest drain, the nurse feels a crackling sensation like popping bubble wrap under the skin around the insertion site. This finding is:",
      options: {
        A: "Subcutaneous emphysema, which should be reported to the doctor",
        B: "Normal healing tissue that requires no action",
        C: "A sign that the drainage bottle is too low",
        D: "A sign of a healed pleural cavity"
      },
      correctAnswer: "A",
      explanation: "Subcutaneous emphysema, which should be reported to the doctor (A) is correct because the crackling (crepitus) is caused by air leaking from the pleural space or lung into the tissue under the skin, often due to a blocked or displaced drain or a persistent air leak. The nurse should mark the area, check the tubing and connections for kinks, a blockage or leaks, monitor breathing and report promptly. It is not normal healing (B). A bottle that is too low (C) does not cause it. A healed pleural cavity (D) would not cause air under the skin.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (chest drain)",
      markingPoint: "Observe for complications: subcutaneous emphysema, infection, bleeding",
      questionNumberInSet: 23
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q39",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "mcq",
      text: "A patient's chest drain tubing accidentally disconnects from the drainage bottle. What is the nurse's first action?",
      options: {
        A: "Clamp the tubing for the rest of the shift and wait for the doctor",
        B: "Pull out the chest drain immediately",
        C: "Place the open end of the chest tube into a container of sterile water and call for help",
        D: "Wipe the end with a dry gauze and reconnect it"
      },
      correctAnswer: "C",
      explanation: "Place the open end of the chest tube into a container of sterile water and call for help (C) is correct because submerging the tube about 2 to 4 cm under sterile water re-creates an emergency water seal, so air can leave the pleural space but cannot be sucked in. The nurse then reports to the doctor, assesses breathing, and replaces the connection or system using aseptic technique. Clamping for a long period (A) risks tension pneumothorax. Pulling out the drain (B) is unsafe and is only done on the doctor's order. Reconnecting after a dry wipe (D) risks infection and entry of air.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (chest drain)",
      markingPoint: "Maintain a closed air-tight system and manage disconnection",
      questionNumberInSet: 24
    },
    {
      id: "krn-block1-sept2024-respiratory-disorders_q40",
      paperId: "krn-block1-sept2024-respiratory-disorders",
      setNumber: 2,
      questionType: "mcq",
      text: "Which action best prevents infection at the chest drain insertion site?",
      options: {
        A: "Leave the dressing untouched for a week even when it is soiled",
        B: "Inspect the site regularly and change the airtight sterile dressing aseptically when soiled or when due",
        C: "Wash the site with tap water and leave it open to the air",
        D: "Allow the patient to dress the site themselves"
      },
      correctAnswer: "B",
      explanation: "Inspect the site regularly and change the airtight sterile dressing aseptically when soiled or when due (B) is correct because the drain provides a direct route for bacteria into the pleural space and can cause empyema. Using aseptic technique, the nurse cleans the site, applies a sterile occlusive airtight dressing, secures the tube to the chest wall, and observes for redness, swelling, pus, and pain. A soiled dressing left in place (A) harbours bacteria. An open wound washed with tap water (C) is unsterile and allows air in. A patient doing their own dressing (D) lacks sterile technique and training.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (chest drain)",
      markingPoint: "Aseptic technique and site/dressing care",
      questionNumberInSet: 25
    }
  ]
};
