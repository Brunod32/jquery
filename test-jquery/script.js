// jQuery(document).ready(function () {
//     $('div #first').click(function () {
//         $("#first").remove('.back');
//         // $("#first").addClass('.first');
//     });
// });

$(document).ready(function(){
    $(".div_test").click(function(){
      // $(".para").animate({
      $(".div_test_2").animate({
        height: 'toggle'
      }, 1000);
    });
  });