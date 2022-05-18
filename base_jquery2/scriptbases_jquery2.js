$(() => {
  //copie de #introduction puis intégration dans #introduction copy
  $('#introduction-copy').html($('#introduction').html());

  let goals = $("#goals")

  $.data( goals, "goals", {
    0 : "Récuperer le code HTML",
    1 : "Modifier le CSS",
    2 : "Parcourir une liste d'éléménts",
    3 : "Associer des données à un élément"
  })

  $('#goals li').each(function(index) {
    $(this).text($.data(goals, "goals")[index])
  })
});