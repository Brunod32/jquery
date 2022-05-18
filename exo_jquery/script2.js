$(document).ready(function () {
  $('h1').text('Introduction au jQuery');
  $('div.introduction').html('<p>Il s\'agit de <strong>l\'introduction</strong></p>');
  $('p.content').css('color', 'blue');

  $('p.content').click( () => {
    alert('Le bleu est ma couleur préférée');
  });


  });

