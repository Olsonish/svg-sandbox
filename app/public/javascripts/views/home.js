d3.json('/data/data.json', function (data) {

    /** Define Sandbox */
    svg = d3.select('#sb-master').append('svg');
    var nodes = svg.append('g').attr('class', 'nodes');

    /** Make Sandbox */
    nodes.selectAll('circle')
        .data(data)
        .enter()
        .append('svg:circle')
        .attr('cx', function (d, i) { return 900; })
        .attr('cy', function (d, i) { return (i * 25) + 25; })
        .attr('r', 9)
        .on('mouseover', function () {
            d3.select(this)
                .classed('active', true)
                .attr('r', 12)
                .append('svg:title')
                .text(function (d) { return d.count; });
        })
        .on('mouseout', function () {
            d3.select(this)
                .classed('active', false)
                .attr('r', 9);
            d3.select(this.parentNode).select('.tip')
                .remove();
        });

    /** Basic Line Graph Tutorial Start */
    var margin = { top: 20, right: 20, bottom: 20, left: 20 },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var parseDate = d3.time.format('%m-%y').parse;

    var x = d3.time.scale().range([0, width]);
    var y = d3.scale.linear().range([height, 0]);

    var xAxis = d3.svg.axis().scale(x).orient('bottom');
    var yAxis = d3.svg.axis().scale(y).orient('left');

    var line = d3.svg.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.close); });

    svg.attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    /** Make Line Graph */

    d3.json('/data/date-close.json', function (err, data) {
        d = data;

        data.forEach(function (d) {
            d.date = parseDate(d.date);
            d.close = +d.close;
        });

        x.domain(d3.extent(data, function (d) { return d.date; }));
        y.domain(d3.extent(data, function (d) { return d.close; }));

        console.log(d3.extent(data, function (d) { return d.close; }));

        svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + height + ')')
            .call(xAxis);


        svg.append('g')
            .attr('class', 'y axis')
            .call(yAxis)
          .append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '.71em')
            .style('text-anchor', 'end')
            .text('price ($)');

        svg.append('path')
            .datum(data)
            .attr('class', 'line')
            .attr('d', line);


    });
});
