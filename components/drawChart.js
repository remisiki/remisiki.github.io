import * as d3 from "d3";
import $ from 'jquery';
import cmap from './cmap.json';

const drawChart = (element, data) => {
  const colors = data.map((x) => (cmap[x.key]));
  const boxSize = 1400;

  d3.select(element).select("svg").remove(); // Remove the old svg
  // Create new svg
  const svg = d3
    .select(element)
    .append("svg")
    .attr("preserveAspectRatio", "xMidYMid meet")
    .attr("height", "300px")
    .attr("width", "300px")
    .attr("viewBox", `0 0 ${boxSize} ${boxSize}`)
    .append("g")
    .attr("transform", `translate(${boxSize / 2}, ${boxSize / 2})`);

  $('svg').css({
    position: 'fixed',
    top: '120px',
    left: '20px',
  })

  var defs = svg.append("defs");
  var filter = defs.append("filter")
      .attr("id", "drop-shadow")
      .attr("height", "130%");
  filter.append("feGaussianBlur")
      .attr("in", "SourceAlpha")
      .attr("stdDeviation", 5)
      .attr("result", "blur");

  filter.append("feOffset")
      .attr("in", "blur")
      .attr("dx", 3)
      .attr("dy", 3)
      .attr("result", "offsetBlur");
  var feMerge = filter.append("feMerge");
  feMerge.append("feMergeNode")
      .attr("in", "offsetBlur")
  feMerge.append("feMergeNode")
      .attr("in", "SourceGraphic");

  const arcGenerator = d3.arc().cornerRadius(20).padAngle(0.03).innerRadius(330).outerRadius(400);

  const pieGenerator = d3.pie().value((d) => d.value);

  const arcs = svg.selectAll().data(pieGenerator(data)).enter();
  let paths = arcs
    .append("path")
    .attr("d", arcGenerator)
    .style("fill", (d, i) => colors[i % data.length])
    .attr('pointer-events', 'visibleStroke')
    ;
  paths
    .transition()
    .duration(1000)
    .attrTween("d", function (d) {
      const i = d3.interpolate(d.startAngle, d.endAngle);
      return function (t) {
        d.endAngle = i(t);
        return arcGenerator(d);
      };
    })
    .style("filter", "url(#drop-shadow)")
  ;
  arcs
    .append("text")
    .attr("text-anchor", "middle")
    .text((d) => {
      const index = data.findIndex(({key}) => key === d.data.key);
      if (index <= 2) {
        return `${d.data.key}`;
      }
      else if (index == data.length - 1) {
        return `...`;
      }
      else return ``;
    })
    .style("fill", "#333")
    .attr("transform", (d) => {
      let [x, y] = arcGenerator.centroid(d);
      x *= 1.6;
      y *= 1.3;
      return `translate(${x}, ${y})`;
    })
    .style("font-size", "0")
    .transition()
    .duration(1000)
    .style("font-size", "65px")

    ; 
}
export default drawChart;