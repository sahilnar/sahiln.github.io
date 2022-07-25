window.addEventListener("load", initEvent);
var button1;
var button2;
var content1;
var content2;
function initEvent(){
    var x=false;
    var y=false;
    button1 = document.querySelector("#btn1");
    button2 = document.querySelector("#btn2");
    content1 = document.querySelector(".service-1");
    content2 = document.querySelector(".service-2");
    button2.addEventListener("click",function(){
        content2.style.display = "flex";
        content1.style.display = "none";
        button1.style.backgroundColor = "white";
        button1.style.color = "#007bff";
        button2.style.backgroundColor = "#007bff";
        button2.style.color = "#fff";
    });
    button1.addEventListener("click",function(){
        content1.style.display = "flex";
        content2.style.display = "none";
        button2.style.backgroundColor = "white";
        button2.style.color = "#007bff";
        button1.style.backgroundColor = "#007bff";
        button1.style.color = "#fff";
    });
}
function validateName(n){
    if(n.value == "")
    {
        n.style.border = "2px solid rgb(255, 150, 150)";
    }
    else{
        n.style.border = "2px solid green";
        x = true;
    }
    return x;
}
function validateNum(n){
    if(!n.validity.valid)
    {
        n.style.border = "2px solid rgb(255, 150, 150)";
        document.querySelector(".y").innerHTML = "Please Enter Valid Phone Number";
        document.querySelector(".y").style.color = "red";
        document.querySelector(".y").style.fontSize = "100%";
    }
    else{
        n.style.border = "2px solid green";
        document.querySelector(".y").innerHTML = "";
        y = true;
    }
    return x;
}
function checkEmail(n){
    if(!n.validity.valid)
    {
        n.style.border = "2px solid rgb(255, 150, 150)";
        document.querySelector(".x").innerHTML = "Please Enter Valid Email Id";
        document.querySelector(".x").style.color = "red";
        document.querySelector(".x").style.fontSize = "100%";
    }
    else{
        n.style.border = "2px solid green";
        document.querySelector(".x").innerHTML = "";
        y = true;
    }
    return y;
}
function showMessage(n){
    if(x==true && y==true){
        alert("Your response has been Sent to Sahil Narang");
    }
}
function changeopacity(){
    var dateControl = document.querySelector('input[type="date"]');
    if(dateControl.value != ""){
        dateControl.style.opacity = "1";
    }
}

