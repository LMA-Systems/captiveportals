
var price;
var pricing_data = [];
var xml_length = 0;
if (document.getElementById("customer_number_input").value == "") {
		document.getElementById("price").innerHTML = 0;
}
if (Number(document.getElementById("customer_number_input").value) > 30 ) {
  document.getElementById("price").innerHTML = 0;
}

loadDoc2();
function loadDoc2() {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction2(this);
    }
  };
  xhttp.open("GET", "|pricing_xml|", true);
  xhttp.send();
}
function myFunction2(xml) {
  var i;
  var xmlDoc = xml.responseXML;
	var x = xmlDoc.getElementsByTagName("daypass");
	xml_length = x.length;

	for (i = 0; i <x.length; i++) {
		  pricing_data[i] = new Array();
   pricing_data[i][0] = x[i].getElementsByTagName("wanted")[0].childNodes[0].nodeValue;
	 pricing_data[i][1] = x[i].getElementsByTagName("buying")[0].childNodes[0].nodeValue;
   pricing_data[i][2] = x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue;
  }
}
function calculatePrice() {

	var i;
	if (document.getElementById("customer_number_input").value == "") {
		  document.getElementById("price").innerHTML = 0;
	}
	if (Number(document.getElementById("customer_number_input").value) > 30 ) {
    document.getElementById("price").innerHTML = 0;
	}
	for (i = 0; i < xml_length; i++)
	{
	if ( Number(document.getElementById("customer_number_input").value) == pricing_data[i][0]) {
		document.getElementById("price").innerHTML = pricing_data[i][2];
		document.getElementById("price_payment").value = pricing_data[i][2];
	  document.getElementById("customer_number").value = pricing_data[i][1];
	//	document.getElementById("customer_number_input").value = pricing_data[i][1];
	}
}
}
