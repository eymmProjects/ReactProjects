import { GoBell } from "react-icons/go";
import "./index.css";
import Button from "./Button";

function App() {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div>
      <div>
        <Button
          secondary
          rounded
          outline
          className="mb-5"
          onClick={handleClick}
        >
          <GoBell />
          Click
        </Button>
      </div>
      <div>
        <Button danger outline>
          Click me
        </Button>
      </div>
      <div>
        <Button warning>
          <GoBell />
          Click him
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Click her
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Click this
        </Button>
      </div>
    </div>
  );
}

export default App;
