function validateForm(form) {
	
	var validFirstname=false;
	if (form.FirstName.value==="null" || form.FirstName.value==="" || form.FirstName.length > 20) {
		alert("The first name is required and cannot be greater than 20 characters");
		form.FirstName.focus();
	} else {
		validFirstname=true;
	}
	return (validFirstname);
	 
	var validLastname=false;
	if (form.LastName.value==="null" || form.LastName.value==="" || form.LastName.length > 50) {
		alert("The last name is required and cannot be greater than 50 characters");
		form.LastName.focus();
	} else {
		validLastname=true;
	}
	return (validFirstname && validLastname);
	
	var validEmail=false;
	var atpos = form.Email.indexOf("@");
	var dotpos = form.Email.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=form.Email.length) {
		alert("Invalid email address. You need an '@' and a '.'");
		form.Email.focus();
	} else {
		validEmail = true;
	}
	return (validEmail);
	
	var validPhone=false;
	if (isNaN(form.Phone.value) || form.Phone.length > 15 || form.Phone.value===null || form.Phone.value==="") {
		alert("Invalid phone number. It must be at the most 15 characters long and consist of only numbers");
		form.Phone.focus();
	} else {
		validPhone = true;
	}
	return(validPhone);
	
	var validUsername=false;
	if (form.Username.value==="null" || form.Username.value==="" || form.Username.length > 12) {
		alert("A username is required and cannot be greater than 12 characters");
		form.Username.focus();
	} else {
		validUsername=true;
	}
	return(validUsername);
	
	var validPassword=false;
	if (form.Password.value==="null" || form.Password.value==="" || form.Password.length > 7) {
		alert("A password is required and cannot be longer than 7 characters");
		form.Password.focus();
	} else {
		validPassword=true;
	}
	return(validPassword);
	
	var validAddress=false;
	if (form.Address.value==="null" || form.Address.value==="") {
		alert("An address is required");
		form.Address.focus();
	} else {
		validAddress=true;
	}
	return(validAddress);
	
	var validCity=false;
	if (form.City.value==="null" || form.City.value==="") {
		alert("A city is required");
		form.City.focus();
	} else {
		validCity=true;
	}
	return(validCity);
	
	var validState=false;
	if (form.State.value==="null") {
		alert("A state is required");
		form.State.focus();
	} else {
		validState=true;
	}	
	return(validState);
	
	var validCountry=false;
	if (form.Country.value==="null") {
		alert("A country is required");
		form.Country.focus();
	} else {
		validCountry=true;
	}
	return(validCountry);
	
	if (form.Country.value==="USA") {
		var validZipCode=false;
		if (form.Zipcode.value==="null" || form.Zipcode.value==="" || form.Zipcode.length > 5) {
			alert("A zipcode is required and cannot be longer than 5 digits");
			form.Zipcode.focus();
		} else {
			validZipCode=true;
		}
		return(validZipCode);
	}
	if (validFirstname === false || validLastname === false || validEmail === false || validPhone === false || validUsername === false || validPassword === false || validAddress === false || validCity === false || validState === false || validCountry === false || validZipCode === false) {
		return false;
	} else {
		return true;
	}
}
	
	
	
		
	 


