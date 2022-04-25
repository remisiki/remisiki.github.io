import cmap from '../config/cmap.json';

function encode(str) {
	if (str) {
		return (str
			.split('')
			.map((x) => x.charCodeAt(0))
			.reduce((a, b) => (a + '' + b))
		);
	}
	else {
		return "0";
	}
}

function Box({ lang = "C++", text, width = '16px', height = '16px' }) {
	let color = "#555555";
	let text_color = "#eee";
	try {
		color = cmap[lang].color;
		text_color = cmap[lang].text;
	}
	catch (error) {
		console.warn(`Color for ${lang} not found.`)
	}
	let style = document.createElement('style');
	const name_fix = (text) ? "x" : "";
	const style_fix = (text) ? "position: absolute; right: 0; " : "";
	width = (text) ? ("auto") : width;
	style.type = 'text/css';
	style.innerHTML = `.box${encode(lang) + name_fix} { 
		color: ${text_color};
		font-weight: bold;
		text-align: center;
		background-color: ${color}; 
		width: ${width}; 
		height: ${height}; 
		display: inline-block;
		border-radius: 4px;
		box-shadow: 2px 2px 5px rgba(0,0,0,0.6);
		margin-right: 10px;
		padding: 3px;
		${style_fix}
	}`;
	document.getElementsByTagName('head')[0].appendChild(style);

	return (
		<div className={`box${encode(lang) + name_fix}`}>
			{text}
		</div>
	);
};

export default Box;