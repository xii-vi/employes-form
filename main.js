var empName = document.querySelector("#empname");
var empAge = document.querySelector("#empage");
var empCountry = document.querySelector("#country");
var empState = document.querySelector("#state");


function success() {
  if ((document.getElementById("empname").value == "") || (document.getElementById("empage").value == "") || (document.getElementById("country").value == "")) {
    document.getElementById('save').disabled = true;
  } else {
    document.getElementById('save').disabled = false;
  }
}

var submitBtn = document.querySelector('#save');


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

  // countryCount();
}

function countryCount() {
  var country = [];
  var uniqueCountry = [];
  var flag = 0;
  //create a new table with id table3 in your index.html
  var tds = document.getElementById('table1').querySelectorAll("tr td:nth-child(3)");
  //for (var i=0; i < tds.length; ++i) {
  var employee = tds[tds.length - 1].textContent
  var newcountry = tds[tds.length - 1].textContent;
  if (country.indexOf(employee) != -1) {
    // //means you have the country. 
    // //Find the country from the new table and take the count of the country and increment that.
    // TO GET THE COUNTRIES---->
    var tds = document.getElementById('table1').querySelectorAll("tr td:first-child");
    //GET THE ROWS POSITION WHERE IT IS using 
    var k = -1;
    for (var i = 0; i < tds.length; ++i) {
      if ((tds[i].textContent).localeCompare(newcountry) == 0) {
        k = i;
        break
      }
    }
    if (k != -1) {
      //That means you have the data
      //TO GET THE COUNT----->
      var tds1 = document.getElementById('table1').querySelectorAll("tr td:nth-child(2)");
      var countryCoun = parseInt(tds1[k]) + 1;
    }
    //now remove the previous count and write the new count
    //
  } else {
    //means you don't have the country.
    //just add the country and count in your table3
    //}
    country.push(tds[i].textContent);
  }
  alert(country);

  var tableUser2 = document.querySelector("#table3");
  var row = tableUser2.insertRow(-1);
  var countryDistinct = row.insertCell(0);
  var countOf = row.insertCell(1);
  countryDistinct.innerHTML = empCountry.value;
  countOf.innerHTML = countryCoun;
}

function addDatatoJson() {
  fs.readFile('myjsonfile.json', 'utf8', function readFileCallback(err, data) {
    if (err) {
      console.log(err);
    } else {
      obj = JSON.parse(data); //data to json 
      obj.table.push({
        id: 2,
        square: 3
      }); //add some data
      json = JSON.stringify(obj); //convert it back to json
      fs.writeFile('myjsonfile.json', json, 'utf8', callback); // write it back 
    }
  });
}



function clearAll() {
  empName.value = ""
  empAge.value = ""
  empCountry.value = ""
  empState.value = ""
}

submitBtn.addEventListener("click", clickEventHandler);
submitBtn.addEventListener("click", clearAll);
submitBtn.addEventListener("click", countryCount );