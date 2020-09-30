
var isChecked = false;

function submitCheck(){
    const type = getTicketType();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    if(name == null || name == "" || name === null || name.length < 5){
        document.getElementById('error').innerHTML = "Name Must Be Minimal 5 Character Length";
        return;
    } else if(!isNaN(name)){
        document.getElementById('error').innerHTML = "Name Must Be Alphabet";
        return;
    }

    if(email == null || email == "" || email === null || email.length < 5){
        document.getElementById('error').innerHTML = "Email Must Be Minimal 5 Character Length";
        return;
    } else if(!isNaN(email)){
        document.getElementById('error').innerHTML = "Email Must Be Alphabet";
        return;
    }

    if(isNaN(phone)){
        document.getElementById('error').innerHTML = "Phone Must Be a Number";
        return;
    } else if(phone.length < 12 || phone == null || phone == "" || phone === null){
        document.getElementById('error').innerHTML = "Phone Must Be Minimal 12 Number";
        return;
    }

    if(address == null || address == "" || address === null || address.length < 5){
        document.getElementById('error').innerHTML = "Address Must Be Minimal 5 Character Length";
        return;
    }

     if(!this.form.checkbox.checked)
{
    document.getElementById('error').innerHTML = "You must agree to the terms first.";
	
    return false;
}

    if(confirm("Ticket Type : " + type + "\nName : "+ name + "\nEmail : "+ email + "\nPhone : " + phone +  "\nAddress : " + address)){
        getMessage();
    } else{
        return;
    }
}

function getTicketType(){
    var TicketType = document.getElementById('selection');
    var value = TicketType[TicketType.selectedIndex].value;
    return value;
}

function resetNotif(){
    window.alert("Form Resetted");
}

function getMessage(){
        window.alert("Thankyou For Your Purchase :)");
}

function getCheck(){
    var checkBox = document.getElementById("agreement");
    if(checkBox.checked){
        isChecked = true;
    } else{
        isChecked = false;
    }
}