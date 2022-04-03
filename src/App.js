import "./App.css";
import { useState } from "react";

function Modal(props) {
  const [date, setDate] = useState("");
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");

  return (
    <div className="modal-set" hidden={!props.ModalOpen}>
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          // const title = event.target.title;
          // const img = event.target.img;
          // const date = event.target.date;
          props.onCreate({ date, title, img });
          props.setModalOpen(false);
        }}
      >
        <span className="modal-close" onClick={() => props.setModalOpen(false)}>
          X
        </span>
        <label htmlFor="date1" className="label">
          날짜
        </label>
        <input
          id="date1"
          name="date"
          placeholder="언제"
          className="input"
          maxLength="8"
          required
          value={date || ""}
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
        <label htmlFor="title1" className="label">
          풍경
        </label>
        <input
          id="title1"
          name="title"
          placeholder="무엇을 보았나요?"
          className="input"
          maxLength="15"
          required
          value={title || ""}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <label htmlFor="img1" className="label">
          이미지
        </label>
        <input
          id="img1"
          type="text"
          placeholder="URL"
          className="input"
          required
          value={img || ""}
          onChange={(event) => {
            setImg(event.target.value);
          }}
        />
        <button type="submit" className="submit-button">
          저장
        </button>
      </form>
    </div>
  );
}

function App() {
  const [components, setComponents] = useState([
    {
      date: "20201116",
      title: "여름",
      img: "img/1.jpeg",
    },

    {
      date: "20210412",
      title: "황혼",
      img: "img/2.jpeg",
    },

    {
      date: "20211130",
      title: "산책",
      img: "img/3.jpeg",
    },

    {
      date: "20190305",
      title: "꽃",
      img: "img/4.jpeg",
    },
  ]);

  const [ModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <header>
        <span className="title">The Memories</span>
      </header>
      <main>
        <div className="title-bar">
          <button
            type="button"
            className="add-button"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            필름추가
          </button>
          {components.map((item) => (
            <span key={item.date}>{item.title}</span>
          ))}
        </div>
        <article className="article">
          {components.map((item) => (
            <section className="components" key={item.date}>
              <img src={item.img} alt={item.title}></img>
            </section>
          ))}
        </article>
      </main>
      <Modal
        onCreate={(item) => {
          setComponents([...components, item]);
        }}
        ModalOpen={ModalOpen}
        setModalOpen={setModalOpen}
      ></Modal>
    </div>
  );
}

export default App;
