function LeftRightSet({style, leftPosition, rightPosition, leftClickHandler, rightClickHandler, text = ""}) {
  const arrow = require("../../assets/fold.png");
  return (
    <div style={style}>
      <div 
        className="arrow" 
        style={{
          position: "absolute", 
          left: leftPosition,
          top: 0
        }}
        onClick={(e) => {
          leftClickHandler();
          e.stopPropagation();
        }}
      >
        <img 
          src={arrow} 
          style={{
            transform: "rotateZ(-90deg)",
            width: 40,
            height: 40,
            filter: "brightness(0) invert(1)"
          }} 
        />
      </div>
      {text}
      <div 
        className="arrow" 
        style={{
          position: "absolute", 
          right: rightPosition,
          top: 0
        }}
        onClick={(e) => {
          rightClickHandler();
          e.stopPropagation();
        }}
      >
        <img 
          src={arrow} 
          style={{
            transform: "rotateZ(90deg)",
            width: 40,
            height: 40,
            filter: "brightness(0) invert(1)"
          }} 
        />
      </div>
    </div>
  );
}

export default LeftRightSet;