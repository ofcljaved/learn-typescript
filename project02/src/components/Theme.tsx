import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <h1>Current theme is {theme}</h1>
      <button onClick={toggleTheme}>Change theme</button>
    </>
  );
};

export default Theme;
