const FontSelector = ({fonts, selectedFont, onSelect}) => {
 
 function inputHandler(event) {
   onSelect(fonts[event.target.value]);
 }
  
  const fontsArr = fonts.map((font, index) => {
    return ( 
      <div className="grid center font-item">
        <input 
          type="radio" 
          name="font" 
          value={index} 
          id={font.name} 
          onClick={inputHandler}
        />
        <label htmlFor={font.name} className="grid-1">
          <PictureFont 
            text={font.name.substr(0,3)} 
            path={font.path} 
          />
        </label>
      </div>
    )
  });
  
  return <div className="font-picker">{fontsArr}</div>
};