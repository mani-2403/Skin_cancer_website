import { useState } from 'react';
import { Upload, Scan, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ImageUpload from '@/components/features/ImageUpload';
import AnalysisProgress from '@/components/features/AnalysisProgress';
import ResultDisplay from '@/components/features/ResultDisplay';
import ChatAssistant from '@/components/features/ChatAssistant';
import { useAppStore } from '@/stores/appStore';
import { analyzeSkinLesion } from '@/lib/mockAi';
import { useToast } from '@/hooks/use-toast';

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [showChat, setShowChat] = useState(false);
  
  const { currentScan, isAnalyzing, setCurrentScan, setIsAnalyzing, addScanToHistory, clearChat } = useAppStore();
  const { toast } = useToast();

  const handleAnalyze = async () => {
    if (!selectedImage) {
      toast({
        title: 'No image selected',
        description: 'Please upload an image to analyze',
        variant: 'destructive'
      });
      return;
    }

    setIsAnalyzing(true);
    clearChat();
    
    try {
      const result = await analyzeSkinLesion(selectedImage);
      setCurrentScan(result);
      addScanToHistory(result);
      
      toast({
        title: 'Analysis complete',
        description: 'Your screening result is ready'
      });
    } catch (error) {
      toast({
        title: 'Analysis failed',
        description: 'Please try again',
        variant: 'destructive'
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleNewScan = () => {
    setCurrentScan(null);
    setSelectedImage(null);
    setShowChat(false);
    clearChat();
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-background via-background to-muted/30">
      <div className="container px-4 md:px-8 py-8 md:py-12">
        {/* Hero Section */}
        {!currentScan && !isAnalyzing && (
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center p-3 rounded-2xl gradient-medical shadow-medical mb-4">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-balance">
                AI-Powered Skin Lesion Screening
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Upload an image for instant preliminary analysis. Our intelligent system provides screening results with professional medical guidance.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-card border border-border shadow-sm">
                <div className="text-2xl mb-2">🔒</div>
                <h3 className="font-semibold text-sm mb-1">Private & Secure</h3>
                <p className="text-xs text-muted-foreground">Your images are processed securely</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border shadow-sm">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-semibold text-sm mb-1">Instant Results</h3>
                <p className="text-xs text-muted-foreground">Get screening results in seconds</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border shadow-sm">
                <div className="text-2xl mb-2">💬</div>
                <h3 className="font-semibold text-sm mb-1">Expert Guidance</h3>
                <p className="text-xs text-muted-foreground">AI assistant explains your results</p>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {isAnalyzing ? (
            <div className="max-w-md mx-auto">
              <AnalysisProgress />
            </div>
          ) : currentScan ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <ResultDisplay 
                  result={currentScan} 
                  onStartChat={() => setShowChat(true)}
                />
                <Button 
                  onClick={handleNewScan}
                  variant="outline"
                  className="w-full mt-4"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Start New Scan
                </Button>
              </div>
              {showChat && (
                <div className="lg:sticky lg:top-20 lg:self-start">
                  <ChatAssistant onClose={() => setShowChat(false)} />
                </div>
              )}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto space-y-6">
              <ImageUpload 
                onImageSelected={setSelectedImage}
                disabled={isAnalyzing}
              />
              
              {selectedImage && (
                <Button 
                  onClick={handleAnalyze}
                  className="w-full h-12 text-base shadow-md"
                  disabled={isAnalyzing}
                >
                  <Scan className="mr-2 h-5 w-5" />
                  Analyze Image
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
