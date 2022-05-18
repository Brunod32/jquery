if (jQuery) {
  console.log('jQuery est prête à être utilisée')

  $(document).ready(() => {
    $('h1').css('color', 'green');
    $('h2').first().text('Mes meilleurs articles')
  })
} else {
  console.log('Il y a un problème dans la définition de jQuery')
}

