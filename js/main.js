

$(document).ready(function() {
    var $checkboxes = $(
        '#main ul input[type="checkbox"]');
    $checkboxes.change(function() {
        var countCheckedCheckboxes = $checkboxes.filter(
            ':checked').length;
        $('.count_checked_checkboxes').text(
            countCheckedCheckboxes);
        $('#edit_count_checked_checkboxes').val(
            countCheckedCheckboxes);
        });
    $('.scrollUp').on('click', function(){window.parent.postMessage('scrollUp', '*');});
});



/*function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(".gototop").on('click', function(){
  topFunction();
});*/



/*
FB.ui(
 {
  method: 'share',
  href: 'https://developers.facebook.com/docs/'
}, function(response){});



FB.ui({
  method: 'share_open_graph',
  action_type: 'og.likes',
  action_properties: JSON.stringify({
    object:'https://developers.facebook.com/docs/',
  })
}, function(response){
  // Debug response (optional)
  console.log(response);
});*/
