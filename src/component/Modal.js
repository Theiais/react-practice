export default function Modal(props) {
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const img = event.target.img.value;
          props.onCreate(title, img);
        }}
      >
        <label htmlFor="title1">풍경</label>
        <br />
        <input
          id="title1"
          name="title"
          placeholder="무엇을 보았나요?"
          maxLength="15"
          required
        />
        <br />
        <label htmlFor="img1">이미지</label>
        <br />
        <input id="img1" type="text" placeholder="URL" required />
        <br />
        <button type="submit">저장</button>
      </form>
    </div>
  );
}

// 1. 모달창 구현
// 2. 입력 값 받아서 전달
