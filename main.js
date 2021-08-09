var empName = document.querySelector("#empname");
var empAge = document.querySelector("#empage");
var empCountry = document.querySelector("#country");
var empState = document.querySelector("#state");

var country = [];
var uniqueCountry = [];
var rowno = 0;


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
}

function countryCount() {
  var flag = 0;
  var k = -1;
  //create a new table with id table3 in your index.html
  var tds = document.getElementById('table1').querySelectorAll("tr td:nth-child(3)");
  var newcountry = tds[tds.length - 1].textContent;
  for (var l = 0; l < country.length; l++) {
    if (country[l] == newcountry) {
      flag = 1;
      break;
    }
  }
  if (flag == 0) {
    country[country.length] = tds[tds.length - 1].textContent;
    //means you don't have the country.
    //just add the country and count in your table3
    var tableUser = document.querySelector("#table2");
    var row = tableUser.insertRow(-1);
    var countryname = row.insertCell(0);
    var countrynum = row.insertCell(1);

    countryname.innerHTML = newcountry;
    countrynum.innerHTML = "1";
  } else {
    //means you have the country. 
    //Find the country from the new table and take the count of the country and increment that.
    //TO GET THE COUNTRIES---->
    var tds2 = document.getElementById('table2').querySelectorAll("tr td:first-child");
    //GET THE ROWS POSITION WHERE IT IS using 
    var k = 0;
    for (var i = 0; i <= tds2.length; i++) {
      if (tds2[i].textContent == newcountry) {
        k = i;
        //alert("k: "+k);
        break;
      }
    }
    if (k != -1) {
      //That means you have the data
      //TO GET THE COUNT----->
      var tds1 = document.getElementById('table2').querySelectorAll("tr td:last-child");
      //alert(tds1[0]);
      var countofcountry = parseInt(tds1[k].textContent) + 1;
      //alert(typeof countofcountry);
    }
    var table = document.getElementById('table2');
    // Delete respective row
    //alert("k:"+ (parseInt(k)));
    table.deleteRow(parseInt(k));
    if (country.length == 1) {
      rowno = rowno + 1;
    }
    if (rowno == 1)
      table.deleteRow(parseInt(0));
    //now remove the previous count and write the new count
    var tableUser = document.querySelector("#table2");
    var row = table.insertRow(-1);
    var countryname = row.insertCell(0);
    var countrynum = row.insertCell(1);
    countryname.innerHTML = newcountry;
    countrynum.innerHTML = countofcountry;
  }
  //
  //country.push(tds[tds.length-1].textContent);
  //alert(country);
  success();
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
submitBtn.addEventListener("click", countryCount);