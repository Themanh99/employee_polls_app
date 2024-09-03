import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="App">
      <div className='flex text-red-600'>
        <Button type="primary" size="medium">Hehe</Button>
        <Input size="medium"></Input>
      </div>
    </div>
  );
}

export default App;
