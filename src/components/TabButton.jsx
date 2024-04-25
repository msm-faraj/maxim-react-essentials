export default function TabButton({ children, onSelect, isSelected }) {
  // console.log("TabButton Executing");

  //   function handleClick() {
  //     console.log(`Hello ${children}`);
  //   }

  return (
    <li>
      <button className={isSelected ? "active" : null} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
