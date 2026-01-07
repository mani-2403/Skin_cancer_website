import { Shield, AlertCircle } from 'lucide-react';
import { MEDICAL_DISCLAIMER } from '@/constants/medical';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border/40 bg-muted/30">
      <div className="container px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start space-x-3 max-w-2xl">
            <AlertCircle className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground mb-1">Medical Disclaimer</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {MEDICAL_DISCLAIMER} Always consult with a qualified healthcare professional for proper diagnosis and treatment.
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Shield className="h-4 w-4" />
            <span className="text-xs">Secure & Confidential</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border/40 text-center text-xs text-muted-foreground">
          © 2026 DermaScan AI. For educational and screening purposes only.
        </div>
      </div>
    </footer>
  );
}
