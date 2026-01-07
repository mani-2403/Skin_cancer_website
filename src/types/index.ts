export type ResultType = 'normal' | 'benign' | 'malignant';

export interface ScanResult {
  id: string;
  imageUrl: string;
  result: ResultType;
  confidence: number;
  timestamp: Date;
  notes?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ResultInfo {
  type: ResultType;
  title: string;
  description: string;
  guidance: string[];
  action: string;
  severity: 'low' | 'medium' | 'high';
  color: string;
}
