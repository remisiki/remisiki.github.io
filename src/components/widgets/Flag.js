import ReactCountryFlag from "react-country-flag";

function Flag({code}) {
	return (
		<ReactCountryFlag countryCode={code} svg 
			style={{
				marginLeft: '5px',
			}}
		/>
	);
}

export default Flag;