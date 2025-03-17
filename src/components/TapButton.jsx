export const TapButton = ({children, onSelect}) => {

//     const handleClick = () => {
//       alert(`You clicked on ${children}`);
//     // console.log(`1You clicked on `);
//  }
//   bai 14.6
    return (
    <li>
        <button onClick={onSelect} >{children}</button>
    </li>
    );
}