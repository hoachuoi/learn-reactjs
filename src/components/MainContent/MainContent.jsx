

export const MainContent = (props) => {
    return (
      <li>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </li>
    );
  };
  // Sử dụng detructring để rút gọn code
export const MainContent1 = ({image, title, desc}) => {
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{desc}</p>
      </li>
    );
  };