import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { Button } from '../ui/button';
import { useTheme } from '../ThemeProvider/ThemeProvider';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const onClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={onClick}>
      {theme === 'light' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
