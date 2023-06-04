function validateForm() {
	
	document.getElementById("errorMsg").innerHTML = "<p></p>";
	
	var validFirstName=false;
	let firstname = document.forms["thisform"]["FirstName"].value;
	if (firstname.length < 1 || firstname.value===null || firstname.length > 20) {
		document.getElementById("errorMsg").innerHTML += "<p>The first name is required and cannot be greater than 20 characters</p>";
	} else {
		validFirstName=true;
	}
	
	var validLastName=false;
	let lastname = document.forms["thisform"]["LastName"].value;
	if (lastname.length < 1 || lastname.value===null || lastname.length > 50) {
		document.getElementById("errorMsg").innerHTML += "<p>The last name is required and cannot be greater than 50 characters</p>";
	} else {
		validLastName=true;
	}
		
	var validEmail=false;
	let email = document.forms["thisform"]["Email"].value;
	var atpos = email.indexOf("@");
	var dotpos = email.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
		document.getElementById("errorMsg").innerHTML += "<p>Invalid email address. You need an '@' and a '.'</p>";
	} else {
		validEmail=true;
	}
	
	var validPhone=false;
	let phone = document.forms["thisform"]["Phone"].value;
	phonenum = phone.toString();
	if (isNaN(phone) || phonenum.length > 15 || phonenum.value===null || phonenum.length < 1) {
		document.getElementById("errorMsg").innerHTML += "<p>Invalid phone number. It must be at the most 15 characters long and consist of only numbers</p>";
	} else {
		validPhone=true;
	}
	
	var validUsername=false;
	let username = document.forms["thisform"]["Username"].value;
	if (username.value===null || username.length < 1 || username.length > 12) {
		document.getElementById("errorMsg").innerHTML += "<p>A username is required and cannot be greater than 12 characters</p>";
	} else {
		validUsername=true;
	}

	var validPassword=false;
	let password = document.forms["thisform"]["Password"].value;
	if (password.value===null || password.length < 1 || password.length > 7) {
		document.getElementById("errorMsg").innerHTML += "<p>A password is required and cannot be longer than 7 characters</p>";
	} else {
		validPassword=true;
	}
	
	var validAddress=false;
	let address = document.forms["thisform"]["Address"].value;
	if (address.value===null || address.length < 1) {
		document.getElementById("errorMsg").innerHTML += "<p>An address is required</p>";
	} else {
		validAddress=true;
	}
	
	var validCity=false;
	let city = document.forms["thisform"]["City"].value;
	if (city.value===null || city.length < 1) {
		document.getElementById("errorMsg").innerHTML += "<p>A city is required</p>";
	} else {
		validCity=true;
	}
	
	var validState=false;
	let state = document.forms["thisform"]["State"];
	statevalue = state.value;
	if (statevalue==="none") {
		document.getElementById("errorMsg").innerHTML += "<p>A state is required</p>";
	} else {
		validState=true;
	}	
				
	var validCountry=false;
	let country = document.forms["thisform"]["Country"];
	countryvalue = country.value;
	if (countryvalue==="none") {
		document.getElementById("errorMsg").innerHTML += "<p>A country is required</p>";
	} else {
		validCountry=true;
		if (countryvalue==="USA") {
			var validZipCode=false;
			let zipcode = document.forms["thisform"]["ZipCode"].value;
			if (zipcode.value===null || zipcode.length < 1 || zipcode.length > 5) {
				document.getElementById("errorMsg").innerHTML += "<p>A zipcode is required and cannot be longer than 5 digits</p>";
			} else {
				validZipCode=true;
			}
		} 
	}

	if (validFirstName===true && validLastName===true && validEmail===true && validPhone===true && validUsername===true && validPassword===true && validAddress===true && validCity===true && validState===true && validCountry===true) {
		if (countryvalue==="USA") {
			if (validZipCode===true) {
				return true;
			} else {
				return false;
			}
		} else {
			return true;
		}
	} else {
		return false;
	}
}
