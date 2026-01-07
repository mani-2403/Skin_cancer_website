import { create } from 'zustand';
import { ScanResult, ResultType, ChatMessage } from '@/types';

interface AppState {
  currentScan: ScanResult | null;
  scanHistory: ScanResult[];
  chatMessages: ChatMessage[];
  isAnalyzing: boolean;
  
  setCurrentScan: (scan: ScanResult | null) => void;
  addScanToHistory: (scan: ScanResult) => void;
  setIsAnalyzing: (analyzing: boolean) => void;
  addChatMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
  clearChat: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentScan: null,
  scanHistory: [],
  chatMessages: [],
  isAnalyzing: false,
  
  setCurrentScan: (scan) => set({ currentScan: scan }),
  
  addScanToHistory: (scan) => set((state) => ({
    scanHistory: [scan, ...state.scanHistory]
  })),
  
  setIsAnalyzing: (analyzing) => set({ isAnalyzing: analyzing }),
  
  addChatMessage: (message) => set((state) => ({
    chatMessages: [
      ...state.chatMessages,
      {
        ...message,
        id: `msg-${Date.now()}-${Math.random()}`,
        timestamp: new Date()
      }
    ]
  })),
  
  clearChat: () => set({ chatMessages: [] })
}));
