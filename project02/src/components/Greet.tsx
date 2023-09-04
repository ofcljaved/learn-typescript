import { ReactNode } from 'react';

type PropsType = {
  username: string;
  strength: number;
  children: ReactNode;
};
const Greet = ({ username, strength, children }: PropsType) => {
  return (
    <>
      <h1>Hello, I'm {username}</h1>
      <h2>Your Strength is {strength}</h2>
      {children}
    </>
  );
};

export default Greet;
