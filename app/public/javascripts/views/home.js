d3.json('/data/data.json', function (data) {
    d = data;

    /** Define it */
    svg = d3.select('#sb-master').append('svg');
    var nodes = svg.append('g').attr('class', 'nodes');

    /** Make it */
    nodes.selectAll('circle')
        .data(data)
        .enter()
        .append('svg:circle')
        .attr('cx', function (d, i) { return 20; })
        .attr('cy', function (d, i) { return (i * 25) + 25; })
        .attr('r', 9)
        .on('mouseover', function () {
            d3.select(this)
                .classed('active', true)
                .attr('r', 12)
                .append('svg:title')
                .text(function(d){return d.count;});
        })
        .on('mouseout', function () {
            d3.select(this)
                .classed('active', false)
                .attr('r', 9);
            d3.select(this.parentNode).select('.tip')
                .remove();
        });


});
