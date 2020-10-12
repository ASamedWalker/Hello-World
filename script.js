// // let basket = "Apple";
// // document.write(basket);
// // document.write("<br>");
// // basket = "orange";
// // document.write(basket);
// // var x;
// // var a = 9;
// // var b = 1.5;
// // var c = true;
// // var d = "abc";
// // var e = undefined;
// // document.write(typeof(x) + "<br>");
// // document.write(typeof(a) + "<br>");
// // document.write(typeof(b) + "<br>");
// // document.write(typeof(c) + "<br>");
// // document.write(typeof(d) + "<br>");
// // document.write(typeof(e) + "<br>");
// // var a = 1;
// // var b = 2;
// // var c = 3;
// // var d = 4;
// // document.write(a + b + "<br>");
// // document.write((a * b) + "<br>");
// // document.write((a - b) + "<br>");
// // document.write((b / a) + "<br>");
// // document.write((c % b) + "<br>");

// // function add(a, b) {
// //   return a + b;
// // }
// // function multiply(a, b) {
// //   return a * b;
// // }
// // function sub(a, b) {
// //   return a - b;
// // }
// // function divide(a, b) {
// //   return a / b;
// // }

// // let result = add(5, 8);
// // document.write(result);
// // document.write("<br>");
// // let result1 = multiply(5, 8);
// // document.write(result1);
// // document.write("<br>");
// // let result2 = sub(5, 8);
// // document.write(result2);
// // document.write("<br>");
// // let result3 = divide(5, 8);
// // document.write(result3);

// // function Calculator(){
// //   this.add = (a, b) => {
// //     return a + b;
// //   }
// // }

// // let cal = new Calculator();

// // let result = cal.add(4,2);
// // document.write(result);

// // let a = "1";
// // let b = "2";

// // let result = a + b;
// // document.write(result);
// // document.write("<br>");
// // result = parseInt(a) + parseInt(b);
// // document.write(result);

// // let divObj = document.getElementById("word");
// // let htmlContent = divObj.innerHTML;
// // alert(htmlContent);

// // let divObj = document.getElementById("username");
// // let value = divObj.value;
// // alert(value);

// // function doClick() {
// //   let divObj = document.getElementById("username");
// //   let value = divObj.value;
// //   alert(value);
// // }

// function doAdd() {
//   let aObj = document.getElementById("a");
//   let bObj = document.getElementById("b");
//   let resultObj = document.getElementById("result");
//   let a = parseInt(aObj.value);
//   let b = parseInt(bObj.value);
//   resultObj.innerHTML = a + b;
// }

// function doSub() {
//   let aObj = document.getElementById("a");
//   let bObj = document.getElementById("b");
//   let resultObj = document.getElementById("result");
//   let a = parseInt(aObj.value);
//   let b = parseInt(bObj.value);
//   resultObj.innerHTML = a - b;
// }

// function doMultiply() {
//   let aObj = document.getElementById("a");
//   let bObj = document.getElementById("b");
//   let resultObj = document.getElementById("result");
//   let a = parseInt(aObj.value);
//   let b = parseInt(bObj.value);
//   resultObj.innerHTML = a * b;
// }

// function doDivision() {
//   let aObj = document.getElementById("a");
//   let bObj = document.getElementById("b");
//   let resultObj = document.getElementById("result");
//   let a = parseInt(aObj.value);
//   let b = parseInt(bObj.value);
//   resultObj.innerHTML = a / b;
// }

// let d = 4;
// document.write(d++);
// document.write("<br>");

// d = 4;
// document.write(++d);
// document.write("<br>");

// d = 4;
// document.write(d--);
// document.write("<br>");

// d = 4;
// document.write(--d);
// document.write("<br");


// let result = 10;
// result = result + 1;
// document.write(result);
// document.write("<br>");

// result = 10;
// result++;
// document.write(result);
// document.write("<br>");

// result = 10;
// result += 1;
// document.write(result);
// document.write("<br>");

// function doAdd() {
//   var quantityObj = document.getElementById("quantity");
//   var value = parseInt(quantityObj); 
//   value++;
//   quantityObj.value = value;
// }

// function doSub() {
//   var newest = document.getElementById("quantity");
//   var value = parseInt(newest.value);
//   value--;
//   newest.value = value;
// }

// function doSubmit() {
//   let scoreObj = document.getElementById("score");
//   let messageObj = document.getElementById("message");

//   var score = parseInt(scoreObj.value);
//   if (score === 5) {
//     messageObj.innerHTML = "Excellent";
//   } else if (score === 4) {
//     messageObj.innerHTML = "Good";
//   } else {
//     messageObj.innerHTML = "Need to catch up";
//   }
// }

//   function doTax() {
//   let salaryObj = document.getElementById("salary");
//   let salary = parseInt(salaryObj.value);
//   let tax = 0;
//   if (salary >= 500 && salary < 2000) {
//     tax = salary * 0.1;
//   } else if (salary >= 2000 && salary < 5000) {
//     tax = salary * 0.15;
//   } else if (salary >= 5000 && salary < 20000) {
//     tax = salary * 0.2;
//   } else {
//     tax = salary * 0.3;
//   }

//   document.getElementById("tax").innerHTML = tax;
// }

// function doPay(obj) {
//   let num = parseInt(obj.value);
//   let resultObj = document.getElementById("result");
//   switch(num) {
//     case 1:
//     resultObj.innerHTML = "Pay by Visa Card";
//     break;
//     case 2:
//     resultObj.innerHTML = "Pay by Master Card";
//     break;
//     case 3:
//     resultObj.innerHTML = "Pay by Paypal";
//     break;

//     default:
//     resultObj.innerHTML = "Pay by face to face";
//   }
// }

// let i = 0;
// while(i < 10) {
//   document.write(i + ",");
//   i++;
// }

// for (let i = 0; i < 10; i++) {
//   document.write(i + ",");
// }

// let scores = new Array();
// scores[0] = 90;
// scores[1] = 70;
// scores[2] = 50;
// scores[3] = 80;
// scores[4] = 60;
// scores[5] = 85;

// for (let i = 0; i < scores.length; i++) {
//   document.write(scores[i] + ",")
// }

// const checkAll = (obj) => {
//   let bookArray = document.getElementsByName("book");
//   for (let i = 0; i < bookArray.length; i++) {
//     bookArray[i].checked = obj.checked;
//   }
// }


// let maps = [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0]
// ]

// for (let i = 0; i < maps.length; i++) {
//   for (let j = 0; j < maps[i].length; j++) {
//     let num = Math.floor(Math.random() * 2) + 1;
//     maps[i][j] = num;
//   }
// }

// let mapHTML = "";
// for (let i = 0; i < maps.length; i++) {
//   for (let j = 0; j < maps[i].length; j++) {
//     mapHTML += "<input type='button' value='' onClick='doButtonClick(this," + maps[i][j] + ")' />";
//   }
//   mapHTML += "<br>"
// }
// document.getElementById("result").innerHTML = mapHTML;


// function doButtonClick(obj, value) {
//   if (value === 1) {
//     obj.value = "*";
//   } else if(value === 2) {
//     obj.value = "Puppy";
//   }
// }
 
 

// let countryArray = ["Ghana",  "Guinea", "Brazil", "United States"];

// let provinceArray = new Array();
// provinceArray[0] = [];
// provinceArray[1] = ["Accra", "Tamale"];
// provinceArray[2] = ["Conakry", "Kampala"];
// provinceArray[3] = ["Sao Paulo", "Rio"];
// provinceArray[4] = ["San Franscisco", "New York"];


// window.onload = function() 
// {

//   let countryObj = document.getElementById("country");
//   for (let i = 0; i < countryArray.length;  i++) {
//     option = document.createElement("option");
//     option.text = countryArray[i];
//     option.value = countryArray[i];

//     countryObj.options[countryObj.options.length] = option;
//   }
// }

// function doCountryChange(obj) 
// {
//   let provinceObj = document.getElementById("province");
//   provinceObj.options.length = 0; //clear all

//   let index = obj.selectedIndex;
//   for (let i = 0; i < provinceArray[index].length; i++) {

//     let option = document.createElement("option");
//     option.text = provinceArray[index][i];
//     option.value = provinceArray[index][i];

//     provinceObj.options[provinceObj.options.length] = option;
//   }
// }


// Creating a login in Page

// function checkLogin() {
//   let usernameObj = document.getElementById("username");
//   let pwdObj = document.getElementById("pwd");

//   if (usernameObj.value === "") {
//     alert("Please input username !");
//     return;
//   }

//   if (pwdObj.value === "") {
//     alert("Please input password !");
//     return;
//   }

//   alert("login successfully!");
// }

// Creating a login in Page using document.onkeypress

// document.onkeypress = (event) => {
//   let ext = window.event?window.event:event;
//   let key = ext.keyCode?ext.keyCode:ext.which;
//   if (key === 13) // press enter key will be invoked 
//   {
//     checkLogin();
//   }
// }

// function checkLogin() {
//   let usernameObj = document.getElementById("username");
//   let pwdObj = document.getElementById("pwd");

//   if(usernameObj.value === "") {
//     alert("Please input username!");
//     return;
//   }

//   if(pwdObj.value === "") {
//     alert("Please input password !");
//     return;
//   }

//   alert("login successfully!");
// }

// function zoomImage(obj) {
//   document.getElementById("image").src = obj.src;
// }

// function doGetParentNode() {
//   let divObj = document.getElementById("div");
//   alert(divObj.parentNode.nodeName);
// }

// function doGetChildNodes() {
//   let div = document.getElementById("div");
//   let childNodes = div.childNodes;
//   for (let i = 0; i < childNodes.length; i++) {
//     if (childNodes[i].nodeType === 1) {
//       document.write(childNodes[i].nodeName + ",");
//       document.write(childNodes[i].nodeType + ",");
//       document.write(childNodes[i].innerHTML + "<br>");
//     }
//   }
// }


// function doGetSliding() {
//   let bookObj = document.getElementById("book");
//   document.write(bookObj.previousSibling.innerHTML + "<br>");
//   document.write(bookObj.nextSibling.innerHTML);
// }

// function doCreateTextNode() {
//   let divObj = document.getElementById("div");
//   let newNode = document.createTextNode("Good Dreams");
//   divObj.appendChild(newNode);
// }


// function doCreateElement() {
//   let divObj = document.getElementById("div");
//   buttonElement = document.createElement("input");
//   buttonElement.type = "button";
//   buttonElement.value = "button"
//   divObj.appendChild(buttonElement);
// }

// function doRemoveChild() {
//   let div = document.getElementById("div1");
//   let img = document.getElementById("image");
//   div.removeChild(ig);
// }


// function doReplaceChild() {
//   let imgNode = document.createElement("img");
//   imgNode.src = "images/html.jpg";
//   let div1 = document.getElementById("div1");
//   div1.replaceChild(imgNode, div1.childNodes[0]);
// }

// function addContact() {
//   let contact = document.getElementById("contact");
//   let newNode = contact.cloneNode(true);
//   let div = document.getElementById("div");
//   div.appendChild(newNode);
// }

// function deleteNode(obj) {
//   if(obj.parentNode.parentNode.childNodes.length > 1 ) {
//     obj.parentNode.removeNode(true);
//   }
// }

// function doChangeFont() {
//   let div = document.getElementById("div");
//   div.style.fontSize = 48 + "px";
//   div.style.fontWeight = "bold";
//   div.style.color="#00ff00";
// }

// function changeFont() {
//   let div = document.getElementById("div");
//   if(div.className == "smallFont") {
//     div.className = "bigFont";
//   } else {
//     div.className = "smallFont";
//   }
// }

// function change() {
//   let div2 = document.getElementById("div2");
//   if(div2.className === "open") return div2.className="close";
//   else return(div2.className = "open");
// }

// function doOver(obj) {
//   if(obj.className!="down") {
//     return obj.className = "over";
//   }
// }

// function doOut(obj) {
//   if(obj.className!="down") {
//     return obj.className="";
//   }
// }

// function doDown(obj) {
//   if(obj.className!="down") {
//     return obj.className = "down";
//   } else {
//     return obj.className="over";
//   }
// }

var table;
function doCreateTable() {
  table = document.createElement("table");
  table.className = "tableClass";
  document.getElementById("div").appendChild(table);
}

function doCreateRow() {
  var rowNum = parseInt(document.getElementById("row").value);
  var colNum = parseInt(document.getElementById("col").value);
  for (var i=1; i <= rowNum)




















