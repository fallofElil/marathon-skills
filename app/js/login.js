$(function () {
	var login;
	var pswd;
	var btnLogin = $("#btn_sbmt_login");
	var role;

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

	function authorize(email, passwd) {
		console.time();

		console.log('Login: ', email);
		console.log('Password: ', passwd);

		$query = "SELECT RoleId FROM User WHERE Email = " + "\'" + email + "\' AND Password = \'" + passwd + "\'";

		console.log($query);

		connection.query($query, function (err, rows, fields) {
			if (err) {
				console.log("An error occurred performing the query.");
				console.log(err);
				return;
			}

			console.log('QUERY RESULT: ', rows[0]);
			console.log("Query successfully executed");

			role = rows[0];
		});
		console.timeEnd();
	}

	btnLogin.on("click", function () {
		login = $("#input_mail").val();
		pswd = $("#input_password").val();

		var role = authorize(login, pswd);
		var pages = $(".page");

		console.log(role);
		alert(role);
		
		switch (role) {
			case 'R':
				pages.hide();
				$("#page_runner_menu");
				break;
			case 'A':
				pages.hide();
				$("#page_admin_menu");
				break;
			case 'C':
				pages.hide();
				$("#page_coordinator_menu");
		}
	});

	connection.end(function () {});
});
