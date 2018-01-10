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
});



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
});
