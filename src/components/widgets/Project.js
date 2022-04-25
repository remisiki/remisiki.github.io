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
		<a className="cell float" href={href}>
			<div className="img-container">
				<img src={thumbnail} alt={description} />
			</div>
			<span className="title">{name}</span>
			<br />
			<span className="content">{description}</span>
			<Box lang={lang} text={lang} width={`${lang.length * 9}px`} height="20px" />
		</a>
	);
}

export default Project;