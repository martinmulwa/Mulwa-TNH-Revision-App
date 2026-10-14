/**
 * Mulwa Clinical Exam Portal
 * January 2011 Supplementary Exam — Respiratory Disorders
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../../types';

export const NHSON_BLOCK1_JAN2011_RESPIRATORY: PastPaper = {
  id: "nhson-block1-jan2011-respiratory",
  year: "2011",
  month: "January",
  examType: "Supplementary",
  title: "January 2011 Supplementary Exam",
  category: "Respiratory Disorders",
  block: "Block 1",
  unit: "Respiratory Disorders",
  totalQuestions: 54,
  totalSets: 3,
  sets: [
    {
      setNumber: 1,
      title: "Set 1: Original Exam Questions",
      description: "The original MCQs and True/False statements from Part A of the January 2011 Supplementary End of Block I Respiratory paper.",
      questionCount: 11
    },
    {
      setNumber: 2,
      title: "Set 2: SAQ Mastery Questions",
      description: "MCQs and True/False questions derived from the paper's Part B Short Answer Questions, covering every marking point.",
      questionCount: 28
    },
    {
      setNumber: 3,
      title: "Set 3: LAQ Mastery Questions",
      description: "MCQs and True/False questions derived from the Part C Long Answer Question on acute asthma, covering every marking point.",
      questionCount: 15
    }
  ],
  questions: [
    {
      id: "nhson-block1-jan2011-respiratory_q1",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 1,
      questionNumberInSet: 1,
      questionType: "mcq",
      text: "Thoracentesis refers to aspiration of:",
      options: {
        A: "Pus from the lungs",
        B: "Blood from lungs",
        C: "Fluid from pleural space",
        D: "Sputum for testing"
      },
      correctAnswer: "C",
      explanation: "Fluid from pleural space (C) is correct because thoracentesis is the passing of a needle through the chest wall to aspirate fluid from the pleural space, either to find the cause of an effusion (diagnostic) or to relieve breathlessness (therapeutic). Pus from the lungs (A) is incorrect because pus inside the lung is cleared by postural drainage, bronchoscopy or surgery, while pus in the pleural space is drained by a chest tube. Blood from lungs (B) is incorrect because blood coming up from the lungs is haemoptysis, which is not removed by a needle. Sputum for testing (D) is incorrect because sputum is coughed up or suctioned from the airways and is not taken from the pleural space.",
      sourceType: "original_mcq",
      sourceRef: "Part A, Q1"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q2",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 1,
      questionNumberInSet: 2,
      questionType: "mcq",
      text: "Accumulation of blood in the pleural cavity is:",
      options: {
        A: "Haemothorax",
        B: "Pneumothorax",
        C: "Pyelomothorax",
        D: "Pleural effusion"
      },
      correctAnswer: "A",
      explanation: "Haemothorax (A) is correct because 'haemo' means blood, so haemothorax is blood in the pleural cavity, usually after chest trauma or chest surgery. Pneumothorax (B) is incorrect because it is air in the pleural cavity. Pyelomothorax (C) is incorrect because it is not a recognised medical term (the nearest real term is pyothorax, meaning pus in the pleural cavity, also called empyema). Pleural effusion (D) is incorrect because it is a general term for excess fluid in the pleural space, which may be clear, bloody or purulent, so it is less specific than haemothorax.",
      sourceType: "original_mcq",
      sourceRef: "Part A, Q2"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q3",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 1,
      questionNumberInSet: 3,
      questionType: "mcq",
      text: "The group of drugs used for treatment of bronchiectasis include:",
      options: {
        A: "Bronchodilators, mucolytic agents",
        B: "Expectorants, antihistamines",
        C: "Antibiotics, antitussive",
        D: "Mucolytic agents, antihistamines"
      },
      correctAnswer: "A",
      explanation: "Bronchodilators, mucolytic agents (A) is correct because bronchiectasis involves thick, retained secretions in widened airways: mucolytics thin the mucus and bronchodilators open the airways and help clearance, usually together with antibiotics for infective flare-ups and airway clearance techniques such as postural drainage. Expectorants, antihistamines (B) is incorrect because antihistamines dry and thicken secretions and expectorants are not the main treatment. Antibiotics, antitussive (C) is incorrect because, although antibiotics are used for infection, an antitussive suppresses the cough that the patient needs to clear secretions. Mucolytic agents, antihistamines (D) is incorrect because the antihistamine makes secretions thicker and harder to clear.",
      sourceType: "original_mcq",
      sourceRef: "Part A, Q3"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q4",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 1,
      questionNumberInSet: 4,
      questionType: "mcq",
      text: "The common cause of bacterial pneumonia is:",
      options: {
        A: "Klebsiella pneumoniae",
        B: "Streptococcus pneumoniae",
        C: "Streptococcus pyogenes",
        D: "Mycoplasma pneumoniae"
      },
      correctAnswer: "B",
      explanation: "Streptococcus pneumoniae (B) is correct because the pneumococcus is the most common bacterial cause of community-acquired pneumonia. Klebsiella pneumoniae (A) is incorrect because it is less common and mainly affects alcoholics, diabetics and hospitalised patients. Streptococcus pyogenes (C) is incorrect because it mostly causes throat and skin infections and only rarely pneumonia. Mycoplasma pneumoniae (D) is incorrect because it causes 'atypical' pneumonia, mainly in younger people, and is not the commonest bacterial cause.",
      sourceType: "original_mcq",
      sourceRef: "Part A, Q4"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q5",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 1,
      questionNumberInSet: 5,
      questionType: "mcq",
      text: "Following pneumonectomy, the patient should be nursed:",
      options: {
        A: "Lying on the un-operated side",
        B: "Strictly on bed",
        C: "In a low-lying position",
        D: "Lying on the operative side"
      },
      correctAnswer: "D",
      explanation: "Lying on the operative side (D) is correct because after pneumonectomy the patient is positioned on the operative side or on the back, which protects the single remaining lung and helps prevent the mediastinum (the structures between the lungs) from shifting. Lying on the un-operated side (A) is incorrect because it can let the mediastinum shift towards the empty side and compress the only remaining lung. Strictly on bed (B) is incorrect because strict bed rest raises the risk of chest infection and clots, so careful early mobilisation is encouraged. In a low-lying position (C) is incorrect because lying flat or low restricts lung expansion; a semi-upright position within the surgeon's instructions is preferred.",
      sourceType: "original_mcq",
      sourceRef: "Part A, Q5"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q6",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 1,
      questionNumberInSet: 6,
      questionType: "mcq",
      text: "Postural drainage is part of management of:",
      options: {
        A: "Bronchiectasis, emphysema",
        B: "Lung abscess, lung cancer",
        C: "Bronchial asthma, pleurisy",
        D: "Haemothorax, acute bronchitis"
      },
      correctAnswer: "A",
      explanation: "Bronchiectasis, emphysema (A) is the best answer because postural drainage uses gravity to move retained secretions from lung segments into the large airways to be coughed up; bronchiectasis is a classic indication, and chronic lung disease with copious secretions such as emphysema/chronic bronchitis is also managed with chest physiotherapy. Lung abscess, lung cancer (B) is incorrect because, although postural drainage helps a lung abscess, it is not part of managing lung cancer, so the pair is not fully correct. Bronchial asthma, pleurisy (C) is incorrect because neither condition is marked by retained secretions that gravity drainage would clear, and pleurisy makes positioning and percussion painful. Haemothorax, acute bronchitis (D) is incorrect because blood in the pleural space needs a chest drain, not postural drainage.",
      sourceType: "original_mcq",
      sourceRef: "Part A, Q6"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q7",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 1,
      questionNumberInSet: 7,
      questionType: "true_false",
      text: "True or False: High oxygen concentration is contraindicated in the patients with Chronic Obstructive Pulmonary Disease (COPD)",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "A",
      explanation: "TRUE. In patients with long-standing COPD who retain carbon dioxide, breathing may depend partly on a low oxygen level. Uncontrolled high-concentration oxygen can reduce that drive and cause hypoventilation, a rising carbon dioxide level and drowsiness. Oxygen is therefore given in a controlled, low concentration (for example by nasal prongs at 1 to 2 L/min or a Venturi mask) to keep the saturation at about 88 to 92 percent. Oxygen is never withheld from a hypoxaemic patient; it is titrated carefully.",
      sourceType: "original_true_false",
      sourceRef: "Part A, Q7(a)"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q8",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 1,
      questionNumberInSet: 8,
      questionType: "true_false",
      text: "True or False: Air bubbles in water-seal chamber indicates functioning of water seal drainage system",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. Tidaling (the water level in the water-seal tube rising and falling with breathing) is the sign that the system is working. Continuous bubbling in the water-seal chamber means air is entering the system, either from a leak in the tubing or connections or from an air leak from the lung, and it must be checked. Small intermittent bubbles on expiration or coughing can be normal while a pneumothorax is still resolving, but bubbling is not the sign of a functioning drain.",
      sourceType: "original_true_false",
      sourceRef: "Part A, Q7(b)"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q9",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 1,
      questionNumberInSet: 9,
      questionType: "mcq",
      text: "The priority nursing intervention for patient suffering from pleural effusion is to",
      options: {
        A: "Relieve pain",
        B: "Assess oxygen saturation",
        C: "Clear secretion in the airway",
        D: "Educate patient on breathing exercises"
      },
      correctAnswer: "B",
      explanation: "Assess oxygen saturation (B) is correct because pleural fluid compresses the lung and reduces ventilation, so airway, breathing and oxygenation come first: the nurse checks the saturation, respiratory rate and work of breathing and gives oxygen as prescribed. Relieve pain (A) is incorrect because pain matters but does not take priority over oxygenation. Clear secretion in the airway (C) is incorrect because the problem is fluid outside the lung and not retained secretions in the airway. Educate patient on breathing exercises (D) is incorrect because teaching is done once the patient is stable.",
      sourceType: "original_mcq",
      sourceRef: "Part A, Q8"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q10",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 1,
      questionNumberInSet: 10,
      questionType: "mcq",
      text: "During expiration:",
      options: {
        A: "Atmospheric pressure is lower than intrapulmonary pressure",
        B: "Rib cage moves upwards and outwards",
        C: "The diaphragm flattens",
        D: "The lung volume increases"
      },
      correctAnswer: "A",
      explanation: "Atmospheric pressure is lower than intrapulmonary pressure (A) is correct because in quiet expiration the diaphragm relaxes and rises and the chest wall and lungs recoil, so lung volume falls and the pressure inside the lungs rises just above atmospheric pressure, pushing air out. Rib cage moves upwards and outwards (B) is incorrect because that happens during inspiration; in expiration the rib cage moves downwards and inwards. The diaphragm flattens (C) is incorrect because it flattens in inspiration and domes upwards in expiration. The lung volume increases (D) is incorrect because lung volume increases in inspiration and decreases in expiration.",
      sourceType: "original_mcq",
      sourceRef: "Part A, Q9"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q11",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 1,
      questionNumberInSet: 11,
      questionType: "mcq",
      text: "Empyema is defined as:",
      options: {
        A: "Localized collection of fluid in the lungs",
        B: "Accumulation of thick, purulent fluid in pleural space",
        C: "Pathological distension of air spaces of the lungs",
        D: "Inflammation of pleural membrane"
      },
      correctAnswer: "B",
      explanation: "Accumulation of thick, purulent fluid in pleural space (B) is correct because empyema is pus in the pleural space, most often a complication of pneumonia or a lung abscess. Localized collection of fluid in the lungs (A) is incorrect because that is closer to a lung abscess or localised consolidation inside the lung tissue, not the pleural space. Pathological distension of air spaces of the lungs (C) is incorrect because that describes emphysema. Inflammation of pleural membrane (D) is incorrect because that describes pleurisy (pleuritis).",
      sourceType: "original_mcq",
      sourceRef: "Part A, Q10 (printed as a second Q8)"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q12",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 1,
      questionType: "mcq",
      text: "In which form is most of the oxygen carried in arterial blood from the lungs to the tissues?",
      options: {
        A: "Dissolved freely in the plasma as oxygen gas",
        B: "Converted to bicarbonate and carried in the plasma",
        C: "Bound to haemoglobin as oxyhaemoglobin",
        D: "Attached to platelets and white blood cells"
      },
      correctAnswer: "C",
      explanation: "Bound to haemoglobin as oxyhaemoglobin (C) is correct because oxygen dissolves poorly in water, so about 97 percent of it is carried loosely attached to the iron of haemoglobin inside red blood cells, which is what allows enough oxygen to reach the tissues. Dissolved freely in the plasma as oxygen gas (A) is incorrect because only about 2 percent of oxygen travels dissolved in plasma because oxygen is poorly soluble. Converted to bicarbonate and carried in the plasma (B) is incorrect because bicarbonate is the main carrier of carbon dioxide, not oxygen. Attached to platelets and white blood cells (D) is incorrect because platelets and white blood cells work in clotting and defence and do not carry oxygen.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q1 (transport of respiratory gases)",
      markingPoint: "Oxygen carried as oxyhaemoglobin"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q13",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 2,
      questionType: "mcq",
      text: "What proportion of the oxygen in arterial blood is carried dissolved in the plasma?",
      options: {
        A: "About 20 percent",
        B: "About 50 percent",
        C: "About 70 percent",
        D: "About 2 percent"
      },
      correctAnswer: "D",
      explanation: "About 2 percent (D) is correct because oxygen is poorly soluble, so only a tiny amount (about 0.3 mL per 100 mL of blood at a normal PaO2) is dissolved; although small, this is the portion that actually diffuses into the tissue cells. About 20 percent (A) is incorrect because 20 percent is closer to the share of carbon dioxide carried as carbaminohaemoglobin. About 50 percent (B) is incorrect because 50 percent is far too high because haemoglobin carries nearly all of the oxygen. About 70 percent (C) is incorrect because 70 percent is the share of carbon dioxide carried as bicarbonate, not the share of oxygen dissolved in plasma.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q1 (transport of respiratory gases)",
      markingPoint: "Dissolved oxygen is a small fraction"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q14",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 3,
      questionType: "mcq",
      text: "Which form carries the largest share of carbon dioxide from the tissues to the lungs?",
      options: {
        A: "Dissolved carbon dioxide gas in the plasma",
        B: "Bicarbonate ions in the plasma",
        C: "Carbaminohaemoglobin in red blood cells",
        D: "Carboxyhaemoglobin in red blood cells"
      },
      correctAnswer: "B",
      explanation: "Bicarbonate ions in the plasma (B) is correct because about 70 percent of carbon dioxide is converted inside red blood cells to carbonic acid and then to bicarbonate, which diffuses out into the plasma. Dissolved carbon dioxide gas in the plasma (A) is incorrect because only about 7 percent is carried dissolved, so this is the smallest of the three real forms. Carbaminohaemoglobin in red blood cells (C) is incorrect because carbaminohaemoglobin carries about 20 to 23 percent, which is the second largest share. Carboxyhaemoglobin in red blood cells (D) is incorrect because carboxyhaemoglobin is haemoglobin bound to carbon monoxide and has nothing to do with carbon dioxide transport.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q1 (transport of respiratory gases)",
      markingPoint: "Carbon dioxide carried mainly as bicarbonate (about 70%)"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q15",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 4,
      questionType: "mcq",
      text: "Carbon dioxide combines with the globin (protein) part of haemoglobin inside red blood cells. What compound is formed?",
      options: {
        A: "Carboxyhaemoglobin (carbon monoxide on haem iron)",
        B: "Oxyhaemoglobin (oxygen on haem iron)",
        C: "Carbaminohaemoglobin (carbon dioxide on globin)",
        D: "Methaemoglobin (haemoglobin with oxidised iron)"
      },
      correctAnswer: "C",
      explanation: "Carbaminohaemoglobin (carbon dioxide on globin) (C) is correct because carbon dioxide does not bind to the iron as oxygen does; it attaches to amino groups on the globin chains, forming a reversible compound that carries roughly 20 percent of the carbon dioxide and releases it in the lungs. Carboxyhaemoglobin (carbon monoxide on haem iron) (A) is incorrect because carboxyhaemoglobin forms when carbon monoxide binds to the haem iron and it blocks oxygen carriage. Oxyhaemoglobin (oxygen on haem iron) (B) is incorrect because oxyhaemoglobin is haemoglobin carrying oxygen on its iron, not carbon dioxide. Methaemoglobin (haemoglobin with oxidised iron) (D) is incorrect because methaemoglobin forms when the iron is oxidised to the ferric state and it cannot carry oxygen.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q1 (transport of respiratory gases)",
      markingPoint: "Carbaminohaemoglobin formation"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q16",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 5,
      questionType: "mcq",
      text: "Inside red blood cells, which enzyme speeds up the reaction between carbon dioxide and water to form carbonic acid?",
      options: {
        A: "Carbonic anhydrase",
        B: "Lactate dehydrogenase",
        C: "Cholinesterase",
        D: "Catalase"
      },
      correctAnswer: "A",
      explanation: "Carbonic anhydrase (A) is correct because carbonic anhydrase speeds up the conversion of carbon dioxide and water to carbonic acid, which splits into hydrogen and bicarbonate ions, so most carbon dioxide can be moved as bicarbonate. Lactate dehydrogenase (B) is incorrect because lactate dehydrogenase interconverts pyruvate and lactate in cells and is not involved in carbon dioxide transport. Cholinesterase (C) is incorrect because cholinesterase breaks down acetylcholine at nerve endings. Catalase (D) is incorrect because catalase breaks down hydrogen peroxide.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q1 (transport of respiratory gases)",
      markingPoint: "Carbonic anhydrase and bicarbonate formation"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q17",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 6,
      questionType: "mcq",
      text: "In the tissues, bicarbonate leaves the red blood cells for the plasma. Which ion moves into the red cells to keep the electrical balance?",
      options: {
        A: "Calcium",
        B: "Sodium",
        C: "Magnesium",
        D: "Chloride"
      },
      correctAnswer: "D",
      explanation: "Chloride (D) is correct because the bicarbonate leaving the red cell is balanced by chloride entering it, a movement called the chloride shift (Hamburger phenomenon). Calcium (A) is incorrect because calcium has no role in this exchange. Sodium (B) is incorrect because sodium stays mainly in the plasma and does not move into red cells in exchange for bicarbonate. Magnesium (C) is incorrect because magnesium is mainly an intracellular ion and is not exchanged for bicarbonate.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q1 (transport of respiratory gases)",
      markingPoint: "Chloride shift"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q18",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 7,
      questionType: "true_false",
      text: "True or False: Most carbon dioxide is carried in the blood dissolved in plasma as carbon dioxide gas.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. Only about 7 percent of carbon dioxide travels dissolved in plasma. About 70 percent is carried as bicarbonate ions, and about 20 to 23 percent is bound to haemoglobin as carbaminohaemoglobin. The correct statement is that most carbon dioxide is carried as bicarbonate.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q1 (transport of respiratory gases)",
      markingPoint: "Dissolved CO2 is a small fraction (classification misconception)"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q19",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 8,
      questionType: "mcq",
      text: "Which structure is the normal entry point for inspired air and warms, filters and moistens it?",
      options: {
        A: "Larynx (voice box)",
        B: "Nose (nasal cavity)",
        C: "Trachea (windpipe)",
        D: "Bronchioles (small airways)"
      },
      correctAnswer: "B",
      explanation: "Nose (nasal cavity) (B) is correct because the nose is the main entrance of the respiratory tract and its lining, hairs and mucus warm, moisten and filter the air before it travels to the lungs. Larynx (voice box) (A) is incorrect because the larynx lies lower down, between the pharynx and the trachea, and houses the vocal cords. Trachea (windpipe) (C) is incorrect because the trachea carries air that has already been conditioned from the larynx to the bronchi. Bronchioles (small airways) (D) is incorrect because the bronchioles are small airways deep in the lungs that lead to the alveoli.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q2 (respiratory tract diagram)",
      markingPoint: "Nose / nasal cavity"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q20",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 9,
      questionType: "mcq",
      text: "Which part of the respiratory tract is shared with the digestive tract and has nasal, oral and laryngeal parts?",
      options: {
        A: "Pharynx (throat)",
        B: "Larynx (voice box)",
        C: "Trachea (windpipe)",
        D: "Main bronchus"
      },
      correctAnswer: "A",
      explanation: "Pharynx (throat) (A) is correct because the pharynx is a common passage for air and food and is divided into the nasopharynx, oropharynx and laryngopharynx. Larynx (voice box) (B) is incorrect because the larynx is a cartilage box below the pharynx that carries only air and holds the vocal cords. Trachea (windpipe) (C) is incorrect because the trachea is an air-only tube below the larynx. Main bronchus (D) is incorrect because the main bronchi are air tubes inside the chest that branch off the trachea.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q2 (respiratory tract diagram)",
      markingPoint: "Pharynx"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q21",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 10,
      questionType: "mcq",
      text: "Which structure contains the vocal cords and is closed off by the epiglottis during swallowing?",
      options: {
        A: "Pharynx (throat)",
        B: "Trachea (windpipe)",
        C: "Larynx (voice box)",
        D: "Carina of the trachea"
      },
      correctAnswer: "C",
      explanation: "Larynx (voice box) (C) is correct because the larynx houses the vocal cords, and the epiglottis folds over its opening during swallowing so that food does not enter the airway. Pharynx (throat) (A) is incorrect because the pharynx is the shared passage behind the nose and mouth and does not contain the vocal cords. Trachea (windpipe) (B) is incorrect because the trachea lies below the larynx and has no vocal cords. Carina of the trachea (D) is incorrect because the carina is the ridge where the trachea divides into the two main bronchi.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q2 (respiratory tract diagram)",
      markingPoint: "Larynx and epiglottis"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q22",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 11,
      questionType: "mcq",
      text: "At which landmark does the trachea divide into the right and left main bronchi?",
      options: {
        A: "Glottis",
        B: "Hilum",
        C: "Epiglottis",
        D: "Carina"
      },
      correctAnswer: "D",
      explanation: "Carina (D) is correct because the trachea divides at the carina, at about the level of the sternal angle, into the right and left main (primary) bronchi. Glottis (A) is incorrect because the glottis is the opening between the vocal cords in the larynx. Hilum (B) is incorrect because the hilum is the area on the lung where the bronchus, blood vessels and nerves enter. Epiglottis (C) is incorrect because the epiglottis is the flap of tissue that covers the airway during swallowing.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q2 (respiratory tract diagram)",
      markingPoint: "Trachea divides at the carina"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q23",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 12,
      questionType: "mcq",
      text: "Which sequence correctly shows the path of inspired air from the nose to the site of gas exchange?",
      options: {
        A: "Nose, larynx, pharynx, trachea, bronchioles, bronchi, alveoli",
        B: "Nose, pharynx, larynx, trachea, bronchi, bronchioles, alveoli",
        C: "Nose, pharynx, trachea, larynx, bronchi, bronchioles, alveoli",
        D: "Pharynx, nose, larynx, trachea, bronchi, alveoli, bronchioles"
      },
      correctAnswer: "B",
      explanation: "Nose, pharynx, larynx, trachea, bronchi, bronchioles, alveoli (B) is correct because air passes down the conducting airways in order, from the nose through the pharynx and larynx into the trachea, which divides into bronchi and then bronchioles, ending in the alveoli. Nose, larynx, pharynx, trachea, bronchioles, bronchi, alveoli (A) is incorrect because the larynx lies below the pharynx and the bronchi come before the bronchioles. Nose, pharynx, trachea, larynx, bronchi, bronchioles, alveoli (C) is incorrect because the larynx lies above the trachea and not below it. Pharynx, nose, larynx, trachea, bronchi, alveoli, bronchioles (D) is incorrect because air enters through the nose first and reaches the alveoli after the bronchioles and not before them.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q2 (respiratory tract diagram)",
      markingPoint: "Order of air passage"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q24",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 13,
      questionType: "mcq",
      text: "Which structures are thin-walled air sacs, surrounded by capillaries, where oxygen and carbon dioxide are exchanged?",
      options: {
        A: "Terminal bronchioles",
        B: "Main bronchi",
        C: "Alveoli",
        D: "Trachea"
      },
      correctAnswer: "C",
      explanation: "Alveoli (C) is correct because alveoli have very thin walls next to a rich capillary network, so oxygen diffuses into the blood and carbon dioxide diffuses out into the air. Terminal bronchioles (A) is incorrect because terminal bronchioles are conducting airways without alveoli, so no gas exchange happens there. Main bronchi (B) is incorrect because the main bronchi only conduct air into the lungs. Trachea (D) is incorrect because the trachea is a thick-walled conducting tube where no gas exchange takes place.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q2 (respiratory tract diagram)",
      markingPoint: "Alveoli: site of gas exchange"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q25",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 14,
      questionType: "true_false",
      text: "True or False: The walls of the bronchioles contain cartilage rings that keep them permanently open.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. The walls of the bronchioles contain smooth muscle but no cartilage, unlike the trachea and the bronchi. Because the muscle can contract or relax, the diameter of the bronchioles can change, which is why bronchospasm in asthma can narrow them so much. The correct statement is that bronchioles have muscular walls without cartilage rings.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q2 (respiratory tract diagram)",
      markingPoint: "Bronchioles have muscle but no cartilage"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q26",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 15,
      questionType: "mcq",
      text: "Which statement best defines atelectasis?",
      options: {
        A: "Collapse of alveoli in part or all of a lung",
        B: "Permanent over-distension of the alveoli with trapped air",
        C: "Collection of pus between the lung and chest wall",
        D: "Air collecting in the pleural space"
      },
      correctAnswer: "A",
      explanation: "Collapse of alveoli in part or all of a lung (A) is correct because atelectasis means incomplete expansion: the alveoli collapse, so no gas exchange takes place in the affected area. Permanent over-distension of the alveoli with trapped air (B) is incorrect because that describes emphysema, in which the air spaces are permanently enlarged and not collapsed. Collection of pus between the lung and chest wall (C) is incorrect because that describes empyema, an infection of the pleural space. Air collecting in the pleural space (D) is incorrect because that describes pneumothorax, which is air outside the lung and not collapse of the alveoli themselves.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q3 (atelectasis)",
      markingPoint: "Definition of atelectasis"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q27",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 16,
      questionType: "mcq",
      text: "A mucus plug completely blocks a bronchus and the alveoli beyond it slowly collapse. What is the main mechanism?",
      options: {
        A: "Fluid in the pleural space squeezes the alveoli shut",
        B: "Surfactant production stops because of the infection",
        C: "Scar tissue pulls the alveolar walls together",
        D: "Trapped alveolar air is absorbed and not replaced"
      },
      correctAnswer: "D",
      explanation: "Trapped alveolar air is absorbed and not replaced (D) is correct because with the airway blocked, no fresh air reaches the alveoli, so the air already inside is absorbed into the blood and the alveoli collapse (obstructive or resorptive atelectasis). Fluid in the pleural space squeezes the alveoli shut (A) is incorrect because external pressure on the lung causes compressive atelectasis, which is a different mechanism. Surfactant production stops because of the infection (B) is incorrect because loss of surfactant causes adhesive atelectasis, which does not need an airway blockage. Scar tissue pulls the alveolar walls together (C) is incorrect because scar tissue pulling on the lung causes contraction atelectasis, which develops slowly over time.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q3 (atelectasis)",
      markingPoint: "Obstructive (resorptive) atelectasis"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q28",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 17,
      questionType: "mcq",
      text: "A large pleural effusion presses on the lung and the underlying alveoli collapse. This type of atelectasis is:",
      options: {
        A: "Obstructive (caused by an airway blockage)",
        B: "Compressive (caused by external pressure)",
        C: "Adhesive (caused by surfactant failure)",
        D: "Cicatrisation (caused by scar contraction)"
      },
      correctAnswer: "B",
      explanation: "Compressive (caused by external pressure) (B) is correct because the effusion raises the pressure around the lung and squeezes the air out of the alveoli, which is compressive atelectasis. Obstructive (caused by an airway blockage) (A) is incorrect because obstructive atelectasis needs a blocked airway and the airway here is open. Adhesive (caused by surfactant failure) (C) is incorrect because adhesive atelectasis needs surfactant deficiency or dysfunction, as in premature infants or ARDS. Cicatrisation (caused by scar contraction) (D) is incorrect because cicatrisation atelectasis follows scarring of lung tissue and is not caused by fluid.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q3 (atelectasis)",
      markingPoint: "Compressive atelectasis"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q29",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 18,
      questionType: "mcq",
      text: "A premature newborn lacks surfactant and the alveoli collapse. Why does lack of surfactant cause collapse?",
      options: {
        A: "Alveolar surface tension rises and the walls stick together",
        B: "The alveolar walls become too thick for gas to diffuse across",
        C: "Thick mucus plugs block every small airway at the same time",
        D: "Blood flow to the alveoli stops completely and the walls die"
      },
      correctAnswer: "A",
      explanation: "Alveolar surface tension rises and the walls stick together (A) is correct because surfactant lowers the surface tension of the fluid lining the alveoli; without it the tension rises, the alveolar walls stick together and the alveoli collapse (adhesive atelectasis). The alveolar walls become too thick for gas to diffuse across (B) is incorrect because surfactant does not control wall thickness, and thick walls would impair diffusion but would not make the alveoli collapse. Thick mucus plugs block every small airway at the same time (C) is incorrect because mucus plugging is the cause of obstructive atelectasis and not of surfactant deficiency. Blood flow to the alveoli stops completely and the walls die (D) is incorrect because blood flow to the alveoli continues in surfactant deficiency and the problem is collapse and not loss of blood supply.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q3 (atelectasis)",
      markingPoint: "Adhesive (surfactant-related) atelectasis"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q30",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 19,
      questionType: "mcq",
      text: "Why is atelectasis common after upper abdominal surgery?",
      options: {
        A: "The surgeon removes a small part of the lung in every operation",
        B: "Intravenous fluids wash the surfactant out of the alveoli",
        C: "Pain and anaesthesia cause shallow breathing and a weak cough",
        D: "Skin stitches press directly on the airways and narrow them"
      },
      correctAnswer: "C",
      explanation: "Pain and anaesthesia cause shallow breathing and a weak cough (C) is correct because pain and the effects of anaesthesia and opioids make the patient breathe shallowly and cough weakly, so the alveoli are not fully expanded and secretions are retained, which leads to collapse in the dependent parts of the lung. The surgeon removes a small part of the lung in every operation (A) is incorrect because abdominal surgery does not remove lung tissue. Intravenous fluids wash the surfactant out of the alveoli (B) is incorrect because intravenous fluids do not wash surfactant out of the alveoli, although too much fluid can cause pulmonary oedema. Skin stitches press directly on the airways and narrow them (D) is incorrect because skin stitches lie in the abdominal wall and cannot press on the airways.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q3 (atelectasis)",
      markingPoint: "Postoperative atelectasis: shallow breathing and retained secretions"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q31",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 20,
      questionType: "mcq",
      text: "Blood keeps flowing past collapsed alveoli. What is the main effect on gas exchange?",
      options: {
        A: "Blood becomes over-oxygenated and the pH rises sharply",
        B: "Red blood cells are destroyed in the collapsed area",
        C: "Carbon dioxide is blown off faster than normal by the lung",
        D: "Blood leaves the lung poorly oxygenated (hypoxaemia)"
      },
      correctAnswer: "D",
      explanation: "Blood leaves the lung poorly oxygenated (hypoxaemia) (D) is correct because blood passing collapsed alveoli picks up little oxygen, so it adds poorly oxygenated blood to the arterial supply and the patient becomes hypoxaemic, with a low oxygen saturation and breathlessness. Blood becomes over-oxygenated and the pH rises sharply (A) is incorrect because collapsed alveoli cannot add oxygen, so over-oxygenation cannot occur. Red blood cells are destroyed in the collapsed area (B) is incorrect because red blood cells are not destroyed by alveolar collapse. Carbon dioxide is blown off faster than normal by the lung (C) is incorrect because collapsed alveoli do not exchange gas at all, so no extra carbon dioxide is removed from that area.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q3 (atelectasis)",
      markingPoint: "Consequence: impaired gas exchange and hypoxaemia"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q32",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 21,
      questionType: "true_false",
      text: "True or False: Atelectasis can only be caused by a blockage inside the airway.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. Atelectasis has several mechanisms. A blockage of the airway (obstructive or resorptive atelectasis) is only one of them. Others are external compression of the lung (compressive), loss or dysfunction of surfactant (adhesive) and scarring of lung tissue (contraction). The correct statement is that airway blockage is one of several causes.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q3 (atelectasis)",
      markingPoint: "Several mechanisms cause atelectasis"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q33",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 22,
      questionType: "mcq",
      text: "A patient with an underwater seal chest drain wants to walk to the toilet. How should the drainage bottle be carried?",
      options: {
        A: "Level with the chest and held against the body",
        B: "Below chest level and kept upright",
        C: "Raised above the chest on a drip stand",
        D: "Laid on its side to prevent spilling"
      },
      correctAnswer: "B",
      explanation: "Below chest level and kept upright (B) is correct because gravity then keeps drainage moving down into the bottle, fluid cannot run back into the pleural space, and the upright bottle keeps the water seal in place. Level with the chest and held against the body (A) is incorrect because holding it at chest level slows gravity drainage and makes backflow more likely. Raised above the chest on a drip stand (C) is incorrect because raising it above the chest lets drained fluid flow back into the pleural space. Laid on its side to prevent spilling (D) is incorrect because tipping the bottle on its side can break the water seal and spill the contents.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q4 (underwater seal drainage)",
      markingPoint: "Keep drainage system below chest level and upright"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q34",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 23,
      questionType: "mcq",
      text: "The water level in the water-seal tube rises as the patient breathes in and falls as the patient breathes out. What does this mean?",
      options: {
        A: "The tube is blocked by a blood clot or a kink",
        B: "There is a large air leak in the tubing or lung",
        C: "The drain is open and working properly",
        D: "The lung has been punctured by the drain again"
      },
      correctAnswer: "C",
      explanation: "The drain is open and working properly (C) is correct because this swing, called tidaling, follows the pressure changes in the pleural space with breathing and shows that the tube is open and connected to the pleural space. The tube is blocked by a blood clot or a kink (A) is incorrect because a blocked tube loses tidaling instead of showing it. There is a large air leak in the tubing or lung (B) is incorrect because an air leak shows as bubbling in the water-seal chamber and not as swings with breathing. The lung has been punctured by the drain again (D) is incorrect because tidaling is a normal finding and is not a sign of new lung injury.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q4 (underwater seal drainage)",
      markingPoint: "Tidaling shows patency"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q35",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 24,
      questionType: "mcq",
      text: "A nurse sees continuous vigorous bubbling in the water-seal chamber. What is the most appropriate action?",
      options: {
        A: "Check connections and the insertion site for air leaks",
        B: "Lift the bottle above chest level to stop the bubbles",
        C: "Milk the tubing firmly to push the air out",
        D: "Record it as normal and carry on with routine care"
      },
      correctAnswer: "A",
      explanation: "Check connections and the insertion site for air leaks (A) is correct because continuous bubbling means air is entering the system, either through a loose connection, a leak in the tubing or dressing, or an air leak from the lung, so the nurse checks all connections and the site and reports if it persists. Lift the bottle above chest level to stop the bubbles (B) is incorrect because raising the bottle allows fluid to flow back into the chest and does not fix a leak. Milk the tubing firmly to push the air out (C) is incorrect because milking or stripping a chest tube without a provider order is not routine care and does not remove an air leak. Record it as normal and carry on with routine care (D) is incorrect because continuous bubbling is not normal and needs action, although small bubbles on coughing or expiration can be seen while a pneumothorax is resolving.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q4 (underwater seal drainage)",
      markingPoint: "Air leak: continuous bubbling"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q36",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 25,
      questionType: "mcq",
      text: "A chest tube becomes disconnected from the drainage tubing. What is the safest immediate action?",
      options: {
        A: "Leave the tube open to the air while fetching a new bottle",
        B: "Clamp the tube and leave it clamped until the end of the shift",
        C: "Pull the chest tube out so that no air can enter",
        D: "Put the open end 2 cm under sterile water and get help"
      },
      correctAnswer: "D",
      explanation: "Put the open end 2 cm under sterile water and get help (D) is correct because placing the open end about 2 cm under sterile water recreates a water seal, so air can leave the pleural space but cannot be drawn in, until the system is reconnected or replaced aseptically. Leave the tube open to the air while fetching a new bottle (A) is incorrect because an open tube lets air be sucked into the pleural space during inspiration and risks a pneumothorax. Clamp the tube and leave it clamped until the end of the shift (B) is incorrect because a tube clamped for a long time can trap air and cause a tension pneumothorax if air is still leaking from the lung. Pull the chest tube out so that no air can enter (C) is incorrect because a chest tube is removed only on a doctor's order, and pulling it out would not protect the patient from air entering.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q4 (underwater seal drainage)",
      markingPoint: "Manage tube disconnection"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q37",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 26,
      questionType: "mcq",
      text: "How should the drainage from a chest drain be monitored?",
      options: {
        A: "Estimate the volume once at the end of the shift",
        B: "Record the amount, colour and consistency regularly",
        C: "Empty the bottle each hour without measuring the fluid",
        D: "Record only the colour because the volume is not important"
      },
      correctAnswer: "B",
      explanation: "Record the amount, colour and consistency regularly (B) is correct because the amount, colour and consistency of drainage show whether bleeding or infection is developing, and a sudden rise in bright red drainage must be reported to the doctor immediately. Estimate the volume once at the end of the shift (A) is incorrect because a single estimate at the end of a shift could miss sudden bleeding. Empty the bottle each hour without measuring the fluid (C) is incorrect because emptying the bottle without measuring loses the record needed to see a trend. Record only the colour because the volume is not important (D) is incorrect because volume is essential because a sudden increase can signal bleeding.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q4 (underwater seal drainage)",
      markingPoint: "Monitor and record drainage"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q38",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 27,
      questionType: "true_false",
      text: "True or False: A chest drain should be clamped routinely whenever the patient is transported to another department.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. A chest drain is not clamped routinely. Clamping is done only briefly in specific situations, for example when changing the drainage unit, finding the site of an air leak or during removal, and according to policy or the doctor's orders. If air is still leaking from the lung, a clamped tube traps air in the pleural space and can cause a tension pneumothorax. During transport the drainage system is kept below chest level, upright and unclamped.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q4 (underwater seal drainage)",
      markingPoint: "Do not clamp routinely"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q39",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 2,
      questionNumberInSet: 28,
      questionType: "mcq",
      text: "How often should the nurse check the dressing over a chest drain insertion site?",
      options: {
        A: "Every shift and whenever it is wet or loose",
        B: "Only once a week during the consultant's ward round",
        C: "Only when the patient complains of pain at the site",
        D: "Every three days whatever its condition"
      },
      correctAnswer: "A",
      explanation: "Every shift and whenever it is wet or loose (A) is correct because checking the dressing at least every shift and when needed keeps the site sterile and airtight and allows early detection of infection, bleeding, an air leak or subcutaneous emphysema. Only once a week during the consultant's ward round (B) is incorrect because a week is too long between checks and a soiled dressing would stay in place. Only when the patient complains of pain at the site (C) is incorrect because waiting for pain delays detection of infection or leakage, which may be painless early on. Every three days whatever its condition (D) is incorrect because a fixed three-day schedule ignores a dressing that becomes wet or loose sooner.",
      sourceType: "derived_saq",
      sourceRef: "Part B, Q4 (underwater seal drainage)",
      markingPoint: "Site and dressing care"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q40",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 3,
      questionNumberInSet: 1,
      questionType: "mcq",
      text: "Which blood change is the strongest chemical stimulus to increase the rate of breathing?",
      options: {
        A: "Fall in carbon dioxide with a rise in pH",
        B: "Rise in blood oxygen above the normal level",
        C: "Rise in carbon dioxide with a fall in pH",
        D: "Rise in bicarbonate with a rise in pH"
      },
      correctAnswer: "C",
      explanation: "Rise in carbon dioxide with a fall in pH (C) is correct because chemoreceptors respond mainly to a rising arterial carbon dioxide level and a falling pH, and they increase the rate and depth of breathing to blow off carbon dioxide (a very low oxygen level also stimulates breathing). Fall in carbon dioxide with a rise in pH (A) is incorrect because a fall in carbon dioxide with a rise in pH would slow breathing. Rise in blood oxygen above the normal level (B) is incorrect because a raised oxygen level does not make breathing faster. Rise in bicarbonate with a rise in pH (D) is incorrect because a rise in bicarbonate with a rise in pH points to alkalosis, which depresses breathing.",
      sourceType: "derived_laq",
      sourceRef: "Part C(a) (factors influencing rate of breathing)",
      markingPoint: "Chemical factors: raised PaCO2 and fall in pH"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q41",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 3,
      questionNumberInSet: 2,
      questionType: "mcq",
      text: "A feverish, anxious patient is breathing at 28 breaths per minute. Which pair of factors increases the rate of breathing?",
      options: {
        A: "Deep sleep and a low body temperature",
        B: "Sedative drugs and a low body temperature",
        C: "A fall in carbon dioxide and a rise in pH",
        D: "Raised body temperature and anxiety"
      },
      correctAnswer: "D",
      explanation: "Raised body temperature and anxiety (D) is correct because a raised body temperature and emotional states such as anxiety, fear or excitement act on the respiratory centres and raise the breathing rate, as does exercise. Deep sleep and a low body temperature (A) is incorrect because deep sleep and cooling lower the breathing rate. Sedative drugs and a low body temperature (B) is incorrect because sedatives depress the respiratory centre and cold slows metabolism, so both lower the breathing rate. A fall in carbon dioxide and a rise in pH (C) is incorrect because a fall in carbon dioxide with a rise in pH removes the main chemical stimulus and slows breathing.",
      sourceType: "derived_laq",
      sourceRef: "Part C(a) (factors influencing rate of breathing)",
      markingPoint: "Non-chemical factors: temperature, emotion, exercise"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q42",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 3,
      questionNumberInSet: 3,
      questionType: "mcq",
      text: "Which statement best describes the basic problem in asthma?",
      options: {
        A: "Permanent destruction of the alveolar walls with trapped air",
        B: "Chronic airway inflammation with overreactive airways",
        C: "Infection of lung tissue with pus-filled alveoli",
        D: "Collapse of the alveoli because of surfactant failure"
      },
      correctAnswer: "B",
      explanation: "Chronic airway inflammation with overreactive airways (B) is correct because asthma is a chronic inflammatory disorder in which the airways become hyperresponsive, so triggers cause reversible narrowing. Permanent destruction of the alveolar walls with trapped air (A) is incorrect because that describes emphysema, in which the damage is permanent. Infection of lung tissue with pus-filled alveoli (C) is incorrect because that describes pneumonia, which is an infection and not a chronic hyperreactive disorder. Collapse of the alveoli because of surfactant failure (D) is incorrect because that describes atelectasis from surfactant failure, which is not the basic problem in asthma.",
      sourceType: "derived_laq",
      sourceRef: "Part C(b) (pathophysiology of asthma)",
      markingPoint: "Chronic airway inflammation and hyperresponsiveness"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q43",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 3,
      questionNumberInSet: 4,
      questionType: "mcq",
      text: "What is the immediate effect of an allergen trigger on the airways of a person with asthma?",
      options: {
        A: "The bronchial muscle relaxes and the airways widen",
        B: "The alveoli fill with pus and the lung consolidates",
        C: "The bronchial muscle contracts and the airways narrow",
        D: "The trachea collapses because its cartilage softens"
      },
      correctAnswer: "C",
      explanation: "The bronchial muscle contracts and the airways narrow (C) is correct because inflammatory mediators released after the trigger make the bronchial smooth muscle contract (bronchospasm), narrowing the airways, raising airway resistance and causing wheeze and breathlessness. The bronchial muscle relaxes and the airways widen (A) is incorrect because muscle relaxation is the effect of bronchodilator drugs such as salbutamol and not of a trigger. The alveoli fill with pus and the lung consolidates (B) is incorrect because pus-filled alveoli describe pneumonia and not an asthma attack. The trachea collapses because its cartilage softens (D) is incorrect because the trachea does not collapse in asthma and its cartilage rings are not affected.",
      sourceType: "derived_laq",
      sourceRef: "Part C(b) (pathophysiology of asthma)",
      markingPoint: "Trigger leads to bronchospasm"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q44",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 3,
      questionNumberInSet: 5,
      questionType: "mcq",
      text: "Besides bronchospasm, which two changes further narrow the airways during an acute asthma attack?",
      options: {
        A: "Swollen airway lining and thick mucus plugs",
        B: "Loss of surfactant and collapse of the alveoli",
        C: "Fluid in the pleural space and a thickened pleura",
        D: "Thickened alveolar walls and lung scarring"
      },
      correctAnswer: "A",
      explanation: "Swollen airway lining and thick mucus plugs (A) is correct because inflammation causes oedema of the bronchial lining and extra thick mucus that can form plugs; together with bronchospasm they raise airway resistance and trap air, producing expiratory wheeze. Loss of surfactant and collapse of the alveoli (B) is incorrect because surfactant loss and alveolar collapse belong to respiratory distress syndrome and atelectasis and not to asthma. Fluid in the pleural space and a thickened pleura (C) is incorrect because pleural fluid lies outside the airways and does not narrow them. Thickened alveolar walls and lung scarring (D) is incorrect because thickened alveolar walls and scarring belong to fibrosis and do not explain the airway narrowing of asthma.",
      sourceType: "derived_laq",
      sourceRef: "Part C(b) (pathophysiology of asthma)",
      markingPoint: "Mucosal oedema and mucus plugging"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q45",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 3,
      questionNumberInSet: 6,
      questionType: "true_false",
      text: "True or False: Repeated, poorly controlled asthma attacks can cause airway remodelling with changes that are no longer fully reversible.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "A",
      explanation: "TRUE. With repeated or poorly controlled attacks, long-standing inflammation can cause airway remodelling: thickening of the airway wall, increased smooth muscle, scarring below the lining and more mucus-producing cells. These structural changes can make part of the airflow obstruction permanent, which is why asthma should be controlled early.",
      sourceType: "derived_laq",
      sourceRef: "Part C(b) (pathophysiology of asthma)",
      markingPoint: "Airway remodelling with repeated attacks"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q46",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 3,
      questionNumberInSet: 7,
      questionType: "mcq",
      text: "Patient X, 18 years old, is wheezing loudly with a respiratory rate of 32 per minute and an oxygen saturation of 88%. Which nursing action takes priority?",
      options: {
        A: "Complete a detailed history of her usual triggers",
        B: "Teach her the discharge plan and action plan",
        C: "Weigh her and record her height for the chart",
        D: "Give prescribed oxygen to correct hypoxaemia"
      },
      correctAnswer: "D",
      explanation: "Give prescribed oxygen to correct hypoxaemia (D) is correct because airway, breathing and circulation come first; a saturation of 88% means dangerous hypoxaemia, so oxygen is started at once and titrated to the target saturation set by the guideline in use (usually 93 to 98 percent), together with the prescribed reliever drug. Complete a detailed history of her usual triggers (A) is incorrect because a history is important but is taken after she is stable. Teach her the discharge plan and action plan (B) is incorrect because discharge teaching is done when she has recovered and not during the attack. Weigh her and record her height for the chart (C) is incorrect because weight and height are not urgent and do not treat the hypoxaemia.",
      sourceType: "derived_laq",
      sourceRef: "Part C(c) (nursing management of Patient X)",
      markingPoint: "Oxygen therapy"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q47",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 3,
      questionNumberInSet: 8,
      questionType: "mcq",
      text: "Which position is most helpful for Patient X during the acute attack?",
      options: {
        A: "Lying flat on her back with one pillow",
        B: "Sitting upright and leaning slightly forward",
        C: "Lying head-down with the foot of the bed raised",
        D: "Lying on her abdomen with her head turned"
      },
      correctAnswer: "B",
      explanation: "Sitting upright and leaning slightly forward (B) is correct because sitting upright, leaning forward and supporting the arms on a table or the knees (the tripod position) lets the diaphragm move freely and the accessory muscles work, so breathing is easier. Lying flat on her back with one pillow (A) is incorrect because lying flat lets the abdominal contents press on the diaphragm and increases breathlessness. Lying head-down with the foot of the bed raised (C) is incorrect because a head-down position pushes the abdominal organs against the diaphragm and makes breathing harder. Lying on her abdomen with her head turned (D) is incorrect because lying on the abdomen restricts chest expansion and is unsafe in a breathless patient.",
      sourceType: "derived_laq",
      sourceRef: "Part C(c) (nursing management of Patient X)",
      markingPoint: "Position upright"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q48",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 3,
      questionNumberInSet: 9,
      questionType: "mcq",
      text: "Which drug should be given first, by oxygen-driven nebuliser, to relieve Patient X's bronchospasm?",
      options: {
        A: "Salbutamol (a short-acting beta-2 agonist)",
        B: "Beclometasone (an inhaled corticosteroid preventer)",
        C: "Montelukast (a leukotriene receptor antagonist)",
        D: "Sodium cromoglicate (a mast cell stabiliser)"
      },
      correctAnswer: "A",
      explanation: "Salbutamol (a short-acting beta-2 agonist) (A) is correct because salbutamol relaxes the bronchial muscle within minutes, so it is the first-line reliever, commonly given as 5 mg by oxygen-driven nebuliser in adults and repeated according to the response. Beclometasone (an inhaled corticosteroid preventer) (B) is incorrect because beclometasone is a preventer that works over days and does not relieve an attack. Montelukast (a leukotriene receptor antagonist) (C) is incorrect because montelukast is a long-term control tablet and not a rescue drug. Sodium cromoglicate (a mast cell stabiliser) (D) is incorrect because sodium cromoglicate only prevents attacks and has no effect once bronchospasm has started.",
      sourceType: "derived_laq",
      sourceRef: "Part C(c) (nursing management of Patient X)",
      markingPoint: "Bronchodilator (salbutamol)"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q49",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 3,
      questionNumberInSet: 10,
      questionType: "mcq",
      text: "Why is prednisolone given early to Patient X in addition to nebulised salbutamol?",
      options: {
        A: "It relaxes the bronchial muscle within a few seconds",
        B: "It dries the bronchial secretions to stop the wheeze",
        C: "It reduces airway inflammation and the risk of relapse",
        D: "It blocks the cough reflex in the brain"
      },
      correctAnswer: "C",
      explanation: "It reduces airway inflammation and the risk of relapse (C) is correct because the airway narrowing is partly caused by an inflamed, swollen lining; systemic corticosteroids reduce this inflammation and the chance of relapse, but they take hours to work, so they are started early alongside the fast-acting bronchodilator. It relaxes the bronchial muscle within a few seconds (A) is incorrect because rapid muscle relaxation is the action of salbutamol and not of corticosteroids. It dries the bronchial secretions to stop the wheeze (B) is incorrect because corticosteroids do not dry secretions, and drying them would make mucus plugs worse. It blocks the cough reflex in the brain (D) is incorrect because blocking the cough reflex is the action of antitussives such as codeine, which are not used in asthma.",
      sourceType: "derived_laq",
      sourceRef: "Part C(c) (nursing management of Patient X)",
      markingPoint: "Corticosteroids"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q50",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 3,
      questionNumberInSet: 11,
      questionType: "mcq",
      text: "While nursing Patient X, which finding is the most worrying sign that she is getting worse?",
      options: {
        A: "Wheeze becoming louder as her air entry improves",
        B: "A cough that brings up a little clear sputum",
        C: "Being able to speak in full sentences between breaths",
        D: "A silent chest with drowsiness and falling SpO2"
      },
      correctAnswer: "D",
      explanation: "A silent chest with drowsiness and falling SpO2 (D) is correct because when the airways are almost completely blocked so little air moves that the wheeze disappears (a silent chest); together with drowsiness and a falling saturation this signals exhaustion and impending respiratory failure and needs urgent medical help. Wheeze becoming louder as her air entry improves (A) is incorrect because louder wheeze with better air entry shows that air is moving again, which is an improvement. A cough that brings up a little clear sputum (B) is incorrect because a little clear sputum is common as the airways open and is not a danger sign. Being able to speak in full sentences between breaths (C) is incorrect because being able to speak in full sentences is a sign that the attack is less severe.",
      sourceType: "derived_laq",
      sourceRef: "Part C(c) (nursing management of Patient X)",
      markingPoint: "Monitoring and recognising deterioration"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q51",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 3,
      questionNumberInSet: 12,
      questionType: "true_false",
      text: "True or False: A sedative should be given to calm an agitated patient in an acute asthma attack.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. Restlessness in an acute asthma attack is usually caused by hypoxia and rising carbon dioxide, not simple anxiety. Sedatives depress breathing and can push the patient into respiratory failure, so they are avoided. The right response is oxygen, bronchodilators and corticosteroids, calm reassurance and close monitoring. Drowsiness in an asthmatic patient is a danger sign that needs urgent medical review.",
      sourceType: "derived_laq",
      sourceRef: "Part C(c) (nursing management of Patient X)",
      markingPoint: "Avoid sedatives; treat hypoxia"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q52",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 3,
      questionNumberInSet: 13,
      questionType: "true_false",
      text: "True or False: Staying with Patient X, speaking calmly and explaining each step is an appropriate nursing action during the attack.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "A",
      explanation: "TRUE. Anxiety increases the breathing rate and oxygen demand and can worsen breathlessness. A nurse who stays with the patient, speaks calmly and explains each step helps her cooperate with treatment and reduces her work of breathing. Reassurance is given together with, never instead of, oxygen and the prescribed medicines.",
      sourceType: "derived_laq",
      sourceRef: "Part C(c) (nursing management of Patient X)",
      markingPoint: "Reassure the patient"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q53",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 3,
      questionNumberInSet: 14,
      questionType: "mcq",
      text: "Patient X has improved. Which findings best show that she is ready for discharge?",
      options: {
        A: "Wheeze has stopped for five minutes and she wants to leave",
        B: "Peak flow above 75% of best and inhaler technique checked",
        C: "Saturation above 90% only while she is on high-flow oxygen",
        D: "Respiratory rate of 28 with neck muscles still being used"
      },
      correctAnswer: "B",
      explanation: "Peak flow above 75% of best and inhaler technique checked (B) is correct because before discharge she should have been on her discharge medicines for 12 to 24 hours, have a peak expiratory flow above 75 percent of her best or predicted value, have her inhaler technique checked, and own a peak flow meter and a written asthma action plan. Wheeze has stopped for five minutes and she wants to leave (A) is incorrect because a short pause in wheeze does not show stable control and discharge needs objective measures such as peak flow. Saturation above 90% only while she is on high-flow oxygen (C) is incorrect because needing high-flow oxygen to keep the saturation up means she is still unwell. Respiratory rate of 28 with neck muscles still being used (D) is incorrect because a fast respiratory rate with accessory muscle use shows she is still in distress and not ready to go home.",
      sourceType: "derived_laq",
      sourceRef: "Part C(c) (nursing management of Patient X)",
      markingPoint: "Discharge criteria"
    },
    {
      id: "nhson-block1-jan2011-respiratory_q54",
      paperId: "nhson-block1-jan2011-respiratory",
      setNumber: 3,
      questionNumberInSet: 15,
      questionType: "mcq",
      text: "Which teaching best helps Patient X to prevent another attack after discharge?",
      options: {
        A: "Stop all inhalers as soon as the wheeze has settled for a full day",
        B: "Use the reliever inhaler only at bedtime and never during the day",
        C: "Avoid triggers, take preventers and follow a written action plan",
        D: "Stay indoors and avoid every kind of physical activity for life"
      },
      correctAnswer: "C",
      explanation: "Avoid triggers, take preventers and follow a written action plan (C) is correct because attacks are prevented by avoiding known triggers (such as smoke, dust, pollen and cold air), taking the prescribed preventer medicines regularly, carrying the reliever, and following a written asthma action plan that tells her what to do when symptoms worsen. Stop all inhalers as soon as the wheeze has settled for a full day (A) is incorrect because stopping inhalers when the wheeze settles lets the inflammation return. Use the reliever inhaler only at bedtime and never during the day (B) is incorrect because a reliever used only at bedtime leaves daytime symptoms untreated. Stay indoors and avoid every kind of physical activity for life (D) is incorrect because she does not need to avoid all activity because most people with controlled asthma can exercise.",
      sourceType: "derived_laq",
      sourceRef: "Part C(c) (nursing management of Patient X)",
      markingPoint: "Discharge education: triggers, preventers, action plan"
    }
  ]
};
