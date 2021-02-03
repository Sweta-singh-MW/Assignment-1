const myFunction =()=>{
var firstName= document.getElementById("myText").value;
var lastName= document.getElementById("lname").value;
var DateOfBirth= document.getElementById("myDOB").value;
var address= document.getElementById("myAdd").value;
var phone= document.getElementById("myPhone").value;
var email= document.getElementById("myemail").value;
document.getElementById("container").style.display='none';
document.getElementById("container-2").style.display='block';
console.log(firstName);
if(firstName==""){
    document.getElementById('firstname').innerHTML="This field is required";
    return false;
}
if(!isNaN(firstName)){
    document.getElementById('firstname').innerHTML="Sweta";
}

var fullname=firstName+" "+lastName;
document.getElementById('full-name').innerHTML=fullname;
document.getElementById('full-name-1').innerHTML=fullname;
console.log(DateOfBirth);
if(DateOfBirth==""){
    document.getElementById('DateOfBirth').innerHTML="This field is required";
    return false;
}
document.getElementById('daob').innerHTML=DateOfBirth;
console.log(address);
if(address==""){
    document.getElementById('address').innerHTML="This field is required";
    return false;
}
document.getElementById('addr').innerHTML=address;
console.log(phone);
if(phone==""){
    document.getElementById('phone').innerHTML="This field is required";
    return false;
}
document.getElementById('ph').innerHTML=phone;
console.log(phone);
if(email==""){
    document.getElementById('email').innerHTML="This field is required";
    return false;
}
document.getElementById('mail').innerHTML=email;
}