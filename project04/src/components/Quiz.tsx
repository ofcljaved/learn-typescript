import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Quiz = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);
  const [ans, setAns] = useState<string>("");

  const goBackHandler = (): void => {
    navigate(-1);
  };

  const nextHandler = (): void => {
    setResult((prev) => [...prev, ans]);
    setCount((prev) => prev + 1);
    setAns("");
  };

  return (
    <main className="grid my-4 gap-8 px-4">
      <Button
        variant="secondary"
        className="justify-self-start"
        onClick={goBackHandler}>
        Go Back
      </Button>
      <p className="text-slate-600 text-lg tracking-wider font-medium">Quiz</p>
      <div className="grid gap-4 items-center  text-slate-700">
        <h1 className="text-4xl font-semibold">{count + 1} - Sample</h1>
        <RadioGroup onValueChange={(value) => setAns(value)} value={ans}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
      </div>
      <Button
        className="capitalize bg-slate-500 hover:bg-slate-700 tracking-widest text-lg p-5 my-5"
        onClick={nextHandler}
        disabled={ans === ""}>
        {count !== 7 ? "Next" : "Submit"}
      </Button>
    </main>
  );
};

export default Quiz;
