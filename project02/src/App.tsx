import Greet from './components/Greet';
function App() {
  return (
    <>
      <Greet username="Javed" strength={70}>
        <button>Click to Boost!!!</button>
      </Greet>
    </>
  );
}

export default App;
