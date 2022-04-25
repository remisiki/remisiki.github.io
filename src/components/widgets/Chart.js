import React, { useEffect, useRef } from "react";
import drawChart from "./drawChart";

function Chart({ data }) {
	const ref = useRef(null);
	const filter_data = data.filter((x) => (x.key !== "CSS") && (x.key !== "HTML"));

	useEffect(() => {
		if (ref.current) {
			drawChart(ref.current, filter_data);
		}
	}, [ref]);

	return (
		<div className="container">
			<div className="graph" ref={ref} />
		</div>
	);
};

export default Chart;