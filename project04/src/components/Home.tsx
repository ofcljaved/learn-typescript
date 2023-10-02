import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const language: languageType[] = [
  { name: 'hindi', code: 'hi' },
  { name: 'japanese', code: 'ja' },
  { name: 'french', code: 'fr' },
  { name: 'spansih', code: 'es' },
];

const Home = () => {
  const navigate = useNavigate();
  const languageSelectHandler = (lang: languageType['code']): void => {
    navigate(`learn?lang=${lang}`);
  };

  return (
    <main className="text-center">
      <h1 className="text-5xl my-8 font-medium text-slate-600">
        Welcome
        <br /> Begin Your Journey Of Learnning
      </h1>
      <div className="flex gap-4 justify-center">
        {language.map((lang) => (
          <Button
            key={lang.code}
            className="capitalize bg-slate-500 hover:bg-slate-700 tracking-widest text-lg p-5 my-5"
            onClick={() => languageSelectHandler(lang.code)}
          >
            {lang.name}
          </Button>
        ))}
      </div>
      <p className="text-slate-600 text-lg tracking-wider font-medium mx-2">
        Choose One language to begin
      </p>
    </main>
  );
};

export default Home;
