import { ThemeProvider } from '@/components/providers/theme-provider';
import Home from '@/pages/Home';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Home />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;