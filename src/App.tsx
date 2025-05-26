import { ThemeProvider } from '@/components/providers/theme-provider';
import Home from '@/pages/Home';
import { Toaster } from '@/components/ui/toaster';
import "./App.css"; // Import global styles

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Home />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;