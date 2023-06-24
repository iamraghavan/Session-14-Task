var form = document.getElementById("myForm");
var tableBody = document.querySelector("#myTable tbody");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var address = document.getElementById("address").value;
  var pincode = document.getElementById("pincode").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var food = getSelectedFood();
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;


  var newRow = tableBody.insertRow();
  var cell1 = newRow.insertCell();
  cell1.textContent = firstName;

  var cell2 = newRow.insertCell();
  cell2.textContent = lastName;

  var cell3 = newRow.insertCell();
  cell3.textContent = address;

  var cell4 = newRow.insertCell();
  cell4.textContent = pincode;

  var cell5 = newRow.insertCell();
  cell5.textContent = gender;

  var cell6 = newRow.insertCell();
  cell6.textContent = food.join(", ");

  var cell7 = newRow.insertCell();
  cell7.textContent = state;

  var cell8 = newRow.insertCell();
  cell8.textContent = country;

  form.reset();
});

function getSelectedFood() {
  var foodOptions = document.querySelectorAll('input[name="food"]:checked');
  var selectedFood = [];
  for (var i = 0; i < foodOptions.length; i++) {
    selectedFood.push(foodOptions[i].value);
  }
  return selectedFood;
}
