export default function TabButton({ children, isSelected, ...props }) {
  return (
    <ul>
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </ul>
  );
}
