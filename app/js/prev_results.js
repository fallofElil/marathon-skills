$(function () {
	var mysql = require('mysql');

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

	getMarathon(function (rows) {
		var html = '';
		rows.forEach(function (row) {
			html += '<option>';
			html += row.YearHeld;
			html += ' - ';
			html += row.CityName;
			html += '</option>';
		});
		$("#select_marathon").html(html);
	});

	function getMarathon(callback) {
		console.time();

		$queryMarathon = 'SELECT `YearHeld`,`CityName` FROM `Marathon`';

		connection.query($queryMarathon, function (err, rows, fields) {
			if (err) {
				console.log("An error occurred performing the query.");
				console.log(err);
				return;
			}
			callback(rows);
			console.log('The solution is: ' + rows[0].YearHeld + ' - ' + rows[0].CityName);
			console.log("Query successfully executed");
		});
		console.timeEnd();
	}

	getDistance(function (rows) {
		var html = '';
		rows.forEach(function (row) {
			html += '<option>';
			html += row.EventTypeName;
			html += '</option>';
		});
		$("#select_distance").html(html);
	});

	function getDistance(callback) {
		console.time();

		$queryEventType = 'SELECT `EventTypeName` FROM `EventType`';

		connection.query($queryEventType, function (err, rows, fields) {
			if (err) {
				console.log("An error occurred performing the query.");
				console.log(err);
				return;
			}
			callback(rows);
			console.log("Query successfully executed");
		});
		console.timeEnd();
	}

	getGender(function (rows) {
		var html = '';
		html += '<option>Any</option>';
		rows.forEach(function (row) {
			html += '<option>';
			html += row.Gender;
			html += '</option>';
		});
		$("#select_gender").html(html);
	});

	function getGender(callback) {
		console.time();

		$queryGender = 'SELECT `Gender` FROM `Gender`';

		connection.query($queryGender, function (err, rows, fields) {
			if (err) {
				console.log("An error occurred performing the query.");
				console.log(err);
				return;
			}
			callback(rows);
			console.log("Query successfully executed");
		});
		console.timeEnd();
	}

	getTotalRunners(function (row) {
		$("#total_runners").html(row[0].TotalRunners);
	});

	function getTotalRunners(callback) {
		console.time();

		$queryTotalRunners = 'SELECT COUNT(RunnerId) AS `TotalRunners` FROM `Runner`';

		connection.query($queryTotalRunners, function (err, row, fields) {
			if (err) {
				console.log("An error occurred performing the query.");
				console.log(err);
				return;
			}
			callback(row);
			console.log('Total runners: ', row[0].TotalRunners);
			console.log("Query successfully executed");
		});
		console.timeEnd();
	}

	getTotalFinished(function (row) {
		$("#total_runners_finish").html(row[0].FinishedlRunners);
	});

	function getTotalFinished(callback) {
		console.time();

		$queryTotalFinished = 'SELECT COUNT(RaceTime) AS `FinishedlRunners` FROM `RegistrationEvent`';

		connection.query($queryTotalFinished, function (err, row, fields) {
			if (err) {
				console.log("An error occurred performing the query.");
				console.log(err);
				return;
			}
			callback(row);
			console.log('Total runners: ', row[0].TotalRunners);
			console.log("Query successfully executed");
		});
		console.timeEnd();
	}

	getAverageTime(function (row) {
		$("#average_time").html(row[0].AverageTime);
	});

	function getAverageTime(callback) {
		console.time();

		$queryTotalFinished = 'SELECT AVG(RaceTime) AS `AverageTime` FROM `RegistrationEvent`';

		connection.query($queryTotalFinished, function (err, row, fields) {
			if (err) {
				console.log("An error occurred performing the query.");
				console.log(err);
				return;
			}
			callback(row);
			console.log('Total runners: ', row[0].AverageTime);
			console.log("Query successfully executed");
		});
		console.timeEnd();
	}

	getStatisticsTable(function (rows) {
		var html = '';
		rows.forEach(function (row) {
			html += '<tr>';
			html += '<td>';
			html += row.PlaceNum;
			html += '</td>';
			html += '<td>';
			html += row.RaceNum;
			html += '</td>';
			html += '<td>';
			html += row.FirstName;
			html += ' ';
			html += row.LastName;
			html += '</td>';
			html += '<td>';
			html += row.CountryCode;
			html += '</td>';
		});
		$("#runner_statistics > tbody").html(html);
	});

	function getStatisticsTable(callback) {
		console.time();

		$queryStatisticsTable = 'SELECT RegistrationEvent.BibNumber AS `PlaceNum`, RegistrationEvent.RaceTime AS `RaceNum`, `FirstName`, `LastName`, ' +
			'`CountryCode` FROM User, Runner, RegistrationEvent WHERE User.Email = Runner.Email AND ' +
			'RegistrationEvent.RegistrationEventId = Runner.RunnerId AND RaceTime != \'null\'';

		connection.query($queryStatisticsTable, function (err, row, fields) {
			if (err) {
				console.log("An error occurred performing the query.");
				console.log(err);
				return;
			}
			callback(row);
			console.log('Total runners: ', row[0].AverageTime);
			console.log("Query successfully executed");
		});
		console.timeEnd();
	}

	connection.end(function () {});
});
