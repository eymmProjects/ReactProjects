import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "fafadfadg",
      label: "lorem ipsum",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    },
    {
      id: "asashsafh",

      label: "lorem ipsum",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    },
    {
      id: "ashashasw",

      label: "lorem ipsum",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    },
  ];

  return <Accordion items={items} />;
}

export default App;
