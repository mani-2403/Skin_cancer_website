import { ResultInfo, ResultType } from '@/types';

export const RESULT_INFO: Record<ResultType, ResultInfo> = {
  normal: {
    type: 'normal',
    title: 'Normal',
    description: 'No abnormal patterns were detected in the analyzed image. The skin area appears healthy with no concerning features identified by the AI system.',
    guidance: [
      'Continue regular skin self-examinations monthly',
      'Maintain healthy skin care habits and sun protection',
      'Monitor for any new changes or unusual spots',
      'Schedule routine dermatologist check-ups annually'
    ],
    action: 'Keep monitoring your skin and maintain good skin health practices.',
    severity: 'low',
    color: 'success'
  },
  benign: {
    type: 'benign',
    title: 'Benign',
    description: 'The pattern appears non-cancerous based on AI analysis. While not immediately concerning, benign lesions should still be monitored as they can occasionally change over time.',
    guidance: [
      'Monitor the area regularly for any changes in size, color, or shape',
      'Take photos to track changes over time',
      'Avoid irritating or picking at the lesion',
      'Consider scheduling a dermatologist consultation for confirmation'
    ],
    action: 'Monitor for changes and consult a dermatologist if you notice any alterations.',
    severity: 'medium',
    color: 'warning'
  },
  malignant: {
    type: 'malignant',
    title: 'Malignant',
    description: 'The AI system has identified patterns that may indicate a serious condition requiring immediate medical attention. This is a preliminary screening result that must be evaluated by a qualified dermatologist.',
    guidance: [
      'Schedule an appointment with a dermatologist as soon as possible',
      'Bring this screening result and images to your appointment',
      'Avoid sun exposure to the affected area',
      'Do not attempt self-treatment or delay professional consultation'
    ],
    action: 'Seek immediate consultation with a dermatologist for proper diagnosis and treatment.',
    severity: 'high',
    color: 'destructive'
  }
};

export const MEDICAL_DISCLAIMER = 
  'This system is intended for preliminary screening and educational purposes only and does not replace professional medical diagnosis.';

export const RESULT_CATEGORIES = [
  {
    type: 'normal' as ResultType,
    title: 'Normal',
    icon: '✓',
    shortDesc: 'No abnormal patterns detected',
    detailedDesc: 'When the AI analysis shows a "Normal" result, it means no concerning patterns or features were identified in the skin lesion image. The analyzed area appears healthy based on the AI model\'s assessment.'
  },
  {
    type: 'benign' as ResultType,
    title: 'Benign',
    icon: '◐',
    shortDesc: 'Non-cancerous pattern detected',
    detailedDesc: 'A "Benign" result indicates that the lesion shows characteristics of non-cancerous growths. While typically not dangerous, these should be monitored for any changes over time. Common benign lesions include moles, skin tags, and certain types of cysts.'
  },
  {
    type: 'malignant' as ResultType,
    title: 'Malignant',
    icon: '!',
    shortDesc: 'Serious pattern requiring attention',
    detailedDesc: 'A "Malignant" result suggests patterns that may indicate a serious condition requiring immediate medical evaluation. This is a screening alert - only a qualified dermatologist can provide a definitive diagnosis through proper examination and testing.'
  }
];
