window.onload = function() {
    // var interval = setInterval(handleRefresh, 3000);
    handleRefresh();
}
function handleRefresh() {
	
	var url = "http://openapi.seoul.go.kr:8088/726c48657673657537366d63796661/json/GwanakClassLectureList/1/100/"
	$.getJSON(url, updatelecture);
}	


function updatelecture(lectures) {
	var lecturesDiv = document.getElementById("lectures");
	var lectures = lectures.GwanakClassLectureList.row;

	for(var i = 0; i < lectures.length; i++) {
		var lecture = lectures[i];
		var div = document.createElement("div");
		div.setAttribute("class", "lecture");
		/*		1   TITLE	강좌명
		2	EDU_PERIOD	교육기간
		3	EDU_PLACE	교육장소
		4	EDU_TARGET	교육대상
		5	APPLY_WAY	접수방법
		6	EDU_PAY	수강료
		7	APPLY_PERIOD	접수기간*/
		div.innerHTML = "강좌명:" + lecture.TITLE + "은 "
		 + " 교육기간:" + lecture.EDU_PERIOD + ""
		 + " 교육장소:" + lecture.EDU_PLACE + ""
		 + " 교육대상:" + lecture.EDU_TARGET + "";

		 lecturesDiv.appendChild(div);
	}
}

