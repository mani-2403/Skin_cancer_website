import { ScanResult } from '@/types';
import { RESULT_INFO } from '@/constants/medical';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, AlertTriangle, AlertCircle, Download, Share2, Calendar, Gauge } from 'lucide-react';
import { formatDate, formatConfidence } from '@/lib/utils';

interface ResultDisplayProps {
  result: ScanResult;
  onStartChat: () => void;
}

export default function ResultDisplay({ result, onStartChat }: ResultDisplayProps) {
  const info = RESULT_INFO[result.result];
  
  const getIcon = () => {
    switch (result.result) {
      case 'normal':
        return <CheckCircle2 className="h-12 w-12 text-white" />;
      case 'benign':
        return <AlertTriangle className="h-12 w-12 text-white" />;
      case 'malignant':
        return <AlertCircle className="h-12 w-12 text-white" />;
    }
  };

  const getGradientClass = () => {
    switch (result.result) {
      case 'normal':
        return 'gradient-normal';
      case 'benign':
        return 'gradient-benign';
      case 'malignant':
        return 'gradient-malignant';
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'DermaScan AI Result',
          text: `Screening Result: ${info.title}\nConfidence: ${formatConfidence(result.confidence)}\nDate: ${formatDate(result.timestamp)}`
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      alert('Sharing not supported on this device');
    }
  };

  return (
    <div className="space-y-6">
      {/* Result Header */}
      <Card className="overflow-hidden shadow-result">
        <div className={`${getGradientClass()} p-6 text-white`}>
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="mt-1">
                {getIcon()}
              </div>
              <div>
                <h2 className="text-2xl font-bold font-heading mb-1">{info.title}</h2>
                <p className="text-white/90 text-sm">Screening Result</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 text-white/90 text-sm mb-1">
                <Gauge className="h-4 w-4" />
                <span>Confidence: {formatConfidence(result.confidence)}</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80 text-xs">
                <Calendar className="h-3 w-3" />
                <span>{formatDate(result.timestamp)}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Image Preview */}
          <div className="rounded-lg overflow-hidden border border-border">
            <img 
              src={result.imageUrl} 
              alt="Analyzed lesion" 
              className="w-full h-64 object-contain bg-muted"
            />
          </div>

          {/* Description */}
          <div>
            <h3 className="text-base font-semibold mb-2">What This Means</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {info.description}
            </p>
          </div>

          {/* Guidance */}
          <div>
            <h3 className="text-base font-semibold mb-3">Recommended Steps</h3>
            <ul className="space-y-2">
              {info.guidance.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-sm text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Call */}
          <div className={`p-4 rounded-lg ${
            info.severity === 'high' 
              ? 'bg-destructive/10 border border-destructive/20' 
              : info.severity === 'medium'
              ? 'bg-warning/10 border border-warning/20'
              : 'bg-success/10 border border-success/20'
          }`}>
            <p className="text-sm font-medium text-foreground">
              {info.action}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button onClick={onStartChat} className="flex-1">
              Ask Assistant Questions
            </Button>
            <Button onClick={handlePrint} variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Print Report
            </Button>
            <Button onClick={handleShare} variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
