import logo from "./assets/logo-tuhoc.png";
import {data} from "../data";

function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="Tự Học" />
        <h1>React Tuhoc.cc</h1>
        <p>
          Học React - Khám phá cách xây dựng ứng dụng linh hoạt, hiện đại, và
          đầy sáng tạo!
        </p>
      </header>
    </>
  );
}

const MainContent = (props) => {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </li>
  );
};
// Sử dụng detructring để rút gọn code
const MainContent1 = ({image, title, desc}) => {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </li>
  );
};

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            {data.map((item) => (
              <MainContent1
                // image={item.image}
                // title={item.title}
                // desc={item.desc}
                {...item}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;