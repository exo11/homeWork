const SearchBox = (props) => {
  let input;
  function handleInput(event) {
    props.filterBooks(event.currentTarget.value);
  } 
  return (
    <input 
      type="text" 
      placeholder="Поиск по названию или автору" 
      onChange={handleInput}
      value={props.value}
    />
  );
};

