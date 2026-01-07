import { Link, useLocation } from 'react-router-dom';
import { Activity, BookOpen, Upload, History } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-medical shadow-md">
            <Activity className="h-6 w-6 text-white" strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-xl font-bold font-heading tracking-tight">DermaScan AI</h1>
            <p className="text-xs text-muted-foreground">Intelligent Screening</p>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          <Link
            to="/"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive('/') 
                ? 'bg-primary text-primary-foreground' 
                : 'text-foreground/80 hover:text-foreground hover:bg-secondary'
            }`}
          >
            <Upload className="inline h-4 w-4 mr-2" />
            New Scan
          </Link>
          <Link
            to="/history"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive('/history') 
                ? 'bg-primary text-primary-foreground' 
                : 'text-foreground/80 hover:text-foreground hover:bg-secondary'
            }`}
          >
            <History className="inline h-4 w-4 mr-2" />
            History
          </Link>
          <Link
            to="/learn"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive('/learn') 
                ? 'bg-primary text-primary-foreground' 
                : 'text-foreground/80 hover:text-foreground hover:bg-secondary'
            }`}
          >
            <BookOpen className="inline h-4 w-4 mr-2" />
            Learn
          </Link>
        </nav>
        
        {/* Mobile menu */}
        <nav className="flex md:hidden items-center space-x-1">
          <Link
            to="/"
            className={`p-2 rounded-lg ${
              isActive('/') ? 'bg-primary text-primary-foreground' : 'text-foreground/80'
            }`}
          >
            <Upload className="h-5 w-5" />
          </Link>
          <Link
            to="/history"
            className={`p-2 rounded-lg ${
              isActive('/history') ? 'bg-primary text-primary-foreground' : 'text-foreground/80'
            }`}
          >
            <History className="h-5 w-5" />
          </Link>
          <Link
            to="/learn"
            className={`p-2 rounded-lg ${
              isActive('/learn') ? 'bg-primary text-primary-foreground' : 'text-foreground/80'
            }`}
          >
            <BookOpen className="h-5 w-5" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
