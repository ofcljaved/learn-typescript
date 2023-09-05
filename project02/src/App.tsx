import { useState } from "react";
import Form from "./components/Form";

interface Person {
  name: string;
  age: number;
}

function App() {
  const [person, setPerson] = useState<Person>({ name: "", age: 13 });
  return (
    <>
      <Form person={person} handleChange={setPerson} />
    </>
  );
}

export default App;
