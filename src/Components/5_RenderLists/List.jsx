import styles from './List.module.css';

function List({ _list = [], _category = 'category' }) {
  const list = _list;
  const category = _category;

  const ListItems = list
    .filter((word) => word.text.length < 8)
    .map((word) => (
      <li key={word.id}>
        <b>{word.id + 1}</b>
        &nbsp; {word.text}
      </li>
    ));
  return (
    <>
      {list.length > 0 && (
        <>
          <h3 className={styles.Category}>{category}</h3>
          <ul className={styles.items}>{ListItems}</ul>
        </>
      )}
    </>
  );
}

export default List;
