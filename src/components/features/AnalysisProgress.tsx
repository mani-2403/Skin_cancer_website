import { Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function AnalysisProgress() {
  return (
    <Card className="p-8">
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <div className="relative">
          <div className="h-20 w-20 rounded-full gradient-medical animate-pulse"></div>
          <Loader2 className="absolute inset-0 m-auto h-10 w-10 text-white animate-spin" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold font-heading">Analyzing Image</h3>
          <p className="text-sm text-muted-foreground max-w-md">
            Our AI is examining the skin lesion image. This typically takes a few seconds.
          </p>
        </div>
        
        <div className="w-full max-w-xs space-y-2">
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full animate-progress"></div>
          </div>
          <p className="text-xs text-muted-foreground">Processing patterns and features...</p>
        </div>
      </div>
    </Card>
  );
}
