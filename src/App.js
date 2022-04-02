import "./App.css";
import Header from "./component/Header";
import Modal from "./component/Modal";
import { useState } from "react";
import Article from "./component/Article";

function App() {
  const [components, setComponents] = useState([
    {
      id: 1,
      title: "소나무",
      img: "./img/(1).jepg",
    },
    {
      id: 2,
      title: "풍경",
      img: "./img/(2).jepg",
    },
    {
      id: 3,
      title: "건물",
      img: "./img/(3).jepg",
    },
    {
      id: 4,
      title: "모형",
      img: "./img/(4).jepg",
    },
  ]);

  return (
    <div className="App">
      <Header />
      <Article currentComponents={components}></Article>
      <Modal
        onCreate={(title, img) => {
          const newComponent = { title: title, img: img };
          const newComponents = [...components];
          newComponents.push(newComponent);
          setComponents(newComponents);
        }}
      ></Modal>
    </div>
  );
}

export default App;
