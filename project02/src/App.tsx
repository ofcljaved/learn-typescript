import Theme from './components/theme';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Theme />
    </ThemeProvider>
  );
}

export default App;
