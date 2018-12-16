$(function () {
	var mysql = require('mysql');

	getOrganizations(function (rows) {
		var html = '';

		rows.forEach(function (row) {
			html += '<li class="charity__item">';
			html += '<div class="charity__image-wrapper">';
			html += '<div class="charity__image">';
			html += row.CharityLogo;
			html += '</div>';
			html += '</div>';
			html += '<div class="charity__org">';
			html += '<h3 class="charity__org-name">';
			html += row.CharityName;
			html += '</h3>';
			html += '<p class="charity__org-descr">';
			html += row.CharityDescription;
			html += '</p>';
			html += '</div>';
			html += '</li>';
		});

		$("#charity_list").html(html);
	});

	function getOrganizations(callback) {
		var mysql = require('mysql');
		console.time();
		var connection = mysql.createConnection({
			host		: 'efrafa.ddns.net',
			user		: 'marathon_user',
			password	: 'straykbol',
			database	: 'marathon_db'
		});

		connection.connect(function (err) {
			if (err) {
				console.log(err.code);
				console.log(err.fatal);
			}
		});

		$query = 'SELECT `CharityLogo`,`CharityName`,`CharityDescription`' +
			'FROM `Charity`';

		connection.query($query, function (err, rows, fields) {
			if (err) {
				console.log("An error occurred performing the query.");
				console.log(err);
				return;
			}
			callback(rows);
			console.log("Query successfully executed");
		});
		connection.end(function () {});
		console.timeEnd();
	}
});
