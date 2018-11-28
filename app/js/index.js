var pageIndex = document.getElementById("page_index"),
    pageSponsor = document.getElementById("page_sponsor"),
    pageRunner = document.getElementById("page_runner"),
    pageInfo = $("#page_more_info"),
	pageCharityList = $("#page_charity_list"),
	pageMarathon2018 = $("#page_marathon"),
    pageLogin = document.getElementById("page_login");

var btnRunner = document.getElementById("btn_runner"),
    btnInfo = $("#btn_info"),
	btnCharityList = $("#btn_charity_list"),
    btnSponsor = $("#btn_sponsor"),
	btnMarathon2018 = $("#btn_marathon_2018");

var main = $("main");
var pages = main.children(".page");

$(function () {
	$(".btn--index").on("click", function () {
		$("#btn_back").show();
		$(".header-info").hide();
	});

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
	});

	btnMarathon2018.on("click", function () {
		pages.hide();
		pageMarathon2018.show();
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
