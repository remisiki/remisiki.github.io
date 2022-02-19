import cmap from './cmap.json';

function Box({ lang }) {
  const color = cmap[lang];
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = `.box${lang} { 
    background-color: ${color}; 
    width: 20px; 
    height: 20px; 
    display: inline-block;
    border-radius: 4px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.6);
    margin-right: 10px;
  }`;
  document.getElementsByTagName('head')[0].appendChild(style);

  return (
    <div className={`box${lang}`}>
      
    </div>
  );
};

export default Box;