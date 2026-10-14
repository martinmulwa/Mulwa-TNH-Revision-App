/**
 * Mulwa Clinical Exam Portal
 * January 2011 Practice Exam — Respiratory Conditions
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../../types';

export const KRN_RESPIRATORY_JAN2011_RESPIRATORY_CONDITIONS: PastPaper = {
  id: "krn-respiratory-jan2011-respiratory-conditions",
  year: "2011",
  month: "January",
  examType: "Practice",
  title: "January 2011 Practice Exam",
  category: "Respiratory Disorders",
  unit: "Respiratory Disorders",
  totalQuestions: 49,
  totalSets: 3,
  sets: [
    {
      setNumber: 1,
      title: "Set 1: Original Exam Questions",
      description: "The original MCQs from the Respiratory Conditions past paper.",
      questionCount: 11
    },
    {
      setNumber: 2,
      title: "Set 2: SAQ Mastery Questions",
      description: "MCQs and True/False questions derived from the paper's Short Answer Questions, covering every marking point.",
      questionCount: 23
    },
    {
      setNumber: 3,
      title: "Set 3: LAQ Mastery Questions",
      description: "MCQs and True/False questions derived from the paper's Long Answer Question on chest tube drainage, covering every marking point.",
      questionCount: 15
    }
  ],
  questions: [
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q1",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 1,
      questionNumberInSet: 1,
      questionType: "mcq",
      text: "Tidal volume in a healthy adult weighing 70 kg measures about?",
      options: {
        A: "1000ml",
        B: "1200ml",
        C: "500ml",
        D: "150ml"
      },
      correctAnswer: "C",
      explanation: "500ml (C) is correct because tidal volume is the volume of air moved in or out during a quiet, normal breath, about 6 to 8 mL per kg, which is roughly 500 mL in a healthy 70 kg adult. 1000ml (A) is incorrect because 1000 mL is about twice a normal breath and is closer to what is taken in during a deep breath. 1200ml (B) is incorrect because 1200 mL is close to the residual volume, the air that stays in the lungs after a maximal breath out. 150ml (D) is incorrect because 150 mL is close to the anatomical dead space, the air in the airways that does not reach the alveoli.",
      sourceType: "original_mcq",
      sourceRef: "Q1"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q2",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 1,
      questionNumberInSet: 2,
      questionType: "mcq",
      text: "In tension pneumothorax the affected lung is?",
      options: {
        A: "Displaced and compresses the aorta and the heart",
        B: "Enlarges to occupy large space in the chest cavity",
        C: "Shows no communicating cavity with the chest wall",
        D: "Has increased friction with the chest wall during inhalation"
      },
      correctAnswer: "A",
      explanation: "Displaced and compresses the aorta and the heart (A) is correct because air enters the pleural space through a one-way valve and cannot escape, so pressure builds up, the lung collapses and the mediastinum, including the heart and great vessels, is pushed over and compressed, which lowers venous return and cardiac output. Strictly it is the mediastinum that is displaced, but this is the only option that describes the pressure effect. Enlarges to occupy large space in the chest cavity (B) is incorrect because the affected lung collapses; it does not enlarge. Shows no communicating cavity with the chest wall (C) is incorrect because in tension pneumothorax there is a communication (through the lung or chest wall) that lets air into the pleural space; a closed, non-communicating cavity does not produce rising tension. Has increased friction with the chest wall during inhalation (D) is incorrect because friction is increased in pleurisy; in pneumothorax air separates the pleural layers so they no longer rub.",
      sourceType: "original_mcq",
      sourceRef: "Q2"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q3",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 1,
      questionNumberInSet: 3,
      questionType: "mcq",
      text: "The correct management of a patient with signs of acute asthma and whose SPO2 saturation of over 95% is?",
      options: {
        A: "Administer oxygen via Venturi mask",
        B: "Nebulizer with hydrocortisone and salbutamol.",
        C: "Administer hydrocortisone intravenously and nebulizer with ventolin.",
        D: "Start the patient with intravenous dexamethasone and intravenous terbutaline."
      },
      correctAnswer: "C",
      explanation: "Administer hydrocortisone intravenously and nebulizer with ventolin. (C) is correct because acute asthma needs a rapid-acting bronchodilator (nebulised salbutamol, also called Ventolin) together with a systemic corticosteroid such as intravenous hydrocortisone to settle the airway inflammation. Administer oxygen via Venturi mask (A) is incorrect because oxygen is given to correct hypoxaemia, and a saturation above 95% does not need it. Nebulizer with hydrocortisone and salbutamol. (B) is incorrect because hydrocortisone is a systemic steroid given by injection or orally; it is not given by nebuliser. Start the patient with intravenous dexamethasone and intravenous terbutaline. (D) is incorrect because intravenous terbutaline and dexamethasone are escalation measures for severe or non-responding attacks, not first-line care for a patient who is well saturated.",
      sourceType: "original_mcq",
      sourceRef: "Q3"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q4",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 1,
      questionNumberInSet: 4,
      questionType: "mcq",
      text: "The condition in which there is destruction of pulmonary capillary network and alveolar walls is",
      options: {
        A: "Asthma",
        B: "Bronchiectasis",
        C: "Chronic bronchitis",
        D: "Emphysema"
      },
      correctAnswer: "D",
      explanation: "Emphysema (D) is correct because emphysema destroys the alveolar walls and the capillary bed around them, which reduces the surface for gas exchange and removes elastic recoil, so air is trapped and the chest becomes barrel-shaped. Asthma (A) is incorrect because asthma is reversible airway narrowing from inflammation, oedema and bronchospasm, without destruction of alveoli. Bronchiectasis (B) is incorrect because bronchiectasis is permanent widening of the bronchi with chronic infection, not destruction of alveolar walls. Chronic bronchitis (C) is incorrect because chronic bronchitis is inflammation of the bronchi with mucus gland enlargement and a chronic productive cough; the alveolar walls are not primarily destroyed.",
      sourceType: "original_mcq",
      sourceRef: "Q3 (second item numbered 3)"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q5",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 1,
      questionNumberInSet: 5,
      questionType: "mcq",
      text: "The adventitious breath sounds that are discontinuous during auscultation are?",
      options: {
        A: "Crackles",
        B: "Wheezes",
        C: "Stridor",
        D: "Shrills"
      },
      correctAnswer: "A",
      explanation: "Crackles (A) is correct because crackles are short, explosive, discontinuous sounds produced when small airways pop open or when fluid and secretions are moved in the airways. Wheezes (B) is incorrect because wheezes are continuous, musical sounds caused by narrowed airways. Stridor (C) is incorrect because stridor is a continuous, harsh, high-pitched sound heard mainly on inspiration over the upper airway. Shrills (D) is incorrect because shrills is not a standard adventitious breath sound; high-pitched sounds such as wheeze and stridor are continuous, not discontinuous.",
      sourceType: "original_mcq",
      sourceRef: "Q4"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q6",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 1,
      questionNumberInSet: 6,
      questionType: "mcq",
      text: "The main goal of treatment for a patient diagnosed of atelectasis is to?",
      options: {
        A: "Drain excess pleural fluid by tapping",
        B: "Prevent complications that are likely to develop",
        C: "Re-expand the collapsed lung and initiate breathing",
        D: "Prevent the affected lung bleeding"
      },
      correctAnswer: "C",
      explanation: "Re-expand the collapsed lung and initiate breathing (C) is correct because atelectasis is collapse of lung tissue, so the main aim is to reopen the collapsed alveoli and re-expand the lung with measures such as deep breathing, incentive spirometry, coughing and positioning. Drain excess pleural fluid by tapping (A) is incorrect because tapping (thoracentesis) removes pleural fluid and is used for pleural effusion, not as the main goal in atelectasis. Prevent complications that are likely to develop (B) is incorrect because preventing complications such as pneumonia is a supporting aim, but the main goal is to restore lung expansion. Prevent the affected lung bleeding (D) is incorrect because bleeding is not a feature of atelectasis, so preventing it is not a treatment goal.",
      sourceType: "original_mcq",
      sourceRef: "Q5"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q7",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 1,
      questionNumberInSet: 7,
      questionType: "mcq",
      text: "The commonest cause of pleuritis in an adult includes?",
      options: {
        A: "Tuberculosis, bacterial parapneumonia",
        B: "Systemic larva migrants of nematodes, chronic bronchitis",
        C: "Bacterial parapneumonia,drug toxicity",
        D: "Hypertension, bacterial parapneumonia"
      },
      correctAnswer: "A",
      explanation: "Tuberculosis, bacterial parapneumonia (A) is correct because tuberculosis and infection beside a bacterial pneumonia (parapneumonic involvement of the pleura) are among the commonest causes of pleural inflammation in adults, especially in Kenya where TB is common. Systemic larva migrants of nematodes, chronic bronchitis (B) is incorrect because larval migration by nematodes and chronic bronchitis are not common causes of pleuritis. Bacterial parapneumonia,drug toxicity (C) is incorrect because bacterial parapneumonia is a cause, but drug-induced pleuritis is uncommon, so the pair is not the commonest causes. Hypertension, bacterial parapneumonia (D) is incorrect because hypertension does not cause pleuritis, even though parapneumonia does.",
      sourceType: "original_mcq",
      sourceRef: "Unnumbered item (between Q5 and Q7)"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q8",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 1,
      questionNumberInSet: 8,
      questionType: "mcq",
      text: "In stage 1 of primary cancer of the lung, the tumor?",
      options: {
        A: "is in situ",
        B: "Has spread to mediastinal lymph nodes",
        C: "Has metastasized to adjacent structures and organs",
        D: "Has spread to distal part of the body outside the chest cavity"
      },
      correctAnswer: "A",
      explanation: "is in situ (A) is correct because stage 1 is the earliest, localised stage, where the tumour is confined to the lung without lymph node spread; of the four options, this is the one that describes a localised tumour. (Strictly, carcinoma in situ is stage 0.) Has spread to mediastinal lymph nodes (B) is incorrect because spread to mediastinal lymph nodes is a later, locally advanced stage. Has metastasized to adjacent structures and organs (C) is incorrect because invasion of adjacent structures and organs is a locally advanced stage, not stage 1. Has spread to distal part of the body outside the chest cavity (D) is incorrect because spread outside the chest to distant organs is metastatic disease, the last stage.",
      sourceType: "original_mcq",
      sourceRef: "Q7"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q9",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 1,
      questionNumberInSet: 9,
      questionType: "mcq",
      text: "The priority intervention for a patient diagnosed of ineffective airway clearance is?",
      options: {
        A: "Encourage the patient to cough very hard",
        B: "Administer an antitussive",
        C: "Administer an analgesic",
        D: "Positioning the patient in Fowler's position"
      },
      correctAnswer: "D",
      explanation: "Positioning the patient in Fowler's position (D) is correct because sitting the patient upright in Fowler's position lets the diaphragm move freely, expands the lungs and makes it easier to cough up secretions, so it is the first and safest measure. Encourage the patient to cough very hard (A) is incorrect because forceful coughing tires the patient, can cause bronchospasm and is less effective than controlled, supported coughing. Administer an antitussive (B) is incorrect because an antitussive suppresses the cough and so leaves secretions in the airway. Administer an analgesic (C) is incorrect because an analgesic may help with pain that limits coughing, but it can depress breathing and is not the priority.",
      sourceType: "original_mcq",
      sourceRef: "Q8"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q10",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 1,
      questionNumberInSet: 10,
      questionType: "mcq",
      text: "The priority action for a patient with sucking chest wound is?",
      options: {
        A: "Administer oxygen via mask",
        B: "Apply dressing on the wound",
        C: "Prepare a chest tube insertion tray",
        D: "Position on the unaffected side"
      },
      correctAnswer: "B",
      explanation: "Apply dressing on the wound (B) is correct because a sucking chest wound lets air be drawn into the pleural space with each breath, so the first action is to seal the wound at once with an occlusive dressing, usually taped on three sides so that trapped air can escape. Administer oxygen via mask (A) is incorrect because oxygen is needed, but it comes after the wound is sealed because air keeps entering the chest until then. Prepare a chest tube insertion tray (C) is incorrect because a chest tube is inserted by the doctor after the wound is sealed; preparing the tray is a later step. Position on the unaffected side (D) is incorrect because positioning does not stop air entering the chest; the patient is positioned for comfort and breathing after the dressing is applied.",
      sourceType: "original_mcq",
      sourceRef: "Q9"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q11",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 1,
      questionNumberInSet: 11,
      questionType: "mcq",
      text: "The following are indications for pneumonectomy?",
      options: {
        A: "Aspergillum, Bronchiectasis",
        B: "Lung abscess, Bronchiectasis",
        C: "Atelectasis, emphysema",
        D: "Pleurisy, lung cancer"
      },
      correctAnswer: "B",
      explanation: "Lung abscess, Bronchiectasis (B) is correct because lung abscess that does not respond to treatment and bronchiectasis with a badly damaged lung are both accepted reasons for removing lung tissue; lung cancer, TB with a destroyed lung and fungal disease are other indications. Aspergillum, Bronchiectasis (A) is incorrect because Aspergillum is not a disease name (it may mean aspergilloma, a fungal ball, which is usually treated by removing a lobe or segment); the pair is less suitable than lung abscess with bronchiectasis. Atelectasis, emphysema (C) is incorrect because atelectasis is treated by re-expansion, and emphysema is a diffuse disease that is managed medically; neither is a usual reason for pneumonectomy. Pleurisy, lung cancer (D) is incorrect because pleurisy is inflammation of the pleura treated medically, so this pair is not made up of indications even though lung cancer is.",
      sourceType: "original_mcq",
      sourceRef: "Q10"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q12",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 2,
      questionNumberInSet: 1,
      questionType: "mcq",
      text: "In external respiration, the blood that reaches the alveolar capillaries through the pulmonary arteries is:",
      options: {
        A: "Oxygen-rich blood returning from the left atrium",
        B: "Blood with oxygen and carbon dioxide equal to alveolar air",
        C: "Blood that mixes directly with inhaled air before the capillaries",
        D: "Deoxygenated, with low oxygen and high carbon dioxide content"
      },
      correctAnswer: "D",
      explanation: "Deoxygenated, with low oxygen and high carbon dioxide content (D) is correct because the pulmonary arteries carry blood returned from the tissues, which has given up oxygen and picked up carbon dioxide, to the alveolar capillaries to be reloaded. Oxygen-rich blood returning from the left atrium (A) is incorrect because oxygen-rich blood leaves the lungs through the pulmonary veins to the left atrium. Blood with oxygen and carbon dioxide equal to alveolar air (B) is incorrect because the blood has a lower oxygen and a higher carbon dioxide pressure than alveolar air, which is why gases move. Blood that mixes directly with inhaled air before the capillaries (C) is incorrect because blood never mixes with air; the two are separated by the respiratory membrane.",
      sourceType: "derived_saq",
      sourceRef: "SAQ, Q1 (external respiration)",
      markingPoint: "Deoxygenated blood arrives via the pulmonary artery"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q13",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 2,
      questionNumberInSet: 2,
      questionType: "mcq",
      text: "Why does oxygen move from the alveolus into the pulmonary capillary blood during external respiration?",
      options: {
        A: "Alveolar oxygen pressure is higher than the pressure in the blood",
        B: "Haemoglobin pumps it across the membrane using ATP",
        C: "Capillary blood pressure pushes it out into the alveolus",
        D: "Blood oxygen pressure is higher than oxygen pressure in the alveolar air"
      },
      correctAnswer: "A",
      explanation: "Alveolar oxygen pressure is higher than the pressure in the blood (A) is correct because gases diffuse down their partial pressure gradient; alveolar oxygen is at about 105 mmHg against about 40 mmHg in the arriving blood, and this steep gradient across the thin respiratory membrane drives oxygen rapidly into the blood. Haemoglobin pumps it across the membrane using ATP (B) is incorrect because oxygen crosses by passive diffusion; no energy-using pump is involved. Capillary blood pressure pushes it out into the alveolus (C) is incorrect because that would send gas in the wrong direction; the movement is driven by partial pressures, not blood pressure. Blood oxygen pressure is higher than oxygen pressure in the alveolar air (D) is incorrect because the opposite is true; blood arriving at the alveoli is low in oxygen.",
      sourceType: "derived_saq",
      sourceRef: "SAQ, Q1 (external respiration)",
      markingPoint: "Oxygen diffuses from the alveolus into the blood"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q14",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 2,
      questionNumberInSet: 3,
      questionType: "mcq",
      text: "Which statement correctly describes how carbon dioxide moves in the lung?",
      options: {
        A: "It diffuses from alveolar air into the blood to be carried to the tissues",
        B: "It is carried across the membrane by pumps against its gradient",
        C: "It diffuses from the blood into the alveolus and is exhaled",
        D: "It moves into the alveolus only during expiration, not inspiration"
      },
      correctAnswer: "C",
      explanation: "It diffuses from the blood into the alveolus and is exhaled (C) is correct because carbon dioxide is at a slightly higher pressure in the capillary blood (about 45 mmHg) than in the alveolar air (about 40 mmHg), so it passes into the alveolus and leaves the body in the exhaled breath. It diffuses from alveolar air into the blood to be carried to the tissues (A) is incorrect because this is the direction taken by oxygen, not carbon dioxide. It is carried across the membrane by pumps against its gradient (B) is incorrect because carbon dioxide crosses passively; no pump is needed. It moves into the alveolus only during expiration, not inspiration (D) is incorrect because diffusion goes on continuously through the breathing cycle; breathing out only removes the gas from the alveolus.",
      sourceType: "derived_saq",
      sourceRef: "SAQ, Q1 (external respiration)",
      markingPoint: "Carbon dioxide diffuses from blood into the alveolus"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q15",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 2,
      questionNumberInSet: 4,
      questionType: "mcq",
      text: "Which feature of the respiratory membrane allows rapid gas exchange?",
      options: {
        A: "A thick muscular wall that pumps gases across",
        B: "A thin barrier of alveolar and capillary walls in close contact",
        C: "A layer of cartilage that keeps the alveoli open",
        D: "A wide fluid-filled gap separating the alveoli from the capillaries"
      },
      correctAnswer: "B",
      explanation: "A thin barrier of alveolar and capillary walls in close contact (B) is correct because the alveolar wall and the capillary wall are each one cell thick and press against each other, so the diffusion distance is very short and the surface area is very large. A thick muscular wall that pumps gases across (A) is incorrect because the membrane has no muscle; gases cross by diffusion. A layer of cartilage that keeps the alveoli open (C) is incorrect because cartilage supports the larger airways, not the alveoli, and would slow diffusion. A wide fluid-filled gap separating the alveoli from the capillaries (D) is incorrect because a wide gap would lengthen the diffusion distance and slow gas exchange, as happens when the membrane thickens in disease.",
      sourceType: "derived_saq",
      sourceRef: "SAQ, Q1 (external respiration)",
      markingPoint: "Thin respiratory membrane and close capillary contact"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q16",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 2,
      questionNumberInSet: 5,
      questionType: "true_false",
      text: "True or False: Gas exchange across the respiratory membrane in external respiration is a passive process that depends on partial pressure gradients and uses no energy.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "A",
      explanation: "TRUE. Oxygen and carbon dioxide move by simple diffusion from areas of higher partial pressure to areas of lower partial pressure. The rate depends on the size of the gradient, the surface area, and the thickness of the membrane, which is why thickening (fibrosis) or loss of alveolar surface (emphysema) reduces gas exchange. No ATP-driven pump is involved.",
      sourceType: "derived_saq",
      sourceRef: "SAQ, Q1 (external respiration)",
      markingPoint: "Passive diffusion down partial pressure gradients"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q17",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 2,
      questionNumberInSet: 6,
      questionType: "mcq",
      text: "An allergen triggers an asthma attack in a sensitised patient. Which cells release the histamine and leukotrienes that start the airway reaction?",
      options: {
        A: "Mast cells in the airway mucosa",
        B: "Red blood cells in the pulmonary capillaries",
        C: "Type I cells lining the alveoli",
        D: "Smooth muscle cells of the pulmonary artery"
      },
      correctAnswer: "A",
      explanation: "Mast cells in the airway mucosa (A) is correct because the allergen binds IgE on mast cells, which release histamine and leukotrienes and so start bronchoconstriction, vessel leakage and mucus production. Red blood cells in the pulmonary capillaries (B) is incorrect because red cells carry gases and do not release inflammatory mediators. Type I cells lining the alveoli (C) is incorrect because these cells form the thin gas-exchange surface and do not release mediators in asthma. Smooth muscle cells of the pulmonary artery (D) is incorrect because these control blood vessel tone and are not the source of the mediators.",
      sourceType: "derived_saq",
      sourceRef: "SAQ, Q2 (acute asthma pathophysiology)",
      markingPoint: "Trigger causes release of inflammatory mediators"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q18",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 2,
      questionNumberInSet: 7,
      questionType: "mcq",
      text: "Which event explains the wheeze and breathlessness that begin within minutes of exposure to a trigger?",
      options: {
        A: "Destruction of alveolar walls with loss of elastic recoil",
        B: "Permanent scarring and thickening of the alveolar membrane",
        C: "Contraction of the smooth muscle in the bronchial walls",
        D: "Collapse of the lung because air has entered the pleural space"
      },
      correctAnswer: "C",
      explanation: "Contraction of the smooth muscle in the bronchial walls (C) is correct because bronchoconstriction is the early phase of an attack, starting within minutes; the narrowed airways make air flow turbulent, which produces wheeze. Destruction of alveolar walls with loss of elastic recoil (A) is incorrect because this describes emphysema, which develops over years. Permanent scarring and thickening of the alveolar membrane (B) is incorrect because this is pulmonary fibrosis and does not occur in minutes. Collapse of the lung because air has entered the pleural space (D) is incorrect because this is pneumothorax, which has a different mechanism.",
      sourceType: "derived_saq",
      sourceRef: "SAQ, Q2 (acute asthma pathophysiology)",
      markingPoint: "Bronchoconstriction of airway smooth muscle"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q19",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 2,
      questionNumberInSet: 8,
      questionType: "mcq",
      text: "Some hours into an asthma attack the airway wall becomes swollen. What causes this mucosal oedema?",
      options: {
        A: "Left ventricular failure pushes fluid back into the lung tissue",
        B: "Reduced surfactant production in the alveoli",
        C: "Bacterial invasion of the bronchial wall producing pus",
        D: "Leaky airway blood vessels let fluid move into the mucosa"
      },
      correctAnswer: "D",
      explanation: "Leaky airway blood vessels let fluid move into the mucosa (D) is correct because inflammatory mediators increase vascular permeability in the bronchial mucosa, so fluid leaks out and the wall thickens, narrowing the lumen further. Left ventricular failure pushes fluid back into the lung tissue (A) is incorrect because this causes cardiac pulmonary oedema, not the airway wall swelling of asthma. Reduced surfactant production in the alveoli (B) is incorrect because this affects alveolar surface tension, not the bronchial wall. Bacterial invasion of the bronchial wall producing pus (C) is incorrect because asthma is not primarily an infection; the swelling comes from inflammation.",
      sourceType: "derived_saq",
      sourceRef: "SAQ, Q2 (acute asthma pathophysiology)",
      markingPoint: "Mucosal oedema from increased vascular permeability"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q20",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 2,
      questionNumberInSet: 9,
      questionType: "mcq",
      text: "Why can the airways of a patient in a severe asthma attack remain blocked even after the smooth muscle starts to relax?",
      options: {
        A: "The vocal cords close completely during the attack",
        B: "Thick mucus forms plugs in the narrowed airways",
        C: "The cartilage rings of the bronchi collapse permanently",
        D: "The alveolar walls fill with scar tissue"
      },
      correctAnswer: "B",
      explanation: "Thick mucus forms plugs in the narrowed airways (B) is correct because goblet cells and mucus glands produce excess, sticky mucus that mixes with shed cells and plugs small airways, which worsens obstruction and traps air. The vocal cords close completely during the attack (A) is incorrect because the vocal cords are not the cause of the lower airway blockage in asthma. The cartilage rings of the bronchi collapse permanently (C) is incorrect because cartilage does not collapse in an asthma attack, and the changes are largely reversible. The alveolar walls fill with scar tissue (D) is incorrect because scarring is not the mechanism of an acute attack.",
      sourceType: "derived_saq",
      sourceRef: "SAQ, Q2 (acute asthma pathophysiology)",
      markingPoint: "Mucus hypersecretion and plugging"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q21",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 2,
      questionNumberInSet: 10,
      questionType: "mcq",
      text: "Because of airway hyperresponsiveness, a patient with asthma will most likely:",
      options: {
        A: "Show no reaction to allergens, cold air or exercise",
        B: "Have permanently collapsed airways even at rest",
        C: "Over-react to triggers that other people tolerate",
        D: "React to triggers only with fever and purulent sputum"
      },
      correctAnswer: "C",
      explanation: "Over-react to triggers that other people tolerate (C) is correct because the inflamed airways are over-sensitive and respond with exaggerated bronchoconstriction, so cold air, dust, smoke, exercise or allergens set off bronchospasm that normal airways would tolerate. Show no reaction to allergens, cold air or exercise (A) is incorrect because this is the opposite of hyperresponsiveness. Have permanently collapsed airways even at rest (B) is incorrect because the airway narrowing in asthma is largely reversible and comes in episodes. React to triggers only with fever and purulent sputum (D) is incorrect because those are signs of infection, not of airway hyperresponsiveness.",
      sourceType: "derived_saq",
      sourceRef: "SAQ, Q2 (acute asthma pathophysiology)",
      markingPoint: "Airway hyperresponsiveness"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q22",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 2,
      questionNumberInSet: 11,
      questionType: "true_false",
      text: "True or False: In an acute asthma attack, airflow limitation is caused only by tightening of bronchial smooth muscle.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. Narrowing of the airway in acute asthma has three parts: bronchoconstriction (the early phase), mucosal oedema from leaky blood vessels, and increased thick mucus that can plug the airways. The correct statement is that smooth muscle spasm, swelling and mucus together raise airway resistance, which is why treatment includes both bronchodilators and corticosteroids.",
      sourceType: "derived_saq",
      sourceRef: "SAQ, Q2 (acute asthma pathophysiology)",
      markingPoint: "Combined airway narrowing: spasm, oedema and mucus"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q23",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 2,
      questionNumberInSet: 12,
      questionType: "true_false",
      text: "True or False: Chronic bronchitis is defined clinically as a productive cough on most days for at least three months in a year for two consecutive years.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "A",
      explanation: "TRUE. This is the standard clinical definition, provided that other causes of chronic cough have been excluded. Mucus gland enlargement and inflammation of the bronchi produce the daily sputum, and the symptom pattern, not a scan or blood test, is what establishes the diagnosis.",
      sourceType: "derived_saq",
      sourceRef: "SAQ, Q3 (chronic bronchitis features)",
      markingPoint: "Chronic productive cough"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q24",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 2,
      questionNumberInSet: 13,
      questionType: "mcq",
      text: "Which description of sputum best fits a patient with stable chronic bronchitis?",
      options: {
        A: "Large amounts of frothy pink sputum at all times",
        B: "Rust-coloured sputum from the first day of illness",
        C: "A dry cough with no sputum at all",
        D: "Mucoid sputum that turns purulent in an infection"
      },
      correctAnswer: "D",
      explanation: "Mucoid sputum that turns purulent in an infection (D) is correct because excess mucus from enlarged glands is usually white or clear, and bacterial infection adds pus, turning the sputum yellow or green. Large amounts of frothy pink sputum at all times (A) is incorrect because frothy pink sputum points to pulmonary oedema. Rust-coloured sputum from the first day of illness (B) is incorrect because rusty sputum is typical of pneumococcal pneumonia. A dry cough with no sputum at all (C) is incorrect because chronic bronchitis is defined by a productive cough, so sputum is expected.",
      sourceType: "derived_saq",
      sourceRef: "SAQ, Q3 (chronic bronchitis features)",
      markingPoint: "Mucoid-to-purulent sputum"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q25",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 2,
      questionNumberInSet: 14,
      questionType: "mcq",
      text: "A man with long-standing chronic bronchitis has bluish lips and nail beds at rest. What explains this?",
      options: {
        A: "Chronic hypoxaemia from mucus-blocked small airways",
        B: "Excess oxygen in the blood from overbreathing",
        C: "A short-lived drop in finger temperature in a cold room",
        D: "Too much surfactant causing alveolar collapse"
      },
      correctAnswer: "A",
      explanation: "Chronic hypoxaemia from mucus-blocked small airways (A) is correct because plugged, narrowed airways leave some alveoli poorly ventilated while their blood flow continues, so oxygen levels fall and the patient looks blue, which is why the picture is called a blue bloater. Excess oxygen in the blood from overbreathing (B) is incorrect because overbreathing raises oxygen levels and does not cause cyanosis. A short-lived drop in finger temperature in a cold room (C) is incorrect because cold causes peripheral colour change, but this patient has cyanosis of the lips at rest. Too much surfactant causing alveolar collapse (D) is incorrect because this does not occur in chronic bronchitis.",
      sourceType: "derived_saq",
      sourceRef: "SAQ, Q3 (chronic bronchitis features)",
      markingPoint: "Cyanosis (blue bloater)"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q26",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 2,
      questionNumberInSet: 15,
      questionType: "mcq",
      text: "Which pair of findings is typical as the airways narrow in chronic bronchitis?",
      options: {
        A: "Barrel chest with a pink face and almost no cough from the start",
        B: "Sudden tearing chest pain with absent breath sounds on one side",
        C: "Wheezing and breathlessness that appear later in the disease",
        D: "A single episode of fever with rigors and a rusty sputum"
      },
      correctAnswer: "C",
      explanation: "Wheezing and breathlessness that appear later in the disease (C) is correct because narrowing of the bronchi by swelling and mucus causes wheeze and chest tightness, and breathlessness usually comes after years of cough. Barrel chest with a pink face and almost no cough from the start (A) is incorrect because this describes the pink puffer of emphysema. Sudden tearing chest pain with absent breath sounds on one side (B) is incorrect because this suggests pneumothorax. A single episode of fever with rigors and a rusty sputum (D) is incorrect because this suggests acute lobar pneumonia, not a chronic illness.",
      sourceType: "derived_saq",
      sourceRef: "SAQ, Q3 (chronic bronchitis features)",
      markingPoint: "Wheeze and late-onset dyspnoea"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q27",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 2,
      questionNumberInSet: 16,
      questionType: "mcq",
      text: "In late chronic bronchitis, which finding suggests right-sided heart failure (cor pulmonale)?",
      options: {
        A: "Sudden loss of voice and hoarseness",
        B: "Swollen ankles and a puffy look from fluid retention",
        C: "A dry hacking cough with no sputum",
        D: "A thin build with pink skin and pursed-lip breathing"
      },
      correctAnswer: "B",
      explanation: "Swollen ankles and a puffy look from fluid retention (B) is correct because long-term low oxygen narrows the pulmonary vessels, which strains the right ventricle; the failing heart causes fluid retention, which gives the bloated look. Sudden loss of voice and hoarseness (A) is incorrect because this points to a laryngeal problem. A dry hacking cough with no sputum (C) is incorrect because chronic bronchitis produces sputum, and a dry cough does not point to heart failure. A thin build with pink skin and pursed-lip breathing (D) is incorrect because this describes emphysema (pink puffer), not heart failure.",
      sourceType: "derived_saq",
      sourceRef: "SAQ, Q3 (chronic bronchitis features)",
      markingPoint: "Fluid retention and cor pulmonale"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q28",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 2,
      questionNumberInSet: 17,
      questionType: "mcq",
      text: "A patient with severe pneumonia has SpO2 of 88%, cyanosis and restlessness. Which nursing diagnosis is the priority?",
      options: {
        A: "Hyperthermia related to the infective process in the lung",
        B: "Impaired gas exchange related to alveolar inflammation",
        C: "Deficient knowledge about the illness and its treatment",
        D: "Anxiety related to being admitted to the ward and the illness"
      },
      correctAnswer: "B",
      explanation: "Impaired gas exchange related to alveolar inflammation (B) is correct because alveoli filled with exudate cannot transfer oxygen, so low saturation, cyanosis and restlessness show that oxygenation, the most basic physiological need, is threatened first. Hyperthermia related to the infective process in the lung (A) is incorrect because fever matters, but oxygenation is the more urgent life-threatening problem. Deficient knowledge about the illness and its treatment (C) is incorrect because education comes after the immediate physiological needs are met. Anxiety related to being admitted to the ward and the illness (D) is incorrect because anxiety is secondary here and often improves once the hypoxia is corrected.",
      sourceType: "derived_saq",
      sourceRef: "SAQ, Q4 (nursing diagnoses in severe pneumonia)",
      markingPoint: "Nursing diagnosis: impaired gas exchange"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q29",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 2,
      questionNumberInSet: 18,
      questionType: "mcq",
      text: "Which intervention best addresses impaired gas exchange in this patient?",
      options: {
        A: "Keep the patient lying flat in bed so the lungs can rest",
        B: "Withhold oxygen until the patient becomes drowsy",
        C: "Apply a tight abdominal binder to limit chest movement",
        D: "Give prescribed oxygen and sit the patient upright"
      },
      correctAnswer: "D",
      explanation: "Give prescribed oxygen and sit the patient upright (D) is correct because oxygen raises alveolar oxygen pressure, and sitting upright (semi-Fowler's position) lets the diaphragm descend and the lungs expand, improving ventilation. Keep the patient lying flat in bed so the lungs can rest (A) is incorrect because lying flat reduces lung expansion and worsens breathlessness. Withhold oxygen until the patient becomes drowsy (B) is incorrect because oxygen is given as soon as saturation is low; waiting risks hypoxic injury. Apply a tight abdominal binder to limit chest movement (C) is incorrect because restricting movement reduces ventilation and does not improve gas exchange.",
      sourceType: "derived_saq",
      sourceRef: "SAQ, Q4 (nursing diagnoses in severe pneumonia)",
      markingPoint: "Oxygen therapy and positioning"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q30",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 2,
      questionNumberInSet: 19,
      questionType: "mcq",
      text: "A patient has thick sputum, noisy rhonchi and cannot cough it up. Which nursing diagnosis fits best?",
      options: {
        A: "Ineffective airway clearance from retained mucus",
        B: "Risk for injury related to confusion and restlessness",
        C: "Imbalanced nutrition: less than body requirements",
        D: "Impaired physical mobility related to general weakness"
      },
      correctAnswer: "A",
      explanation: "Ineffective airway clearance from retained mucus (A) is correct because thick secretions that the patient cannot expel obstruct the airways and produce rhonchi, which defines ineffective airway clearance. Risk for injury related to confusion and restlessness (B) is incorrect because nothing in the picture suggests confusion. Imbalanced nutrition: less than body requirements (C) is incorrect because no feeding or weight problem is described. Impaired physical mobility related to general weakness (D) is incorrect because mobility is not the problem described.",
      sourceType: "derived_saq",
      sourceRef: "SAQ, Q4 (nursing diagnoses in severe pneumonia)",
      markingPoint: "Nursing diagnosis: ineffective airway clearance"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q31",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 2,
      questionNumberInSet: 20,
      questionType: "mcq",
      text: "Which intervention helps loosen thick secretions in pneumonia?",
      options: {
        A: "Limit fluids so that less sputum is produced",
        B: "Keep the patient lying flat in bed to rest the chest",
        C: "Give oral fluids with deep breathing and coughing",
        D: "Discourage coughing to avoid chest pain"
      },
      correctAnswer: "C",
      explanation: "Give oral fluids with deep breathing and coughing (C) is correct because hydration thins mucus and deep breathing with supported coughing moves secretions up the airway so they can be expectorated. Limit fluids so that less sputum is produced (A) is incorrect because dehydration makes mucus thicker and harder to clear. Keep the patient lying flat in bed to rest the chest (B) is incorrect because lying flat reduces expansion and makes coughing harder. Discourage coughing to avoid chest pain (D) is incorrect because coughing is how secretions leave the airway; pain is managed so that the patient can cough.",
      sourceType: "derived_saq",
      sourceRef: "SAQ, Q4 (nursing diagnoses in severe pneumonia)",
      markingPoint: "Hydration, deep breathing and coughing"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q32",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 2,
      questionNumberInSet: 21,
      questionType: "mcq",
      text: "A patient with pneumonia has a temperature of 39.5 degrees Celsius, flushed skin and a fast pulse. Which nursing diagnosis applies?",
      options: {
        A: "Hypothermia related to exposure to a cold environment",
        B: "Risk for constipation related to prolonged immobility",
        C: "Acute pain related to a surgical incision on the chest",
        D: "Hyperthermia related to the response to infection"
      },
      correctAnswer: "D",
      explanation: "Hyperthermia related to the response to infection (D) is correct because the infection triggers fever, and the high temperature with flushing and tachycardia identifies hyperthermia. Hypothermia related to exposure to a cold environment (A) is incorrect because the temperature is raised, not lowered. Risk for constipation related to prolonged immobility (B) is incorrect because nothing in the picture points to bowel problems. Acute pain related to a surgical incision on the chest (C) is incorrect because there is no surgical wound in this patient.",
      sourceType: "derived_saq",
      sourceRef: "SAQ, Q4 (nursing diagnoses in severe pneumonia)",
      markingPoint: "Nursing diagnosis: hyperthermia"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q33",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 2,
      questionNumberInSet: 22,
      questionType: "mcq",
      text: "Which action is most appropriate for this patient's hyperthermia?",
      options: {
        A: "Cover with extra blankets to make the patient sweat out the fever",
        B: "Give antipyretics as prescribed and offer fluids",
        C: "Apply ice packs directly to the skin",
        D: "Withhold fluids to reduce sweating"
      },
      correctAnswer: "B",
      explanation: "Give antipyretics as prescribed and offer fluids (B) is correct because antipyretics lower the set point, fluids replace losses from sweating, and regular temperature monitoring shows whether the treatment is working. Cover with extra blankets to make the patient sweat out the fever (A) is incorrect because extra covering traps heat and can raise the temperature. Apply ice packs directly to the skin (C) is incorrect because ice causes shivering and vasoconstriction, which raises core temperature. Withhold fluids to reduce sweating (D) is incorrect because fever increases fluid loss, so fluids must be encouraged.",
      sourceType: "derived_saq",
      sourceRef: "SAQ, Q4 (nursing diagnoses in severe pneumonia)",
      markingPoint: "Hyperthermia management"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q34",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 2,
      questionNumberInSet: 23,
      questionType: "true_false",
      text: "True or False: Giving a cough suppressant is the best way to manage ineffective airway clearance in pneumonia.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. A cough suppressant keeps secretions in the airways, which worsens obstruction and the infection. The correct approach is to help the patient clear secretions with hydration, deep breathing, supported coughing, positioning and, where needed, chest physiotherapy or suction.",
      sourceType: "derived_saq",
      sourceRef: "SAQ, Q4 (nursing diagnoses in severe pneumonia)",
      markingPoint: "Avoid suppressing the cough"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q35",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 3,
      questionNumberInSet: 1,
      questionType: "mcq",
      text: "A man arrives after a road accident with blood in the pleural space and reduced breath sounds on the left. Why is a chest tube needed?",
      options: {
        A: "To deliver oxygen directly into the injured lung tissue",
        B: "To measure the pressure in the pulmonary artery",
        C: "To drain the blood so that the lung can re-expand",
        D: "To pass antibiotics into the bronchi"
      },
      correctAnswer: "C",
      explanation: "To drain the blood so that the lung can re-expand (C) is correct because blood in the pleural space (haemothorax) compresses the lung; draining it restores negative pressure so that the lung can re-expand. To deliver oxygen directly into the injured lung tissue (A) is incorrect because oxygen is delivered through the airway, not through the pleural space. To measure the pressure in the pulmonary artery (B) is incorrect because a chest tube does not monitor vascular pressure. To pass antibiotics into the bronchi (D) is incorrect because the tube drains the pleural space and does not reach the bronchi.",
      sourceType: "derived_laq",
      sourceRef: "LAQ, Q1a (chest tube indications)",
      markingPoint: "Haemothorax"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q36",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 3,
      questionNumberInSet: 2,
      questionType: "mcq",
      text: "A patient with pneumonia has pus aspirated from the pleural space. The condition that usually needs chest tube drainage is:",
      options: {
        A: "Empyema",
        B: "Emphysema",
        C: "Atelectasis",
        D: "Bronchiectasis"
      },
      correctAnswer: "A",
      explanation: "Empyema (A) is correct because empyema is pus in the pleural space, and it usually requires drainage, as do large or complicated pleural effusions, because antibiotics alone cannot clear it. Emphysema (B) is incorrect because emphysema is destruction of alveoli inside the lung, not a pleural collection of pus. Atelectasis (C) is incorrect because atelectasis is collapse of lung tissue and is treated by re-expansion measures. Bronchiectasis (D) is incorrect because bronchiectasis is widening of the bronchi and is not drained through the pleura.",
      sourceType: "derived_laq",
      sourceRef: "LAQ, Q1a (chest tube indications)",
      markingPoint: "Empyema and pleural effusion"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q37",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 3,
      questionNumberInSet: 3,
      questionType: "mcq",
      text: "Why is a chest tube commonly left in place after thoracic surgery?",
      options: {
        A: "To keep the surgical incision open so that it heals from inside",
        B: "To remove air, blood and fluid and keep the lung expanded",
        C: "To give long-term oxygen through the pleura",
        D: "To stop the heart from moving after surgery"
      },
      correctAnswer: "B",
      explanation: "To remove air, blood and fluid and keep the lung expanded (B) is correct because opening the chest lets air and bleeding collect in the pleural space; the tube removes them and restores the negative pressure that keeps the lung expanded. To keep the surgical incision open so that it heals from inside (A) is incorrect because the tube is not meant to keep a wound open. To give long-term oxygen through the pleura (C) is incorrect because oxygen is given through the airway. To stop the heart from moving after surgery (D) is incorrect because a chest tube does not stabilise the heart.",
      sourceType: "derived_laq",
      sourceRef: "LAQ, Q1a (chest tube indications)",
      markingPoint: "Post thoracic surgery"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q38",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 3,
      questionNumberInSet: 4,
      questionType: "true_false",
      text: "True or False: A pneumothorax, a haemothorax and an empyema can all be indications for chest tube drainage.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "A",
      explanation: "TRUE. Chest tubes remove air, blood or pus from the pleural space. Common indications are pneumothorax (spontaneous, traumatic or tension), haemothorax, pleural effusion, empyema, chylothorax and drainage after thoracic surgery.",
      sourceType: "derived_laq",
      sourceRef: "LAQ, Q1a (chest tube indications)",
      markingPoint: "Pneumothorax and other indications"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q39",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 3,
      questionNumberInSet: 5,
      questionType: "mcq",
      text: "Which position is best for a patient with a chest tube in place?",
      options: {
        A: "Flat on the back, to prevent the tube from moving",
        B: "Trendelenburg position, to help the lung expand",
        C: "Lying on the tubing, to keep it in place",
        D: "Semi-Fowler's or Fowler's position"
      },
      correctAnswer: "D",
      explanation: "Semi-Fowler's or Fowler's position (D) is correct because sitting upright lets the diaphragm move, expands the lung and helps air rise and fluid drain. Flat on the back, to prevent the tube from moving (A) is incorrect because lying flat reduces lung expansion and drainage. Trendelenburg position, to help the lung expand (B) is incorrect because head-down tilt pushes the abdominal contents against the diaphragm. Lying on the tubing, to keep it in place (C) is incorrect because lying on the tube can kink or block it.",
      sourceType: "derived_laq",
      sourceRef: "LAQ, Q1b (chest tube nursing care)",
      markingPoint: "Positioning"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q40",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 3,
      questionNumberInSet: 6,
      questionType: "mcq",
      text: "Where should the chest drainage unit be placed in relation to the patient's chest?",
      options: {
        A: "Above chest level, so that gravity pushes air out",
        B: "Level with the insertion site, carried by the patient",
        C: "Below chest level and kept upright",
        D: "On the bed beside the patient's hip"
      },
      correctAnswer: "C",
      explanation: "Below chest level and kept upright (C) is correct because keeping the unit below the chest and upright lets drainage flow by gravity and maintains the water seal and prevents backflow of drainage into the chest. Above chest level, so that gravity pushes air out (A) is incorrect because a raised unit allows fluid to run back into the pleural space. Level with the insertion site, carried by the patient (B) is incorrect because a unit at this height does not drain well and may be tipped. On the bed beside the patient's hip (D) is incorrect because on the bed the unit is not safely below the chest and may tip or be compressed.",
      sourceType: "derived_laq",
      sourceRef: "LAQ, Q1b (chest tube nursing care)",
      markingPoint: "Drainage system below chest level"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q41",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 3,
      questionNumberInSet: 7,
      questionType: "mcq",
      text: "The tubing between the chest tube and the drainage bottle comes apart. What should the nurse do first?",
      options: {
        A: "Put the open tube end in sterile water and call for help",
        B: "Clamp the tube and wait for the doctor",
        C: "Pull the chest tube out immediately",
        D: "Leave the tube open to air while a new bottle is fetched from stores"
      },
      correctAnswer: "A",
      explanation: "Put the open tube end in sterile water and call for help (A) is correct because submerging the tube in sterile water recreates a water seal, so air can escape but cannot enter; the nurse then reports and restores a sterile closed system. Clamp the tube and wait for the doctor (B) is incorrect because a long clamp period can cause tension pneumothorax if air is leaking. Pull the chest tube out immediately (C) is incorrect because removal is done only on the doctor's order. Leave the tube open to air while a new bottle is fetched from stores (D) is incorrect because open to air, the pleural space can suck in air.",
      sourceType: "derived_laq",
      sourceRef: "LAQ, Q1b (chest tube nursing care)",
      markingPoint: "Manage disconnection"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q42",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 3,
      questionNumberInSet: 8,
      questionType: "mcq",
      text: "A chest tube is accidentally pulled out of the patient's chest. What is the immediate nursing action?",
      options: {
        A: "Push the tube back in using sterile gloves",
        B: "Cover the site with sterile petroleum gauze and call help",
        C: "Place a loose dry gauze over the site and observe the patient",
        D: "Lay the patient flat and wait for the ward round"
      },
      correctAnswer: "B",
      explanation: "Cover the site with sterile petroleum gauze and call help (B) is correct because an airtight dressing at the site, applied right away, stops air entering the pleural space; the doctor is called and the patient is watched for breathing difficulty while reinsertion is prepared. Push the tube back in using sterile gloves (A) is incorrect because reinsertion is done by a trained doctor. Place a loose dry gauze over the site and observe the patient (C) is incorrect because a dry gauze is not airtight and lets air enter. Lay the patient flat and wait for the ward round (D) is incorrect because this delays emergency care while air may enter the chest.",
      sourceType: "derived_laq",
      sourceRef: "LAQ, Q1b (chest tube nursing care)",
      markingPoint: "Manage dislodged tube"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q43",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 3,
      questionNumberInSet: 9,
      questionType: "mcq",
      text: "The nurse sees continuous bubbling in the water seal chamber. This most likely indicates:",
      options: {
        A: "Normal tidaling that shows the system is working",
        B: "That the lung has fully re-expanded",
        C: "That the bottle is full and must be emptied",
        D: "An air leak somewhere in the drainage system"
      },
      correctAnswer: "D",
      explanation: "An air leak somewhere in the drainage system (D) is correct because continuous bubbling means air is entering the system, either from the patient's pleural space or from loose connections, so the cause must be traced and reported. Normal tidaling that shows the system is working (A) is incorrect because tidaling is a rise and fall with breathing, not continuous bubbling. That the lung has fully re-expanded (B) is incorrect because a re-expanded lung usually stops the bubbling. That the bottle is full and must be emptied (C) is incorrect because fullness is judged by drainage volume, not by bubbling.",
      sourceType: "derived_laq",
      sourceRef: "LAQ, Q1b (chest tube nursing care)",
      markingPoint: "Monitor water seal and air leak"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q44",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 3,
      questionNumberInSet: 10,
      questionType: "mcq",
      text: "Chest tube drainage suddenly changes from straw-coloured to bright red with a rise in volume. What should the nurse do?",
      options: {
        A: "Record it and recheck at the end of the shift",
        B: "Strip the tubing hard to clear any clots that block it",
        C: "Notify the doctor at once and monitor vital signs",
        D: "Raise the drainage unit to slow the bleeding"
      },
      correctAnswer: "C",
      explanation: "Notify the doctor at once and monitor vital signs (C) is correct because a sudden rise in bright red drainage suggests active bleeding, which needs urgent medical review. Record it and recheck at the end of the shift (A) is incorrect because delay in reporting can lead to shock. Strip the tubing hard to clear any clots that block it (B) is incorrect because stripping does not stop bleeding and can harm lung tissue. Raise the drainage unit to slow the bleeding (D) is incorrect because raising the unit allows fluid to flow back into the chest.",
      sourceType: "derived_laq",
      sourceRef: "LAQ, Q1b (chest tube nursing care)",
      markingPoint: "Monitor drainage amount and colour"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q45",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 3,
      questionNumberInSet: 11,
      questionType: "mcq",
      text: "Which action best prevents infection at the chest tube insertion site?",
      options: {
        A: "Keep the dressing airtight and change it aseptically",
        B: "Leave a soiled dressing alone so the tube is not disturbed",
        C: "Wash the site with tap water and leave it open to the air",
        D: "Let the patient change the dressing alone"
      },
      correctAnswer: "A",
      explanation: "Keep the dressing airtight and change it aseptically (A) is correct because the tube is a direct route for bacteria into the pleural space, so clean dressings and aseptic technique reduce the risk of empyema. Leave a soiled dressing alone so the tube is not disturbed (B) is incorrect because a soiled dressing holds bacteria and invites infection. Wash the site with tap water and leave it open to the air (C) is incorrect because tap water is not sterile and an open site allows air to enter. Let the patient change the dressing alone (D) is incorrect because the patient lacks sterile technique and could dislodge the tube.",
      sourceType: "derived_laq",
      sourceRef: "LAQ, Q1b (chest tube nursing care)",
      markingPoint: "Site care and aseptic technique"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q46",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 3,
      questionNumberInSet: 12,
      questionType: "true_false",
      text: "True or False: Routine stripping or milking of a chest tube is a recommended way to keep it free of clots.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. Routine stripping is not recommended and is regarded as ineffective practice, as it can create strong negative pressure in the pleural space that may damage lung tissue. The correct approach is to keep tubing free of kinks and dependent loops, and to follow the unit's protocol if a clot is suspected.",
      sourceType: "derived_laq",
      sourceRef: "LAQ, Q1b (chest tube nursing care)",
      markingPoint: "Avoid routine stripping"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q47",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 3,
      questionNumberInSet: 13,
      questionType: "mcq",
      text: "A patient with a chest tube for four days develops fever, redness and pus at the site. Which complication has developed?",
      options: {
        A: "Tension pneumothorax",
        B: "Infection of the site or pleural space",
        C: "Haemorrhage",
        D: "Pulmonary embolism"
      },
      correctAnswer: "B",
      explanation: "Infection of the site or pleural space (B) is correct because fever with redness and pus at the insertion site shows infection, which can spread to the pleural space and cause empyema. Tension pneumothorax (A) is incorrect because this causes severe breathlessness and shifted trachea, not local pus. Haemorrhage (C) is incorrect because bleeding shows as bright red drainage and falling blood pressure. Pulmonary embolism (D) is incorrect because this causes sudden chest pain and breathlessness, not pus at the site.",
      sourceType: "derived_laq",
      sourceRef: "LAQ, Q1c (chest tube complications)",
      markingPoint: "Infection"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q48",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 3,
      questionNumberInSet: 14,
      questionType: "mcq",
      text: "After chest tube insertion, bright red blood keeps rising in the drainage chamber while the patient's blood pressure falls and pulse rises. Which complication is this?",
      options: {
        A: "Surgical emphysema with air under the skin",
        B: "Wound infection at the insertion site",
        C: "A blocked tube from clots or kinking",
        D: "Haemorrhage from injury to a vessel"
      },
      correctAnswer: "D",
      explanation: "Haemorrhage from injury to a vessel (D) is correct because continued bright red drainage with signs of shock indicates active bleeding, which needs urgent reporting and fluid resuscitation. Surgical emphysema with air under the skin (A) is incorrect because this shows as crackling air under the skin. Wound infection at the insertion site (B) is incorrect because this shows as redness, warmth and pus rather than falling blood pressure. A blocked tube from clots or kinking (C) is incorrect because a blocked tube stops drainage; here the drainage is increasing.",
      sourceType: "derived_laq",
      sourceRef: "LAQ, Q1c (chest tube complications)",
      markingPoint: "Haemorrhage"
    },
    {
      id: "krn-respiratory-jan2011-respiratory-conditions_q49",
      paperId: "krn-respiratory-jan2011-respiratory-conditions",
      setNumber: 3,
      questionNumberInSet: 15,
      questionType: "true_false",
      text: "True or False: Clamping a chest tube for a long time in a patient with an air leak can cause a tension pneumothorax.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "A",
      explanation: "TRUE. If air continues to leak into the pleural space and the tube is clamped, the air cannot escape, so pressure builds up, the lung collapses and the mediastinum shifts. Chest tubes are therefore not clamped for long periods, except briefly and on instruction.",
      sourceType: "derived_laq",
      sourceRef: "LAQ, Q1c (chest tube complications)",
      markingPoint: "Tension pneumothorax"
    }
  ]
};
