var empName = document.querySelector("#empname");
var empAge = document.querySelector("#empage");
var empCountry = document.querySelector("#country");
var empState = document.querySelector("#state");
var submitBtn = document.querySelector("#save");


var allCountry = new Array();

function insert(empCountry) {
    allCountry[allCountry.length] = empCountry;
}

function count() {

    allCountry.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < allCountry.length; i++) {
        if (allCountry[i] != current) {
            if (cnt > 0) {
                document.write(current + ' ' + cnt);
            }
            current = allCountry[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        document.write(current + ' ' + cnt);
    }

}

count();




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

    var tableUser2 = document.querySelector("#table2");
    var row = tableUser2.insertRow(-1);
    var countryDistinct = row.insertCell(0);
    var countOf = row.insertCell(1);
    countryDistinct.innerHTML = empCountry.value;
    countOf.innerHTML = count();
}



// function clearAll() {
//     empName.value = ""
//     empAge.value = ""
//     empCountry.value = ""
//     empState.value = ""
// }

submitBtn.addEventListener("click", clickEventHandler);
submitBtn.addEventListener("click", clearAll);