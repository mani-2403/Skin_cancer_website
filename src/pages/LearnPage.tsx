import { Card } from '@/components/ui/card';
import { RESULT_CATEGORIES } from '@/constants/medical';
import { BookOpen, Info, CheckCircle2, AlertTriangle, AlertCircle } from 'lucide-react';

export default function LearnPage() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'normal':
        return <CheckCircle2 className="h-8 w-8 text-white" />;
      case 'benign':
        return <AlertTriangle className="h-8 w-8 text-white" />;
      case 'malignant':
        return <AlertCircle className="h-8 w-8 text-white" />;
    }
  };

  const getGradientClass = (type: string) => {
    switch (type) {
      case 'normal':
        return 'gradient-normal';
      case 'benign':
        return 'gradient-benign';
      case 'malignant':
        return 'gradient-malignant';
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl gradient-medical shadow-medical mb-4">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold font-heading mb-4">Understanding Results</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn about the three screening categories and what they mean for your skin health
            </p>
          </div>

          {/* Result Categories */}
          <div className="space-y-6 mb-12">
            {RESULT_CATEGORIES.map((category) => (
              <Card key={category.type} className="overflow-hidden shadow-result">
                <div className={`${getGradientClass(category.type)} p-6 text-white`}>
                  <div className="flex items-center space-x-4">
                    <div>{getIcon(category.type)}</div>
                    <div>
                      <h2 className="text-2xl font-bold font-heading mb-1">{category.title}</h2>
                      <p className="text-white/90 text-sm">{category.shortDesc}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    {category.detailedDesc}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Important Information */}
          <Card className="p-6 bg-info/5 border-info/20">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-lg bg-info/10">
                <Info className="h-6 w-6 text-info" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-base mb-2">Important to Know</h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start space-x-2">
                    <span className="text-info mt-1">•</span>
                    <span>This AI system provides preliminary screening only - it is not a medical diagnosis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-info mt-1">•</span>
                    <span>Always consult a qualified dermatologist for professional evaluation and diagnosis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-info mt-1">•</span>
                    <span>Regular self-examination and professional check-ups are essential for skin health</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-info mt-1">•</span>
                    <span>Early detection significantly improves outcomes for serious skin conditions</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Best Practices */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold font-heading mb-6">Best Practices for Screening</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-5">
                <h3 className="font-semibold mb-2 flex items-center">
                  <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-sm">1</span>
                  Good Lighting
                </h3>
                <p className="text-sm text-muted-foreground">
                  Use natural daylight or bright indoor lighting for clear images
                </p>
              </Card>
              
              <Card className="p-5">
                <h3 className="font-semibold mb-2 flex items-center">
                  <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-sm">2</span>
                  Clear Focus
                </h3>
                <p className="text-sm text-muted-foreground">
                  Ensure the lesion is in focus and fills most of the frame
                </p>
              </Card>
              
              <Card className="p-5">
                <h3 className="font-semibold mb-2 flex items-center">
                  <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-sm">3</span>
                  Direct Angle
                </h3>
                <p className="text-sm text-muted-foreground">
                  Photograph directly above the lesion, not at an angle
                </p>
              </Card>
              
              <Card className="p-5">
                <h3 className="font-semibold mb-2 flex items-center">
                  <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-sm">4</span>
                  Track Changes
                </h3>
                <p className="text-sm text-muted-foreground">
                  Take regular photos to monitor any changes over time
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
