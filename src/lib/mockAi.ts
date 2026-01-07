import { ResultType, ScanResult } from '@/types';

// Simulate AI analysis with random result
export const analyzeSkinLesion = async (imageFile: File): Promise<ScanResult> => {
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 2500));
  
  // Mock analysis - randomly select result type
  const results: ResultType[] = ['normal', 'benign', 'malignant'];
  const randomResult = results[Math.floor(Math.random() * results.length)];
  
  // Generate confidence based on result type
  const confidenceRanges = {
    normal: [85, 98],
    benign: [75, 92],
    malignant: [70, 88]
  };
  
  const [min, max] = confidenceRanges[randomResult];
  const confidence = Math.floor(Math.random() * (max - min + 1)) + min;
  
  // Create object URL for preview
  const imageUrl = URL.createObjectURL(imageFile);
  
  return {
    id: `scan-${Date.now()}`,
    imageUrl,
    result: randomResult,
    confidence,
    timestamp: new Date()
  };
};
