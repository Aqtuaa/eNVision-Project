function confirmEmail(){
   return confirm("This will take you to new Outlook tab. Do you wish to continue?");
}

function confirmTelp(){
   return confirm("This will take you to new Whatsapp tab. Do you wish to continue?");
}

function confirmIg(){
   return confirm("This will take you to new Instagram tab. Do you wish to continue?");
}

function validateData(){
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let transfer = document.getElementById("transfer");
    let cash = document.getElementById("cash");
    let agree = document.getElementById("agree");
    let addons = document.querySelectorAll('input[type="checkbox"][value]');

    if(fullName == ""){
        alert("Full Name must be filled!");
        return false;
    }

    if(fullName.length < 3){
        alert("Full Name must be at least 3 Characters!");
        return false; 
    }

    if(email == ""){
        alert("Email must be filled!");
        return false;
    }

    if(!email.endsWith("@gmail.com")){
        alert("Email must end with @gmail.com");
        return false;
    }


    if(!cash.checked && !transfer.checked){
        alert("Please Select Payment Method!");
        return false;
    }

    if(!agree.checked){
        alert("Please Agree to the Terms and Conditions First!");
        return false;
    }

    alert("Buy Successful! You got 1000 Points!");
    window.location.href = "../index.html"
    return false; 
}

