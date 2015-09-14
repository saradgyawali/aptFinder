

$(document).ready(function(){
	getData();
});


function getData(){
	$.get("/images", function(res){
		console.log("This should be the data coming back from the db", res)
		renderData(res);
	});

}

function renderData(array){
	console.log("this templating function is called")
	var template = _.template($("#apt-template").html());
	dataToappend =array.map(function(obj){
		return template({imageObject: obj});
	});
	$("#listitems").append(dataToappend);
}
