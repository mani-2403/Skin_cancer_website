import { ResultType } from '@/types';
import { RESULT_INFO } from '@/constants/medical';

const FORBIDDEN_TERMS = [
  'melanoma', 'cancer', 'carcinoma', 'diagnosis', 'treatment', 'medication',
  'cure', 'prognosis', 'survival', 'chemotherapy', 'radiation', 'surgery'
];

export const generateAssistantResponse = (userMessage: string, currentResult?: ResultType): string => {
  const lowerMessage = userMessage.toLowerCase();
  
  // Check for forbidden terms
  const hasForbiddenTerm = FORBIDDEN_TERMS.some(term => lowerMessage.includes(term));
  if (hasForbiddenTerm) {
    return "I cannot provide specific medical diagnoses, disease names, or treatment recommendations. I can only explain the screening result categories (Normal, Benign, or Malignant) and suggest when to seek professional medical consultation. Please consult a qualified dermatologist for detailed medical information.";
  }
  
  // Asking about what to do next
  if (lowerMessage.includes('what should i do') || lowerMessage.includes('next step')) {
    if (!currentResult) {
      return "Please complete a skin lesion screening first. Once you receive your result, I can provide appropriate guidance based on the category (Normal, Benign, or Malignant).";
    }
    const info = RESULT_INFO[currentResult];
    return `Based on your ${info.title} result: ${info.action}\n\nKey steps:\n${info.guidance.map(g => `• ${g}`).join('\n')}\n\nRemember: This is a preliminary screening. Always consult a healthcare professional for proper medical advice.`;
  }
  
  // Asking about the meaning of result
  if (lowerMessage.includes('what does') && (lowerMessage.includes('mean') || lowerMessage.includes('malignant') || lowerMessage.includes('benign') || lowerMessage.includes('normal'))) {
    if (lowerMessage.includes('normal')) {
      return "A 'Normal' result means the AI did not detect any abnormal patterns in the analyzed image. The skin area appears healthy with no concerning features. However, continue to monitor your skin regularly and maintain good skin care practices.";
    }
    if (lowerMessage.includes('benign')) {
      return "A 'Benign' result indicates the pattern appears non-cancerous. While typically not immediately concerning, benign lesions should still be monitored for changes over time. Consider having it checked by a dermatologist for confirmation and peace of mind.";
    }
    if (lowerMessage.includes('malignant')) {
      return "A 'Malignant' result means the AI has identified patterns that may indicate a serious condition. This requires immediate attention from a qualified dermatologist. Please schedule an appointment as soon as possible for proper examination and diagnosis. Remember, this is a screening tool, not a definitive diagnosis.";
    }
  }
  
  // Asking if they should worry
  if (lowerMessage.includes('should i worry') || lowerMessage.includes('is it serious') || lowerMessage.includes('how bad')) {
    if (!currentResult) {
      return "I can provide guidance once you complete a screening. The system will categorize the result as Normal, Benign, or Malignant, and I'll explain what that means for you.";
    }
    
    if (currentResult === 'normal') {
      return "A Normal result is reassuring - no abnormal patterns were detected. Continue monitoring your skin and maintaining healthy habits. If you notice any changes in the future, conduct another screening or consult a dermatologist.";
    }
    if (currentResult === 'benign') {
      return "A Benign result suggests a non-cancerous pattern, which is generally not immediately concerning. However, it's wise to monitor the area for changes and consider a dermatologist consultation for confirmation. Stay observant but not overly worried.";
    }
    if (currentResult === 'malignant') {
      return "A Malignant result indicates patterns that require prompt medical attention. While concerning, early detection is crucial and beneficial. Please consult a dermatologist immediately - they can provide proper diagnosis and discuss appropriate next steps. Don't delay, but remember that professional care is available.";
    }
  }
  
  // Asking about accuracy or reliability
  if (lowerMessage.includes('accurate') || lowerMessage.includes('reliable') || lowerMessage.includes('trust')) {
    return "This is an AI-based screening system designed to help identify potential concerns for further professional evaluation. It is NOT a diagnostic tool and should never replace consultation with a qualified dermatologist. Use it as a preliminary screening aid, and always seek professional medical advice for any skin concerns.";
  }
  
  // General greeting or thanks
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi ') || lowerMessage.includes('hey')) {
    return "Hello! I'm here to help explain your screening results and provide general guidance. I can clarify what Normal, Benign, or Malignant results mean and suggest appropriate next steps. How can I assist you today?";
  }
  
  if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
    return "You're welcome! Remember, this screening is for preliminary assessment only. Always consult a dermatologist for professional medical advice. Take care of your skin health!";
  }
  
  // Default response
  return "I can help explain the three result categories (Normal, Benign, Malignant) and provide general guidance on next steps. However, I cannot provide medical diagnoses or treatment advice. What would you like to know about your screening result?";
};
