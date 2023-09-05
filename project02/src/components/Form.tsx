import { Dispatch, FormEvent, SetStateAction } from "react";

interface Person {
  name: string;
  age: number;
}

type FormProps = {
  person: Person;
  handleChange: Dispatch<SetStateAction<Person>>;
};

const Form = <T extends FormProps>({ person, handleChange }: T) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name: eg.Jhon Dee"
        value={person.name}
        onChange={(e) =>
          handleChange((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <br />
      <input
        type="number"
        placeholder="Age: eg. 18"
        value={person.age}
        onChange={(e) =>
          handleChange((prev) => ({ ...prev, age: Number(e.target.value) }))
        }
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
