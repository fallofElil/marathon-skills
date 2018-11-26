var pageIndex = document.getElementById("page_index"),
    pageSponsor = document.getElementById("page_sponsor"),
    pageRunner = document.getElementById("page_runner"),
    pageInfo = $("#page_more_info"),
	pageCharityList = $("#page_charity_list"),
    pageLogin = document.getElementById("page_login");

var btnRunner = document.getElementById("btn_runner"),
    btnInfo = $("#btn_info"),
	btnCharityList = $("#btn_charity_list"),
    btnSponsor = document.getElementById("btn_sponsor");

var main = $("main");
var pages = main.children(".page");

$(function () {
	$("#btn_back").on("click", function () {
		pages.hide();
		$("#page_index").show();
	});

	btnInfo.on("click", function () {
		pages.hide();
		pageInfo.show();
	});

	btnCharityList.on("click", function () {
		pages.hide();
		pageCharityList.show();
	})
});

btnSponsor.addEventListener("click", evt => {
    pageIndex.style.display = "none";
    pageSponsor.style.display = "block";
});

btnRunner.addEventListener("click", evt => {
    pageIndex.style.display = "none";
    pageRunner.style.display = "block";
});

$(function () {
    var mysql = require('mysql');

    getOrganizations(function (rows) {
		var html = '';

		rows.forEach(function (row) {
			html += '<li class="charity__item">';
			html += '<div class="charity__image">';
			html += row.CharityLogo;
			html += '</div>';
			html += '<h3 class="charity__org-name">';
			html += row.CharityName;
			html += '</h3>';
			html += '<p class="charity__org-descr">';
			html += row.CharityDescription;
			html += '</p>';
			html += '</li>';
		});

		$("#charity_list").html(html);
	});

	function getOrganizations(callback) {
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

		$query = 'SELECT `CharityLogo`,`CharityName`,`CharityDescription`' +
			'FROM `Charity`';

		connection.query($query, function (err, rows, fields) {
			if (err) {
				console.log("An error ocurred performing the query.");
				console.log(err);
				return;
			}
			callback(rows);
			console.log("Query succesfully executed");
		});
		connection.end(function () {

		});
	}
});
