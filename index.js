var pageIndex = document.getElementById("page_index"),
    pageSponsor = document.getElementById("page_sponsor"),
    pageRunner = document.getElementById("page_runner"),
    pageInfo = $("#page_more_info"),
    pageLogin = document.getElementById("page_login");

var btnRunner = document.getElementById("btn_runner"),
    btnInfo = $("#btn_info"),
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

    function getOrganizations(rows) {
    	var html = '';

    	rows.forEach(function (row) {
			html += '<tr>';
			html += '<td>';
			html += row.id;

		})
	}
});
