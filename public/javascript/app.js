// alert("ksdljal")
// var apartment = ["http://cdn.home-designing.com/wp-content/uploads/2014/06/Modern-Design-Two-Bedroom-Two-Bathroom.jpg", "http://cdn.home-designing.com/wp-content/uploads/2014/06/Modern-Design-Two-Bedroom-Two-Bathroom.jpg"]
// $(document).ready(function(){
// 	var apt = apartment[1]
// // 	$("body").append('<img src="' + apt + '">')
// // });

// $(document).ready(function(){
// 	//prevent Default action
// 	//select the form
// 	//serialize the form information
// 	//ajax call with form data

// 	$.post( "YOUR ROUTE", variable for what you want to send over)
//   		.done(function( data ) {
//     alert( "Data Loaded: " + data );
//   });


// })


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
	$("#listitems").append(dataToappend);
}
