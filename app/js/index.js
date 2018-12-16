var pageIndex = document.getElementById("page_index"),
    pageSponsor = document.getElementById("page_sponsor"),
    pageRunner = document.getElementById("page_runner"),
    pageInfo = $("#page_more_info"),
	pageCharityList = $("#page_charity_list"),
	pagePrevRes = $("#page_prev_results"),
	pageMarathon2018 = $("#page_marathon"),
    pageLogin = $("#page_login");

var btnRunner = document.getElementById("btn_runner"),
	btnLogin = $("#btn_login"),
	btnSbmtLogin = $("#btn_sbmt_login"),
    btnInfo = $("#btn_info"),
	btnCharityList = $("#btn_charity_list"),
    btnSponsor = $("#btn_sponsor"),
	btnPrevRes = $("#btn_prev_results");
	btnMarathon2018 = $("#btn_marathon_2018");

var main = $("main");
var pages = main.children(".page");

$(function () {
	$(".btn--index").on("click", function () {
		$("#btn_back").show();
		$(".header-info").hide();
	});

	btnLogin.on("click", function () {
		pages.hide();
		pageLogin.show();
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

	btnPrevRes.on("click", function () {
		pages.hide();
		pagePrevRes.show();
	});

	btnMarathon2018.on("click", function () {
		pages.hide();
		pageMarathon2018.show();
	})
});

btnSponsor.on("click", function () {
    pageIndex.style.display = "none";
    pageSponsor.style.display = "block";
});

btnRunner.addEventListener("click", evt => {
    pageIndex.style.display = "none";
    pageRunner.style.display = "block";
});
