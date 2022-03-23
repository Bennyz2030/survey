$(document).ready(function () {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const nameInput = $("#name").val();
    const favMusic = $("#favoriteMusic").val();
    const favFood = $("#favoriteFood").val();
    const hobby = $("#hobbies").val();
    const bday = $("#birthday").val();
    const color = $("#color").val();
    const result = (nameInput + " " + favMusic +" " + favFood +" " + hobby +" "+ bday +"  "+ color);
    alert(result);
  });
});