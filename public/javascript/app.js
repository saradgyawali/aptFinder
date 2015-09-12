

$(document).ready(function(){
	getData();
});


function getData(){
	$.get("/images", function(res){
		renderData(res);
	});

}

function renderData(array){
	var template = _.template($("#apt-template").html());
	dataToappend =array.map(function(obj){
		return template({imageObject: obj});
	});
	$("#listitems").appen('<img src=" ' + dataToappend + ' ">');
}
