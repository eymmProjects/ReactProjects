import "./index.css";
import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Click
        </Button>
      </div>
      <div>
        <Button danger outline>
          Click me
        </Button>
      </div>
      <div>
        <Button warning>Click him</Button>
      </div>
      <div>
        <Button secondary outline>
          Click her
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Click this
        </Button>
      </div>
    </div>
  );
}

export default App;
