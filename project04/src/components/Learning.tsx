import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Learning = () => {
  const [wordCount, setWordCount] = useState<number>(0);
  const navigate = useNavigate();

  const goBackHandler = (): void => {
    wordCount === 0 ? navigate('/') : setWordCount((prev) => prev - 1);
  };

  const nextHandler = (): void => {
    wordCount === 7 ? navigate('/quiz') : setWordCount((prev) => prev + 1);
  };

  return (
    <main className="grid my-4 gap-8 px-4">
      <Button
        variant="secondary"
        className="justify-self-start"
        onClick={goBackHandler}
      >
        Go Back
      </Button>
      <p className="text-slate-600 text-lg tracking-wider font-medium">
        Learning made easy
      </p>
      <div className="flex items-center text-3xl text-slate-700">
        <p>{wordCount + 1} - Sample :</p>
        <p className="text-red-500 font-semibold mx-2">{'lol'}</p>
        <Button
          variant="outline"
          className="mx-4 capitalize tracking-wider text-slate-700"
        >
          speak
        </Button>
      </div>
      <Button
        className="capitalize bg-slate-500 hover:bg-slate-700 tracking-widest text-lg p-5 my-5"
        onClick={nextHandler}
      >
        {wordCount !== 7 ? 'Next' : 'Test'}
      </Button>
    </main>
  );
};

export default Learning;
