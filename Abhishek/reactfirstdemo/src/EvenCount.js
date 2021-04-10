function EvenCount(props) {
  const numbers = [];

  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }
  const listItems = numbers.map((number) =>
    number % 2 === 0 ? (
      <li key={number} className="list-group-item">
        {number}
      </li>
    ) : (
      ""
    )
  );
  return (
    <div>
      <br />

      <ul className="list-group">{listItems}</ul>
    </div>
  );
}
export default EvenCount;
