exports.index = function(req, res) {
	res.render('index', {
		title : 'index',
		section : 'index'
	});
};