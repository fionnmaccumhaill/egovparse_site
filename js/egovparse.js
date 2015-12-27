function getDataIndex () {
    $.getJSON("data/dataidx.json" , function(json) {
    }).done(function(jsonr) {
		  idxLoaded=true;
		  idxFile=jsonr;
		 // $('#dmessage').append("<p> getDataIndex:"  + idxFile[2] + " </p>");
		  return;
    }).fail(function() {
		  alert ("fail");
    }).always(function() {
		// alert("finished");
	});
}

function getTowns () {
    $.getJSON("data/idxtown.json" , function(json) {
    }).done(function(jsonr1) {
		  townLoaded=true;
		  townFile = jsonr1
		  loadTownsSelect(jsonr1);
		  return;
    }).fail(function() {
		  alert ("fail");
    }).always(function() {
		
	});
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function getDSIndex(aIndex)
{
	var dsIdxLength = idxFile.length;
	for (var i = 0; i < dsIdxLength; i++) {
		if (idxFile[i].dataId == aIndex) {
			return idxFile[i];
		}
	}
	return null;
}

function onChangeTown(aTown) {
	$('#ddatarows').empty();
	filterTown = aTown;
	// showFilter(toTitleCase(filterTown));
	var tdatasets = townFile[aTown];
	var td_length = tdatasets.length;
	for (var i = 0; i < td_length; i++) {
		var dsIdx = getDSIndex(tdatasets[i]);
		sUrl = dsIdx.url;
		sAnchor = "<a href='" + sUrl + "'> " + dsIdx.aText + "</a>"
		$('#ddatarows').append("<tr>");
		// $('#ddatarows').append("<td>" + tdatasets[i] + "</td> ");
		$('#ddatarows').append("<td>" +dsIdx.category + " </td>");
		$('#ddatarows').append("<td>" +dsIdx.keywords + " </td>");
	//	$('#ddatarows').append("<td>" +dsIdx.aText + " </td>");
		$('#ddatarows').append("<td>" + sAnchor + " </td>");
		$('#ddatarows').append("</tr>");
	}
}

function showFilter(aTown) {
    $('#dtown').empty();
	$("#dtown").append("Filter: " +aTown);
}

function loadTownsSelect(aTownFile) {
    var sortedTowns = Object.keys(aTownFile).sort();
    var townCnt = sortedTowns.length;
	for (var i = 0; i < townCnt; i++) {
		 var sTown = sortedTowns[i];
         $('#townselect')
            .append($("<option></option>")
            .attr("value",sTown)
            .text(toTitleCase(sTown))); 
	};
	return
}