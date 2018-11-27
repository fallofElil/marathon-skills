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
