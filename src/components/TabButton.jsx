export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

// // don't change the Component name "App"
// export default function App() {
//     const [isActive, setActive] = React.useState(false);
//     const handleClick = () => setActive((prevState) => !prevState);
    
//     return (
//         <div>
//             <p className={isActive ? 'active' : ''} >Style me!</p>
//             <button onClick={handleClick}>Toggle style</button>
//         </div>
//     );
// }