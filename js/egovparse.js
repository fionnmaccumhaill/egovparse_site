function getDataIndex () {
	// alert("In getDataIndex");
    $.getJSON("data/dataidx.json" , function(json) {
      //  alert("getDataIndex length:" + json.length);
    }).success(function(jsonr) {
	//	  alert ("returning jsonr"+jsonr.length);
		  testReturn(jsonr);
		  return jsonr;
});
}

function testReturn(aJsonObject) {
	// alert("length:" + aJsonObject.length)
}
	