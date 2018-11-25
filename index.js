let pageIndex = document.getElementById("page_index"),
    pageSponsor = document.getElementById("page_sponsor"),
    pageRunner = document.getElementById("page_runner"),
    pageInfo = document.getElementById("page_info"),
    pageLogin = document.getElementById("page_login");

let btnBack = document.getElementById("btn_back"),
    btnRunner = document.getElementById("btn_runner"),
    btnInfo = document.getElementById("btn_info"),
    btnSponsor = document.getElementById("btn_sponsor");

function switchPages() {
    if (pageIndex.style.display !== "none") {
        btnBack.style.display = "none";
    }

    if (pageSponsor.style.display === "block") {
        btnBack.style.display = "block";
    }
}

btnSponsor.addEventListener("click", evt => {
    pageIndex.style.display = "none";
    pageSponsor.style.display = "block";
});

btnRunner.addEventListener("click", evt => {
    pageIndex.style.display = "none";
    pageRunner.style.display = "block";
});

btnInfo.addEventListener("click", evt => {
    pageIndex.style.display = "none";
    pageInfo.style.display = "block";
});

switchPages();

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
