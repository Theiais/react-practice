export default function Article(props) {
  const lis = [];
  const id = props.currentComponents.id;

  lis.push(
    <section key={id}>
      <img
        src={props.currentComponents.img}
        alt={props.currentComponents.title}
      />
    </section>
  );
  return <article>{lis}</article>;
}

// 1. app.js에서 입력 값 다시 받아와야 함
// 2. 받아와서 태그 만들기
