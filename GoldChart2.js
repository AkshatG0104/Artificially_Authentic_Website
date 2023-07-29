// Data from Reference number 4
/**
 * 
 */
function main() {
    var svg2 = d3.select("#svg2"),
    margin = 200,
    width = svg2.attr("width") - margin,
    height = svg2.attr("height") - margin;

    var xScale = d3.scaleBand().range([0, width]).padding(0.4),
        yScale = d3.scaleLinear().range([height, 0]);

    var g = svg2.append("g")
            .attr("transform", "translate(" + 100 + "," + 100 + ")");

    d3.csv("data/GoldData.csv").then( function(data) {

        xScale.domain(data.map(function(d) { return d.year; }));
        yScale.domain([0, d3.max(data, function(d) { return d.sales; })]);

        g.append("g")
            .attr('transform', 'translate(0,' + height + '0)')
            .call(d3.axisBottom(xScale));

        g.append("g")
            .call(d3.axisLeft(yScale).tickFormat(function(d){return "$" + d;}).ticks(10));

        g.selectAll(".bar2")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar2")
            .attr("x", function(d) { return xScale(d.year); })
            .attr("y", function(d) { return yScale(d.sales); })
            .attr("width", xScale.bandwidth())
            .attr("height", function(d) { return height - yScale(d.sales); });
    })
}