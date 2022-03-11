import Box from './Box';

function Project({name, description, href, thumb, lang}) {
  const avatar = require("../../assets/avatar.jpg");
  return (
    <a className="cell" href={href}>
      <img src={avatar} />
      <span className="title">{name}</span>
      <br />
      <span className="content">{description}</span>
      <Box lang={lang} text={lang} width={`${lang.length * 9}px`} />
    </a>
  );
}

export default Project;