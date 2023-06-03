function validateForm(){
	
	var validFirstname=false;
	firstname = document.getElementbyId("FirstName").value;
	if (firstname==="null" || firstname==="" || firstname.length > 20) {
		errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
	} else {
		validFirstName=true;
	}
	document.getElementById("myform_errorloc").innerHTML = errorMessages;
	return (validFirstname);
	 
	var validLastname=false;
	lastname = document.getElementById("LastName").value;
	if (lastname==="null" || lastname==="" || lastname.length > 50) {
		errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
	} else {
		validLastname=true;
	}
	document.getElementById("myform_errorloc").innerHTML = errorMessages;
	return (validFirstname && validLastname);
	
	var userEmail = document.getElemenyById("Email").value;
	var validEmail=false;
	var atpos = userEmail.indexOf("@");
	var dotpos = userEmail.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
		errorMessages += "<p>Invalid email address</p>";
	} else {
		validEmail = true;
	}
	document.getElementById("myform_errorloc").innerHTML = errorMessages;
	return (validEmail);
	
	var phone = document.getElementById("Phone").value;
	var validPhone=false;
	if (isNaN(phone) || phone.length > 15 || phone===null || phone==="") {
		errorMessages += "<p>Invalid phone number</p>";
	} else {
		validPhone = true;
	}
	document.getElementById("myform_errorloc").innerHTML = errorMessages;
	return(validPhone);
	
	var validUsername=false;
	username = document.getElementById("Username").value;
	if (username==="null" || username==="" || username.length > 12) {
		errorMessages += "<p>A username is required and cannot be greater than 12 characters</p>";
	} else {
		validUsername=true;
	}
	document.getElementById("myform_errorloc").innerHTML = errorMessages;
	return(validUsername);
	
	var validPassword=false;
	password = document.getElementById("Password").value;
	if (password==="null" || password==="" || password.length > 7) {
		errorMessages += "<p>A password is required and cannot be longer than 7 characters</p>";
	} else {
		validPassword=true;
	}
	document.getElementById("myform_errorloc").innerHTML = errorMessages;
	return(validPassword);
	
	var validAddress=false;
	address = document.getElementById("Address").value;
	if (address==="null" || address==="") {
		errorMessages += "<p>An address is required</p>";
	} else {
		validAddress=true;
	}
	document.getElementById("myform_errorloc").innerHTML = errorMessages;
	return(validAddress);
	
	var validCity=false;
	city = document.getElementById("City").value;
	if (city==="null" || city==="") {
		errorMessages += "<p>A city is required</p>";
	} else {
		validCity=true;
	}
	document.getElementById("myform_errorloc").innerHTML = errorMessages;
	return(validCity);
	
	var validState=false;
	state = document.getElementById("State").value;
	if (state==="null") {
		errorMessages += "<p>A state is required</p>";
	} else {
		validState=true;
	}	
	document.getElementById("myform_errorloc").innerHTML = errorMessages;
	return(validState);
	
	var validCountry=false;
	country = document.getElementById("Country").value;
	if (country==="null") {
		errorMessages += "<p>A country is required</p>";
	} else {
		validCountry=true;
	}
	document.getElementById("myform_errorloc").innerHTML = errorMessages;
	return(validCountry)
	
	if (country==="USA") {
		var validZipCode=false;
		zipcode = document.getElementById("Zip Code").value;
		if (zipcode==="null" || zipcode==="" || zipcode.length > 5) {
			errorMessages += "<p>A zipcode is required and cannot be longer than 5 digits</p>";
		} else {
			validZipCode=true;
		}
		document.getElementyById("myform_errorloc").innerHTML = errorMessages;
		return(validZipCode)
	}
		
}
	
	
	
		
	 


