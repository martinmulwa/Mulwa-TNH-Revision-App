/**
 * Mulwa Clinical Exam Portal
 * August 2013 Supplementary Exam — Respiratory Disorders
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../../types';

export const TNH_BLOCK1_AUG2013_RESPIRATORY: PastPaper = {
  id: "tnh-block1-aug2013-respiratory",
  year: "2013",
  month: "August",
  examType: "Supplementary",
  title: "August 2013 Supplementary Exam",
  category: "Respiratory Disorders",
  block: "Block 1",
  unit: "Respiratory Disorders",
  totalQuestions: 64,
  totalSets: 3,
  sets: [
    {
      setNumber: 1,
      title: "Set 1: Original Exam Questions",
      description: "The original MCQs from the August 2013 Supplementary End of Block I Respiratory paper.",
      questionCount: 10
    },
    {
      setNumber: 2,
      title: "Set 2: SAQ Mastery Questions",
      description: "MCQs and True/False questions derived from the paper's Short Answer Questions, covering every marking point.",
      questionCount: 28
    },
    {
      setNumber: 3,
      title: "Set 3: LAQ Mastery Questions",
      description: "MCQs and True/False questions derived from the paper's Long Answer Questions, covering every marking point.",
      questionCount: 26
    }
  ],
  questions: [
    {
      id: "tnh-block1-aug2013-respiratory_q1",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 1,
      questionNumberInSet: 1,
      questionType: "mcq",
      text: "The volume of air inspired and expired with each breath is:",
      options: {
        A: "Tidal volume",
        B: "Residual volume",
        C: "Inspiratory reserve volume",
        D: "Expiratory reserve volume"
      },
      correctAnswer: "A",
      explanation: "Tidal volume (A) is correct because it is the volume of air moved in and out with each quiet breath, about 500 mL in a resting adult. Residual volume (B) is incorrect because it is the air that stays in the lungs after a maximal expiration and cannot be breathed out. Inspiratory reserve volume (C) is incorrect because it is the extra air that can be breathed in after a normal inspiration. Expiratory reserve volume (D) is incorrect because it is the extra air that can be forced out after a normal expiration.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q1"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q2",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 1,
      questionNumberInSet: 2,
      questionType: "mcq",
      text: "Oxygen amounts more than 3 liters/minute in COPD is contraindicated due to:",
      options: {
        A: "Higher oxygen concentration will result in severe headache",
        B: "Hypercapnic drive is necessary for breathing",
        C: "Higher levels will be required later to raise PO2",
        D: "Hypoxic drive is needed for breathing"
      },
      correctAnswer: "D",
      explanation: "Hypoxic drive is needed for breathing (D) is correct because in chronic COPD with carbon dioxide retention the respiratory centre becomes insensitive to high carbon dioxide, so a low oxygen level is the main stimulus to breathe. High-flow oxygen removes this stimulus and can cause hypoventilation and carbon dioxide narcosis, which is why controlled low-flow oxygen is given (target saturation about 88 to 92%). Severe headache (A) is incorrect because it is not the reason for the restriction. Hypercapnic drive (B) is incorrect because in these patients the drive from raised carbon dioxide is blunted, which is why they rely on hypoxic drive. Higher levels required later (C) is incorrect because patients do not develop such a tolerance to oxygen.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q2"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q3",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 1,
      questionNumberInSet: 3,
      questionType: "mcq",
      text: "Tracheal deviation may occur as a result of:",
      options: {
        A: "Hyperventilation",
        B: "Pneumonia",
        C: "Pneumothorax",
        D: "Pleurisy"
      },
      correctAnswer: "C",
      explanation: "Pneumothorax (C) is correct because air trapped under pressure in the pleural space, as in tension pneumothorax, pushes the mediastinum and trachea away from the affected side. Hyperventilation (A) is incorrect because it changes the breathing pattern but exerts no pressure on the mediastinum. Pneumonia (B) is incorrect because consolidation does not usually displace the trachea. Pleurisy (D) is incorrect because inflamed pleura cause pain and a friction rub, without a mass effect.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q3"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q4",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 1,
      questionNumberInSet: 4,
      questionType: "mcq",
      text: "Tactile fremitus will increase in:",
      options: {
        A: "Emphysema",
        B: "Pneumothorax",
        C: "Pleurisy",
        D: "Pneumonia"
      },
      correctAnswer: "D",
      explanation: "Pneumonia (D) is correct because consolidated lung is solid and carries voice vibrations to the chest wall better, so fremitus increases. Emphysema (A) is incorrect because hyperinflated, air-filled lungs dampen vibrations and fremitus decreases. Pneumothorax (B) is incorrect because air in the pleural space blocks vibrations, so fremitus is reduced or absent. Pleurisy (C) is incorrect because inflamed pleura cause pain and a friction rub, and fremitus is not increased.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q4"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q5",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 1,
      questionNumberInSet: 5,
      questionType: "mcq",
      text: "Concerning bronchoscopy:",
      options: {
        A: "It is required that the patient is kept NPO for 6-12 hours before the procedure",
        B: "Anaesthesia is not routinely used",
        C: "The patient can feed soon after the procedure",
        D: "Oxygen therapy is delayed till gag reflex returns"
      },
      correctAnswer: "A",
      explanation: "It is required that the patient is kept NPO for 6-12 hours before the procedure (A) is correct because an empty stomach reduces the risk of aspiration while sedation and local anaesthesia suppress the protective reflexes (many protocols use about 6 to 8 hours). Anaesthesia not routinely used (B) is incorrect because topical local anaesthetic such as lidocaine is routinely sprayed, often with sedation. Feeding soon after (C) is incorrect because the throat remains numb for hours, so oral intake waits until the gag reflex returns. Oxygen delayed until the gag reflex returns (D) is incorrect because oxygen is given when needed and is not withheld.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q5"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q6",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 1,
      questionNumberInSet: 6,
      questionType: "mcq",
      text: "Asthma is:",
      options: {
        A: "Chronic continuous disease",
        B: "Chronic episodic disease",
        C: "Characterized by irreversible airflow limitations",
        D: "Characterized by vasoconstriction"
      },
      correctAnswer: "B",
      explanation: "Chronic episodic disease (B) is correct because asthma is a long-term airway inflammation with episodes of wheeze, cough and breathlessness triggered by allergens, infection, exercise or cold air, between which the patient may be well. Chronic continuous disease (A) is incorrect because symptoms are intermittent. Irreversible airflow limitation (C) is incorrect because airflow limitation in asthma is largely reversible, unlike COPD. Vasoconstriction (D) is incorrect because the problem is bronchoconstriction, mucosal swelling and mucus, not constriction of blood vessels.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q6"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q7",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 1,
      questionNumberInSet: 7,
      questionType: "mcq",
      text: "A condition characterized by chronic dilatation of bronchi and bronchioles is:",
      options: {
        A: "Emphysema",
        B: "Bronchiectasis",
        C: "Chronic bronchitis",
        D: "Empyema"
      },
      correctAnswer: "B",
      explanation: "Bronchiectasis (B) is correct because it is permanent, abnormal widening of the bronchi with damaged walls, causing chronic cough and copious foul-smelling sputum. Emphysema (A) is incorrect because it is destruction of the alveolar walls beyond the terminal bronchioles. Chronic bronchitis (C) is incorrect because it is mucus hypersecretion with inflamed, narrowed airways. Empyema (D) is incorrect because it is a collection of pus in the pleural space.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q7"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q8",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 1,
      questionNumberInSet: 8,
      questionType: "mcq",
      text: "A priority management for open pneumothorax is:",
      options: {
        A: "Administer oxygen 5 liters/min",
        B: "Check for evidence of cervical spine fracture",
        C: "Coordinate underwater seal drainage insertion",
        D: "Stop the flow of air into chest wall"
      },
      correctAnswer: "D",
      explanation: "Stop the flow of air into chest wall (D) is correct because a sucking chest wound lets air enter the pleural space with every breath, so it is sealed immediately with a sterile occlusive dressing, usually taped on three sides to act as a one-way valve. Oxygen 5 L/min (A) is incorrect because it is needed but does not stop the air entering. Checking for cervical spine fracture (B) is incorrect because it is part of trauma assessment but not the immediate fix for the wound. Underwater seal drainage (C) is incorrect because it follows once the wound is sealed.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q8"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q9",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 1,
      questionNumberInSet: 9,
      questionType: "mcq",
      text: "A flail chest:",
      options: {
        A: "Does not affect pulmonary ventilation",
        B: "Is associated with paradoxical chest movements",
        C: "Occurs when one rib is broken",
        D: "Is common in penetrating chest trauma"
      },
      correctAnswer: "B",
      explanation: "Is associated with paradoxical chest movements (B) is correct because the free segment moves inward on inspiration and outward on expiration, opposite to the rest of the chest wall. Not affecting ventilation (A) is incorrect because it markedly impairs ventilation, usually with underlying lung contusion. One broken rib (C) is incorrect because flail chest needs several adjacent ribs broken in more than one place. Common in penetrating trauma (D) is incorrect because it typically follows blunt trauma such as road traffic accidents.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q9"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q10",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 1,
      questionNumberInSet: 10,
      questionType: "mcq",
      text: "Morphine is administered in pulmonary edema to:",
      options: {
        A: "Reduce anxiety and control pain",
        B: "Sedate the patient and control pain",
        C: "Reduce pulmonary perfusion and control pain",
        D: "Reduce respirations and control pain"
      },
      correctAnswer: "A",
      explanation: "Reduce anxiety and control pain (A) is correct because a small intravenous dose relieves the fear and the sensation of breathlessness, which lowers sympathetic drive and oxygen demand; it also dilates veins and lowers preload. Sedating the patient (B) is incorrect because sedation is not the aim and risks respiratory depression. Reducing pulmonary perfusion (C) is incorrect because morphine lowers venous return and pulmonary congestion rather than perfusion, and this is not the classic textbook rationale. Reducing respirations (D) is incorrect because slowing breathing is an adverse effect to monitor. Current evidence questions the routine use of morphine in acute pulmonary oedema.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q10"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q11",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 1,
      questionType: "mcq",
      text: "Which statement best describes external respiration?",
      options: {
        A: "Use of oxygen inside the cell's mitochondria to release energy from glucose",
        B: "Movement of air into and out of the lungs by the respiratory muscles and airways",
        C: "Gas exchange between alveolar air and blood in the pulmonary capillaries",
        D: "Exchange of oxygen and carbon dioxide between systemic capillary blood and the body's tissue cells"
      },
      correctAnswer: "C",
      explanation: "Gas exchange between alveolar air and blood in the pulmonary capillaries (C) is correct because external respiration is the exchange of oxygen and carbon dioxide across the respiratory membrane in the lungs, which loads oxygen onto the blood and removes carbon dioxide from it. Use of oxygen inside the cell's mitochondria to release energy from glucose (A) is incorrect because that is cellular respiration, a metabolic process inside cells. Movement of air into and out of the lungs by the respiratory muscles and airways (B) is incorrect because that describes pulmonary ventilation, which only delivers fresh air to the alveoli and is not itself the exchange of gases with the blood. Exchange of oxygen and carbon dioxide between systemic capillary blood and the body's tissue cells (D) is incorrect because that is internal respiration, which takes place in the tissues and not in the lungs.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (external respiration)",
      markingPoint: "Definition of external respiration"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q12",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 2,
      questionType: "mcq",
      text: "How do oxygen and carbon dioxide cross the respiratory membrane during external respiration?",
      options: {
        A: "By simple diffusion down their partial pressure gradients, using no energy",
        B: "By filtration under the hydrostatic pressure of the pulmonary capillaries",
        C: "By active transport using ATP-driven carrier pumps in the alveolar wall",
        D: "By osmosis driven by differences in water concentration between alveoli and blood"
      },
      correctAnswer: "A",
      explanation: "By simple diffusion down their partial pressure gradients, using no energy (A) is correct because both gases are small, lipid-soluble molecules that move passively from the side with the higher partial pressure to the side with the lower partial pressure, so no cellular energy is needed. By filtration under the hydrostatic pressure of the pulmonary capillaries (B) is incorrect because filtration moves fluid out of capillaries and would cause pulmonary oedema rather than normal gas exchange. By active transport using ATP-driven carrier pumps in the alveolar wall (C) is incorrect because gas exchange does not need energy-consuming pumps; the gradients alone drive movement. By osmosis driven by differences in water concentration between alveoli and blood (D) is incorrect because osmosis describes the movement of water across a membrane, not of respiratory gases.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (external respiration)",
      markingPoint: "Passive diffusion down partial pressure gradients"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q13",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 3,
      questionType: "mcq",
      text: "Blood arriving at the lungs has an oxygen partial pressure of about 40 mmHg, while alveolar air is about 104 mmHg. What happens to oxygen at the alveolar-capillary membrane?",
      options: {
        A: "It remains in the alveoli because the pressure difference is too small to cause movement",
        B: "It diffuses from the alveoli into the blood and binds to haemoglobin",
        C: "It is pumped into the blood by alveolar cells working against its gradient",
        D: "It diffuses from the blood into the alveoli and is then breathed out of the body"
      },
      correctAnswer: "B",
      explanation: "It diffuses from the alveoli into the blood and binds to haemoglobin (B) is correct because the gradient of roughly 64 mmHg drives oxygen from the alveoli into the pulmonary capillary blood, where most of it binds to haemoglobin in red cells. It remains in the alveoli because the pressure difference is too small to cause movement (A) is incorrect because a 64 mmHg difference is large, so oxygen moves readily. It is pumped into the blood by alveolar cells working against its gradient (C) is incorrect because oxygen crosses passively and needs no pumping. It diffuses from the blood into the alveoli and is then breathed out of the body (D) is incorrect because this is the direction of carbon dioxide movement; oxygen moves down its own gradient, which points into the blood.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (external respiration)",
      markingPoint: "Oxygen moves from alveoli into blood"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q14",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 4,
      questionType: "mcq",
      text: "Venous blood reaching the pulmonary capillaries has a carbon dioxide partial pressure of about 45 mmHg, while alveolar air is about 40 mmHg. Which statement is correct?",
      options: {
        A: "Carbon dioxide diffuses from the blood into the alveoli to be breathed out",
        B: "Carbon dioxide is absorbed by alveolar cells and stored there until exhalation",
        C: "Carbon dioxide diffuses from the alveoli into the blood to be carried to the tissues",
        D: "No carbon dioxide moves because a 5 mmHg gradient is too small to drive diffusion"
      },
      correctAnswer: "A",
      explanation: "Carbon dioxide diffuses from the blood into the alveoli to be breathed out (A) is correct because carbon dioxide moves from the higher pressure in the blood to the lower pressure in the alveoli; although the gradient is only about 5 mmHg, carbon dioxide is far more soluble than oxygen and diffuses very readily. Carbon dioxide is absorbed by alveolar cells and stored there until exhalation (B) is incorrect because alveolar cells do not store the gas; it passes through the membrane into the alveolar air. Carbon dioxide diffuses from the alveoli into the blood to be carried to the tissues (C) is incorrect because this reverses the gradient; carbon dioxide is a waste gas that leaves the blood in the lungs. No carbon dioxide moves because a 5 mmHg gradient is too small to drive diffusion (D) is incorrect because carbon dioxide is about twenty times more diffusible than oxygen, so a small gradient is enough.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (external respiration)",
      markingPoint: "Carbon dioxide moves from blood into alveoli"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q15",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 5,
      questionType: "mcq",
      text: "A patient with acute pulmonary oedema has fluid in the alveoli and interstitial spaces. Why does external respiration become less effective?",
      options: {
        A: "Fluid thins the alveolar wall so oxygen is lost from the blood",
        B: "Fluid increases the surface area available for gas exchange",
        C: "Fluid raises the alveolar oxygen pressure above that of the blood",
        D: "Fluid lengthens the diffusion distance across the membrane"
      },
      correctAnswer: "D",
      explanation: "Fluid lengthens the diffusion distance across the membrane (D) is correct because diffusion slows as the distance increases, so a fluid layer between air and blood reduces oxygen transfer and causes hypoxaemia. Fluid thins the alveolar wall so oxygen is lost from the blood (A) is incorrect because fluid thickens the diffusion path; it does not thin the wall or pull oxygen out of the blood. Fluid increases the surface area available for gas exchange (B) is incorrect because fluid-filled alveoli no longer take part in gas exchange, so the usable surface area falls. Fluid raises the alveolar oxygen pressure above that of the blood (C) is incorrect because fluid lowers alveolar ventilation and oxygen pressure, which narrows rather than reverses the gradient.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (external respiration)",
      markingPoint: "Factors affecting the respiratory membrane"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q16",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 6,
      questionType: "true_false",
      text: "True or False: External respiration takes place in the body tissues, where oxygen leaves the blood and enters the cells.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. External respiration is the gas exchange that occurs in the lungs between alveolar air and the pulmonary capillary blood, where oxygen enters the blood and carbon dioxide leaves it. The exchange of gases between systemic capillary blood and the tissue cells, where oxygen leaves the blood, is internal respiration. The correct statement would be that external respiration takes place in the alveoli of the lungs.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (external respiration)",
      markingPoint: "External respiration occurs in the lungs, not the tissues"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q17",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 7,
      questionType: "mcq",
      text: "A 58-year-old man has smoked about 20 cigarettes a day for 35 years and now has a persistent cough and weight loss. Which of his exposures is the leading risk factor for lung cancer?",
      options: {
        A: "A diet that is low in fibre over many years",
        B: "A sedentary lifestyle during working years",
        C: "Long-term tobacco smoking",
        D: "Occasional intake of alcohol over the years"
      },
      correctAnswer: "C",
      explanation: "Long-term tobacco smoking (C) is correct because tobacco smoke contains many carcinogens and is linked to roughly eight in ten lung cancer deaths; the risk rises with the number of years and the amount smoked. A diet that is low in fibre over many years (A) is incorrect because low fibre is mainly associated with colorectal cancer. A sedentary lifestyle during working years (B) is incorrect because inactivity is not a recognised major cause of lung cancer. Occasional intake of alcohol over the years (D) is incorrect because alcohol is linked to cancers such as liver and oesophagus, but it is not the leading cause of lung cancer. Clinical link: quitting smoking, even late in life, substantially lowers the risk.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (lung cancer risk factors)",
      markingPoint: "Tobacco smoking"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q18",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 8,
      questionType: "mcq",
      text: "A 40-year-old woman who has never smoked shares a small room with her husband, who smokes indoors every day. Which risk factor most likely raises her risk of lung cancer?",
      options: {
        A: "Passive inhalation of second-hand tobacco smoke",
        B: "Drinking unboiled water from a shallow village well",
        C: "Eating a diet that is high in salt",
        D: "Long-term use of oral contraceptives"
      },
      correctAnswer: "A",
      explanation: "Passive inhalation of second-hand tobacco smoke (A) is correct because breathing other people's smoke exposes non-smokers to the same carcinogens and raises their lung cancer risk. Drinking unboiled water from a shallow village well (B) is incorrect because contaminated water causes enteric infections, not lung cancer. Eating a diet that is high in salt (C) is incorrect because a high-salt diet is linked mainly to stomach cancer. Long-term use of oral contraceptives (D) is incorrect because this is not an established cause of lung cancer.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (lung cancer risk factors)",
      markingPoint: "Second-hand (passive) smoke"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q19",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 9,
      questionType: "mcq",
      text: "A 50-year-old man worked for 25 years in a shipyard insulating pipes and now has a persistent cough and weight loss. Which workplace exposure most increases his risk of lung cancer?",
      options: {
        A: "Repeated lifting of heavy loads",
        B: "Frequent skin contact with soap and water",
        C: "Prolonged exposure to loud machinery noise",
        D: "Inhaling asbestos fibres at work"
      },
      correctAnswer: "D",
      explanation: "Inhaling asbestos fibres at work (D) is correct because asbestos fibres lodge in lung tissue, cause chronic inflammation and cell damage, and raise lung cancer risk, especially in people who also smoke; other workplace carcinogens include arsenic, chromium and nickel. Repeated lifting of heavy loads (A) is incorrect because heavy lifting causes musculoskeletal injury, not cancer. Frequent skin contact with soap and water (B) is incorrect because this is a mild skin irritant and not a lung carcinogen. Prolonged exposure to loud machinery noise (C) is incorrect because noise damages hearing and does not cause lung cancer.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (lung cancer risk factors)",
      markingPoint: "Occupational exposure: asbestos"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q20",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 10,
      questionType: "mcq",
      text: "Which naturally occurring radioactive gas, which can build up in poorly ventilated buildings and mines, is a recognised cause of lung cancer even in non-smokers?",
      options: {
        A: "Nitrogen",
        B: "Methane",
        C: "Radon",
        D: "Carbon monoxide"
      },
      correctAnswer: "C",
      explanation: "Radon (C) is correct because radon gives off radiation that damages lung cells when inhaled; it is a leading cause of lung cancer in non-smokers and multiplies the risk in smokers. Nitrogen (A) is incorrect because nitrogen makes up most of the air we breathe and is chemically inert. Methane (B) is incorrect because methane is a flammable gas that is not a lung carcinogen. Carbon monoxide (D) is incorrect because carbon monoxide poisons by binding haemoglobin and is not a recognised cause of lung cancer.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (lung cancer risk factors)",
      markingPoint: "Radon gas"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q21",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 11,
      questionType: "mcq",
      text: "In many homes, meals are cooked daily on an open fire using firewood or charcoal in a poorly ventilated kitchen. Which risk factor for lung cancer does this represent?",
      options: {
        A: "Contaminated drinking water from an unprotected source",
        B: "Food preservatives in processed meals",
        C: "Indoor air pollution from burning biomass fuels",
        D: "Ultraviolet radiation from sunlight"
      },
      correctAnswer: "C",
      explanation: "Indoor air pollution from burning biomass fuels (C) is correct because smoke from firewood, charcoal and similar fuels contains fine particles and carcinogens that, when breathed over many years, raise lung cancer risk; outdoor pollution such as diesel fumes adds to the risk. Contaminated drinking water from an unprotected source (A) is incorrect because this causes gastrointestinal illness and is not a lung cancer risk. Food preservatives in processed meals (B) is incorrect because these are not an established cause of lung cancer. Ultraviolet radiation from sunlight (D) is incorrect because ultraviolet radiation is linked to skin cancer rather than lung cancer.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (lung cancer risk factors)",
      markingPoint: "Air pollution (indoor and outdoor)"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q22",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 12,
      questionType: "mcq",
      text: "Which of the following is a risk factor for lung cancer that a person cannot change?",
      options: {
        A: "A family history of lung cancer",
        B: "Working with asbestos without protection",
        C: "Living with a person who smokes indoors",
        D: "Smoking cigarettes every day"
      },
      correctAnswer: "A",
      explanation: "A family history of lung cancer (A) is correct because inherited susceptibility and shared family exposures raise the risk, and a person cannot alter their relatives or their own past medical history; previous chest radiotherapy is another fixed risk. Working with asbestos without protection (B) is incorrect because occupational exposure can be avoided with protective measures or a change of job. Living with a person who smokes indoors (C) is incorrect because second-hand smoke exposure can be removed by making the home smoke-free. Smoking cigarettes every day (D) is incorrect because smoking is the most important modifiable risk, and quitting lowers the risk.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (lung cancer risk factors)",
      markingPoint: "Family history (non-modifiable risk)"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q23",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 13,
      questionType: "true_false",
      text: "True or False: A person who has never smoked cannot develop lung cancer.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. Although tobacco smoking is the leading cause, non-smokers can develop lung cancer through second-hand smoke, radon, asbestos and other workplace carcinogens, air pollution including smoke from cooking fuels, and a family history. The correct statement would be that smoking is the main risk factor but not the only one.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (lung cancer risk factors)",
      markingPoint: "Non-smokers can develop lung cancer"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q24",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 14,
      questionType: "mcq",
      text: "While repositioning a patient, a nurse lifts the underwater seal bottle onto the bed above the level of the patient's chest. What is the main danger?",
      options: {
        A: "The lung will receive excessive suction and may rupture",
        B: "Drainage fluid and air can flow back into the pleural space",
        C: "The tubing will kink and pull the drain out of the chest",
        D: "The patient's wound pain will increase because the tube is stretched"
      },
      correctAnswer: "B",
      explanation: "Drainage fluid and air can flow back into the pleural space (B) is correct because the system works by gravity and a one-way water seal, so a bottle raised above the chest lets fluid siphon back into the pleural cavity, risking infection and loss of lung expansion. The lung will receive excessive suction and may rupture (A) is incorrect because raising the bottle reduces drainage and does not add suction. The tubing will kink and pull the drain out of the chest (C) is incorrect because kinking is possible but it is not the main danger of raising the bottle. The patient's wound pain will increase because the tube is stretched (D) is incorrect because pain may occur but the major hazard is backflow of fluid into the chest.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (underwater seal drainage)",
      markingPoint: "Keep drainage system below chest level"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q25",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 15,
      questionType: "mcq",
      text: "The water level in the underwater seal tube rises with inspiration and falls with expiration. What does this indicate?",
      options: {
        A: "The drain is patent and connected to the pleural space",
        B: "The lung has fully re-expanded and the drain can be removed",
        C: "The tube is blocked by a blood clot",
        D: "There is an air leak between the chest and the bottle"
      },
      correctAnswer: "A",
      explanation: "The drain is patent and connected to the pleural space (A) is correct because the fluctuation, called tidaling, reflects pressure changes in the pleural space during breathing and shows that the tube is open and working. The lung has fully re-expanded and the drain can be removed (B) is incorrect because full re-expansion makes the fluctuation stop. The tube is blocked by a blood clot (C) is incorrect because a blocked tube also stops the fluctuation, so it would not swing. There is an air leak between the chest and the bottle (D) is incorrect because an air leak shows as continuous bubbling and not as normal swinging.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (underwater seal drainage)",
      markingPoint: "Observe tidaling"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q26",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 16,
      questionType: "mcq",
      text: "Continuous bubbling is seen in the water-seal chamber of a chest drain. What does this most likely indicate?",
      options: {
        A: "Complete re-expansion of the lung",
        B: "A blocked tube in which no air is moving",
        C: "An air leak in the system or the lung",
        D: "Normal drainage of fluid from the pleural space"
      },
      correctAnswer: "C",
      explanation: "An air leak in the system or the lung (C) is correct because bubbling that continues through the breathing cycle shows that air is constantly entering the water seal, either from a loose connection or from a leak in the lung, so the nurse checks the connections and informs the doctor. Complete re-expansion of the lung (A) is incorrect because re-expansion is shown by the fluctuation and the bubbling both stopping. A blocked tube in which no air is moving (B) is incorrect because a blocked tube has no movement, so bubbling would not be seen. Normal drainage of fluid from the pleural space (D) is incorrect because draining fluid does not bubble in the seal; only air does.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (underwater seal drainage)",
      markingPoint: "Observe bubbling"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q27",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 17,
      questionType: "true_false",
      text: "True or False: A chest drain connected to an underwater seal should not be clamped without a clear order, because clamping a drain that is releasing air can cause a tension pneumothorax.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "A",
      explanation: "TRUE. If air is escaping from the lung into the pleural space, the drain is the only way out; clamping it traps air under pressure, which can quickly collapse the lung and push the heart and great vessels across, producing a tension pneumothorax. Brief clamping is done only when ordered or required by agency policy, for example when changing the drainage unit or locating a leak, and clamps are kept at the bedside for emergencies.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (underwater seal drainage)",
      markingPoint: "Never clamp a chest drain without an order"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q28",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 18,
      questionType: "mcq",
      text: "A patient is lying on the drainage tubing and a loop of tubing hangs below the level of the bottle. Why should the nurse correct this?",
      options: {
        A: "They make the water in the seal chamber evaporate much faster",
        B: "They raise the suction pressure to unsafe levels",
        C: "They block drainage so fluid or air collects in the chest",
        D: "They allow room air to enter the chest through the tubing"
      },
      correctAnswer: "C",
      explanation: "They block drainage so fluid or air collects in the chest (C) is correct because an obstructed tube cannot drain, so fluid or air collects in the pleural space and the lung cannot expand; the tubing should lie straight and free from the patient's weight. They make the water in the seal chamber evaporate much faster (A) is incorrect because evaporation is unrelated to tubing position. They raise the suction pressure to unsafe levels (B) is incorrect because suction is set by the suction control, not by the position of the tubing. They allow room air to enter the chest through the tubing (D) is incorrect because air entry is prevented by the water seal and tight connections, not by tube position.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (underwater seal drainage)",
      markingPoint: "Keep tubing straight, free of kinks and loops"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q29",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 19,
      questionType: "mcq",
      text: "A chest drain is accidentally pulled out of a patient's chest. What should the nurse do first?",
      options: {
        A: "Cover the site with a sterile dressing, call for help and monitor breathing",
        B: "Leave the opening uncovered so that trapped air can escape freely from the chest",
        C: "Wait and record the event at the next routine round of observations on the ward",
        D: "Push the tube back into the chest and tape it firmly in place before calling for help"
      },
      correctAnswer: "A",
      explanation: "Cover the site with a sterile dressing, call for help and monitor breathing (A) is correct because covering the opening limits air entering the pleural space while urgent medical help is called and the patient is watched for respiratory distress. Leave the opening uncovered so that trapped air can escape freely from the chest (B) is incorrect because an uncovered opening lets air enter the pleural space and can collapse the lung. Wait and record the event at the next routine round of observations on the ward (C) is incorrect because this delays emergency care for a patient who may deteriorate within minutes. Push the tube back into the chest and tape it firmly in place before calling for help (D) is incorrect because pushing a non-sterile tube back risks infection and further injury to the lung.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (underwater seal drainage)",
      markingPoint: "Management of accidental drain removal"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q30",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 20,
      questionType: "mcq",
      text: "Two hours after drain insertion, drainage suddenly becomes fresh red blood and is rising fast, with the pulse at 120/min and blood pressure falling. What should the nurse do?",
      options: {
        A: "Empty the bottle and record the volume at the next scheduled change",
        B: "Report urgently to the doctor and monitor vital signs for shock",
        C: "Clamp the tube to stop the bleeding",
        D: "Ask the patient to cough to clear the tube"
      },
      correctAnswer: "B",
      explanation: "Report urgently to the doctor and monitor vital signs for shock (B) is correct because these findings suggest active bleeding in the chest, which can cause haemorrhagic shock, so the doctor is informed immediately while the nurse monitors vital signs and measures the drainage. Empty the bottle and record the volume at the next scheduled change (A) is incorrect because this delays action while the patient is bleeding. Clamp the tube to stop the bleeding (C) is incorrect because clamping prevents drainage, allowing blood to accumulate in the chest and compress the lung. Ask the patient to cough to clear the tube (D) is incorrect because coughing does not stop bleeding and delays urgent reporting.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (underwater seal drainage)",
      markingPoint: "Monitor and record drainage"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q31",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 21,
      questionType: "mcq",
      text: "The dressing around a chest drain insertion site is soiled and damp. What is the best action?",
      options: {
        A: "Change it aseptically, apply a sterile airtight dressing and inspect the skin",
        B: "Remove the dressing and leave the site open to dry in the air",
        C: "Reinforce it with extra gauze and leave the original underneath for the rest of the day",
        D: "Clean the site with tap water and re-apply the same dressing"
      },
      correctAnswer: "A",
      explanation: "Change it aseptically, apply a sterile airtight dressing and inspect the skin (A) is correct because the drain is a direct route for bacteria into the pleural space, which can cause empyema, so a clean aseptic change and checking for redness, swelling and pus protect the patient. Remove the dressing and leave the site open to dry in the air (B) is incorrect because an open site is unsterile and can let air into the pleural space. Reinforce it with extra gauze and leave the original underneath for the rest of the day (C) is incorrect because a damp dressing left in place harbours bacteria. Clean the site with tap water and re-apply the same dressing (D) is incorrect because tap water and a used dressing are not sterile and invite infection.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (underwater seal drainage)",
      markingPoint: "Aseptic care of the drain site"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q32",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 22,
      questionType: "mcq",
      text: "How can the nurse best help a patient with a chest drain to re-expand the lung and avoid complications?",
      options: {
        A: "Encourage deep breathing, coughing, position changes and arm exercises",
        B: "Discourage coughing so that any bubbling in the bottle is reduced",
        C: "Restrict all movement of the arm on the drain side to prevent pain",
        D: "Keep him flat and completely still so that the drain is never dislodged"
      },
      correctAnswer: "A",
      explanation: "Encourage deep breathing, coughing, position changes and arm exercises (A) is correct because these measures expand the alveoli, clear secretions, promote drainage and prevent a stiff shoulder, while the nurse keeps the tubing free of tension. Discourage coughing so that any bubbling in the bottle is reduced (B) is incorrect because coughing helps clear secretions and expand the lung, and some bubbling on cough is expected. Restrict all movement of the arm on the drain side to prevent pain (C) is incorrect because arm movement is encouraged with analgesia to prevent a frozen shoulder. Keep him flat and completely still so that the drain is never dislodged (D) is incorrect because immobility leads to atelectasis, pneumonia and shoulder stiffness.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q3 (underwater seal drainage)",
      markingPoint: "Deep breathing, coughing, position changes and arm exercises"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q33",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 23,
      questionType: "mcq",
      text: "A patient with pneumonia has a respiratory rate of 28/min and is struggling to breathe while lying flat. Which position helps most?",
      options: {
        A: "Prone with a pillow under the abdomen and the head flat",
        B: "Supine with the bed flat and one pillow",
        C: "Semi-Fowler's position with the head of the bed raised",
        D: "Trendelenburg position with the head lower than the feet"
      },
      correctAnswer: "C",
      explanation: "Semi-Fowler's position with the head of the bed raised (C) is correct because sitting the patient up lets the diaphragm descend, increases lung expansion and eases the work of breathing. Prone with a pillow under the abdomen and the head flat (A) is incorrect because this restricts chest expansion in a breathless, unwell patient. Supine with the bed flat and one pillow (B) is incorrect because lying flat pushes the abdominal organs against the diaphragm and worsens breathlessness. Trendelenburg position with the head lower than the feet (D) is incorrect because the head-down position further limits diaphragm movement and raises the risk of aspiration.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q4 (pneumonia)",
      markingPoint: "Semi-Fowler's positioning"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q34",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 24,
      questionType: "mcq",
      text: "A patient with pneumonia has an oxygen saturation of 88% on room air and a respiratory rate of 30/min. What is the priority nursing action?",
      options: {
        A: "Give paracetamol for the fever before doing anything else",
        B: "Encourage him to walk around the ward to expand the lungs",
        C: "Start prescribed oxygen therapy and monitor the saturation",
        D: "Record the finding and repeat the saturation after four hours"
      },
      correctAnswer: "C",
      explanation: "Start prescribed oxygen therapy and monitor the saturation (C) is correct because hypoxaemia threatens vital organs, so correcting oxygenation comes first, with saturation and respiratory effort monitored. Give paracetamol for the fever before doing anything else (A) is incorrect because fever control matters, but low oxygenation is the immediate threat. Encourage him to walk around the ward to expand the lungs (B) is incorrect because exertion increases oxygen demand in a hypoxaemic patient. Record the finding and repeat the saturation after four hours (D) is incorrect because waiting four hours delays treatment of a dangerous finding.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q4 (pneumonia)",
      markingPoint: "Oxygen therapy"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q35",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 25,
      questionType: "mcq",
      text: "A patient with pneumonia has thick sputum and a weak cough. Which measure best helps clear secretions?",
      options: {
        A: "Coach deep breathing and effective coughing, with chest physiotherapy",
        B: "Restrict fluids so that less sputum is produced and he coughs less often",
        C: "Give a regular cough suppressant so that he can rest through the night",
        D: "Keep him lying flat on his back in bed to rest the lungs completely"
      },
      correctAnswer: "A",
      explanation: "Coach deep breathing and effective coughing, with chest physiotherapy (A) is correct because deep breaths open the airways and an effective cough, with physiotherapy to loosen secretions, removes the infected material that blocks gas exchange. Restrict fluids so that less sputum is produced and he coughs less often (B) is incorrect because restricting fluids thickens secretions and makes them harder to clear. Give a regular cough suppressant so that he can rest through the night (C) is incorrect because suppressing the cough retains secretions and worsens the infection. Keep him lying flat on his back in bed to rest the lungs completely (D) is incorrect because lying flat reduces lung expansion and pools secretions.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q4 (pneumonia)",
      markingPoint: "Deep breathing, coughing and chest physiotherapy"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q36",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 26,
      questionType: "mcq",
      text: "Why does the nurse encourage a patient with pneumonia to drink plenty of fluids, if there is no contraindication?",
      options: {
        A: "Fluids make the patient pass more urine so that bacteria leave the lungs",
        B: "Fluids dilute the antibiotic so that it works faster",
        C: "Fluids raise the blood pressure to improve oxygen delivery",
        D: "Fluids thin secretions and replace losses from fever and fast breathing"
      },
      correctAnswer: "D",
      explanation: "Fluids thin secretions and replace losses from fever and fast breathing (D) is correct because fever and rapid breathing increase fluid loss, and adequate hydration makes the sputum thinner and easier to cough up. Fluids make the patient pass more urine so that bacteria leave the lungs (A) is incorrect because bacteria in the lungs are not excreted in the urine. Fluids dilute the antibiotic so that it works faster (B) is incorrect because fluids do not change how antibiotics act on the infection. Fluids raise the blood pressure to improve oxygen delivery (C) is incorrect because pneumonia is not treated by raising blood pressure with oral fluids.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q4 (pneumonia)",
      markingPoint: "Adequate hydration"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q37",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 27,
      questionType: "mcq",
      text: "A stable patient with pneumonia is prescribed an antibiotic. What is the correct nursing approach?",
      options: {
        A: "Give the first dose immediately and collect the sputum only after three days of treatment",
        B: "Take sputum for culture before the first dose if possible, then dose on time",
        C: "Hold the antibiotic until the culture result returns, which may take a week or more",
        D: "Give the antibiotic only on days when the temperature rises above 39 degrees Celsius"
      },
      correctAnswer: "B",
      explanation: "Take sputum for culture before the first dose if possible, then dose on time (B) is correct because a specimen taken before antibiotics gives a more reliable culture, and on-time dosing keeps drug levels effective, though treatment should not be delayed if a sample cannot be obtained. Give the first dose immediately and collect the sputum only after three days of treatment (A) is incorrect because an organism may no longer grow after treatment has begun. Hold the antibiotic until the culture result returns, which may take a week or more (C) is incorrect because withholding treatment for a week is dangerous in pneumonia. Give the antibiotic only on days when the temperature rises above 39 degrees Celsius (D) is incorrect because antibiotics are given on schedule and not according to fever.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q4 (pneumonia)",
      markingPoint: "Antibiotics and sputum specimen"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q38",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 2,
      questionNumberInSet: 28,
      questionType: "true_false",
      text: "True or False: Frequent changes of position help to mobilise secretions in a patient with pneumonia who is largely confined to bed.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "A",
      explanation: "TRUE. Resting conserves energy, but staying in one position lets secretions pool and lung areas collapse. Turning the patient regularly, with deep breathing and coughing after each change, improves ventilation and secretion clearance.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q4 (pneumonia)",
      markingPoint: "Frequent position changes mobilise secretions"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q39",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 1,
      questionType: "mcq",
      text: "A patient returns to the ward after a thoracotomy, still drowsy from anaesthesia. Which assessment is the nurse's first priority?",
      options: {
        A: "Appearance and neatness of the wound dressing and bandage",
        B: "The fluid intake chart for the last 24 hours",
        C: "Airway patency, respiratory rate and oxygen saturation",
        D: "Bowel sounds and passage of flatus"
      },
      correctAnswer: "C",
      explanation: "Airway patency, respiratory rate and oxygen saturation (C) is correct because airway and breathing come first, because anaesthesia, pain and secretions can compromise ventilation after chest surgery. Appearance and neatness of the wound dressing and bandage (A) is incorrect because the dressing matters but a neat dressing does not guarantee ventilation. The fluid intake chart for the last 24 hours (B) is incorrect because fluid balance is important but secondary to the airway and breathing. Bowel sounds and passage of flatus (D) is incorrect because bowel function is a later concern and not an immediate threat.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q1 (thoracotomy)",
      markingPoint: "Monitor airway and respiratory status"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q40",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 2,
      questionType: "mcq",
      text: "After a thoracotomy, a conscious patient with stable blood pressure is breathing shallowly while lying flat. Unless the surgeon has ordered a specific position, which position should the nurse use?",
      options: {
        A: "Flat supine with a single pillow under the head and shoulders",
        B: "Head-down Trendelenburg position",
        C: "Semi-Fowler's position with the head of the bed raised",
        D: "Prone with the arms above the head"
      },
      correctAnswer: "C",
      explanation: "Semi-Fowler's position with the head of the bed raised (C) is correct because an upright position lets the diaphragm descend and the remaining lung expand, and it supports drainage through chest tubes (the surgeon may order a specific position after a pneumonectomy). Flat supine with a single pillow under the head and shoulders (A) is incorrect because lying flat limits chest expansion. Head-down Trendelenburg position (B) is incorrect because this pushes abdominal contents against the diaphragm and worsens breathing. Prone with the arms above the head (D) is incorrect because this strains the incision and restricts chest movement.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q1 (thoracotomy)",
      markingPoint: "Position after thoracotomy"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q41",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 3,
      questionType: "mcq",
      text: "Why is analgesia given before deep-breathing and coughing exercises after a thoracotomy?",
      options: {
        A: "Because pain relief also stops any bleeding from the incision and the drain sites",
        B: "To reduce the amount of bubbling seen in the chest drain bottle",
        C: "So that the patient can sleep through the exercises and be disturbed less",
        D: "So that he can breathe deeply and cough despite pain, preventing atelectasis"
      },
      correctAnswer: "D",
      explanation: "So that he can breathe deeply and cough despite pain, preventing atelectasis (D) is correct because a thoracotomy incision is very painful, and pain makes patients breathe shallowly and avoid coughing, which leads to collapsed lung segments and pneumonia. Because pain relief also stops any bleeding from the incision and the drain sites (A) is incorrect because analgesics do not control bleeding. To reduce the amount of bubbling seen in the chest drain bottle (B) is incorrect because bubbling reflects air leaks and not pain. So that the patient can sleep through the exercises and be disturbed less (C) is incorrect because the patient must be awake and able to take part in the exercises.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q1 (thoracotomy)",
      markingPoint: "Adequate analgesia"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q42",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 4,
      questionType: "mcq",
      text: "A patient fears coughing after a thoracotomy because of incision pain. How should the nurse help?",
      options: {
        A: "Ask him to cough while lying completely flat on the bed",
        B: "Give a cough suppressant so that he does not need to cough at all",
        C: "Teach him to support the incision with a pillow while coughing",
        D: "Advise him to avoid coughing altogether for the first 48 hours"
      },
      correctAnswer: "C",
      explanation: "Teach him to support the incision with a pillow while coughing (C) is correct because splinting reduces movement and pain at the wound, so the patient can cough effectively and clear secretions. Ask him to cough while lying completely flat on the bed (A) is incorrect because lying flat makes an effective cough harder. Give a cough suppressant so that he does not need to cough at all (B) is incorrect because suppressing the cough retains secretions. Advise him to avoid coughing altogether for the first 48 hours (D) is incorrect because retained secretions quickly cause atelectasis and infection.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q1 (thoracotomy)",
      markingPoint: "Splinting the incision when coughing"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q43",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 5,
      questionType: "mcq",
      text: "What is the purpose of an incentive spirometer after a thoracotomy?",
      options: {
        A: "To measure the patient's oxygen saturation continuously",
        B: "To encourage slow, deep breaths that open the alveoli",
        C: "To loosen secretions by percussing the chest wall of the patient",
        D: "To deliver a bronchodilator drug into the airways"
      },
      correctAnswer: "B",
      explanation: "To encourage slow, deep breaths that open the alveoli (B) is correct because the device gives visual feedback for maximal sustained inspiration, expanding alveoli and helping to prevent atelectasis and pneumonia. To measure the patient's oxygen saturation continuously (A) is incorrect because oxygen saturation is measured with a pulse oximeter. To loosen secretions by percussing the chest wall of the patient (C) is incorrect because percussion is done manually or by the physiotherapist, not by the spirometer. To deliver a bronchodilator drug into the airways (D) is incorrect because a nebuliser or inhaler delivers drugs, not an incentive spirometer.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q1 (thoracotomy)",
      markingPoint: "Incentive spirometry and deep breathing"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q44",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 6,
      questionType: "mcq",
      text: "Six hours after a lobectomy, a patient has sudden severe breathlessness and falling oxygen saturation, with absent breath sounds on the operated side. The chest drain has stopped fluctuating. Which complication is most likely?",
      options: {
        A: "Paralytic ileus",
        B: "Pneumothorax from a blocked drain",
        C: "Deep vein thrombosis of the leg",
        D: "Surgical wound infection at the incision"
      },
      correctAnswer: "B",
      explanation: "Pneumothorax from a blocked drain (B) is correct because air in the pleural space collapses the lung, and a drain that stops fluctuating suggests it is blocked or out of position, so urgent medical review is needed. Paralytic ileus (A) is incorrect because this affects the bowel and does not explain the chest findings. Deep vein thrombosis of the leg (C) is incorrect because this causes leg swelling and pain and not sudden loss of breath sounds. Surgical wound infection at the incision (D) is incorrect because wound infection takes days to develop and does not cause absent breath sounds.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q1 (thoracotomy)",
      markingPoint: "Monitor for complications: pneumothorax"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q45",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 7,
      questionType: "mcq",
      text: "When should a patient begin ambulation after a thoracotomy?",
      options: {
        A: "Only after the chest drain has been removed and the stitches taken out",
        B: "After one full week of bed rest to let the wound heal",
        C: "Only after discharge from the hospital",
        D: "Early, usually from the first day, once stable and pain controlled"
      },
      correctAnswer: "D",
      explanation: "Early, usually from the first day, once stable and pain controlled (D) is correct because early walking improves lung expansion, helps secretion clearance and reduces the risk of deep vein thrombosis and pneumonia. Only after the chest drain has been removed and the stitches taken out (A) is incorrect because waiting that long causes complications from immobility. After one full week of bed rest to let the wound heal (B) is incorrect because prolonged bed rest increases pulmonary and clotting complications. Only after discharge from the hospital (C) is incorrect because mobilisation is part of ward care and is not left until after discharge.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q1 (thoracotomy)",
      markingPoint: "Early mobilisation"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q46",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 8,
      questionType: "mcq",
      text: "Why are arm and shoulder exercises on the operated side started early after a thoracotomy?",
      options: {
        A: "To prevent infection of the surgical wound and drain site",
        B: "To prevent shoulder stiffness and keep movement",
        C: "To stop the chest drain from bubbling",
        D: "To raise cardiac output directly"
      },
      correctAnswer: "B",
      explanation: "To prevent shoulder stiffness and keep movement (B) is correct because the incision cuts chest wall muscles, and pain makes the patient guard the arm, so stiffness (frozen shoulder) develops unless the joint is moved regularly. To prevent infection of the surgical wound and drain site (A) is incorrect because exercises do not prevent wound infection. To stop the chest drain from bubbling (C) is incorrect because bubbling reflects an air leak and is not affected by arm movement. To raise cardiac output directly (D) is incorrect because these exercises are for joint movement and are not for heart function.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q1 (thoracotomy)",
      markingPoint: "Shoulder and arm exercises"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q47",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 9,
      questionType: "mcq",
      text: "Which nursing action best prevents infection of a thoracotomy wound?",
      options: {
        A: "Remove the dressing on the first day and leave the wound uncovered to the air",
        B: "Inspect the dressing, change it aseptically when soiled and check temperature",
        C: "Leave the first dressing in place until the stitches are removed in ten days",
        D: "Let the patient change his own dressing at the bedside on the first postoperative day"
      },
      correctAnswer: "B",
      explanation: "Inspect the dressing, change it aseptically when soiled and check temperature (B) is correct because regular aseptic care and early detection of redness, discharge or fever allow infection to be treated quickly. Remove the dressing on the first day and leave the wound uncovered to the air (A) is incorrect because an uncovered fresh wound is exposed to contamination. Leave the first dressing in place until the stitches are removed in ten days (C) is incorrect because a soiled dressing left in place harbours bacteria. Let the patient change his own dressing at the bedside on the first postoperative day (D) is incorrect because he lacks aseptic training and the wound is painful.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q1 (thoracotomy)",
      markingPoint: "Wound care and infection prevention"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q48",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 10,
      questionType: "mcq",
      text: "The nurse feels a crackling sensation under the skin around the incision and neck of a patient after thoracotomy. What does this indicate?",
      options: {
        A: "A deep vein thrombosis in the neck veins",
        B: "A wound abscess with pus collecting under the skin near the incision",
        C: "Normal fluid collection in the tissues during the process of wound healing",
        D: "Subcutaneous emphysema, air leaking into chest wall tissues"
      },
      correctAnswer: "D",
      explanation: "Subcutaneous emphysema, air leaking into chest wall tissues (D) is correct because air escaping from the lung or pleural space into the soft tissues feels like crackling when the skin is pressed, and it must be reported. A deep vein thrombosis in the neck veins (A) is incorrect because this would cause swelling and pain and not air under the skin. A wound abscess with pus collecting under the skin near the incision (B) is incorrect because an abscess is hot, tender and fluctuant and not crackling. Normal fluid collection in the tissues during the process of wound healing (C) is incorrect because healing fluid does not feel like crackling. Clinical link: a spreading area of crackling, a blocked drain or worsening breathing needs urgent medical review.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q1 (thoracotomy)",
      markingPoint: "Monitor for complications: subcutaneous emphysema"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q49",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 11,
      questionType: "mcq",
      text: "After lung resection surgery, why are intravenous fluids given cautiously with strict intake and output monitoring?",
      options: {
        A: "Fluids reduce the effect of the pain-relieving drugs given after the operation",
        B: "Fluids interfere with the working of the chest drain and the underwater seal bottle",
        C: "Excess fluid delays the healing of the chest wall muscle and the surgical skin wound",
        D: "The remaining lung is easily overloaded, so fluid can cause pulmonary oedema"
      },
      correctAnswer: "D",
      explanation: "The remaining lung is easily overloaded, so fluid can cause pulmonary oedema (D) is correct because a smaller lung circulation is more easily flooded by fluid, so intake is limited and output is monitored to prevent pulmonary oedema. Fluids reduce the effect of the pain-relieving drugs given after the operation (A) is incorrect because fluids do not alter analgesic action. Fluids interfere with the working of the chest drain and the underwater seal bottle (B) is incorrect because the drain works independently of intravenous fluids. Excess fluid delays the healing of the chest wall muscle and the surgical skin wound (C) is incorrect because fluid volume is not the main concern for muscle healing.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q1 (thoracotomy)",
      markingPoint: "Fluid balance after lung resection"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q50",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 12,
      questionType: "true_false",
      text: "True or False: After a thoracotomy, the patient should be discouraged from coughing because coughing can burst the stitches and displace the chest drain.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. Coughing is essential after chest surgery because it clears secretions and prevents atelectasis and pneumonia. With analgesia and the incision supported (splinted) by a pillow or the patient's hands, coughing is safe and does not burst the stitches or dislodge a secured drain. The correct statement would be that the patient is encouraged to cough with pain control and splinting.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q1 (thoracotomy)",
      markingPoint: "Coughing after thoracotomy is encouraged"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q51",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 13,
      questionType: "mcq",
      text: "Which statement best defines chronic bronchitis?",
      options: {
        A: "Destruction of the alveolar walls leading to air trapping in the lungs",
        B: "Productive cough for 3 months of the year in 2 successive years",
        C: "Permanent widening of the bronchi with copious foul-smelling sputum",
        D: "A dry cough lasting two weeks after a viral upper respiratory infection"
      },
      correctAnswer: "B",
      explanation: "Productive cough for 3 months of the year in 2 successive years (B) is correct because this is the accepted clinical definition, which describes persistent mucus production caused by long-term inflammation of the bronchi. Destruction of the alveolar walls leading to air trapping in the lungs (A) is incorrect because this is emphysema, the other main form of COPD. Permanent widening of the bronchi with copious foul-smelling sputum (C) is incorrect because this is bronchiectasis. A dry cough lasting two weeks after a viral upper respiratory infection (D) is incorrect because this is an acute post-infectious cough.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q2(i) (chronic bronchitis pathophysiology)",
      markingPoint: "Definition of chronic bronchitis"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q52",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 14,
      questionType: "mcq",
      text: "How does chronic bronchitis usually begin?",
      options: {
        A: "Fluid leaks from the pulmonary capillaries into the alveolar spaces and interstitium",
        B: "Long-term inhaled irritants such as tobacco smoke inflame the bronchial lining",
        C: "One episode of aspiration permanently damages a single lobe of the lung and airway",
        D: "The alveolar walls lose their elastic recoil and collapse during every expiration"
      },
      correctAnswer: "B",
      explanation: "Long-term inhaled irritants such as tobacco smoke inflame the bronchial lining (B) is correct because the repeated injury leads to chronic inflammation of the airways, which triggers the later changes in mucus glands and airway walls. Fluid leaks from the pulmonary capillaries into the alveolar spaces and interstitium (A) is incorrect because this describes pulmonary oedema. One episode of aspiration permanently damages a single lobe of the lung and airway (C) is incorrect because this is not the typical start of chronic bronchitis. The alveolar walls lose their elastic recoil and collapse during every expiration (D) is incorrect because this describes emphysema.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q2(i) (chronic bronchitis pathophysiology)",
      markingPoint: "Chronic irritation and inflammation"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q53",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 15,
      questionType: "mcq",
      text: "Which structural change causes the excess mucus in chronic bronchitis?",
      options: {
        A: "More goblet cells and enlarged mucous glands",
        B: "Thickening of the diaphragm muscle",
        C: "Destruction of elastic fibres in the alveolar walls",
        D: "Permanent dilatation of the bronchial walls"
      },
      correctAnswer: "A",
      explanation: "More goblet cells and enlarged mucous glands (A) is correct because chronic inflammation enlarges and multiplies the mucus-producing cells and glands, so large volumes of mucus are produced. Thickening of the diaphragm muscle (B) is incorrect because the diaphragm is not involved in producing mucus. Destruction of elastic fibres in the alveolar walls (C) is incorrect because this occurs in emphysema and does not produce mucus. Permanent dilatation of the bronchial walls (D) is incorrect because this is the feature of bronchiectasis.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q2(i) (chronic bronchitis pathophysiology)",
      markingPoint: "Goblet cell hyperplasia and mucus hypersecretion"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q54",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 16,
      questionType: "mcq",
      text: "Why does mucus stay in the airways of a patient with chronic bronchitis?",
      options: {
        A: "The cilia are damaged and can no longer sweep mucus upwards",
        B: "The mucus becomes too watery to be moved by the cilia",
        C: "The bronchial smooth muscle relaxes and stops propelling mucus",
        D: "Alveolar macrophages absorb the mucus and store it"
      },
      correctAnswer: "A",
      explanation: "The cilia are damaged and can no longer sweep mucus upwards (A) is correct because smoke and inflammation damage and reduce the cilia, so excess mucus pools in the airways, blocks small airways and encourages repeated infection. The mucus becomes too watery to be moved by the cilia (B) is incorrect because the mucus is usually thick, not watery. The bronchial smooth muscle relaxes and stops propelling mucus (C) is incorrect because mucus is moved by cilia and not by smooth muscle. Alveolar macrophages absorb the mucus and store it (D) is incorrect because macrophages engulf particles and do not remove large volumes of mucus.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q2(i) (chronic bronchitis pathophysiology)",
      markingPoint: "Ciliary damage and impaired clearance"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q55",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 17,
      questionType: "mcq",
      text: "Why do patients with advanced chronic bronchitis develop hypoxaemia?",
      options: {
        A: "Haemoglobin loses its ability to bind oxygen as blood passes through the lung capillaries",
        B: "Pleural fluid builds up and compresses the whole lung from the outside",
        C: "The alveolar walls are destroyed, which greatly reduces the surface area for exchange",
        D: "Narrowed, mucus-plugged airways leave alveoli poorly ventilated yet still perfused"
      },
      correctAnswer: "D",
      explanation: "Narrowed, mucus-plugged airways leave alveoli poorly ventilated yet still perfused (D) is correct because this ventilation-perfusion mismatch prevents proper oxygenation, and in severe disease carbon dioxide also builds up. Haemoglobin loses its ability to bind oxygen as blood passes through the lung capillaries (A) is incorrect because the haemoglobin itself is normal. Pleural fluid builds up and compresses the whole lung from the outside (B) is incorrect because pleural effusion is not the cause here. The alveolar walls are destroyed, which greatly reduces the surface area for exchange (C) is incorrect because this describes emphysema, not the main mechanism in bronchitis.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q2(i) (chronic bronchitis pathophysiology)",
      markingPoint: "Airway narrowing and gas exchange"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q56",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 18,
      questionType: "mcq",
      text: "Which health message has the greatest effect on slowing the progression of COPD?",
      options: {
        A: "Take a cough suppressant every night",
        B: "Use oxygen continuously at home whether or not it is prescribed",
        C: "Stop smoking completely and avoid smoke and fumes",
        D: "Avoid all physical activity so the lungs can rest"
      },
      correctAnswer: "C",
      explanation: "Stop smoking completely and avoid smoke and fumes (C) is correct because smoking is the main cause of COPD, and stopping it slows lung function decline and reduces exacerbations, as does avoiding smoke from cooking fires. Take a cough suppressant every night (A) is incorrect because this hides symptoms and does not slow the disease. Use oxygen continuously at home whether or not it is prescribed (B) is incorrect because oxygen is prescribed only when indicated. Avoid all physical activity so the lungs can rest (D) is incorrect because inactivity weakens muscles and worsens breathlessness.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q2(ii) (COPD discharge teaching)",
      markingPoint: "Stop smoking and avoid irritants"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q57",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 19,
      questionType: "mcq",
      text: "Which instruction about inhalers should the nurse give at discharge?",
      options: {
        A: "Use them only when symptoms are severe to avoid dependence",
        B: "Inhale as fast and forcefully as possible with every device",
        C: "Share the inhaler with relatives who have a similar cough",
        D: "Use them as prescribed and show the nurse the technique"
      },
      correctAnswer: "D",
      explanation: "Use them as prescribed and show the nurse the technique (D) is correct because correct technique and regular use give the best drug delivery, and a return demonstration confirms it. Use them only when symptoms are severe to avoid dependence (A) is incorrect because maintenance inhalers work only when used regularly. Inhale as fast and forcefully as possible with every device (B) is incorrect because technique varies with the device, and this is not correct for all of them. Share the inhaler with relatives who have a similar cough (C) is incorrect because sharing spreads infection and gives wrong dosing.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q2(ii) (COPD discharge teaching)",
      markingPoint: "Correct inhaler use and adherence"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q58",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 20,
      questionType: "mcq",
      text: "Which health message best reduces the risk of infective exacerbations of COPD?",
      options: {
        A: "Take yearly influenza and pneumococcal vaccines, and avoid infected people",
        B: "Drink very little fluid so that less sputum forms and coughing is reduced",
        C: "Keep the windows closed permanently so that germs cannot enter the house",
        D: "Take antibiotics every month as a preventive measure against any chest infection"
      },
      correctAnswer: "A",
      explanation: "Take yearly influenza and pneumococcal vaccines, and avoid infected people (A) is correct because respiratory infections are a major cause of exacerbations, and vaccination and avoiding contact lower this risk. Drink very little fluid so that less sputum forms and coughing is reduced (B) is incorrect because low fluid intake thickens secretions. Keep the windows closed permanently so that germs cannot enter the house (C) is incorrect because poor ventilation worsens indoor smoke exposure. Take antibiotics every month as a preventive measure against any chest infection (D) is incorrect because routine antibiotics encourage resistance and are not advised.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q2(ii) (COPD discharge teaching)",
      markingPoint: "Vaccination and infection avoidance"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q59",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 21,
      questionType: "mcq",
      text: "Which change should the patient be taught to report promptly to the health facility?",
      options: {
        A: "A cough that is no worse than his usual morning cough",
        B: "Occasional clear sputum on waking that has been the same for months",
        C: "Increased breathlessness with more yellow or green sputum, or a fever",
        D: "Mild breathlessness only when climbing several flights of stairs, as usual"
      },
      correctAnswer: "C",
      explanation: "Increased breathlessness with more yellow or green sputum, or a fever (C) is correct because this pattern signals an infective exacerbation that needs early treatment to avoid admission. A cough that is no worse than his usual morning cough (A) is incorrect because this is his baseline and not a warning sign. Occasional clear sputum on waking that has been the same for months (B) is incorrect because this is a stable pattern and not a change. Mild breathlessness only when climbing several flights of stairs, as usual (D) is incorrect because this is unchanged and expected exertional breathlessness.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q2(ii) (COPD discharge teaching)",
      markingPoint: "Recognise worsening symptoms"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q60",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 22,
      questionType: "true_false",
      text: "True or False: Regular graded exercise and pulmonary rehabilitation are encouraged for patients with COPD.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "A",
      explanation: "TRUE. Graded exercise and pulmonary rehabilitation improve exercise tolerance, reduce breathlessness and improve quality of life. Patients are taught to pace activities and use pursed-lip breathing, so avoiding all activity is not advised.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q2(ii) (COPD discharge teaching)",
      markingPoint: "Exercise and pulmonary rehabilitation are encouraged"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q61",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 23,
      questionType: "mcq",
      text: "A patient with COPD is wheezing and the nurse gives nebulised salbutamol. How does it work?",
      options: {
        A: "It suppresses airway inflammation by acting on the immune system",
        B: "It stimulates beta-2 receptors to relax airway smooth muscle",
        C: "It blocks muscarinic receptors in the airways",
        D: "It kills bacteria in the bronchial secretions"
      },
      correctAnswer: "B",
      explanation: "It stimulates beta-2 receptors to relax airway smooth muscle (B) is correct because salbutamol is a short-acting beta-2 agonist that relaxes bronchial smooth muscle, giving quick relief of airflow limitation. It suppresses airway inflammation by acting on the immune system (A) is incorrect because this is the action of corticosteroids. It blocks muscarinic receptors in the airways (C) is incorrect because this is how ipratropium works. It kills bacteria in the bronchial secretions (D) is incorrect because this is the action of antibiotics.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q2(iii) (COPD drugs)",
      markingPoint: "Short-acting beta-2 agonist (salbutamol)"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q62",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 24,
      questionType: "mcq",
      text: "Ipratropium bromide is prescribed with salbutamol during a COPD exacerbation. How does it work?",
      options: {
        A: "It breaks down the chemical bonds in thick mucus",
        B: "It blocks muscarinic receptors, preventing bronchoconstriction",
        C: "It reduces inflammation in the bronchial wall",
        D: "It stimulates beta-2 receptors to relax the bronchial smooth muscle"
      },
      correctAnswer: "B",
      explanation: "It blocks muscarinic receptors, preventing bronchoconstriction (B) is correct because blocking cholinergic action on the airways relaxes smooth muscle and reduces mucus secretion, adding to the effect of salbutamol. It breaks down the chemical bonds in thick mucus (A) is incorrect because this describes a mucolytic. It reduces inflammation in the bronchial wall (C) is incorrect because this is a corticosteroid effect. It stimulates beta-2 receptors to relax the bronchial smooth muscle (D) is incorrect because this is salbutamol's action.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q2(iii) (COPD drugs)",
      markingPoint: "Anticholinergic bronchodilator (ipratropium)"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q63",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 25,
      questionType: "mcq",
      text: "Why is prednisolone prescribed during an acute exacerbation of COPD?",
      options: {
        A: "It kills bacteria in the airways",
        B: "It relaxes bronchial smooth muscle within a few seconds",
        C: "It thins mucus by breaking its chemical bonds",
        D: "It reduces airway inflammation and speeds recovery"
      },
      correctAnswer: "D",
      explanation: "It reduces airway inflammation and speeds recovery (D) is correct because corticosteroids suppress the inflammation and swelling in the airways, which speeds recovery; the nurse monitors blood glucose and gives the dose with food. It kills bacteria in the airways (A) is incorrect because corticosteroids do not kill bacteria. It relaxes bronchial smooth muscle within a few seconds (B) is incorrect because bronchodilators act that quickly, not steroids. It thins mucus by breaking its chemical bonds (C) is incorrect because this is the action of a mucolytic.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q2(iii) (COPD drugs)",
      markingPoint: "Systemic corticosteroid (prednisolone)"
    },
    {
      id: "tnh-block1-aug2013-respiratory_q64",
      paperId: "tnh-block1-aug2013-respiratory",
      setNumber: 3,
      questionNumberInSet: 26,
      questionType: "true_false",
      text: "True or False: Antibiotics must be given to every patient admitted with a COPD exacerbation.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. Many exacerbations are caused by viruses or irritants. Antibiotics are given when there is increased sputum purulence, together with increased breathlessness or sputum volume, or when ventilation is needed. The correct statement would be that antibiotics are given only when indicated.",
      sourceType: "derived_laq",
      sourceRef: "Section C, Q2(iii) (COPD drugs)",
      markingPoint: "Antibiotics only when indicated"
    }
  ]
};
