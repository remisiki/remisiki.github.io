import Box from './Box';

function Project({name, description, href, thumb, lang}) {
  let thumbnail;
  if (thumb === "") {
     thumbnail = require("../../assets/avatar.jpg");
  }
  else {
    thumbnail = require(`../../assets/${thumb}.webp`);
  }
  return (
    <a className="cell" href={href}>
      <div className="img-container">
        <img src={thumbnail} />
      </div>
      <span className="title">{name}</span>
      <br />
      <span className="content">{description}</span>
      <Box lang={lang} text={lang} width={`${lang.length * 9}px`} />
    </a>
  );
}

export default Project;