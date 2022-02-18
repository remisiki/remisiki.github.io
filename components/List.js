import cmap from './cmap.json';

function addList(data, sum) {
  return (
    <li key={data.key}>
      {data.key}
      <span>: </span>
      {Math.floor(data.value / sum * 100)}%
    </li>
  );
}

function List({ data }) {
  let sum = 0;
  for (const item of data) {
    sum += item.value;
  }
  const lists = data.map((x) => addList(x, sum));
  return (
    <div id="langlist">
      <ul>
        {lists}
      </ul>
    </div>
  );
};

export default List;