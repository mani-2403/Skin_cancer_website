import { Card } from '@/components/ui/card';
import { useAppStore } from '@/stores/appStore';
import { RESULT_INFO } from '@/constants/medical';
import { formatDate, formatConfidence } from '@/lib/utils';
import { Calendar, Gauge, AlertCircle } from 'lucide-react';

export default function HistoryPage() {
  const { scanHistory } = useAppStore();

  if (scanHistory.length === 0) {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 md:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold font-heading mb-2">Scan History</h1>
            <p className="text-muted-foreground mb-8">Track your screening results over time</p>
            
            <Card className="p-12 text-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                  <AlertCircle className="h-8 w-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">No scans yet</h3>
                  <p className="text-sm text-muted-foreground">
                    Upload your first skin lesion image to start tracking
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold font-heading mb-2">Scan History</h1>
            <p className="text-muted-foreground">
              {scanHistory.length} {scanHistory.length === 1 ? 'scan' : 'scans'} completed
            </p>
          </div>

          <div className="space-y-4">
            {scanHistory.map((scan) => {
              const info = RESULT_INFO[scan.result];
              const gradientClass = 
                scan.result === 'normal' ? 'gradient-normal' :
                scan.result === 'benign' ? 'gradient-benign' :
                'gradient-malignant';

              return (
                <Card key={scan.id} className="overflow-hidden shadow-result hover:shadow-medical transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="md:w-48 h-48 bg-muted flex-shrink-0">
                      <img 
                        src={scan.imageUrl} 
                        alt="Scan" 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-medium ${gradientClass}`}>
                              {info.title}
                            </span>
                            <div className="flex items-center space-x-1.5 text-sm text-muted-foreground">
                              <Gauge className="h-4 w-4" />
                              <span>{formatConfidence(scan.confidence)}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(scan.timestamp)}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-foreground/80 leading-relaxed line-clamp-2">
                        {info.description}
                      </p>

                      {scan.notes && (
                        <div className="mt-3 p-3 rounded-lg bg-muted/50 border border-border">
                          <p className="text-xs text-muted-foreground">Notes:</p>
                          <p className="text-sm text-foreground/90">{scan.notes}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
