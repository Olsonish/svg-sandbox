d3.json('/data/data.json', function (data) {



    // The SVG View
    svg = d3.select('#sb-master');
    svg.append('svg')
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', function (d, i) { return 20; })
        .attr('cy', function (d, i) { return (i * 25) + 25; })
        .attr('r', 9);


    svg.selectAll('circle')
        .on('mouseover', function () {
            d3.select(this).classed('active', true);
        })
        .on('mouseout', function () {
            d3.select(this).classed('active', false);
        });


});


    //.on('mouseover', function (d) {
    //    svg.append('text')
    //    .attr('x', 0)
    //    .attr('y', 0)
    //    .text(data[0].count)
    //    .attr('class', 'tip')
    //    .style('font-size', '1.5em')
    //})
    //.on('mouseout', function (d) {
    //    d3.selectAll('.tip').remove()
    //});
