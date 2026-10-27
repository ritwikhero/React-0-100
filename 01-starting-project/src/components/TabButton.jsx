export default function TabButton({ children, handleClick }) {
  return (
    <ul>
      <button onClick={handleClick}>{children}</button>
    </ul>
  );
}
