window.onload = function() {
    handleRefresh();
}
function handleRefresh() {

	var url = "http://openapi.seoul.go.kr:8088/726c48657673657537366d63796661/xml/GwanakClassLectureList/1/100/"
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			updatelecture(this);
		}
	};
	xhttp.open("GET", url, true);
	xhttp.send();
}	

function updatelecture(xml) {
	var xmlDoc = xml.responseXML;
	var lecturesDiv = document.getElementById("lectures");
	lectures = xmlDoc.getElementsByTagName("row");
	for(var i = 0; i < lectures.length; i++) {
		var row = lectures[i];
		var div = document.createElement("div");
		div.setAttribute("class", "lecture");
		/*		1   TITLE	강좌명
		2	EDU_PERIOD	교육기간
		3	EDU_PLACE	교육장소
		4	EDU_TARGET	교육대상
		5	APPLY_WAY	접수방법
		6	EDU_PAY	수강료
		7	APPLY_PERIOD	접수기간*/
		div.innerHTML = "강좌명:" + row.getElementsByTagName("TITLE")[0].childNodes[0].nodeValue + "은 "
		 + " 교육기간:" + row.getElementsByTagName("EDU_PERIOD")[0].childNodes[0].nodeValue + ""
		 + " 교육장소:" + row.getElementsByTagName("EDU_PLACE")[0].childNodes[0].nodeValue + ""
		 + " 교육대상:" + row.getElementsByTagName("EDU_TARGET")[0].childNodes[0].nodeValue + "";

		 lecturesDiv.appendChild(div);
	}
}

