$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});
$('.like_post_slider').flickity({
  // options
  cellAlign: 'center',
  contain: true
});



$('.post-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  adaptiveHeight: true
});
$('#menu_icon').click(function(){
	$('#menu_mobile').addClass('click');
});
$('#close_button').click(function(){
	$('#menu_mobile').removeClass('click');
});

function plus(){
  var balance = $('#balance').text();
  var temp = parseInt(balance) +1 ;
  $('#balance').text(temp);
}
function menha(){
  var balance = $('#balance').text();
  if(parseInt(balance) >1){
    var temp = parseInt(balance) - 1 ;
    $('#balance').text(temp);
  }
}
$("ul.nav-tabs a").click(function (e) {
  e.preventDefault();  
    $(this).tab('show');
});

$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );
} );
