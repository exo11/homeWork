const TextRenderLine = ({value, onChange}) => {
  function textareaHandler(event) {
    onChange(event.target.value);
  }
  return (
    <div className="type-text">
      <textarea 
        name="text" 
        id="font-text" 
        cols="30" 
        rows="2" 
        placeholder="Введите текст для футболки"
        onChange={textareaHandler}
      >
      </textarea>
    </div>
  );
};
