export const TapButton = ({children, onSelect, isSelected}) => {

//     const handleClick = () => {
//       alert(`You clicked on ${children}`);
//     // console.log(`1You clicked on `);
//  }
//   bai 14.6
    return (
    <li>
        <button className={isSelected ? "active" : undefined} onClick={onSelect} >{children}</button>
    </li>
    );
}