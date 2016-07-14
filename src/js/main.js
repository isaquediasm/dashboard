(function() {
  'use strict';

  var cards = [];

  function fetchAndUpdate() {
    // Initiate a variable to receive the html elements
    var elements = '';

    // Iterate the array
    cards.map(function(item, i) {
      elements += '<div class="card"><div class="title">' + item.title + '<span data-delete="' + i + '" class="delete">X</span></div><div class="text">' + item.text + '</div></div>';
    });

    // Render into DOM
    $('.cards-container').html(elements);
  }

  fetchAndUpdate();

  $('.btn-open').click(function() {
    $('.side-menu').toggleClass('open');
  });

  $('.card-add').click(function() {
    $('.add-content').addClass('show');
    $('.card-content').addClass('hide');
  });

  $('#addCard').on('submit', function(e) {
    e.preventDefault();

    // Get the form's value
    var title = $('#title').val(),
      text = $('#text').val();

    // Push it into the array
    cards.push({
      title: title,
      text: text
    });

    // Update the view
    fetchAndUpdate();

    // Hide do form
    $('.add-content').removeClass('show');
    $('.card-content').removeClass('hide');

    // Re-initiate the form's value
    $('#title').val('');
    $('#text').val('');
  });

  $('.cards-container').on('click', '.delete', function() {
  	// Get the element's index
    var indexToDelete = $(this).data("delete");

    // Remove it from the array
    cards.splice(indexToDelete, 1);
    
    // Update
    fetchAndUpdate();
  });
})();