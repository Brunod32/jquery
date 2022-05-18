$(() => {
  $('#introduction').remove()

  $("#goals").prepend('<li>Objectif 0</li>')
  $('#goals').append('<li>Objectif 5</li>')
  /* on peut aussi faire
  let list = $('#goals)
  list.prepend('<li>Objectif 0</li>')
  list.append('<li>Objectif 0</li>')
  */
})