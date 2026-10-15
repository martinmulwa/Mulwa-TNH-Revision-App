/**
 * Mulwa Clinical Exam Portal
 * TNH Practice Exam — Traumatic Conditions (Respiratory Disorders)
 * Chest Trauma, Rib/Sternal Fractures, Flail Chest, Pneumothorax, Haemothorax & Underwater Seal Drainage
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../../types';

export const TNH_PRACTICE_TRAUMATIC_CONDITIONS: PastPaper = {
  id: "tnh-respiratory-disorders-traumatic-conditions",
  year: "Practice",
  month: "",
  examType: "Practice",
  title: "TNH Practice: Traumatic Conditions",
  category: "Respiratory Disorders",
  block: "TNH Practice",
  unit: "Traumatic Conditions",
  totalQuestions: 60,
  totalSets: 2,
  sets: [
    {
      setNumber: 1,
      title: "Set 1: Knowledge and Recall",
      description: "30 MCQs testing definitions, causes, pathophysiology, clinical manifestations and assessment findings from the lecture notes on chest trauma, rib and sternal fractures, flail chest, penetrating trauma, pneumothorax and haemothorax.",
      questionCount: 30
    },
    {
      setNumber: 2,
      title: "Set 2: Application and Clinical Scenarios",
      description: "30 MCQs testing management, nursing care, complications and clinical scenarios from the same lecture notes on chest trauma, flail chest, penetrating trauma, emergency management, pneumothorax, haemothorax and underwater seal drainage.",
      questionCount: 30
    }
  ],
  questions: [
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q1",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 1,
      questionType: "mcq",
      text: "Chest trauma is best described as:",
      options: {
        A: "An injury to the chest caused only by gunshot or stab wounds",
        B: "Entry of air into the pleural space through a breach of the pleura",
        C: "A collection of blood within the pleural cavity",
        D: "Any trauma to the chest, which may be blunt or penetrating"
      },
      correctAnswer: "D",
      explanation: "Any trauma to the chest, which may be blunt or penetrating (D) is correct because chest trauma refers to any injury to the chest, and it is classified as blunt or penetrating depending on how the chest wall is injured. An injury to the chest caused only by gunshot or stab wounds (A) is incorrect because this describes penetrating chest trauma only, whereas chest trauma also includes blunt injuries. Entry of air into the pleural space through a breach of the pleura (B) is incorrect because this describes pneumothorax, which is an outcome of chest injury and not the definition of chest trauma. A collection of blood within the pleural cavity (C) is incorrect because this describes haemothorax, which is an outcome of chest injury and not the definition of chest trauma.",
      sourceType: "lecture_notes",
      sourceRef: "Chest trauma: definition",
      markingPoint: "Any trauma to the chest; blunt or penetrating"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q2",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 2,
      questionType: "mcq",
      text: "Which statement about blunt chest trauma is correct?",
      options: {
        A: "It is less common than penetrating trauma, and gunshot wounds are its main cause",
        B: "It is more common than penetrating trauma, and motor vehicle crashes are its most common cause",
        C: "It results from stab wounds that breach the chest wall and enter the pleural cavity",
        D: "It is a rare injury that follows only a spontaneous breach of the visceral pleura"
      },
      correctAnswer: "B",
      explanation: "It is more common than penetrating trauma, and motor vehicle crashes are its most common cause (B) is correct because blunt chest trauma results from sudden compression or positive pressure inflicted on the chest wall, it is more common than penetrating trauma, and motor vehicle crashes are the most common cause. It is less common than penetrating trauma, and gunshot wounds are its main cause (A) is incorrect because gunshot and stab wounds are the most common causes of penetrating trauma, which is the less common type. It results from stab wounds that breach the chest wall and enter the pleural cavity (C) is incorrect because a stab wound breaches the chest wall and therefore causes penetrating trauma, not blunt trauma. It is a rare injury that follows only a spontaneous breach of the visceral pleura (D) is incorrect because blunt chest trauma is common, and a spontaneous breach of the pleura is associated with simple (spontaneous) pneumothorax.",
      sourceType: "lecture_notes",
      sourceRef: "Blunt chest injuries: causes",
      markingPoint: "More common than penetrating; motor vehicle crashes most common cause"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q3",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 3,
      questionType: "mcq",
      text: "Blunt chest injuries are often life-threatening because they can result in:",
      options: {
        A: "Hypoxaemia, hypovolaemia or cardiac failure",
        B: "Hypercalcaemia, polycythaemia or hepatic failure",
        C: "Hypernatraemia, hyperglycaemia or renal failure",
        D: "Hypertension, hypervolaemia or bronchospasm"
      },
      correctAnswer: "A",
      explanation: "Hypoxaemia, hypovolaemia or cardiac failure (A) is correct because blunt chest injuries result in one or more of these pathologic states, which is why they are often life-threatening. Hypercalcaemia, polycythaemia or hepatic failure (B) is incorrect because these are not the pathologic states produced by blunt chest injury, which causes impaired oxygenation, blood loss and cardiac compromise. Hypernatraemia, hyperglycaemia or renal failure (C) is incorrect because these are not the pathologic states produced by blunt chest injury; the lecture notes list hypoxaemia, hypovolaemia and cardiac failure. Hypertension, hypervolaemia or bronchospasm (D) is incorrect because blunt chest injury is associated with blood loss (hypovolaemia), not fluid excess, and bronchospasm is a feature of asthma.",
      sourceType: "lecture_notes",
      sourceRef: "Blunt chest injuries: pathophysiology",
      markingPoint: "Hypoxaemia, hypovolaemia, cardiac failure"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q4",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 4,
      questionType: "mcq",
      text: "The mechanism of blunt chest trauma in which there is a sudden decrease in speed or velocity, as in a motor vehicle crash, is:",
      options: {
        A: "Acceleration",
        B: "Deceleration",
        C: "Shearing",
        D: "Compression"
      },
      correctAnswer: "B",
      explanation: "Deceleration (B) is correct because deceleration is the sudden decrease in the rate of speed or velocity, such as in a motor vehicle crash. Acceleration (A) is incorrect because acceleration occurs when a moving object hits the chest or the patient is thrown into an object. Shearing (C) is incorrect because shearing involves stretching forces on areas of the chest that cause tears, ruptures or dissections. Compression (D) is incorrect because compression is a direct blow to the chest, such as a crush injury.",
      sourceType: "lecture_notes",
      sourceRef: "Blunt chest injuries: mechanisms",
      markingPoint: "Deceleration: sudden decrease in speed or velocity"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q5",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 5,
      questionType: "mcq",
      text: "Which mechanism of blunt chest trauma is correctly matched with its description?",
      options: {
        A: "Acceleration: a sudden decrease in speed, as in a motor vehicle crash",
        B: "Compression: stretching forces that tear or rupture areas of the chest",
        C: "Deceleration: a direct blow to the chest, such as a crush injury",
        D: "Shearing: stretching forces on areas of the chest that cause tears, ruptures or dissections"
      },
      correctAnswer: "D",
      explanation: "Shearing: stretching forces on areas of the chest that cause tears, ruptures or dissections (D) is correct because shearing refers to stretching forces applied to areas of the chest, which cause tears, ruptures or dissections. Acceleration: a sudden decrease in speed, as in a motor vehicle crash (A) is incorrect because a sudden decrease in speed is deceleration, whereas acceleration is a moving object hitting the chest or the patient being thrown into an object. Compression: stretching forces that tear or rupture areas of the chest (B) is incorrect because stretching forces that cause tears are shearing, whereas compression is a direct blow to the chest, such as a crush injury. Deceleration: a direct blow to the chest, such as a crush injury (C) is incorrect because a direct blow such as a crush injury is compression, whereas deceleration is a sudden decrease in speed or velocity.",
      sourceType: "lecture_notes",
      sourceRef: "Blunt chest injuries: mechanisms",
      markingPoint: "Acceleration, deceleration, shearing, compression defined"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q6",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 6,
      questionType: "mcq",
      text: "Which investigation is done in blunt chest trauma specifically to detect possible cardiac injury caused by the impact?",
      options: {
        A: "Complete blood count",
        B: "Arterial blood gas analysis",
        C: "Electrocardiogram (ECG)",
        D: "Oxygen saturation monitoring"
      },
      correctAnswer: "C",
      explanation: "Electrocardiogram (ECG) (C) is correct because an ECG is done to detect possible cardiac injury caused by the impact of blunt chest trauma. Complete blood count (A) is incorrect because a complete blood count assesses the blood cells and helps to detect blood loss, but it does not detect cardiac injury. Arterial blood gas analysis (B) is incorrect because blood gas analysis assesses oxygenation, ventilation and acid-base balance, not cardiac injury. Oxygen saturation monitoring (D) is incorrect because oxygen saturation shows how well the blood is oxygenated and does not show injury to the heart.",
      sourceType: "lecture_notes",
      sourceRef: "Blunt chest injuries: assessment and diagnostic findings",
      markingPoint: "ECG detects possible cardiac injury"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q7",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 7,
      questionType: "mcq",
      text: "Which ribs are the most common sites of rib fractures?",
      options: {
        A: "The first through third ribs",
        B: "The tenth through twelfth ribs",
        C: "The third and fourth ribs only",
        D: "The fifth through ninth ribs"
      },
      correctAnswer: "D",
      explanation: "The fifth through ninth ribs (D) is correct because the fifth through ninth ribs are the most common sites of fractures, and most of these fractures are benign and treated conservatively. The first through third ribs (A) is incorrect because fractures of the first three ribs are rare, but they carry a high mortality rate because of laceration of the subclavian artery or vein. The tenth through twelfth ribs (B) is incorrect because fractures of the lower ribs are associated with injury to the spleen and liver, but they are not the most common sites. The third and fourth ribs only (C) is incorrect because fractures of the upper ribs, the first three in particular, are rare, and the fifth through ninth ribs are the common sites.",
      sourceType: "lecture_notes",
      sourceRef: "Sternal and rib fractures: sites",
      markingPoint: "Fifth through ninth ribs most common"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q8",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 8,
      questionType: "mcq",
      text: "Fractures of the first three ribs carry a high mortality rate because they are associated with:",
      options: {
        A: "Injury to the spleen and the liver",
        B: "Laceration of the subclavian artery or vein",
        C: "Formation of a free-floating chest wall segment",
        D: "Entry of air into the pleural space under pressure"
      },
      correctAnswer: "B",
      explanation: "Laceration of the subclavian artery or vein (B) is correct because fractures of the first three ribs are rare, but they can lacerate the subclavian artery or vein, which explains the high mortality rate. Injury to the spleen and the liver (A) is incorrect because injury to the spleen and liver is associated with fractures of the lower ribs. Formation of a free-floating chest wall segment (C) is incorrect because a free-floating segment forms in flail chest, when three or more adjacent ribs are fractured at two or more sites. Entry of air into the pleural space under pressure (D) is incorrect because air entering the pleural space under pressure is tension pneumothorax, which is not the reason for the high mortality of upper rib fractures.",
      sourceType: "lecture_notes",
      sourceRef: "Sternal and rib fractures: sites",
      markingPoint: "First three ribs: subclavian artery or vein laceration"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q9",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 9,
      questionType: "mcq",
      text: "Fractures of the lower ribs are associated with injury to the:",
      options: {
        A: "Subclavian artery and vein",
        B: "Heart and great vessels",
        C: "Spleen and liver",
        D: "Oesophagus and tracheobronchial tree"
      },
      correctAnswer: "C",
      explanation: "Spleen and liver (C) is correct because fractures of the lower ribs are associated with injury to the spleen and liver, so these organs must be considered when the lower ribs are fractured. Subclavian artery and vein (A) is incorrect because laceration of the subclavian artery or vein is associated with fractures of the first three ribs. Heart and great vessels (B) is incorrect because wounds of the heart and great vessels are a concern in penetrating trauma, and they are not the injuries linked with lower rib fractures. Oesophagus and tracheobronchial tree (D) is incorrect because these structures are injured by penetrating wounds that need surgery, and they are not the organs linked with lower rib fractures.",
      sourceType: "lecture_notes",
      sourceRef: "Sternal and rib fractures: sites",
      markingPoint: "Lower ribs: spleen and liver injury"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q10",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 10,
      questionType: "mcq",
      text: "Sternal fractures are most common in:",
      options: {
        A: "Motor vehicle crashes, when the sternum receives a direct blow from the steering wheel",
        B: "Gunshot wounds, when a bullet penetrates the front of the chest",
        C: "Prolonged coughing in patients with long-standing lung disease",
        D: "Chest tube insertion into the pleural space of a stable patient"
      },
      correctAnswer: "A",
      explanation: "Motor vehicle crashes, when the sternum receives a direct blow from the steering wheel (A) is correct because sternal fractures are most common in motor vehicle crashes in which there is a direct blow to the sternum via the steering wheel. Gunshot wounds, when a bullet penetrates the front of the chest (B) is incorrect because gunshot wounds cause penetrating trauma, whereas sternal fractures are typically caused by a direct blunt blow. Prolonged coughing in patients with long-standing lung disease (C) is incorrect because sternal fractures are not typically caused by coughing but by a direct blow to the sternum. Chest tube insertion into the pleural space of a stable patient (D) is incorrect because chest tube insertion is a treatment for pneumothorax and haemothorax and is not the usual cause of sternal fracture.",
      sourceType: "lecture_notes",
      sourceRef: "Sternal and rib fractures: causes",
      markingPoint: "Sternal fracture: steering wheel direct blow in motor vehicle crashes"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q11",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 11,
      questionType: "mcq",
      text: "Which manifestations are typical of sternal and rib fractures?",
      options: {
        A: "A sucking sound at the chest wall, with mediastinal flutter and respiratory distress",
        B: "Air hunger, hypotension, cyanosis and marked tachycardia from air trapped under pressure",
        C: "Productive cough, fever, wheezing and a prolonged expiratory phase after the injury",
        D: "Anterior chest pain that is aggravated by coughing, deep breathing and movement, with tenderness, ecchymosis and crepitus"
      },
      correctAnswer: "D",
      explanation: "Anterior chest pain that is aggravated by coughing, deep breathing and movement, with tenderness, ecchymosis and crepitus (D) is correct because anterior chest pain, tenderness, ecchymosis, crepitus, swelling and possible chest wall deformity are typical, and the pain is aggravated by coughing, deep breathing and movement. A sucking sound at the chest wall, with mediastinal flutter and respiratory distress (A) is incorrect because a sucking sound and mediastinal flutter are features of open pneumothorax. Air hunger, hypotension, cyanosis and marked tachycardia from air trapped under pressure (B) is incorrect because these are acute features of tension pneumothorax. Productive cough, fever, wheezing and a prolonged expiratory phase after the injury (C) is incorrect because these are features of airway disease or infection and are not listed manifestations of sternal and rib fractures.",
      sourceType: "lecture_notes",
      sourceRef: "Sternal and rib fractures: clinical manifestations",
      markingPoint: "Chest pain, tenderness, ecchymosis, crepitus; pain on coughing, breathing, movement"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q12",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 12,
      questionType: "mcq",
      text: "A crackling, grating sound heard in the thorax on auscultation of a patient with a rib fracture is called:",
      options: {
        A: "Subcutaneous crepitus",
        B: "Tidaling",
        C: "Mediastinal flutter",
        D: "Pendelluft"
      },
      correctAnswer: "A",
      explanation: "Subcutaneous crepitus (A) is correct because a crackling, grating sound in the thorax on auscultation is subcutaneous crepitus, which is an expected physical finding in sternal and rib fractures. Tidaling (B) is incorrect because tidaling is the rise and fall of the water in the water-seal chamber of a chest drainage system with breathing. Mediastinal flutter (C) is incorrect because mediastinal flutter is the shift of the heart and great vessels with each breath in open pneumothorax. Pendelluft (D) is incorrect because pendelluft, or paradoxical breathing, is the movement of a flail segment in the opposite direction to the rest of the chest wall.",
      sourceType: "lecture_notes",
      sourceRef: "Sternal and rib fractures: assessment and diagnostic findings",
      markingPoint: "Subcutaneous crepitus: crackling, grating sound on auscultation"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q13",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 13,
      questionType: "mcq",
      text: "Flail chest occurs when:",
      options: {
        A: "Three or more adjacent ribs are fractured at two or more sites, leaving a free-floating, unstable segment",
        B: "Three or more adjacent ribs are fractured at a single site only",
        C: "The sternum is fractured by a direct blow from the steering wheel",
        D: "A single rib is fractured and the fracture heals within three to six weeks"
      },
      correctAnswer: "A",
      explanation: "Three or more adjacent ribs are fractured at two or more sites, leaving a free-floating, unstable segment (A) is correct because flail chest usually occurs when multiple contiguous ribs are fractured at two or more sites, so that a segment of the chest wall is detached and unstable; it is an emergency condition. Three or more adjacent ribs are fractured at a single site only (B) is incorrect because a fracture at only one site does not detach a segment, and flail chest needs fractures at two or more sites. The sternum is fractured by a direct blow from the steering wheel (C) is incorrect because this describes a sternal fracture, which is not the same as the detached rib segment of flail chest. A single rib is fractured and the fracture heals within three to six weeks (D) is incorrect because a single rib fracture is usually benign and treated conservatively, and it does not produce a free-floating segment.",
      sourceType: "lecture_notes",
      sourceRef: "Flail chest: definition",
      markingPoint: "Three or more adjacent ribs fractured at two or more sites; emergency"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q14",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 14,
      questionType: "mcq",
      text: "Flail chest is frequently a complication of blunt chest trauma from:",
      options: {
        A: "A gunshot wound to the chest wall",
        B: "A steering wheel injury",
        C: "A stab wound that penetrates the pleura",
        D: "A spontaneous breach of the visceral pleura"
      },
      correctAnswer: "B",
      explanation: "A steering wheel injury (B) is correct because flail chest is frequently a complication of blunt chest trauma from a steering wheel injury. A gunshot wound to the chest wall (A) is incorrect because a gunshot wound is a cause of penetrating trauma, such as open pneumothorax. A stab wound that penetrates the pleura (C) is incorrect because a stab wound is a cause of penetrating trauma, not the typical cause of flail chest. A spontaneous breach of the visceral pleura (D) is incorrect because a spontaneous breach of the pleura is associated with simple (spontaneous) pneumothorax.",
      sourceType: "lecture_notes",
      sourceRef: "Flail chest: causes",
      markingPoint: "Complication of blunt trauma, e.g. steering wheel injury"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q15",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 15,
      questionType: "mcq",
      text: "In flail chest, paradoxical breathing means that the detached segment:",
      options: {
        A: "Is sucked inward during inhalation and bulges outward during exhalation",
        B: "Bulges outward during inhalation and moves inward during exhalation, like the rest of the chest wall",
        C: "Moves inward during both inhalation and exhalation",
        D: "Stays fixed while the rest of the chest wall moves normally"
      },
      correctAnswer: "A",
      explanation: "Is sucked inward during inhalation and bulges outward during exhalation (A) is correct because the flail segment moves in the opposite direction to the rest of the chest wall, being sucked inward during inhalation and bulging outward during exhalation. Bulges outward during inhalation and moves inward during exhalation, like the rest of the chest wall (B) is incorrect because this is normal chest wall movement, whereas the flail segment moves in the opposite direction. Moves inward during both inhalation and exhalation (C) is incorrect because the segment moves in opposite directions in the two phases of breathing, and not inward in both. Stays fixed while the rest of the chest wall moves normally (D) is incorrect because the segment is detached and unstable, so it moves with the pressure changes of breathing.",
      sourceType: "lecture_notes",
      sourceRef: "Flail chest: pathophysiology",
      markingPoint: "Paradoxical breathing/pendelluft: segment sucks in on inhalation, bulges out on exhalation"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q16",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 16,
      questionType: "mcq",
      text: "The paradoxical movement of a flail segment results in:",
      options: {
        A: "Reduced dead space, improved alveolar ventilation and increased compliance",
        B: "Increased dead space, reduced alveolar ventilation and decreased compliance",
        C: "A sucking sound at the chest wall and mediastinal flutter",
        D: "Air trapped under pressure with reduced return of blood to the heart"
      },
      correctAnswer: "B",
      explanation: "Increased dead space, reduced alveolar ventilation and decreased compliance (B) is correct because paradoxical movement increases dead space, reduces alveolar ventilation and decreases compliance, which impairs breathing and usually causes severe respiratory distress. Reduced dead space, improved alveolar ventilation and increased compliance (A) is incorrect because the effects are the opposite, because the unstable segment impairs ventilation. A sucking sound at the chest wall and mediastinal flutter (C) is incorrect because these are features of open pneumothorax, in which air passes through a wound in the chest wall. Air trapped under pressure with reduced return of blood to the heart (D) is incorrect because this describes tension pneumothorax and not the effect of a flail segment.",
      sourceType: "lecture_notes",
      sourceRef: "Flail chest: pathophysiology",
      markingPoint: "Increased dead space, reduced alveolar ventilation, decreased compliance"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q17",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 17,
      questionType: "mcq",
      text: "Which problems frequently accompany flail chest?",
      options: {
        A: "Bronchospasm and wheezing from airway hyperresponsiveness",
        B: "Pleural effusion and empyema",
        C: "Retained airway secretions and atelectasis",
        D: "Pulmonary oedema and cor pulmonale"
      },
      correctAnswer: "C",
      explanation: "Retained airway secretions and atelectasis (C) is correct because retained airway secretions and atelectasis frequently accompany flail chest because the impaired chest wall movement makes it hard to cough and expand the lung. Bronchospasm and wheezing from airway hyperresponsiveness (A) is incorrect because these are features of asthma and are not the problems listed with flail chest. Pleural effusion and empyema (B) is incorrect because these are indications for chest tube insertion and are not listed as frequent accompaniments of flail chest. Pulmonary oedema and cor pulmonale (D) is incorrect because these are not the problems listed with flail chest in the lecture notes.",
      sourceType: "lecture_notes",
      sourceRef: "Flail chest: pathophysiology",
      markingPoint: "Retained secretions and atelectasis"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q18",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 18,
      questionType: "mcq",
      text: "Which group lists the signs of flail chest?",
      options: {
        A: "A sucking sound at the wound, mediastinal flutter, pain and tachypnoea",
        B: "Tachycardia, hypotension, air hunger and cyanosis from air under pressure",
        C: "Chest pain and dyspnoea only, with a stable chest wall and no deformity",
        D: "Shortness of breath, paradoxical chest movement, bruising or swelling, and crepitus"
      },
      correctAnswer: "D",
      explanation: "Shortness of breath, paradoxical chest movement, bruising or swelling, and crepitus (D) is correct because shortness of breath, paradoxical chest movement, bruising or swelling and crepitus (bony or subcutaneous grinding of bone ends on palpation) are the signs of flail chest. A sucking sound at the wound, mediastinal flutter, pain and tachypnoea (A) is incorrect because these are features of open pneumothorax. Tachycardia, hypotension, air hunger and cyanosis from air under pressure (B) is incorrect because these are features of tension pneumothorax. Chest pain and dyspnoea only, with a stable chest wall and no deformity (C) is incorrect because flail chest has an unstable chest wall with paradoxical movement, so the chest wall is not stable.",
      sourceType: "lecture_notes",
      sourceRef: "Flail chest: clinical manifestations",
      markingPoint: "Shortness of breath, paradoxical movement, bruising/swelling, crepitus"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q19",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 19,
      questionType: "mcq",
      text: "The most common causes of penetrating chest trauma are:",
      options: {
        A: "Motor vehicle crashes and crush injuries",
        B: "Gunshot and stab wounds",
        C: "Deceleration and shearing forces",
        D: "Spontaneous rupture of the pleura"
      },
      correctAnswer: "B",
      explanation: "Gunshot and stab wounds (B) is correct because gunshot and stab wounds are the most common causes of penetrating chest trauma, and open pneumothorax is an example. Motor vehicle crashes and crush injuries (A) is incorrect because these are causes of blunt chest trauma. Deceleration and shearing forces (C) is incorrect because these are mechanisms of blunt chest trauma. Spontaneous rupture of the pleura (D) is incorrect because this is associated with simple (spontaneous) pneumothorax and not with penetrating trauma.",
      sourceType: "lecture_notes",
      sourceRef: "Penetrating trauma: causes",
      markingPoint: "Gunshot and stab wounds; e.g. open pneumothorax"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q20",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 20,
      questionType: "mcq",
      text: "Pneumothorax occurs when:",
      options: {
        A: "Either pleura is breached, air enters the pleural space and the lung or a portion of it collapses",
        B: "Blood collects in the pleural space and compresses the lung",
        C: "Both free air and blood are present together in the pleural cavity",
        D: "Three or more adjacent ribs are fractured at two or more sites"
      },
      correctAnswer: "A",
      explanation: "Either pleura is breached, air enters the pleural space and the lung or a portion of it collapses (A) is correct because a breach of either pleura lets air enter the pleural space, exposing it to positive atmospheric pressure, so the lung or part of it collapses. Blood collects in the pleural space and compresses the lung (B) is incorrect because this describes haemothorax. Both free air and blood are present together in the pleural cavity (C) is incorrect because this describes haemopneumothorax. Three or more adjacent ribs are fractured at two or more sites (D) is incorrect because this describes flail chest, which is a chest wall injury and not a pleural air collection.",
      sourceType: "lecture_notes",
      sourceRef: "Pneumothorax: definition",
      markingPoint: "Pleura breached, air enters pleural space, lung collapses"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q21",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 21,
      questionType: "mcq",
      text: "Normally, the pressure in the pleural space is:",
      options: {
        A: "Positive, which keeps the lungs inflated",
        B: "Negative (sub-atmospheric), which is required to maintain lung inflation",
        C: "Equal to atmospheric pressure at all times",
        D: "Positive during inspiration and negative during expiration"
      },
      correctAnswer: "B",
      explanation: "Negative (sub-atmospheric), which is required to maintain lung inflation (B) is correct because the normal pleural pressure is negative or sub-atmospheric, and this negative pressure is required to maintain lung inflation. Positive, which keeps the lungs inflated (A) is incorrect because positive pressure in the pleural space is what happens when air enters through a breach, and it makes the lung collapse. Equal to atmospheric pressure at all times (C) is incorrect because pleural pressure is sub-atmospheric; it becomes equal to atmospheric pressure only when the pleura is breached. Positive during inspiration and negative during expiration (D) is incorrect because the pleural pressure is normally negative, and it is exposed to positive atmospheric pressure only in pneumothorax.",
      sourceType: "lecture_notes",
      sourceRef: "Pneumothorax: pathophysiology",
      markingPoint: "Normal pleural pressure negative/sub-atmospheric; maintains lung inflation"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q22",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 22,
      questionType: "mcq",
      text: "Which group lists the types of pneumothorax described in the lecture notes?",
      options: {
        A: "Simple, flail and tension pneumothorax",
        B: "Open, tension and haemothorax",
        C: "Spontaneous, sternal and traumatic pneumothorax",
        D: "Simple (spontaneous), tension and traumatic (open) pneumothorax"
      },
      correctAnswer: "D",
      explanation: "Simple (spontaneous), tension and traumatic (open) pneumothorax (D) is correct because the lecture notes describe simple or spontaneous, tension and traumatic (open) pneumothorax. Simple, flail and tension pneumothorax (A) is incorrect because flail chest is a chest wall injury and not a type of pneumothorax. Open, tension and haemothorax (B) is incorrect because haemothorax is a collection of blood in the pleural space and not a type of pneumothorax. Spontaneous, sternal and traumatic pneumothorax (C) is incorrect because a sternal fracture is a bony injury and not a type of pneumothorax.",
      sourceType: "lecture_notes",
      sourceRef: "Pneumothorax: types",
      markingPoint: "Simple/spontaneous, tension, traumatic (open)"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q23",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 23,
      questionType: "mcq",
      text: "Which statement describes a simple (spontaneous) pneumothorax?",
      options: {
        A: "Air collects in the pleural space under pressure, compressing the lung and reducing return to the heart",
        B: "Air enters the pleural space through a breach of the parietal or visceral pleura, causing partial lung collapse without continued pressure build-up",
        C: "An opening in the chest wall lets air enter the pleural cavity, with a sucking sound",
        D: "Blood collects in the pleural space after chest injury and the lung is compressed"
      },
      correctAnswer: "B",
      explanation: "Air enters the pleural space through a breach of the parietal or visceral pleura, causing partial lung collapse without continued pressure build-up (B) is correct because air enters through a breach of either pleura and causes partial lung collapse, but the pressure does not continue to build, so the patient is generally stable with chest pain and shortness of breath. Air collects in the pleural space under pressure, compressing the lung and reducing return to the heart (A) is incorrect because this describes tension pneumothorax, in which pressure keeps building. An opening in the chest wall lets air enter the pleural cavity, with a sucking sound (C) is incorrect because this describes traumatic (open) pneumothorax. Blood collects in the pleural space after chest injury and the lung is compressed (D) is incorrect because this describes haemothorax.",
      sourceType: "lecture_notes",
      sourceRef: "Pneumothorax: simple pneumothorax",
      markingPoint: "Partial collapse, no continued pressure build-up; chest pain, shortness of breath; stable"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q24",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 24,
      questionType: "mcq",
      text: "A traumatic (open) pneumothorax is:",
      options: {
        A: "An opening in the chest cavity that allows air to enter the pleural cavity, and it can be caused by penetrating objects",
        B: "Partial lung collapse after a pleural breach, in which the pressure does not continue to build",
        C: "Air under pressure in the pleural space that decreases the return of blood to the heart",
        D: "The presence of both free air and blood within the pleural cavity"
      },
      correctAnswer: "A",
      explanation: "An opening in the chest cavity that allows air to enter the pleural cavity, and it can be caused by penetrating objects (A) is correct because an open pneumothorax is an opening in the chest cavity that allows air to enter the pleural cavity, and penetrating objects such as gunshot and stab wounds can cause it. Partial lung collapse after a pleural breach, in which the pressure does not continue to build (B) is incorrect because this describes simple (spontaneous) pneumothorax. Air under pressure in the pleural space that decreases the return of blood to the heart (C) is incorrect because this describes tension pneumothorax. The presence of both free air and blood within the pleural cavity (D) is incorrect because this describes haemopneumothorax.",
      sourceType: "lecture_notes",
      sourceRef: "Pneumothorax: traumatic (open) pneumothorax",
      markingPoint: "Opening in chest cavity lets air into pleural cavity; penetrating objects"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q25",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 25,
      questionType: "mcq",
      text: "Which pair of findings is characteristic of an open pneumothorax?",
      options: {
        A: "Paradoxical chest movement and bony crepitus",
        B: "Air hunger and hypotension with cyanosis",
        C: "A sucking sound at the chest wound and mediastinal flutter",
        D: "Chest pain and shortness of breath in a stable patient"
      },
      correctAnswer: "C",
      explanation: "A sucking sound at the chest wound and mediastinal flutter (C) is correct because the rush of air through the wound produces a sucking sound, and the mediastinum shifts with breathing (mediastinal flutter or swing). Paradoxical chest movement and bony crepitus (A) is incorrect because these are signs of flail chest. Air hunger and hypotension with cyanosis (B) is incorrect because these are acute features of tension pneumothorax. Chest pain and shortness of breath in a stable patient (D) is incorrect because these are features of simple (spontaneous) pneumothorax.",
      sourceType: "lecture_notes",
      sourceRef: "Pneumothorax: traumatic (open) pneumothorax, clinical manifestations",
      markingPoint: "Sucking sound; mediastinal flutter"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q26",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 26,
      questionType: "mcq",
      text: "In open pneumothorax, mediastinal flutter means that the heart and great vessels:",
      options: {
        A: "Shift toward the injured side with each inspiration and back with expiration",
        B: "Stay in the midline while only the injured lung collapses",
        C: "Shift toward the uninjured side with each inspiration and in the opposite direction with expiration",
        D: "Are compressed by blood collecting in the pleural cavity"
      },
      correctAnswer: "C",
      explanation: "Shift toward the uninjured side with each inspiration and in the opposite direction with expiration (C) is correct because in open pneumothorax the lung collapses and the mediastinal structures (heart and great vessels) shift toward the uninjured side with each inspiration and in the opposite direction with expiration. Shift toward the injured side with each inspiration and back with expiration (A) is incorrect because the direction of the shift is reversed, because inspiration moves the structures toward the uninjured side. Stay in the midline while only the injured lung collapses (B) is incorrect because the mediastinal structures are not fixed and swing with each breath. Are compressed by blood collecting in the pleural cavity (D) is incorrect because blood collecting in the pleural cavity is haemothorax, which is not the mechanism of mediastinal flutter.",
      sourceType: "lecture_notes",
      sourceRef: "Pneumothorax: traumatic (open) pneumothorax, clinical manifestations",
      markingPoint: "Mediastinal flutter/swing: shift to uninjured side on inspiration, opposite on expiration"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q27",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 27,
      questionType: "mcq",
      text: "Tension pneumothorax is best described as:",
      options: {
        A: "Partial lung collapse after a pleural breach, in which the pressure does not continue to build",
        B: "An opening in the chest cavity that allows air to enter the pleural cavity",
        C: "The concurrent presence of free air and blood within the pleural cavity",
        D: "An accumulation of air in the pleural space under pressure, compressing the lungs and decreasing return to the heart"
      },
      correctAnswer: "D",
      explanation: "An accumulation of air in the pleural space under pressure, compressing the lungs and decreasing return to the heart (D) is correct because air accumulates in the pleural space under pressure, which compresses the lungs and decreases return to the heart; penetrating injuries and chest trauma are among the causes. Partial lung collapse after a pleural breach, in which the pressure does not continue to build (A) is incorrect because this describes simple (spontaneous) pneumothorax. An opening in the chest cavity that allows air to enter the pleural cavity (B) is incorrect because this describes traumatic (open) pneumothorax. The concurrent presence of free air and blood within the pleural cavity (C) is incorrect because this describes haemopneumothorax.",
      sourceType: "lecture_notes",
      sourceRef: "Pneumothorax: tension pneumothorax",
      markingPoint: "Air under pressure compressing lungs, decreasing venous return; penetrating injuries, chest trauma"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q28",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 28,
      questionType: "mcq",
      text: "Which features are characteristic of acute tension pneumothorax?",
      options: {
        A: "A sucking sound at the wound with mediastinal flutter",
        B: "Mild chest pain and shortness of breath in a generally stable patient",
        C: "Chest pain, tachycardia, air hunger, hypotension, cyanosis and respiratory distress",
        D: "Paradoxical chest movement with bruising and crepitus"
      },
      correctAnswer: "C",
      explanation: "Chest pain, tachycardia, air hunger, hypotension, cyanosis and respiratory distress (C) is correct because these are the acute clinical manifestations of tension pneumothorax, in which air under pressure compresses the lungs and reduces return to the heart. A sucking sound at the wound with mediastinal flutter (A) is incorrect because these are features of open pneumothorax. Mild chest pain and shortness of breath in a generally stable patient (B) is incorrect because these are features of simple (spontaneous) pneumothorax. Paradoxical chest movement with bruising and crepitus (D) is incorrect because these are signs of flail chest.",
      sourceType: "lecture_notes",
      sourceRef: "Pneumothorax: tension pneumothorax, clinical manifestations",
      markingPoint: "Chest pain, tachycardia, air hunger, hypotension, cyanosis, respiratory distress"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q29",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 29,
      questionType: "mcq",
      text: "Haemothorax is:",
      options: {
        A: "Entry of air into the pleural space after a breach of the pleura",
        B: "Air under pressure in the pleural space that compresses the lungs",
        C: "An accumulation of blood within the pleural cavity",
        D: "The presence of both free air and blood in the pleural cavity"
      },
      correctAnswer: "C",
      explanation: "An accumulation of blood within the pleural cavity (C) is correct because haemothorax occurs when blood collects in the pleural space, and its clinical presentation is the same as that of pneumothorax. Entry of air into the pleural space after a breach of the pleura (A) is incorrect because this describes pneumothorax. Air under pressure in the pleural space that compresses the lungs (B) is incorrect because this describes tension pneumothorax. The presence of both free air and blood in the pleural cavity (D) is incorrect because this describes haemopneumothorax.",
      sourceType: "lecture_notes",
      sourceRef: "Haemothorax: definition",
      markingPoint: "Blood collects in pleural space; presentation same as pneumothorax"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q30",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 1,
      questionNumberInSet: 30,
      questionType: "mcq",
      text: "Haemopneumothorax is best described as:",
      options: {
        A: "The concurrent presence of both free air and blood within the pleural cavity",
        B: "Accumulation of blood alone within the pleural cavity",
        C: "Air alone in the pleural space with partial lung collapse",
        D: "Fracture of three or more adjacent ribs at two or more sites"
      },
      correctAnswer: "A",
      explanation: "The concurrent presence of both free air and blood within the pleural cavity (A) is correct because haemopneumothorax is the concurrent presence of free air and blood in the pleural cavity, and it combines the mechanical problems of pneumothorax and haemothorax. Accumulation of blood alone within the pleural cavity (B) is incorrect because this describes haemothorax. Air alone in the pleural space with partial lung collapse (C) is incorrect because this describes pneumothorax. Fracture of three or more adjacent ribs at two or more sites (D) is incorrect because this describes flail chest, which is a chest wall injury.",
      sourceType: "lecture_notes",
      sourceRef: "Outcome of chest injuries: haemopneumothorax",
      markingPoint: "Concurrent free air and blood in pleural cavity"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q31",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 1,
      questionType: "mcq",
      text: "A driver is brought to the emergency department after a steering wheel injury in a motor vehicle crash, with blunt chest trauma. What is the immediate priority?",
      options: {
        A: "Insert a nasogastric tube and connect it to low suction",
        B: "Apply a chest binder and place ice over the chest wall",
        C: "Establish an airway immediately with oxygen support, and intubate and ventilate if needed",
        D: "Send the patient for a CT scan before giving any oxygen"
      },
      correctAnswer: "C",
      explanation: "Establish an airway immediately with oxygen support, and intubate and ventilate if needed (C) is correct because the patient's condition is evaluated and aggressive resuscitation is started, and an airway is immediately established with oxygen support, with intubation and ventilatory support if need be. Insert a nasogastric tube and connect it to low suction (A) is incorrect because a nasogastric tube is part of the management of penetrating trauma and does not take priority over the airway. Apply a chest binder and place ice over the chest wall (B) is incorrect because a chest binder and ice help to relieve pain in rib fractures, but the airway comes first. Send the patient for a CT scan before giving any oxygen (D) is incorrect because oxygen support and the airway must not be delayed for investigations in a patient who needs resuscitation.",
      sourceType: "lecture_notes",
      sourceRef: "Blunt chest injuries: collaborative management",
      markingPoint: "Resuscitation; airway with oxygen; intubation and ventilation if needed"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q32",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 2,
      questionType: "mcq",
      text: "Which measures are used to relieve pain and allow deep breathing and coughing in a patient with rib fractures?",
      options: {
        A: "Heat over the fracture site and cough suppressants",
        B: "Sedation, an intercostal nerve block and ice over the fracture site",
        C: "Complete immobility with shallow breathing to protect the ribs",
        D: "Withholding analgesia so that the respiratory drive is not depressed"
      },
      correctAnswer: "B",
      explanation: "Sedation, an intercostal nerve block and ice over the fracture site (B) is correct because sedation, an intercostal nerve block and ice over the fracture site relieve pain, which allows the patient to breathe deeply and cough. Heat over the fracture site and cough suppressants (A) is incorrect because ice is used over the fracture site, and suppressing the cough would defeat the aim of deep breathing and coughing. Complete immobility with shallow breathing to protect the ribs (C) is incorrect because pain relief is given so that the patient can breathe deeply and cough, not breathe shallowly. Withholding analgesia so that the respiratory drive is not depressed (D) is incorrect because pain is managed so that deep breathing and coughing are possible, and untreated pain leads to shallow breathing.",
      sourceType: "lecture_notes",
      sourceRef: "Sternal and rib fractures: management",
      markingPoint: "Sedation, intercostal nerve block, ice"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q33",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 3,
      questionType: "mcq",
      text: "A chest binder is applied to a patient with rib fractures in order to:",
      options: {
        A: "Seal an open chest wound during inspiration",
        B: "Drain blood and air from the pleural space",
        C: "Re-expand a collapsed lung by applying pressure",
        D: "Provide stability to the chest wall and possibly decrease pain"
      },
      correctAnswer: "D",
      explanation: "Provide stability to the chest wall and possibly decrease pain (D) is correct because a chest binder provides stability to the chest wall and may decrease pain. Seal an open chest wound during inspiration (A) is incorrect because an open chest wound is covered with a non-porous dressing, not with a chest binder. Drain blood and air from the pleural space (B) is incorrect because blood and air are drained by a chest tube connected to an underwater seal system. Re-expand a collapsed lung by applying pressure (C) is incorrect because a chest binder supports the chest wall, and lung re-expansion is achieved by chest tube drainage.",
      sourceType: "lecture_notes",
      sourceRef: "Sternal and rib fractures: management",
      markingPoint: "Chest binder: stability of chest wall, may decrease pain"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q34",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 4,
      questionType: "mcq",
      text: "Most uncomplicated rib fractures are treated conservatively and heal within about:",
      options: {
        A: "1 to 2 weeks",
        B: "8 to 12 weeks",
        C: "6 to 9 months",
        D: "3 to 6 weeks"
      },
      correctAnswer: "D",
      explanation: "3 to 6 weeks (D) is correct because most rib fractures are benign, are treated conservatively and heal in 3 to 6 weeks. 1 to 2 weeks (A) is incorrect because this is too short for a fractured rib to heal. 8 to 12 weeks (B) is incorrect because this is longer than the usual healing time of 3 to 6 weeks. 6 to 9 months (C) is incorrect because this is far longer than the usual healing time of 3 to 6 weeks.",
      sourceType: "lecture_notes",
      sourceRef: "Sternal and rib fractures: management",
      markingPoint: "Most rib fractures heal in 3 to 6 weeks"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q35",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 5,
      questionType: "mcq",
      text: "A patient with a sternal fracture from a steering wheel injury has anterior chest pain. Which assessment is particularly important?",
      options: {
        A: "Sputum culture to identify an infecting organism",
        B: "Spirometry to measure airflow limitation",
        C: "Evaluation for an underlying cardiac injury, using an ECG and a chest x-ray",
        D: "Skin prick testing to identify allergens"
      },
      correctAnswer: "C",
      explanation: "Evaluation for an underlying cardiac injury, using an ECG and a chest x-ray (C) is correct because the patient must be closely evaluated for underlying cardiac injury, using an ECG and a chest x-ray, because of the force of the blow to the sternum. Sputum culture to identify an infecting organism (A) is incorrect because sputum culture is used in respiratory infection and does not assess cardiac injury. Spirometry to measure airflow limitation (B) is incorrect because spirometry assesses airflow in chronic airway disease and does not assess cardiac injury after trauma. Skin prick testing to identify allergens (D) is incorrect because skin prick testing is used in asthma and has no role in the assessment of sternal fracture.",
      sourceType: "lecture_notes",
      sourceRef: "Sternal and rib fractures: management",
      markingPoint: "Evaluate for underlying cardiac injury: ECG, chest x-ray"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q36",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 6,
      questionType: "mcq",
      text: "Which statement about the management of flail chest is correct?",
      options: {
        A: "Treatment is curative with antibiotics alone and no airway support",
        B: "The flail segment is left alone because the condition always resolves unaided",
        C: "Treatment is usually supportive: ventilatory support, clearing secretions from the lungs and controlling pain",
        D: "A chest binder alone is enough, and no ventilatory support is needed"
      },
      correctAnswer: "C",
      explanation: "Treatment is usually supportive: ventilatory support, clearing secretions from the lungs and controlling pain (C) is correct because treatment of flail chest is usually supportive and includes ventilatory support, clearing secretions from the lungs and controlling pain. Treatment is curative with antibiotics alone and no airway support (A) is incorrect because flail chest is a mechanical chest wall injury, and antibiotics alone do not restore ventilation. The flail segment is left alone because the condition always resolves unaided (B) is incorrect because flail chest is an emergency that needs respiratory support and pain control, and it does not always resolve unaided. A chest binder alone is enough, and no ventilatory support is needed (D) is incorrect because a binder is used for rib fractures, but flail chest needs ventilatory support, secretion clearance and pain control.",
      sourceType: "lecture_notes",
      sourceRef: "Flail chest: management",
      markingPoint: "Supportive: ventilatory support, clear secretions, control pain"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q37",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 7,
      questionType: "mcq",
      text: "A patient has three adjacent ribs fractured at two sites, paradoxical chest movement and severe respiratory distress. Which interventions are appropriate?",
      options: {
        A: "Intubation with ventilatory support, clearing of secretions, IV opioids for pain and preparation for theatre",
        B: "Oral analgesics, bed rest and observation without airway support",
        C: "A chest binder, cough suppressants and discharge once the pain eases",
        D: "A plastic dressing over the chest and a nasogastric tube on low suction"
      },
      correctAnswer: "A",
      explanation: "Intubation with ventilatory support, clearing of secretions, IV opioids for pain and preparation for theatre (A) is correct because management of flail chest includes intubation and ventilatory support, clearing secretions, pain control with IV opioids and taking the patient to theatre. Oral analgesics, bed rest and observation without airway support (B) is incorrect because the patient is in severe respiratory distress and needs ventilatory support, and oral analgesics alone are not enough. A chest binder, cough suppressants and discharge once the pain eases (C) is incorrect because this patient has an emergency condition needing admission, secretion clearance and ventilatory support, and cough suppressants would worsen secretion retention. A plastic dressing over the chest and a nasogastric tube on low suction (D) is incorrect because a plastic dressing is for a sucking chest wound, and the priority here is ventilation, secretion clearance and pain control.",
      sourceType: "lecture_notes",
      sourceRef: "Flail chest: management",
      markingPoint: "Intubation, IV opioids, clear secretions, theatre"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q38",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 8,
      questionType: "mcq",
      text: "Why is a patient with a penetrating chest wound undressed during assessment?",
      options: {
        A: "To lower body temperature and reduce oxygen demand",
        B: "So that a chest binder can be fitted directly over the skin",
        C: "So that any additional injuries are not missed",
        D: "To make it easier for the patient to cough and breathe deeply"
      },
      correctAnswer: "C",
      explanation: "So that any additional injuries are not missed (C) is correct because the patient is undressed so that any additional injuries are not missed. To lower body temperature and reduce oxygen demand (A) is incorrect because the aim of undressing is to find all injuries, and not to cool the patient. So that a chest binder can be fitted directly over the skin (B) is incorrect because a chest binder is used for rib fractures and is not the reason for undressing a patient with a penetrating wound. To make it easier for the patient to cough and breathe deeply (D) is incorrect because the purpose is to examine the whole body for further injuries.",
      sourceType: "lecture_notes",
      sourceRef: "Penetrating trauma: collaborative management",
      markingPoint: "Undress the patient so additional injuries are not missed"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q39",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 9,
      questionType: "mcq",
      text: "Which measures are used to manage hypovolaemia in a patient with penetrating chest trauma?",
      options: {
        A: "A large-bore IV line, IV fluids such as colloids, crystalloids or blood, and grouping and cross-matching",
        B: "A single small-gauge IV line with fluid restriction",
        C: "Oral fluids and diuretics to reduce preload",
        D: "Bed rest and observation without IV access"
      },
      correctAnswer: "A",
      explanation: "A large-bore IV line, IV fluids such as colloids, crystalloids or blood, and grouping and cross-matching (A) is correct because a large-bore IV line is inserted, IV fluid (colloid solutions, crystalloids or blood) is given as indicated, and blood is grouped and cross-matched. A single small-gauge IV line with fluid restriction (B) is incorrect because hypovolaemia needs a large-bore line and fluid replacement, not fluid restriction. Oral fluids and diuretics to reduce preload (C) is incorrect because oral fluids are inadequate in hypovolaemia, and diuretics would worsen the fluid deficit. Bed rest and observation without IV access (D) is incorrect because the patient needs IV access for rapid fluid or blood replacement and cannot be only observed.",
      sourceType: "lecture_notes",
      sourceRef: "Penetrating trauma: collaborative management",
      markingPoint: "Large-bore IV, IV fluids (colloids, crystalloids, blood), group and cross-match"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q40",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 10,
      questionType: "mcq",
      text: "In penetrating chest trauma, which pairing of tube and purpose is correct?",
      options: {
        A: "Indwelling catheter to prevent aspiration; nasogastric tube to monitor urinary output",
        B: "Indwelling catheter to drain pleural air; nasogastric tube to drain pleural blood",
        C: "Indwelling catheter to monitor urinary output; nasogastric tube on low suction to prevent aspiration",
        D: "Nasogastric tube to re-expand the lung; indwelling catheter to decompress the stomach"
      },
      correctAnswer: "C",
      explanation: "Indwelling catheter to monitor urinary output; nasogastric tube on low suction to prevent aspiration (C) is correct because an indwelling catheter is inserted to monitor urinary output, and a nasogastric tube connected to low suction prevents aspiration, minimises leakage of abdominal contents and decompresses the gastrointestinal tract. Indwelling catheter to prevent aspiration; nasogastric tube to monitor urinary output (A) is incorrect because the purposes are reversed, because the catheter monitors urinary output and the nasogastric tube prevents aspiration. Indwelling catheter to drain pleural air; nasogastric tube to drain pleural blood (B) is incorrect because pleural air and blood are drained by a chest tube and not by these tubes. Nasogastric tube to re-expand the lung; indwelling catheter to decompress the stomach (D) is incorrect because the lung is re-expanded by a chest tube, and the stomach is decompressed by the nasogastric tube.",
      sourceType: "lecture_notes",
      sourceRef: "Penetrating trauma: collaborative management",
      markingPoint: "Catheter: urinary output; NGT low suction: prevent aspiration, decompress GI tract"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q41",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 11,
      questionType: "mcq",
      text: "In most patients with penetrating chest wounds, a chest tube is inserted to:",
      options: {
        A: "Monitor the hourly urinary output",
        B: "Achieve rapid and continuing re-expansion of the lungs",
        C: "Decompress the gastrointestinal tract",
        D: "Cover the open wound and prevent air from entering"
      },
      correctAnswer: "B",
      explanation: "Achieve rapid and continuing re-expansion of the lungs (B) is correct because a chest tube is inserted into the pleural space in most patients with penetrating wounds to achieve rapid and continuing re-expansion of the lungs. Monitor the hourly urinary output (A) is incorrect because urinary output is monitored with an indwelling catheter. Decompress the gastrointestinal tract (C) is incorrect because the gastrointestinal tract is decompressed with a nasogastric tube on low suction. Cover the open wound and prevent air from entering (D) is incorrect because an open wound is covered with a non-porous dressing, and a chest tube drains the pleural space.",
      sourceType: "lecture_notes",
      sourceRef: "Penetrating trauma: collaborative management",
      markingPoint: "Chest tube: rapid, continuing lung re-expansion"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q42",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 12,
      questionType: "mcq",
      text: "Surgical intervention is required for penetrating wounds of the:",
      options: {
        A: "Skin and subcutaneous tissue only",
        B: "Fifth through ninth ribs with no organ injury",
        C: "Heart or great vessels, oesophagus or tracheobronchial tree",
        D: "Pleural space whenever a chest tube drains air"
      },
      correctAnswer: "C",
      explanation: "Heart or great vessels, oesophagus or tracheobronchial tree (C) is correct because surgical intervention is needed for penetrating wounds of the heart or great vessels, the oesophagus or the tracheobronchial tree. Skin and subcutaneous tissue only (A) is incorrect because superficial wounds do not need the surgical intervention listed for the heart, great vessels, oesophagus and tracheobronchial tree. Fifth through ninth ribs with no organ injury (B) is incorrect because rib fractures are usually benign and treated conservatively. Pleural space whenever a chest tube drains air (D) is incorrect because most penetrating wounds are managed with a chest tube, and surgery is for the listed structures.",
      sourceType: "lecture_notes",
      sourceRef: "Penetrating trauma: collaborative management",
      markingPoint: "Surgery: heart/great vessels, oesophagus, tracheobronchial tree"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q43",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 13,
      questionType: "mcq",
      text: "What is the correct emergency management of a sucking chest wound?",
      options: {
        A: "Place non-porous material such as plastic wrap, clean plastic packaging or aluminium foil directly over the open wound",
        B: "Cover the wound with a loose porous gauze dressing",
        C: "Leave the wound uncovered so that trapped air can escape freely",
        D: "Wrap a chest binder tightly around the chest over the wound"
      },
      correctAnswer: "A",
      explanation: "Place non-porous material such as plastic wrap, clean plastic packaging or aluminium foil directly over the open wound (A) is correct because a sucking chest wound is dressed with non-porous material, such as plastic wrap, clean plastic packaging or aluminium foil, placed directly over the open wound. Cover the wound with a loose porous gauze dressing (B) is incorrect because porous gauze would still let air pass through the wound, so non-porous material is needed. Leave the wound uncovered so that trapped air can escape freely (C) is incorrect because an uncovered wound keeps air entering the pleural space, and it must be covered with non-porous material. Wrap a chest binder tightly around the chest over the wound (D) is incorrect because a chest binder stabilises the chest wall in rib fractures and does not seal an open wound.",
      sourceType: "lecture_notes",
      sourceRef: "Emergency management of chest injuries",
      markingPoint: "Non-porous dressing (plastic wrap, aluminium foil) over sucking wound"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q44",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 14,
      questionType: "mcq",
      text: "Which group lists the emergency management of chest injuries?",
      options: {
        A: "Give low-flow oxygen, insert one small IV catheter and monitor only the pulse",
        B: "Withhold oxygen until blood gases are known and restrict IV fluids",
        C: "Apply a porous dressing, give oral fluids and discharge after pain control",
        D: "Maintain an airway, give high-flow oxygen, insert two large-bore IV catheters, monitor vital signs, consciousness and urine output, and assess for tension pneumothorax"
      },
      correctAnswer: "D",
      explanation: "Maintain an airway, give high-flow oxygen, insert two large-bore IV catheters, monitor vital signs, consciousness and urine output, and assess for tension pneumothorax (D) is correct because the emergency management includes establishing an airway, high-flow oxygen, two large-bore IV catheters, monitoring of vital signs, level of consciousness and urinary output, and assessing for tension pneumothorax. Give low-flow oxygen, insert one small IV catheter and monitor only the pulse (A) is incorrect because high-flow oxygen, two large-bore catheters and wider monitoring are needed. Withhold oxygen until blood gases are known and restrict IV fluids (B) is incorrect because oxygen is given immediately and IV access is established for fluid replacement. Apply a porous dressing, give oral fluids and discharge after pain control (C) is incorrect because a sucking wound needs a non-porous dressing, and patients with chest injury need IV access and monitoring.",
      sourceType: "lecture_notes",
      sourceRef: "Emergency management of chest injuries",
      markingPoint: "Airway, high-flow O2, two large-bore IVs, monitoring, assess for tension pneumothorax"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q45",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 15,
      questionType: "mcq",
      text: "A patient with chest trauma suddenly develops acute chest pain, tachycardia, air hunger, hypotension and cyanosis. Which complication should the nurse suspect?",
      options: {
        A: "Simple pneumothorax",
        B: "Tension pneumothorax",
        C: "Small haemothorax",
        D: "Uncomplicated rib fracture"
      },
      correctAnswer: "B",
      explanation: "Tension pneumothorax (B) is correct because acute chest pain, tachycardia, air hunger, hypotension, cyanosis and respiratory distress are the clinical manifestations of tension pneumothorax, in which air under pressure compresses the lungs and reduces return to the heart. Simple pneumothorax (A) is incorrect because a simple pneumothorax is generally stable because the pressure does not continue to build. Small haemothorax (C) is incorrect because a small haemothorax resolves on its own and does not produce this sudden picture of shock. Uncomplicated rib fracture (D) is incorrect because an uncomplicated rib fracture causes localised pain, tenderness and bruising and is not associated with air hunger and hypotension.",
      sourceType: "lecture_notes",
      sourceRef: "Emergency management of chest injuries",
      markingPoint: "Assess for tension pneumothorax: pain, tachycardia, air hunger, hypotension, cyanosis"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q46",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 16,
      questionType: "mcq",
      text: "A stable patient with chest pain and shortness of breath is diagnosed with a simple pneumothorax. Which management is described?",
      options: {
        A: "Application of a chest binder",
        B: "Chest tube insertion",
        C: "Thoracotomy to repair the lung",
        D: "A non-porous dressing over the chest"
      },
      correctAnswer: "B",
      explanation: "Chest tube insertion (B) is correct because chest tube insertion is the management described for a simple pneumothorax, to remove air from the pleural space and let the lung re-expand. Application of a chest binder (A) is incorrect because a chest binder stabilises the chest wall in rib fractures and does not remove air from the pleural space. Thoracotomy to repair the lung (C) is incorrect because thoracotomy is a surgical option in blunt trauma, but it is not the management described for a simple pneumothorax. A non-porous dressing over the chest (D) is incorrect because a non-porous dressing is for a sucking chest wound and not for a simple pneumothorax.",
      sourceType: "lecture_notes",
      sourceRef: "Pneumothorax: simple pneumothorax, management",
      markingPoint: "Chest tube insertion"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q47",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 17,
      questionType: "mcq",
      text: "Which statement about the management of haemothorax is correct?",
      options: {
        A: "A small haemothorax resolves on its own, while a large one requires underwater seal drainage",
        B: "A small haemothorax needs a thoracotomy, while a large one resolves on its own",
        C: "All haemothoraces resolve unaided and need no drainage",
        D: "Haemothorax is managed with a chest binder and ice only"
      },
      correctAnswer: "A",
      explanation: "A small haemothorax resolves on its own, while a large one requires underwater seal drainage (A) is correct because a small haemothorax will resolve on its own, whereas a large one requires underwater seal drainage. A small haemothorax needs a thoracotomy, while a large one resolves on its own (B) is incorrect because the management is the other way round, because a small collection resolves unaided and a large one needs drainage. All haemothoraces resolve unaided and need no drainage (C) is incorrect because a large haemothorax needs underwater seal drainage. Haemothorax is managed with a chest binder and ice only (D) is incorrect because a chest binder and ice are used for rib fractures, and a large haemothorax needs drainage.",
      sourceType: "lecture_notes",
      sourceRef: "Haemothorax: management",
      markingPoint: "Small resolves on its own; large needs underwater seal drainage"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q48",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 18,
      questionType: "mcq",
      text: "Which best describes the function of an underwater seal drainage system?",
      options: {
        A: "It removes air and fluid from the pleural space and acts as a one-way mechanism that stops outside air or fluid entering",
        B: "It lets air and fluid move freely in both directions between the pleural space and the atmosphere",
        C: "It applies positive pressure to the pleural space to inflate the lung",
        D: "It collects airway secretions to prevent aspiration of gastric contents"
      },
      correctAnswer: "A",
      explanation: "It removes air and fluid from the pleural space and acts as a one-way mechanism that stops outside air or fluid entering (A) is correct because underwater seal drainage removes air and fluid from the pleural space and creates a one-way mechanism that lets air or fluid out and prevents outside air or fluid from entering. It lets air and fluid move freely in both directions between the pleural space and the atmosphere (B) is incorrect because a two-way system would let outside air back into the pleural space, and the seal makes the flow one-way. It applies positive pressure to the pleural space to inflate the lung (C) is incorrect because the system restores the normal negative pleural pressure and does not apply positive pressure. It collects airway secretions to prevent aspiration of gastric contents (D) is incorrect because airway secretions are not collected by this system, and it drains the pleural space.",
      sourceType: "lecture_notes",
      sourceRef: "Underwater seal drainage: purpose",
      markingPoint: "Removes air/fluid from pleural space; one-way mechanism"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q49",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 19,
      questionType: "mcq",
      text: "Which group lists reasons for inserting a chest tube?",
      options: {
        A: "To splint fractured ribs, relieve pain and stabilise a flail segment",
        B: "To drain fluid from the pleural space, restore normal intrapleural pressure, permit lung expansion and promote gas exchange",
        C: "To monitor urinary output, prevent aspiration and decompress the stomach",
        D: "To deliver high-flow oxygen, open the airway and clear secretions"
      },
      correctAnswer: "B",
      explanation: "To drain fluid from the pleural space, restore normal intrapleural pressure, permit lung expansion and promote gas exchange (B) is correct because a chest tube allows drainage of fluid from the pleural space, restores normal intrapleural pressure, permits expansion of the lungs and promotes adequate gas exchange. To splint fractured ribs, relieve pain and stabilise a flail segment (A) is incorrect because a chest tube drains the pleural space and does not stabilise the ribs or flail segment. To monitor urinary output, prevent aspiration and decompress the stomach (C) is incorrect because these are purposes of the indwelling catheter and nasogastric tube. To deliver high-flow oxygen, open the airway and clear secretions (D) is incorrect because oxygen and airway care are given by other measures, and a chest tube does not deliver oxygen.",
      sourceType: "lecture_notes",
      sourceRef: "Underwater seal drainage: reasons for chest tube insertion",
      markingPoint: "Drain fluid, restore intrapleural pressure, expand lungs, gas exchange"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q50",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 20,
      questionType: "mcq",
      text: "Which group lists indications for chest-tube insertion?",
      options: {
        A: "Sternal fracture, uncomplicated rib fracture, chest wall bruising and muscle strain",
        B: "Asthma, status asthmaticus, emphysema and COPD",
        C: "Pneumothorax, haemothorax, pleural effusion and empyema",
        D: "Pulmonary oedema, atelectasis, bronchospasm and cor pulmonale"
      },
      correctAnswer: "C",
      explanation: "Pneumothorax, haemothorax, pleural effusion and empyema (C) is correct because pneumothorax, haemothorax, pleural effusion and empyema are the indications for chest-tube insertion. Sternal fracture, uncomplicated rib fracture, chest wall bruising and muscle strain (A) is incorrect because these chest wall injuries are usually treated conservatively and are not indications for a chest tube. Asthma, status asthmaticus, emphysema and COPD (B) is incorrect because these are chronic airway diseases that are not indications for a chest tube. Pulmonary oedema, atelectasis, bronchospasm and cor pulmonale (D) is incorrect because these are not the indications listed for chest-tube insertion.",
      sourceType: "lecture_notes",
      sourceRef: "Underwater seal drainage: indications",
      markingPoint: "Pneumothorax, haemothorax, pleural effusion, empyema"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q51",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 21,
      questionType: "mcq",
      text: "Which nursing actions are correct for the tubing and position of a chest drainage system?",
      options: {
        A: "Coil the tubing on the bed and raise the system above chest level when the patient walks",
        B: "Keep the tubing as straight as possible and loosely placed with no loops, and keep the system below chest level",
        C: "Let the patient lie on the tubing and place the system on the bed next to the chest",
        D: "Hang the system from the bed rail at the level of the patient's shoulder"
      },
      correctAnswer: "B",
      explanation: "Keep the tubing as straight as possible and loosely placed with no loops, and keep the system below chest level (B) is correct because the tubing is kept as straight as possible, loosely placed below chest level, the patient must not lie on the tubing, there should be no loops, and the drainage system is never elevated above the level of the chest. Coil the tubing on the bed and raise the system above chest level when the patient walks (A) is incorrect because loops obstruct drainage, and the system must never be raised above chest level. Let the patient lie on the tubing and place the system on the bed next to the chest (C) is incorrect because the patient must not lie on the tubing, and the system is kept below chest level. Hang the system from the bed rail at the level of the patient's shoulder (D) is incorrect because the system must never be elevated above the level of the chest.",
      sourceType: "lecture_notes",
      sourceRef: "Underwater seal drainage: nursing care",
      markingPoint: "Tubing straight, no loops, below chest level; never elevate system"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q52",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 22,
      questionType: "mcq",
      text: "In a patent chest drainage system, the water in the water-seal chamber should:",
      options: {
        A: "Fall with inhalation and rise with exhalation, which is called tidaling",
        B: "Rise with inhalation and fall with exhalation, which is called tidaling",
        C: "Remain completely still throughout the breathing cycle",
        D: "Bubble continuously with every breath"
      },
      correctAnswer: "B",
      explanation: "Rise with inhalation and fall with exhalation, which is called tidaling (B) is correct because the water in the water-seal chamber rises with inhalation and falls with exhalation (tidaling), which shows that the chest tube is patent. Fall with inhalation and rise with exhalation, which is called tidaling (A) is incorrect because the movement is the other way round, because the water rises with inhalation and falls with exhalation. Remain completely still throughout the breathing cycle (C) is incorrect because absent tidaling suggests blockage or lung re-expansion and does not show a patent tube. Bubble continuously with every breath (D) is incorrect because continuous bubbling may indicate an air leak and is not a sign of a patent system.",
      sourceType: "lecture_notes",
      sourceRef: "Underwater seal drainage: nursing care",
      markingPoint: "Tidaling: water rises on inhalation, falls on exhalation = patent tube"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q53",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 23,
      questionType: "mcq",
      text: "Which pairing of observation and likely meaning is correct for a chest drainage system?",
      options: {
        A: "Continuous bubbling suggests lung re-expansion; absent tidaling suggests an air leak",
        B: "Continuous bubbling suggests a blocked tube; absent tidaling suggests a patent system",
        C: "Continuous bubbling is normal drainage of fluid; absent tidaling is an air leak",
        D: "Continuous bubbling suggests an air leak; absent tidaling suggests blockage or lung re-expansion"
      },
      correctAnswer: "D",
      explanation: "Continuous bubbling suggests an air leak; absent tidaling suggests blockage or lung re-expansion (D) is correct because continuous bubbling may indicate an air leak, and absent tidaling indicates either a blocked tube or lung re-expansion. Continuous bubbling suggests lung re-expansion; absent tidaling suggests an air leak (A) is incorrect because the meanings are swapped and also wrong, because bubbling suggests an air leak. Continuous bubbling suggests a blocked tube; absent tidaling suggests a patent system (B) is incorrect because bubbling suggests an air leak, and a patent tube shows tidaling. Continuous bubbling is normal drainage of fluid; absent tidaling is an air leak (C) is incorrect because continuous bubbling may indicate an air leak, and absent tidaling suggests blockage or re-expansion.",
      sourceType: "lecture_notes",
      sourceRef: "Underwater seal drainage: nursing care",
      markingPoint: "Continuous bubbling = air leak; absent tidaling = blockage or lung re-expansion"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q54",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 24,
      questionType: "mcq",
      text: "Which nursing actions are appropriate for a patient with a chest tube?",
      options: {
        A: "Discourage deep breathing and keep the arm still to protect the tube",
        B: "Keep the tube clamped between checks and use clean technique for dressings",
        C: "Encourage deep breathing and shoulder range of motion, monitor fluid drainage and use aseptic technique for dressing changes",
        D: "Avoid measuring drainage and leave dressings untouched until removal"
      },
      correctAnswer: "C",
      explanation: "Encourage deep breathing and shoulder range of motion, monitor fluid drainage and use aseptic technique for dressing changes (C) is correct because the nurse checks the patient, encourages deep breathing and shoulder range of motion, monitors and evacuates fluid drainage, and maintains aseptic technique when changing dressings. Discourage deep breathing and keep the arm still to protect the tube (A) is incorrect because deep breathing and shoulder movement are encouraged, and keeping the arm still can cause shoulder disuse. Keep the tube clamped between checks and use clean technique for dressings (B) is incorrect because tubes are clamped only for special procedures, and dressings are changed using aseptic technique. Avoid measuring drainage and leave dressings untouched until removal (D) is incorrect because fluid drainage is monitored, and dressings are changed with aseptic technique.",
      sourceType: "lecture_notes",
      sourceRef: "Underwater seal drainage: nursing care",
      markingPoint: "Deep breathing, shoulder ROM, monitor drainage, aseptic dressing"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q55",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 25,
      questionType: "mcq",
      text: "A chest drainage system breaks. What should the nurse do?",
      options: {
        A: "Clamp the tube first, then place the distal end of the tubing in a container of sterile water at the 2 cm level",
        B: "Leave the tube open to the air and lay it on the bed",
        C: "Remove the chest tube at once and apply a dressing",
        D: "Place the end of the tubing in sterile water at the 2 cm level without clamping"
      },
      correctAnswer: "A",
      explanation: "Clamp the tube first, then place the distal end of the tubing in a container of sterile water at the 2 cm level (A) is correct because if the drainage system breaks, the tube is clamped first, and the distal end of the tubing is then placed in a sterile water container at the 2 cm level. Leave the tube open to the air and lay it on the bed (B) is incorrect because an open tube would let outside air enter the pleural space. Remove the chest tube at once and apply a dressing (C) is incorrect because the tube is not removed because the problem is in the system, and fluid or air still needs to be drained. Place the end of the tubing in sterile water at the 2 cm level without clamping (D) is incorrect because the tube is clamped first, and the distal end is then placed in sterile water.",
      sourceType: "lecture_notes",
      sourceRef: "Underwater seal drainage: nursing care",
      markingPoint: "If system breaks: clamp first, distal end in sterile water at 2 cm"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q56",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 26,
      questionType: "mcq",
      text: "When is it appropriate to clamp a chest tube?",
      options: {
        A: "Only for special procedures, such as changing the drainage system, checking for air leaks or before removal",
        B: "Routinely, whenever the patient walks or moves to a chair",
        C: "Continuously, to stop outside air from entering the pleural space",
        D: "Whenever the patient reports pain at the insertion site"
      },
      correctAnswer: "A",
      explanation: "Only for special procedures, such as changing the drainage system, checking for air leaks or before removal (A) is correct because chest tubes are clamped only for special procedures such as changing the drainage, checking air leaks or before removal of the tube. Routinely, whenever the patient walks or moves to a chair (B) is incorrect because routine clamping can trap air or fluid in the pleural space, and tubes are clamped only for special procedures. Continuously, to stop outside air from entering the pleural space (C) is incorrect because the water seal already prevents outside air from entering, and continuous clamping stops drainage. Whenever the patient reports pain at the insertion site (D) is incorrect because pain does not call for clamping, and clamping is reserved for special procedures.",
      sourceType: "lecture_notes",
      sourceRef: "Underwater seal drainage: nursing care",
      markingPoint: "Clamp only for special procedures: changing drainage, air leaks, before removal"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q57",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 27,
      questionType: "mcq",
      text: "A chest tube may be removed when:",
      options: {
        A: "Continuous bubbling persists in the water-seal chamber",
        B: "Drainage is increasing and the lung is still collapsed",
        C: "The tube has been in place for 24 hours, regardless of drainage or lung expansion",
        D: "Fluid drainage has ceased and the lung has re-expanded"
      },
      correctAnswer: "D",
      explanation: "Fluid drainage has ceased and the lung has re-expanded (D) is correct because the indications for removal of a chest tube are that fluid drainage has ceased and the lung has re-expanded. Continuous bubbling persists in the water-seal chamber (A) is incorrect because continuous bubbling may indicate an air leak, which means the tube is still needed. Drainage is increasing and the lung is still collapsed (B) is incorrect because increasing drainage and a collapsed lung mean that the tube is still needed. The tube has been in place for 24 hours, regardless of drainage or lung expansion (C) is incorrect because removal depends on cessation of drainage and lung re-expansion, and not on a fixed time.",
      sourceType: "lecture_notes",
      sourceRef: "Underwater seal drainage: removal of chest tubes",
      markingPoint: "Removal: fluid drainage ceased; lung re-expansion"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q58",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 28,
      questionType: "mcq",
      text: "What is the most common complication of chest tube insertion?",
      options: {
        A: "Re-expansion pulmonary oedema",
        B: "Malposition of the tube",
        C: "Infection such as pneumonia",
        D: "Shoulder disuse (frozen shoulder)"
      },
      correctAnswer: "B",
      explanation: "Malposition of the tube (B) is correct because malposition of the tube is the most common complication of chest tube insertion. Re-expansion pulmonary oedema (A) is incorrect because this is a recognised complication, but malposition of the tube is more common. Infection such as pneumonia (C) is incorrect because infection is a recognised complication, but malposition of the tube is more common. Shoulder disuse (frozen shoulder) (D) is incorrect because shoulder disuse is a recognised complication that is prevented by shoulder exercises, but malposition is more common.",
      sourceType: "lecture_notes",
      sourceRef: "Underwater seal drainage: complications",
      markingPoint: "Malposition of tube: most common"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q59",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 29,
      questionType: "mcq",
      text: "Which group lists complications of chest tube insertion and drainage?",
      options: {
        A: "Status asthmaticus, cor pulmonale and acute respiratory failure",
        B: "Paradoxical breathing, a flail segment and a sternal fracture",
        C: "Mediastinal flutter, a sucking wound and bony crepitus",
        D: "Malposition of the tube, re-expansion pulmonary oedema, infections such as pneumonia and shoulder disuse"
      },
      correctAnswer: "D",
      explanation: "Malposition of the tube, re-expansion pulmonary oedema, infections such as pneumonia and shoulder disuse (D) is correct because these are the listed complications: malposition of the tube (the most common), re-expansion pulmonary oedema, infections such as pneumonia, and shoulder disuse (frozen shoulder). Status asthmaticus, cor pulmonale and acute respiratory failure (A) is incorrect because these are complications of asthma and COPD and not of chest tube drainage. Paradoxical breathing, a flail segment and a sternal fracture (B) is incorrect because these are chest injuries and not complications of chest tube drainage. Mediastinal flutter, a sucking wound and bony crepitus (C) is incorrect because these are features of chest injuries and not complications of chest tube drainage.",
      sourceType: "lecture_notes",
      sourceRef: "Underwater seal drainage: complications",
      markingPoint: "Malposition, re-expansion pulmonary oedema, infection, shoulder disuse"
    },
    {
      id: "tnh-respiratory-disorders-traumatic-conditions_q60",
      paperId: "tnh-respiratory-disorders-traumatic-conditions",
      setNumber: 2,
      questionNumberInSet: 30,
      questionType: "mcq",
      text: "A patient with a chest tube avoids moving the arm and shoulder on the side of the tube. Which complication is the nurse trying to prevent by encouraging shoulder range of motion?",
      options: {
        A: "Re-expansion pulmonary oedema",
        B: "Malposition of the tube",
        C: "Infection such as pneumonia",
        D: "Shoulder disuse (frozen shoulder)"
      },
      correctAnswer: "D",
      explanation: "Shoulder disuse (frozen shoulder) (D) is correct because shoulder disuse (frozen shoulder) is a complication of chest tube drainage, and encouraging shoulder range of motion prevents it. Re-expansion pulmonary oedema (A) is incorrect because this occurs when the collapsed lung re-expands and is not prevented by moving the shoulder. Malposition of the tube (B) is incorrect because malposition is related to the insertion of the tube and not to shoulder movement. Infection such as pneumonia (C) is incorrect because pneumonia is reduced by deep breathing and aseptic technique, whereas shoulder exercises prevent stiffness.",
      sourceType: "lecture_notes",
      sourceRef: "Underwater seal drainage: complications",
      markingPoint: "Shoulder disuse (frozen shoulder): encourage shoulder ROM"
    }
  ]
};
