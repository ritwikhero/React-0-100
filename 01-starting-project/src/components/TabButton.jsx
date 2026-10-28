export default function TabButton({ children, handleClick, isSelected }) {
  return (
    <ul>
      <button className={isSelected ? "active" : ""} onClick={handleClick}>
        {children}
      </button>
    </ul>
  );
}
