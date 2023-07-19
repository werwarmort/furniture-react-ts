export default function FilterBar({ handleClick, active }) {
  const items = [
    "all",
    "Bedroom furniture",
    "Living room furniture",
    "Office furniture",
    "Dining room futniture",
    "Chair",
  ];

  return (
    <div className="gap-2" style={{ marginBottom: "1rem" }}>
      {items.map((item, i) => (
        <button
          key={i}
          className={active === item.toLowerCase() && "active"}
          onClick={() => handleClick(item.toLowerCase())}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
