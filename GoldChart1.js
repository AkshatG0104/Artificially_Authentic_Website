// Data is from Reference number 2
// Code is from Reference number 3
/**
 * 
 */
const RevenueFromAI = [
  {id: 'd1', year: '2016', revenue: 357.89},
  {id: 'd2', year: '2017', revenue: 841.13},
  {id: 'd3', year: '2018', revenue: 1622.4},
  {id: 'd4', year: '2019', revenue: 2867.54},
  {id: 'd5', year: '2020', revenue: 4806.3},
  {id: 'd6', year: '2021', revenue: 7714.17},
  {id: 'd7', year: '2022', revenue: 11840.54},
  {id: 'd8', year: '2023', revenue: 17284.19},
  {id: 'd9', year: '2024', revenue: 23886.76},
  {id: 'd10', year:'2025', revenue: 31236.92},
];

const MARGINS = {top: 30, bottom: 15};
const CHART_WIDTH = 1000;
const CHART_HEIGHT = 700 - MARGINS.top - MARGINS.bottom;

let selectedData = RevenueFromAI;

const x = d3.scaleBand().rangeRound([0, CHART_WIDTH]).padding(0.1);
const y = d3.scaleLinear().range([CHART_HEIGHT, 0]);

const chartContainer = d3.select('#svg1');

chartContainer
.attr('width', CHART_WIDTH)
.attr('height', CHART_HEIGHT + MARGINS.top + MARGINS.bottom);

x.domain(RevenueFromAI.map((d) => d.year));
y.domain([0, d3.max(RevenueFromAI, d => d.revenue)+ 3000])

const chart = chartContainer.append('g');

chart
.append('g')
.call(d3.axisBottom(x).tickSizeOuter(0))
.attr('color', '#ffffff')
.attr('transform', `translate(0, ${CHART_HEIGHT})`);
/**
 * 
 */
function renderChart(){
  chart
  .selectAll('.bar')
  .data(selectedData, data => data.id)
  .enter()
  .append('rect')
  .classed('bar', true)
  .attr('width', x.bandwidth())
  .attr('height', data => CHART_HEIGHT - y(data.revenue))
  .attr('x', data => x(data.year))
  .attr('y', data => y(data.revenue));

  chart.selectAll('.bar').data(selectedData, data => data.id).exit().remove();
  
  chart
  .selectAll('.label')
  .data(selectedData, data => data.id)
  .enter()
  .append('text')
  .text((data) => data.revenue)
  .attr('x', data => x(data.year) + x.bandwidth()/2)
  .attr('y', data => y(data.revenue) - 20)
  .attr('text-anchor', 'middle')
  .classed('label', true);

  chart.selectAll('.label').data(selectedData, data => data.id).exit().remove();
}

renderChart();

let unselectedIds = [];

const listItems = d3
.select('#data')
.select('ul')
.selectAll('li')
.data(RevenueFromAI)
.enter()
.append('li');

listItems.append('span').text(data => data.year);

listItems
.append('input')
.attr('type', 'checkbox')
.attr('checked', true)
.on('change', (data) => {
  if(unselectedIds.indexOf(data.id) === -1){
      unselectedIds.push(data.id);
  }
  else{
      unselectedIds = unselectedIds.filter(id => id !== data.id);
  }
  selectedData = RevenueFromAI.filter((d) => unselectedIds.indexOf(d.id) === -1);
  renderChart();
});
// -----------------------------------------Part of the JS script that refers to the graph---------------------------------