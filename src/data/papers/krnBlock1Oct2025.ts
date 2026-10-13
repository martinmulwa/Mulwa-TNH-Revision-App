/**
 * Mulwa Clinical Exam Portal
 * October 2025 End of Block Exam — Respiratory Disorders
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../../types';

export const KRN_BLOCK1_OCT2025_RESPIRATORY_DISORDERS: PastPaper = {
  id: "krn-block1-oct2025-respiratory-disorders",
  year: "2025",
  month: "October",
  examType: "End of Block",
  title: "October 2025 End of Block Exam",
  block: "Block 1",
  unit: "Respiratory Disorders",
  totalQuestions: 37,
  totalSets: 2,
  sets: [
    {
      setNumber: 1,
      title: "Set 1: Original Exam Questions",
      description: "The original MCQs and True/False questions from the October 2025 First Block Exam paper.",
      questionCount: 17
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
      id: "krn-block1-oct2025-respiratory-disorders_q1",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 1,
      questionType: "mcq",
      text: "A true statement about the lungs is:",
      options: {
        A: "The parietal pleura directly adheres to the surface of the lungs",
        B: "The visceral pleura lines the inner surface of the thorax",
        C: "The surfactant prevents the alveoli from collapsing",
        D: "During inhalation, the pressure in the lungs increases"
      },
      correctAnswer: "C",
      explanation: "The surfactant prevents the alveoli from collapsing (C) is correct because surfactant, made by type II alveolar cells, lowers the surface tension of the fluid lining the alveoli, so the tiny air sacs stay open at the end of expiration and the lungs inflate easily. Without it the alveoli collapse (atelectasis), as in respiratory distress syndrome of premature babies. The parietal pleura directly adhering to the lungs (A) is wrong because it is the visceral pleura that covers the lung surface. The visceral pleura lining the inner surface of the thorax (B) is wrong because the parietal pleura lines the chest wall. Pressure in the lungs increasing during inhalation (D) is wrong because the chest expands, the pressure inside the lungs falls below atmospheric pressure, and air flows in.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q1"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q2",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 2,
      questionType: "mcq",
      text: "The inability to breathe easily except in an upright position is:",
      options: {
        A: "Bradypnea",
        B: "Tachypnea",
        C: "Orthopnea",
        D: "Dyspnea"
      },
      correctAnswer: "C",
      explanation: "Orthopnea (C) is correct because it is breathlessness that occurs when lying flat and is relieved by sitting or standing upright, and it is often described by the number of pillows the patient needs. Bradypnea (A) is an abnormally slow respiratory rate (below 12 breaths per minute). Tachypnea (B) is an abnormally fast respiratory rate (above 20 breaths per minute). Dyspnea (D) is the general term for difficult or laboured breathing in any position, so it does not describe the position-dependent pattern.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q2"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q3",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 3,
      questionType: "mcq",
      text: "The breathing pattern characterized by increased depth and rate of breathing is:",
      options: {
        A: "Apnea",
        B: "Eupnea",
        C: "Hyperpnoea",
        D: "Apneustic"
      },
      correctAnswer: "C",
      explanation: "Hyperpnoea (C) is correct because it describes deep, rapid breathing that exceeds the body's usual needs, as seen with exercise, anxiety, fever, or metabolic acidosis (Kussmaul breathing). Apnea (A) is the absence of breathing. Eupnea (B) is normal quiet breathing. Apneustic breathing (D) is a prolonged gasping inspiration followed by a pause, caused by damage to the brainstem (pons). Some textbooks define hyperpnoea as an increase in depth only, but of the options given it is the best match.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q3"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q4",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 4,
      questionType: "mcq",
      text: "The type of chest deformity characterized by a depression in the lower part of the sternum is:",
      options: {
        A: "Barrel chest",
        B: "Kyphoscoliosis",
        C: "Pigeon chest",
        D: "Funnel chest"
      },
      correctAnswer: "D",
      explanation: "Funnel chest (D), also called pectus excavatum, is correct because the lower part of the sternum is sunken inwards, giving a hollow like a funnel. Barrel chest (A) is an increased front-to-back chest diameter from lung over-inflation in emphysema. Kyphoscoliosis (B) is a combined forward and sideways curvature of the spine. Pigeon chest (C), or pectus carinatum, is the opposite problem, where the sternum protrudes forward.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q4"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q5",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 5,
      questionType: "true_false",
      text: "True or False: An exudative effusion most commonly results from heart failure",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. A pleural effusion caused by heart failure is a transudate, because raised pressure in the veins and capillaries pushes watery, low-protein fluid into the pleural space. An exudative effusion is caused by inflammation or damage of the pleura or capillaries (for example pneumonia, tuberculosis, malignancy, or pulmonary embolism), which lets protein-rich, often cloudy fluid leak out. The correct statement is that a transudative effusion most commonly results from heart failure.",
      sourceType: "original_true_false",
      sourceRef: "Section A, Q5(a)"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q6",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 6,
      questionType: "true_false",
      text: "True or False: A transudate effusion is a filtrate of plasma that moves in intact capillaries",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "A",
      explanation: "TRUE. A transudate is a clear, low-protein fluid that is filtered out of intact capillaries when there is increased hydrostatic pressure (as in heart failure) or decreased plasma oncotic pressure (as in low albumin from liver cirrhosis or nephrotic syndrome). The capillary walls are not damaged, which is why the protein content stays low. In an exudate the capillary walls are damaged or leaky, so the fluid is rich in protein and cells.",
      sourceType: "original_true_false",
      sourceRef: "Section A, Q5(b)"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q7",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 7,
      questionType: "mcq",
      text: "Nurse Y performs a respiratory assessment on patient X, on auscultation the patient has deep low pitched rumbling sound that sounds like a snore. The nurse describes this as:",
      options: {
        A: "Rhonchi",
        B: "Wheezing",
        C: "Crackles",
        D: "Stridor"
      },
      correctAnswer: "A",
      explanation: "Rhonchi (A) is correct because rhonchi are low-pitched, continuous, snoring or rumbling sounds produced when air passes through large airways narrowed by thick secretions, and they may clear after coughing. Wheezing (B) is a high-pitched musical whistling sound from narrowed small airways, heard mainly on expiration. Crackles (C) are short, discontinuous popping or bubbling sounds from air opening fluid-filled or collapsed alveoli. Stridor (D) is a harsh high-pitched sound heard on inspiration from obstruction of the upper airway.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q6"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q8",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 8,
      questionType: "mcq",
      text: "The diagnostic investigation done to measure functional ability of the lung through measuring lung volumes and capacities is:",
      options: {
        A: "Pulse oximetry",
        B: "Bronchoscopy",
        C: "Pulmonary function tests",
        D: "Arterial blood gas studies"
      },
      correctAnswer: "C",
      explanation: "Pulmonary function tests (C) are correct because spirometry and related tests measure lung volumes, capacities and airflow (for example FVC, FEV1 and their ratio) to show how well the lungs work and to separate obstructive from restrictive disease. Pulse oximetry (A) measures only the oxygen saturation of haemoglobin. Bronchoscopy (B) allows direct viewing of the airways and the collection of samples. Arterial blood gas studies (D) measure oxygen, carbon dioxide, pH and bicarbonate in arterial blood, which shows gas exchange and acid-base status, not lung volumes.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q7"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q9",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 9,
      questionType: "mcq",
      text: "The indication of administering diuretics in pulmonary oedema is to:",
      options: {
        A: "Reduce inflammation of the lungs",
        B: "Improve oxygen diffusion across the alveoli",
        C: "Increase heart pumping force",
        D: "Remove excess fluid"
      },
      correctAnswer: "D",
      explanation: "Remove excess fluid (D) is correct because a diuretic such as furosemide makes the kidneys excrete water and sodium, which lowers the circulating volume and the pressure in the pulmonary capillaries, so fluid leaves the alveoli. Reducing inflammation (A) is the job of corticosteroids and is not the aim in cardiogenic pulmonary oedema. Improving oxygen diffusion (B) is a result of clearing the fluid and giving oxygen, but it is not the direct indication for the drug. Increasing the heart's pumping force (C) is the action of inotropes such as digoxin or dobutamine.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q8"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q10",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 10,
      questionType: "mcq",
      text: "A true statement regarding the pain in pleuritis is:",
      options: {
        A: "Pleuritic pain worsens when taking a deep breath, sneezing or coughing",
        B: "Lying on the unaffected side relieves the patient from pleuritic pain",
        C: "Pleuritic pain is deep and dull",
        D: "Pleuritic pain is diffuse in distribution"
      },
      correctAnswer: "A",
      explanation: "Pleuritic pain worsens when taking a deep breath, sneezing or coughing (A) is correct because the inflamed pleural layers rub against each other during chest movement, which causes sharp, stabbing pain that the patient controls by breathing shallowly. Lying on the unaffected side (B) is wrong because relief comes from lying on the affected side, which splints the inflamed pleura. Deep and dull pain (C) is wrong because pleuritic pain is sharp and superficial. Diffuse distribution (D) is wrong because the pain is usually well localised to the inflamed area.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q9"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q11",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 11,
      questionType: "mcq",
      text: "Nurse YY is sharing health messages about the intrinsic type of asthma. A correct statement shared by nurse YY is:",
      options: {
        A: "Patients usually have a history of earlier allergic conditions",
        B: "The attacks become more severe and frequent with time",
        C: "Children with this type of asthma recover with age especially in adolescence",
        D: "Patients usually have known allergies like pollens, animals, and food"
      },
      correctAnswer: "B",
      explanation: "The attacks become more severe and frequent with time (B) is correct because intrinsic (non-allergic) asthma usually begins in adult life, is triggered by respiratory infections, cold air, exercise, stress, smoke or drugs, and tends to progress with more severe and frequent attacks, often needing corticosteroids. A history of earlier allergic conditions (A) and known allergies to pollens, animals and food (D) describe extrinsic (allergic) asthma. Recovery with age, especially in adolescence (C), is also a feature of childhood allergic asthma and does not describe the intrinsic type.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q10"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q12",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 12,
      questionType: "mcq",
      text: "The type of pneumonia diagnosed within the first 48 hours of hospitalization is:",
      options: {
        A: "Aspiration pneumonia",
        B: "Pneumonia in immunocompromised host",
        C: "Community acquired pneumonia",
        D: "Hospital acquired pneumonia"
      },
      correctAnswer: "C",
      explanation: "Community acquired pneumonia (C) is correct because pneumonia that is present on admission or that appears within the first 48 hours of hospitalisation was acquired before or outside the hospital. Hospital acquired pneumonia (D) is defined as pneumonia that starts 48 hours or more after admission and was not incubating on admission, so it is the trap in this question. Aspiration pneumonia (A) is classified by the mechanism, the inhalation of stomach or oral contents. Pneumonia in an immunocompromised host (B) is classified by the weakened immunity of the patient. Neither is defined by the 48-hour timing.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q11"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q13",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 13,
      questionType: "mcq",
      text: "During expiration in a patient diagnosed with a flail chest, the fractured ribs:",
      options: {
        A: "Moves inwards and downwards",
        B: "Do not move",
        C: "Moves upward and outwards",
        D: "Moves downwards and outwards"
      },
      correctAnswer: "C",
      explanation: "Moves upward and outwards (C) is correct because the free flail segment moves in the opposite direction to the rest of the chest wall (paradoxical movement). During expiration the pressure inside the chest becomes more positive and pushes the loose segment outwards, while the rest of the chest wall moves inwards. Moves inwards and downwards (A) describes the segment during inspiration, when negative pressure sucks it in. Do not move (B) is wrong because the segment is not fixed. Moves downwards and outwards (D) is not the pattern in flail chest.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q12"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q14",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 14,
      questionType: "mcq",
      text: "A nurse is monitoring the drainage system of a patient on chest tube. On assessment she notes that the water in the water-seal chamber is neither rising with inhalation nor falling with exhalation. This situation can result from:",
      options: {
        A: "Air leakage",
        B: "Lung re-expansion",
        C: "Increased air in the pleural space",
        D: "Shoulder disuse"
      },
      correctAnswer: "B",
      explanation: "Lung re-expansion (B) is correct because the water level in the water-seal chamber moves with breathing only while there is a space in the pleura that is still changing pressure. When the lung has fully re-expanded and fills the pleural space, the swinging (tidaling) stops, so the drain may be ready for removal if there is no air leak and drainage has fallen. The nurse must also exclude a kinked or blocked tube or a drain that has moved out of the pleural space. Air leakage (A) causes bubbling in the water seal, not absence of movement. Increased air in the pleural space (C) causes bubbling or tidaling, not a still column. Shoulder disuse (D) is a complication of pain from the drain and does not affect the water seal.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q13"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q15",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 15,
      questionType: "mcq",
      text: "The surgical removal of an entire lung is:",
      options: {
        A: "Pneumonectomy",
        B: "Lobectomy",
        C: "Segmental resection",
        D: "Wedge resection"
      },
      correctAnswer: "A",
      explanation: "Pneumonectomy (A) is correct because it is the removal of an entire lung, usually for lung cancer or extensive disease. Lobectomy (B) removes one lobe. Segmental resection (C) removes one bronchopulmonary segment. Wedge resection (D) removes a small wedge-shaped piece of lung containing a localised lesion. The order of increasing tissue removed is wedge resection, segmental resection, lobectomy, pneumonectomy.",
      sourceType: "original_mcq",
      sourceRef: "Section A, Q14"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q16",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 16,
      questionType: "true_false",
      text: "True or False: In tension pneumothorax, air is drawn into the pleural space from a lacerated lung and it cannot be expelled during expiration",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "A",
      explanation: "TRUE. In tension pneumothorax the tear in the lung or chest wall acts as a one-way valve, so air enters the pleural space on inspiration but cannot escape on expiration. Pressure builds up, collapses the lung on that side, pushes the mediastinum to the opposite side, and compresses the heart and great veins, causing a rapid fall in blood pressure. This is a life-threatening emergency that needs immediate needle decompression followed by a chest drain.",
      sourceType: "original_true_false",
      sourceRef: "Section A, Q15(a)"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q17",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 1,
      questionNumberInSet: 17,
      questionType: "true_false",
      text: "True or False: In tension pneumothorax the trachea deviates to the affected side",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. The rising pressure in the affected side pushes the mediastinum and the trachea away from the affected side, towards the unaffected side. Tracheal deviation is a late sign, so the diagnosis is made clinically on severe breathlessness, absent breath sounds, hyperresonance and shock, without waiting for an X-ray. The trachea deviates towards the affected side in conditions that pull the mediastinum, such as lung collapse from atelectasis or fibrosis.",
      sourceType: "original_true_false",
      sourceRef: "Section A, Q15(b)"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q18",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 1,
      questionType: "mcq",
      text: "Which statement best describes the basic pathophysiology of asthma?",
      options: {
        A: "Permanent destruction of alveolar walls that causes fixed airflow obstruction",
        B: "Chronic inflammation of the airways with episodes of reversible airflow obstruction",
        C: "Bacterial infection of the alveoli that fills them with pus",
        D: "Collapse of a lung because air is trapped in the pleural space"
      },
      correctAnswer: "B",
      explanation: "Chronic inflammation of the airways with episodes of reversible airflow obstruction (B) is correct because asthma is a chronic inflammatory disorder in which the airways become overly sensitive and narrow repeatedly, and the narrowing often reverses by itself or with treatment. Permanent destruction of alveolar walls with fixed obstruction (A) describes emphysema. Bacterial infection of the alveoli with pus (C) describes bacterial pneumonia. Collapse of a lung from trapped air in the pleural space (D) describes pneumothorax.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (pathophysiology of asthma)",
      markingPoint: "Chronic inflammatory airway disease with reversible obstruction"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q19",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 2,
      questionType: "mcq",
      text: "After an allergic patient inhales pollen, which cells coated with IgE release histamine, leukotrienes and prostaglandins in the early-phase response?",
      options: {
        A: "Red blood cells",
        B: "Type II pneumocytes",
        C: "Platelets",
        D: "Mast cells"
      },
      correctAnswer: "D",
      explanation: "Mast cells (D) are correct because inhaled allergen binds to IgE attached to mast cells (and basophils) in the airway wall, which makes them degranulate and release histamine, leukotrienes and prostaglandins within minutes. These mediators cause bronchoconstriction, leaky capillaries and mucus secretion. Red blood cells (A) carry oxygen and do not release these mediators. Type II pneumocytes (B) make surfactant. Platelets (C) are involved in clotting.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (pathophysiology of asthma)",
      markingPoint: "Trigger exposure and mast cell mediator release"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q20",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 3,
      questionType: "mcq",
      text: "Which direct effect do histamine and leukotrienes have on the airways during an asthma attack?",
      options: {
        A: "Contraction of bronchial smooth muscle, causing bronchospasm",
        B: "Relaxation of bronchial smooth muscle, widening the airway",
        C: "Thinning of the mucus so that it is easily cleared",
        D: "Permanent loss of the cilia lining the airway"
      },
      correctAnswer: "A",
      explanation: "Contraction of bronchial smooth muscle, causing bronchospasm (A) is correct because these mediators make the muscle around the bronchi and bronchioles tighten, narrowing the airway lumen and raising resistance to airflow. Relaxation of the smooth muscle (B) is the effect of bronchodilators such as salbutamol, not of the mediators. Thinning of the mucus (C) is not an effect; the mucus becomes thicker. Permanent loss of cilia (D) is not the mechanism of an acute attack.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (pathophysiology of asthma)",
      markingPoint: "Bronchoconstriction (smooth muscle contraction)"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q21",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 4,
      questionType: "true_false",
      text: "True or False: The late-phase response in asthma develops several hours after allergen exposure and involves the arrival of inflammatory cells such as eosinophils into the airways.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "A",
      explanation: "TRUE. After the early phase, which begins within minutes, the airways enter a late phase some hours later. Eosinophils, T helper cells, neutrophils and basophils move into the airway wall and release more mediators, which keeps the inflammation and swelling going and can cause a second wave of airway narrowing. This is why corticosteroids that suppress inflammation are given in asthma, and why symptoms can return hours after an attack seems to have settled.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (pathophysiology of asthma)",
      markingPoint: "Early and late-phase response"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q22",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 5,
      questionType: "mcq",
      text: "Which change in the airways of a patient with asthma contributes to mucus plugging?",
      options: {
        A: "Reduced number of goblet cells in the airway lining",
        B: "Increased production of surfactant by the alveoli",
        C: "Increased mucus secretion from goblet cells together with inflammatory exudate",
        D: "Thinning of the basement membrane under the epithelium"
      },
      correctAnswer: "C",
      explanation: "Increased mucus secretion from goblet cells together with inflammatory exudate (C) is correct because inflammation stimulates the goblet cells and mucous glands to make more mucus, and this mixes with inflammatory cells and fluid to form thick plugs that block the small airways. Fewer goblet cells (A) would reduce mucus, which is the opposite. Surfactant (B) lowers surface tension in the alveoli and is not related to plugging. A thin basement membrane (D) is wrong, because the basement membrane thickens in chronic asthma.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (pathophysiology of asthma)",
      markingPoint: "Increased mucus secretion and plugging"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q23",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 6,
      questionType: "mcq",
      text: "Why does the airway lining swell during an asthma attack?",
      options: {
        A: "Because the alveoli fill with blood from a ruptured vessel",
        B: "Because inflammatory mediators make capillaries leak fluid into the airway wall",
        C: "Because the diaphragm contracts too forcefully",
        D: "Because the smooth muscle is replaced by fat tissue"
      },
      correctAnswer: "B",
      explanation: "Because inflammatory mediators make capillaries leak fluid into the airway wall (B) is correct because histamine and leukotrienes increase the permeability of the small blood vessels in the bronchial wall, so plasma leaks out and the mucosa swells (oedema), which narrows the lumen further. Bleeding into the alveoli (A) is not part of asthma. A forceful diaphragm (C) does not swell the airway lining. Replacement of smooth muscle by fat (D) does not occur; the smooth muscle actually increases in chronic asthma.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (pathophysiology of asthma)",
      markingPoint: "Mucosal oedema"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q24",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 7,
      questionType: "mcq",
      text: "Airway hyperresponsiveness in a patient with asthma means that the airways:",
      options: {
        A: "Never narrow even when exposed to allergens",
        B: "Are permanently narrowed and do not change with treatment",
        C: "Become infected by every cold virus in the community",
        D: "Narrow excessively in response to triggers that would not affect normal airways"
      },
      correctAnswer: "D",
      explanation: "Narrow excessively in response to triggers that would not affect normal airways (D) is correct because in asthma the inflamed airways are over-sensitive, so cold air, smoke, dust, exercise or strong smells can set off bronchospasm in a person with asthma while having no effect on someone with healthy lungs. Never narrowing (A) is the opposite. Permanent narrowing without response to treatment (B) is a feature of fixed obstruction in COPD, not of typical asthma. Infection by every cold virus (C) confuses sensitivity to triggers with susceptibility to infection.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (pathophysiology of asthma)",
      markingPoint: "Airway hyperresponsiveness"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q25",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 8,
      questionType: "true_false",
      text: "True or False: In an acute asthma attack, the narrowing of the airways is caused only by contraction of the smooth muscle, without any swelling of the airway lining or mucus.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. Airway narrowing in asthma has three main parts that act together: contraction of the bronchial smooth muscle (bronchospasm), swelling of the airway lining because of inflammation and leaking capillaries, and thick mucus plugs from increased secretion. This is why treatment uses a bronchodilator for the smooth muscle, corticosteroids for the inflammation and swelling, and good hydration to loosen mucus. The correct statement is that smooth muscle spasm, mucosal oedema and mucus plugging all contribute.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (pathophysiology of asthma)",
      markingPoint: "Components of airway narrowing"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q26",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 9,
      questionType: "mcq",
      text: "Why is wheeze heard mainly during expiration in an asthma attack, and why does air become trapped in the lungs?",
      options: {
        A: "Airways narrow further during expiration, so air escapes slowly through narrow passages and is trapped behind them",
        B: "Airways widen during expiration, so air rushes out noisily",
        C: "The alveoli collapse completely during inspiration",
        D: "The diaphragm stops moving during expiration"
      },
      correctAnswer: "A",
      explanation: "Airways narrow further during expiration, so air escapes slowly through narrow passages and is trapped behind them (A) is correct because during expiration the pressure around the airways rises and compresses airways that are already narrowed, so the airflow through them produces a whistling wheeze, and the lungs cannot empty fully, causing air trapping and hyperinflation. The patient has to work harder to breathe, and uneven ventilation and blood flow lowers the oxygen level in the blood. Airways widening during expiration (B) is the opposite. Complete alveolar collapse during inspiration (C) and a stopped diaphragm (D) do not describe the mechanism.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (pathophysiology of asthma)",
      markingPoint: "Airflow obstruction, air trapping and V/Q mismatch"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q27",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 10,
      questionType: "mcq",
      text: "Which statement describes airway remodelling in long-standing, poorly controlled asthma?",
      options: {
        A: "The airways become permanently wider with thin walls",
        B: "Repeated inflammation thickens the airway wall and smooth muscle, and can cause persistent airflow obstruction",
        C: "The alveolar walls fuse to form large air spaces",
        D: "The pleura becomes inflamed and fills with fluid"
      },
      correctAnswer: "B",
      explanation: "Repeated inflammation thickens the airway wall and smooth muscle, and can cause persistent airflow obstruction (B) is correct because long-term inflammation makes the basement membrane thicker, increases collagen and the amount of smooth muscle, and enlarges the mucous glands, so the airway stays narrow even between attacks. Permanently wide, thin-walled airways (A) describe bronchiectasis. Fused alveolar walls forming large air spaces (C) describe emphysema. An inflamed, fluid-filled pleura (D) describes pleurisy with effusion.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q1 (pathophysiology of asthma)",
      markingPoint: "Airway remodelling in chronic asthma"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q28",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 11,
      questionType: "mcq",
      text: "Why does the nurse monitor respiratory rate and oxygen saturation so closely after a pneumonectomy?",
      options: {
        A: "The remaining lung grows quickly and its size needs to be measured",
        B: "Oxygen levels normally rise sharply once the diseased lung is removed",
        C: "Only one lung remains to supply oxygen, so any problem can quickly cause hypoxaemia",
        D: "The saturation reading controls the amount of suction on the chest drain"
      },
      correctAnswer: "C",
      explanation: "Only one lung remains to supply oxygen, so any problem can quickly cause hypoxaemia (C) is correct because after a pneumonectomy there is no reserve, so even small problems such as secretions, atelectasis or fluid in the remaining lung can lower the oxygen level quickly. The nurse therefore watches respiratory rate, oxygen saturation, breath sounds and colour, and gives oxygen as prescribed. The remaining lung growing quickly (A) is not what is being checked. A sharp rise in oxygen after surgery (B) is not expected. Saturation controlling drain suction (D) is not how a chest drain works.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (nursing care post pneumonectomy)",
      markingPoint: "Monitor respiratory status and oxygen saturation"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q29",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 12,
      questionType: "mcq",
      text: "Which statement about the chest drain after a pneumonectomy is correct?",
      options: {
        A: "It is connected to high suction to re-expand the removed lung",
        B: "It is stripped regularly to keep clots moving",
        C: "It is clamped continuously until the patient is discharged",
        D: "It is not routinely connected to suction and mainly serves to vent air and detect bleeding"
      },
      correctAnswer: "D",
      explanation: "It is not routinely connected to suction and mainly serves to vent air and detect bleeding (D) is correct because there is no lung left on that side to re-expand, so the empty space is allowed to fill gradually, and strong suction could pull the heart and other chest structures towards the operated side. The drain is there to let air escape and to show bleeding. The exact regimen, including any brief clamping and release, is set by the surgeon, and the nurse must not alter it without an order. A drain connected to high suction (A) is wrong. Regular stripping (B) creates dangerous pressure swings. Continuous clamping until discharge (C) is wrong because a drain is never clamped for long periods.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (nursing care post pneumonectomy)",
      markingPoint: "Chest drain management after pneumonectomy"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q30",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 13,
      questionType: "true_false",
      text: "True or False: After a pneumonectomy, the nurse positions the patient as ordered by the surgeon, because incorrect positioning can contribute to mediastinal shift and compression of the remaining lung.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "A",
      explanation: "TRUE. The empty space left by the removed lung can allow the heart, trachea and great vessels to drift towards the operated side, and the wrong position can also compress the remaining lung or force air through the wound. Many nursing texts teach lying on the back or on the operated side and avoiding turning fully onto the unoperated side, but practice varies between surgeons and units, so the nurse follows the surgeon's written positioning order and turns the patient only as directed.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (nursing care post pneumonectomy)",
      markingPoint: "Positioning guided by surgeon to prevent mediastinal shift"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q31",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 14,
      questionType: "mcq",
      text: "Six hours after a pneumonectomy, a patient develops sudden severe breathlessness and restlessness, and the trachea is felt to be deviated from the midline. What is the most likely cause?",
      options: {
        A: "Hospital-acquired pneumonia",
        B: "Mediastinal shift into the empty chest space",
        C: "Wound infection",
        D: "Dehydration from fasting"
      },
      correctAnswer: "B",
      explanation: "Mediastinal shift into the empty chest space (B) is correct because the heart, trachea and great vessels can move into the space left by the removed lung and compress the remaining lung, causing sudden breathlessness, restlessness and tracheal deviation. This is an emergency, and the nurse must call the surgeon immediately. Hospital-acquired pneumonia (A) develops after 48 hours with fever and cough. Wound infection (C) develops over several days. Dehydration (D) does not cause tracheal deviation.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (nursing care post pneumonectomy)",
      markingPoint: "Observe for mediastinal shift"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q32",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 15,
      questionType: "mcq",
      text: "Why is intravenous fluid intake carefully limited after a pneumonectomy?",
      options: {
        A: "The single remaining lung is easily overloaded and can develop pulmonary oedema",
        B: "The kidneys stop working when a lung is removed",
        C: "Fluids make the surgical wound heal more slowly",
        D: "The chest drain cannot remove any fluid from the body"
      },
      correctAnswer: "A",
      explanation: "The single remaining lung is easily overloaded and can develop pulmonary oedema (A) is correct because all the blood from the right heart must pass through one lung, which raises pressure and capillary leakiness, so extra fluid easily floods the alveoli. The nurse keeps a strict fluid balance chart, avoids rapid infusions, and watches for crackles and breathlessness. The kidneys stopping when a lung is removed (B) is not true. Fluids slowing wound healing (C) is not the reason. A chest drain's inability to remove body fluid (D) is not relevant to fluid balance.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (nursing care post pneumonectomy)",
      markingPoint: "Restrict and monitor fluid intake"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q33",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 16,
      questionType: "true_false",
      text: "True or False: Rapid intravenous fluid boluses are the preferred way to treat low blood pressure after a pneumonectomy.",
      options: {
        A: "True",
        B: "False"
      },
      correctAnswer: "B",
      explanation: "FALSE. Giving large fluid boluses to a patient with only one lung can overload the lung and cause pulmonary oedema, because the lung must cope with the whole blood flow. Low blood pressure is therefore assessed for its cause, such as bleeding, pain, arrhythmia or anaesthetic effects, and is treated as the doctor orders, usually with careful, small fluid volumes or medicines. The correct statement is that fluids are given cautiously and the fluid balance is kept neutral or slightly negative.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (nursing care post pneumonectomy)",
      markingPoint: "Avoid fluid overload; do not treat low blood pressure with boluses"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q34",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 17,
      questionType: "mcq",
      text: "Why is effective pain relief important after a pneumonectomy?",
      options: {
        A: "It makes the patient sleep through the first week of recovery",
        B: "It lowers the temperature of the surgical wound",
        C: "It reduces the amount of drainage from the chest drain",
        D: "It allows the patient to breathe deeply, cough and move, which prevents atelectasis and chest infection"
      },
      correctAnswer: "D",
      explanation: "It allows the patient to breathe deeply, cough and move, which prevents atelectasis and chest infection (D) is correct because pain from the chest wound makes patients breathe shallowly and avoid coughing, so secretions collect in the only remaining lung. Giving analgesia as prescribed, especially before physiotherapy, therefore protects breathing. Making the patient sleep for a week (A) is wrong because the patient needs to be awake enough to cooperate. Lowering wound temperature (B) is not an effect of analgesia. Reducing drainage (C) is not an effect of analgesia either.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (nursing care post pneumonectomy)",
      markingPoint: "Pain control to allow breathing and coughing"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q35",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 18,
      questionType: "mcq",
      text: "Which nursing action best helps to prevent atelectasis and chest infection after a pneumonectomy?",
      options: {
        A: "Keeping the patient flat and still for three days",
        B: "Discouraging coughing so that the wound stays dry",
        C: "Encouraging deep breathing, supported coughing, incentive spirometry and early mobilisation",
        D: "Withholding all fluids and food for one week"
      },
      correctAnswer: "C",
      explanation: "Encouraging deep breathing, supported coughing, incentive spirometry and early mobilisation (C) is correct because these measures expand the remaining lung, clear secretions and reduce the risk of collapse and infection, and they are done after pain relief and with the wound supported. Keeping the patient flat and still (A) lets secretions collect. Discouraging coughing (B) leaves secretions in the only lung. Withholding all fluids and food for a week (D) harms recovery and healing.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (nursing care post pneumonectomy)",
      markingPoint: "Deep breathing, coughing and early mobilisation"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q36",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 19,
      questionType: "mcq",
      text: "Why does the nurse teach regular arm and shoulder exercises on the operated side after a pneumonectomy?",
      options: {
        A: "To increase the size of the remaining lung",
        B: "To prevent a stiff, painful shoulder caused by the surgery and by guarding the arm",
        C: "To stop the chest drain from bubbling",
        D: "To raise the blood pressure"
      },
      correctAnswer: "B",
      explanation: "To prevent a stiff, painful shoulder caused by the surgery and by guarding the arm (B) is correct because the chest incision cuts through muscles around the shoulder, and pain makes patients keep the arm still, which leads to stiffness and a frozen shoulder. Gentle range-of-motion exercises, started early with pain relief, keep the joint mobile. Enlarging the remaining lung (A), stopping drain bubbling (C) and raising blood pressure (D) are not effects of arm exercises.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (nursing care post pneumonectomy)",
      markingPoint: "Arm and shoulder exercises"
    },
    {
      id: "krn-block1-oct2025-respiratory-disorders_q37",
      paperId: "krn-block1-oct2025-respiratory-disorders",
      setNumber: 2,
      questionNumberInSet: 20,
      questionType: "mcq",
      text: "Four hours after a pneumonectomy, a patient has a sudden increase of bright red drainage in the chest drain, a falling blood pressure and a rising pulse rate. What is the most likely problem?",
      options: {
        A: "Bleeding (haemorrhage) into the chest",
        B: "Bronchopleural fistula",
        C: "Pulmonary oedema",
        D: "Superficial wound infection"
      },
      correctAnswer: "A",
      explanation: "Bleeding (haemorrhage) into the chest (A) is correct because a sudden rise in bright red drainage together with a falling blood pressure and rising pulse indicates blood loss and hypovolaemic shock. The nurse reports to the surgeon immediately, monitors vital signs and drainage closely, and prepares for resuscitation or return to theatre. Bronchopleural fistula (B) is a breakdown of the airway stump that usually shows later as an air leak. Pulmonary oedema (C) shows as breathlessness and frothy sputum, not red drainage. A superficial wound infection (D) takes days to develop.",
      sourceType: "derived_saq",
      sourceRef: "Section B, Q2 (nursing care post pneumonectomy)",
      markingPoint: "Monitor for bleeding and other complications"
    }
  ]
};
