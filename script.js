var row = 1;
var submit = document.getElementById("entry").addEventListener("click", AddRow);
// submit.addEventListener("click", AddRow);

function AddRow(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.getElementById("gender").value;
    var food = document.getElementById("food").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    var display = document.getElementById("show");
    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0); 
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);

    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = address;
    cell4.innerHTML = pincode;
    cell5.innerHTML = gender;
    cell6.innerHTML = food;
    cell7.innerHTML = state;
    cell8.innerHTML = country;

    row++;
}
