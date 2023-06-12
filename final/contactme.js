function validateForm() {
  
	var validUsername=false;
	let username = document.forms["thisform"]["username"].value;
	if (username.length < 1 || username.value===null) {
		alert("The username is required.");
	} else {
		validUsername=true;
	}
	
	var validEmail=false;
	let email = document.forms["thisform"]["email"].value;
	var atpos = email.indexOf("@");
	var dotpos = email.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
		alert("Invalid email address. You need an '@' and a '.'");
	} else {
		validEmail=true;
	}
	
	var validComment=false;
	let comment = document.forms["thisform"]["comment"].value;
	if (comment.length <1 ||comment.value===null) {
		alert("A comment is required.");
	} else {
		validComment=true;
	}

	if (validUsername===true && validEmail===true && validComment===true) {
		return true;
	} else {
		return false;
	}
}

