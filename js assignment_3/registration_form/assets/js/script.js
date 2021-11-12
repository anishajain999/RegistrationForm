// console.log("working");
function checkForm(){
    // e.preventDefault();
    let regex_name = /^[a-zA-Z]+$/;
    let regex_age = /^[0-9]{0,3}$/;
    let regex_email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    let regex_phone = /^[\d]{10}$/gmi;

    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let pNumber = document.getElementById("pNumber").value;
    let address = document.getElementById("address").value;
    //console.log(fName, lName, age, pNumber, address);

    //Condition for empty field
    if(fName == "" || fName == null){
        // alert("Name is mandatory");
        document.getElementById("fName").style.border="3px solid red";
        document.getElementById("fname").innerHTML = `<p style="margin:0; ">Name is mandatory</p>`

        //return false;
    }
    else if(regex_name.test(fName)== false){
        //alert("First Name must be in alphabets only");
        // document.getElementById("fname").innerHTML = ``
        //console.log("hello");
        document.getElementById("fName").style.border="3px solid red";
        document.getElementById("fname").innerHTML = `<p style="margin:0; ">Invalid</p>`
        return false;
    }
    else if(regex_name.test(fName)== true){
        document.getElementById("fName").style.border="3px solid green";
        document.getElementById("fname").innerHTML = `<p style="none"></p>`;
        //return true;
    }

    if(lName == "" || lName == null){
        //alert("Last Name is mandatory");
        document.getElementById("lName").style.border="3px solid red";
        document.getElementById("lname").innerHTML = `<p>Last Name is mandatory</p>`

        //return false;
    }
    else if(regex_name.test(lName)== false){
        //console.log("hello");
        document.getElementById("lName").style.border="3px solid red";
        //alert("Last Name must be in alphabets only");
        document.getElementById("lname").innerHTML = `<p>Invalid</p>`
        //return false;
    }
    else if(regex_name.test(lName)== true){
        document.getElementById("lName").style.border="3px solid green";
        document.getElementById("lname").innerHTML = `<p style="none"></p>`;
        //console.log("lastname")
        //return true;
    }

    if(age == "" || age == null){
        document.getElementById("age").style.border="3px solid red";
        // alert("Age is mandatory");
        document.getElementById("Age").innerHTML = `<p>Age is mandatory</p>`

        //return false;
    }
    else if(regex_age.test(age)== false){
        //alert("Please fill age field properly");
        //console.log("hello");
        document.getElementById("age").style.border="3px solid red";
        document.getElementById("Age").innerHTML = `<p>Invalid</p>`
        //return false;
    }
    else if(regex_age.test(age)== true ){
        document.getElementById("age").style.border="3px solid green";
        document.getElementById("Age").innerHTML = `<p style="none"></p>`;
        //console.log("lastname")
        //return true;
    }

    if(email == "" || email == null){
        document.getElementById("email").style.border="3px solid red";
        // alert("Email is mandatory");
        document.getElementById("Email").innerHTML = `<p>Email is mandatory</p>`

        //return false;
    }
    else if(regex_email.test(email)== false){
        //alert("Please fill Email field properly");
        //console.log("hello");
        document.getElementById("email").style.border="3px solid red";
        document.getElementById("Email").innerHTML = `<p>Invalid</p>`
        //return false;
    }
    else if(regex_email.test(email)== true ){
        document.getElementById("email").style.border="3px solid green";
        document.getElementById("Email").innerHTML = `<p style="none"></p>`;
        //console.log("lastname")
        //return true;
    }

    if(pNumber == "" || pNumber == null){
        document.getElementById("pNumber").style.border="3px solid red";
        //alert("Phone Number is mandatory");
        document.getElementById("p_Number").innerHTML = `<p>Phone Number is mandatory</p>`
        return false;
    }
    else if(regex_phone.test(pNumber)== false){
        //alert("Phone Number must be in digits only");
        //console.log("hello");
        document.getElementById("pNumber").style.border="3px solid red";
        document.getElementById("p_Number").innerHTML = `<p>Invalid</p>`
        //return false;
    }
    else if(regex_phone.test(pNumber)== true ){
        document.getElementById("pNumber").style.border="3px solid green";
        document.getElementById("p_Number").innerHTML = `<p style="none"></p>`;
        //console.log("lastname")
        //return true;
    }

    
    if(address == "" || address == null){
        //alert("Address is mandatory");
        document.getElementById("address").style.border="3px solid red";

        document.getElementById("add").innerHTML = `<p>Address is mandatory</p>`
        //return false;
    }

    else if (address != "" || address != null){
        
        document.getElementById("address").style.border="3px solid green";
        document.getElementById("add").innerHTML = `<p style="none"></p>`;
        
         //return true
    }
}
function submitForm(){
    if(input.value.lenght== 0){
        alert("Not Valid")
        
    }
    else{
        alert("Form is Submitted")
        setTimeout(function(){
            window.location.reload(1);
         }, 1000);
    }
    
}