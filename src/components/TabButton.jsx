export default function TabButton({ children, isSelected, ...props }) {
  // console.log("TabButton Executing");

  //   function handleClick() {
  //     console.log(`Hello ${children}`);
  //   }

  return (
    <li>
      <button className={isSelected ? "active" : null} {...props}>
        {children}
      </button>
    </li>
  );
}
