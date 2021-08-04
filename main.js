var empName = document.querySelector("#empName");
var empAge = document.querySelector("#empAge");
var empCountry = document.querySelector("#country");
var empState = document.querySelector("#state");
var submitBtn = document.querySelector("#save");


function clickEventHandler() {
    var tableUser = document.querySelector("#table1");
    var row = tableUser.insertRow(-1);
    var name = row.insertCell(0);
    var age = row.insertCell(1);
    var country = row.insertCell(2);
    var state = row.insertCell(3);
    name.innerHTML = empName.value;
    age.innerHTML = empAge.value;
    country.innerHTML = empCountry.value;
    state.innerHTML = empState.value;
}

function clearAll() {
    empName.value = ""
    empAge.value = ""
    empCountry.value = ""
    empState.value = ""
}

submitBtn.addEventListener("click", clickEventHandler);
submitBtn.addEventListener("click", clearAll);