// exe.1
var fnameInp = document.getElementById("fnameinp");
var lnameInp = document.getElementById("lnameinp");
var birthYearInp = document.getElementById("birthinpt");
var idInp = document.getElementById("idinp");
var countryInp = document.getElementById("countryinp");
var exe1button = document.getElementById("exe1btn");

exe1button.addEventListener("click", function () {
  var person = {
    firstName: fnameInp.value,
    lastName: lnameInp.value,
    birthYear: birthYearInp.value,
    ID: idInp.value,
    livingAt: countryInp.value,
    
  };
  patientsArray.push(person);
  for (var i = 0; i < patientsArray.length; i++) {
    if (patientsArray[i].id == idInp.value) {
      alert("id alreay here");
      patientsArray.pop();
    }
  }
  console.log(patientsArray);
});
var patientsArray = [
  {
    firstName: "micheal",
    id: 1,
    lastName: "jordan",
    birthYear: 1987,
  },

  {
    firstName: "jeffry",
    id: 2,
    lastName: "lay",
    birthYear: 1982,
  },

  {
    firstName: "jhon",
    id: 3,
    lastName: "raigan",
    birthYear: 1991,
  },
];

 
// exe.4
var container = document.getElementById("exe4div");
for (var i = 0; i < patientsArray.length; i++) {
  container.innerText += `first name : ${patientsArray[i].firstName} , last name : ${patientsArray[i].lastName} , id : ${patientsArray[i].id} , birth year : ${patientsArray[i].birthYear}`;
}


// exe.5
var wrapper = document.getElementById("exe5div");
for (var i = 0; i < patientsArray.length; i++) {
  wrapper.innerHTML += `<p> first name : ${patientsArray[i].firstName} , last name : ${patientsArray[i].lastName} , id : ${patientsArray[i].id} , birth year : ${patientsArray[i].birthYear} </p>`;
}


// exe.6
oninput = function () {
fnameInp.value= fnameInp.value.toUpperCase() ;
lnameInp.value = lnameInp.value.toUpperCase() ;
countryInp.value = countryInp.value.toUpperCase () ;
}


// exe.7
var exe7Input = document.getElementById("exe7inp");
var exe7Button = document.getElementById("exe7btn");
var idInput = document.getElementById("idinput");
var idButton = document.getElementById("idbtn");
var exe7div = document.getElementById("exe7div");
var exe7p = document.getElementById("exe7p");

exe7Button.addEventListener("click", function () {
  for (var i = 0; i < patientsArray.length; i++) {
    if (exe7Input.value == patientsArray[i].firstName) {
        exe7p.innerHTML = `<p> first name : ${patientsArray[i].firstName} , last name : ${patientsArray[i].lastName} , id : ${patientsArray[i].id} , birth year : ${patientsArray[i].birthYear} </p>`;
    } 
    if (exe7p.innerHTML.length < 2) {
        exe7p.innerHTML = `not here`;
    }
  }
});

idButton.addEventListener("click", function () {
  for (var i = 0; i < patientsArray.length; i++) {
    if (idInput.value == patientsArray[i].id) {
      exe7p.innerHTML = `first name : ${patientsArray[i].firstName} , last name : ${patientsArray[i].lastName} , id : ${patientsArray[i].id} , birth year : ${patientsArray[i].birthYear}`;
    }
  }
  if (exe7p.innerHTML.length < 2) {
    exe7p.innerHTML = "dont exist";
  }
});
