d3.json('/data/data.json', function (data) {

    /** Define it */
    svg = d3.select('#sb-master');
    
    /** Make it */
    svg.append('svg')
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', function (d, i) { return 20; })
        .attr('cy', function (d, i) { return (i * 25) + 25; })
        .attr('r', 9);

    /** Then do stuff with it */
    svg.selectAll('circle')
        .on('mouseover', function () {
            d3.select(this).classed('active', true);
        })
        .on('mouseout', function () {
            d3.select(this).classed('active', false);
        });
});
