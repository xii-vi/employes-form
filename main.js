var empName = document.querySelector("#empname");
var empAge = document.querySelector("#empage");
var empCountry = document.querySelector("#country");
var empState = document.querySelector("#state");
var submitBtn = document.querySelector("#save");



// var userA = new Date(userAge);

// function setStates(){

// }


function clickEventHandler() {
    var newDate = new Date();
    var year = newDate.getUTCFullYear();
    var userAge = Math.abs(year - empAge.value);
    var tableUser = document.querySelector("#table1");
    var row = tableUser.insertRow(-1);
    var name = row.insertCell(0);
    var age = row.insertCell(1);
    var country = row.insertCell(2);
    var state = row.insertCell(3);
    name.innerHTML = empName.value;
    age.innerHTML = userAge;
    country.innerHTML = empCountry.value;
    state.innerHTML = empState.value;
}



// function empCount(){
//     var tableUser2 = document.querySelector("#table2");
//     var row = tableUser2.insertRow(0);


//     countE.innerHTML = empCountry.count();
//     var countE = row.insertCell(1);

// }

// function clearAll() {
//     empName.value = ""
//     empAge.value = ""
//     empCountry.value = ""
//     empState.value = ""
// }

submitBtn.addEventListener("click", clickEventHandler);
submitBtn.addEventListener("click", clearAll);
submitBtn.addEventListener("click", empCount);