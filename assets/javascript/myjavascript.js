 
 //===========================PSEUDO CODE============================
//display buttons that are search terms the user can click on
//search box exists for user to add additionl buttons (search terms)
//computer uses AJAX to fetch search term from GIPHY.com
//on click, the GIPHY search results are displayed below existing page content

 //==========================GLOBAL VARIABLES=========================

 var topics = ['jumping', 'driving', 'falling', 'planting', 'faceplanting', 'screaming'];

//=========================================================================

function alertActionName () {
	var actionName = $(this).data("name");

	alert(actionName);
}


function myButton () {

	$('#searchTerms').empty();

	for (i=0; i < topics.length; i++) {
		var createButton = $('<button>');
		createButton.text(topics[i]);
		$('#searchTerms').append(createButton);

		createButton.addClass('movie'); // Added a class 
		createButton.attr('data-name', topics[i]); // Added a data-attribute
		createButton.text(topics[i]); // Provided the initial button text
		$('#searchTerms').prepend(createButton); // Added the button to the HTML
		
	}
}

myButton();

	$('#addMovie').on('click', function() {
		var newText = $('#movie-input').val().trim();
	//	$('#searchTerms').append('<button>' + newText + '</button>'); //this line appends the user's input to the div searchTerms
		topics.push(newText);
		
		myButton();
		$('#movie-input').val("");
		console.log();

	});


	// $.ajax({url: "http://api.giphy.com/v1/gifs/search?q=" + newTopicWord + " &api_key=dc6zaTOxFJmzC", method: 'GET'}).done(function(response) {
	// console.log(response);

	// var gifLink = response.data[0].images.fixed_height.url
	// console.log(gifLink);
	// $('#searchResults').append('<img src=' + gifLink + " />");






	$('#searchTerms').on('click', '.movie', function() {
		var newTopicWord = $(this).attr('data-name');
		
		$.ajax({url: "http://api.giphy.com/v1/gifs/search?q=" + newTopicWord + " &api_key=dc6zaTOxFJmzC&limit=10", method: 'GET'}).done(function(response) {

		var gifLink = response.data[0].images.fixed_height.url
		var gifLink1 = response.data[1].images.fixed_height.url
		var gifLink2 = response.data[2].images.fixed_height.url
		var gifLink3 = response.data[3].images.fixed_height.url
		var gifLink4 = response.data[4].images.fixed_height.url
		var gifLink5 = response.data[5].images.fixed_height.url
		var gifLink6 = response.data[6].images.fixed_height.url
		var gifLink7 = response.data[7].images.fixed_height.url
		var gifLink8 = response.data[8].images.fixed_height.url
		var gifLink9 = response.data[9].images.fixed_height.url


		$('#searchResults').append('<img src=' + gifLink + " />");
		$('#searchResults').append('<img src=' + gifLink1 + " />");
		$('#searchResults').append('<img src=' + gifLink2 + " />");
		$('#searchResults').append('<img src=' + gifLink3 + " />");
		$('#searchResults').append('<img src=' + gifLink4 + " />");
		$('#searchResults').append('<img src=' + gifLink5 + " />");
		$('#searchResults').append('<img src=' + gifLink6 + " />");
		$('#searchResults').append('<img src=' + gifLink7 + " />");
		$('#searchResults').append('<img src=' + gifLink8 + " />");
		$('#searchResults').append('<img src=' + gifLink9 + " />");
	})

});