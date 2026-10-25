document.getElementById("contact-form").onsubmit = () => {
    clearFilters();

    let isValid = true; 
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const fname = document.getElementById("fname").value.trim(); 
    const lname = document.getElementById("lname").value.trim(); 
    const email = document.getElementById("email").value.trim(); 
    const linkedinAddress = document.getElementById("linkedin").value.trim(); 
    const meet = document.getElementById("meet").value.trim(); 
    const messagingList = document.getElementById("messaging-list");

    if (fname.trim() === "") {
        document.getElementById("err-fname").style.display = "block"; 
        isValid = false; 
    }
    if (lname.trim() === "") {
        document.getElementById("err-lname").style.display = "block"; 
        isValid = false; 
    }
    if (meet == "none") {
        document.getElementById("err-meet").style.display = "block"; 
        isValid = false; 
    }
    if (email !== "" && !emailPattern.test(email)) {
        document.getElementById("err-email").style.display = "block";
        isValid = false;
    }

    if (messagingList.checked && email === "") {
        document.getElementById("err-mailing").style.display = "block";
        isValid = false;
    }

    if (linkedinAddress) {
        if (!linkedinAddress.startsWith("https://linkedin.com/in")) {
            document.getElementById("err-linkedin").style.display = "block";
            isValid = false; 
        }
    }

    return isValid;
}

const clearFilters = () => {
    let errors = document.getElementsByClassName("err"); 
    [...errors].forEach(error => {
        error.style.display = "none";
    });
}

const showEmailFormat = () => {
    if (document.getElementById("messaging-list").checked) {
        document.getElementById("format-mail").style.display = "block";
    } else {
        document.getElementById("format-mail").style.display = "none"; 
    }
}

const specify = () => {
    if (document.getElementById("meet").value.trim() == "other") {
        document.getElementById("other").style.display = "flex";
    } else {
        document.getElementById("other").style.display = "none";
        document.getElementById("select-other").value = "";
    }
}

specify(); 