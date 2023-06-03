function validateForm(){
	
	var validFirstname=false;
	firstname = document.getElementbyId("FirstName").value;
	if (firstname==="null" || firstname==="" || firstname.length > 20) {
		alert("The first name is required and cannot be greater than 20 characters");
	} else {
		validFirstName=true;
	}
	return (validFirstname);
	 
	var validLastname=false;
	lastname = document.getElementById("LastName").value;
	if (lastname==="null" || lastname==="" || lastname.length > 50) {
		alert("The last name is required and cannot be greater than 50 characters");
	} else {
		validLastname=true;
	}
	return (validFirstname && validLastname);
	
	var userEmail = document.getElemenyById("Email").value;
	var validEmail=false;
	var atpos = userEmail.indexOf("@");
	var dotpos = userEmail.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
		alert("Invalid email address. You need an '@' and a '.'");
	} else {
		validEmail = true;
	}
	return (validEmail);
	
	var phone = document.getElementById("Phone").value;
	var validPhone=false;
	if (isNaN(phone) || phone.length > 15 || phone===null || phone==="") {
		alert("Invalid phone number. It must be at the most 15 characters long and consist of only numbers");
	} else {
		validPhone = true;
	}
	return(validPhone);
	
	var validUsername=false;
	username = document.getElementById("Username").value;
	if (username==="null" || username==="" || username.length > 12) {
		alert("A username is required and cannot be greater than 12 characters");
	} else {
		validUsername=true;
	}
	return(validUsername);
	
	var validPassword=false;
	password = document.getElementById("Password").value;
	if (password==="null" || password==="" || password.length > 7) {
		alert("A password is required and cannot be longer than 7 characters");
	} else {
		validPassword=true;
	}
	return(validPassword);
	
	var validAddress=false;
	address = document.getElementById("Address").value;
	if (address==="null" || address==="") {
		alert("An address is required");
	} else {
		validAddress=true;
	}
	return(validAddress);
	
	var validCity=false;
	city = document.getElementById("City").value;
	if (city==="null" || city==="") {
		alert("A city is required");
	} else {
		validCity=true;
	}
	return(validCity);
	
	var validState=false;
	state = document.getElementById("State").value;
	if (state==="null") {
		alert("A state is required");
	} else {
		validState=true;
	}	
	return(validState);
	
	var validCountry=false;
	country = document.getElementById("Country").value;
	if (country==="null") {
		alert("A country is required");
	} else {
		validCountry=true;
	}
	return(validCountry)
	
	if (country==="USA") {
		var validZipCode=false;
		zipcode = document.getElementById("Zip Code").value;
		if (zipcode==="null" || zipcode==="" || zipcode.length > 5) {
			alert("A zipcode is required and cannot be longer than 5 digits");
		} else {
			validZipCode=true;
		}
		return(validZipCode)
	}
		
}
	
	
	
		
	 


