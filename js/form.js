
const form = document.getElementById("form1");
const name1 = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const btn = document.getElementById("submit");
const msgName = document.getElementById("msgName");
const msgEmail = document.getElementById("msgEmail");
const msgnSubject = document.getElementById("msgnSubject");
const msgMessage = document.getElementById("msgMessage");
const info = document.getElementById("info");
var arr = [];
var i = 0;
function validateEmail(elementValue){      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue); 
  }

  function validate(elementValue){      
    var Pattern = /^[a-zA-Z._-]+?$/;
    return Pattern.test(elementValue); 
  }

form.addEventListener('submit', (e) => {
let messages = [];
e.preventDefault();
if(name1.value === '' || name1.value == null || !validate(name1.value))
{
    msgName.innerHTML = "Name is Required ,and it's better to be a text";
    i = 0;
}
else
{
   
    arr[i]=name1.value;
    // alert(arr[i]);
    i++;
    
}
if((email.value === '' || email.value == null ) || !validateEmail(email.value))
{
    msgEmail.innerHTML = "Email is Required";
    i = 0;
}
else
{
    
    arr[i]=email.value;
    // alert(arr[i]);
    i++;
    
}
if(subject.value === '' || subject.value == null || !validate(subject.value))
{
    msgnSubject.innerHTML = "Subject is Required";
    i = 0;
}
else
{
    
    arr[i]=subject.value;
    // alert(arr[i]);
    i++;
    
}
if(message.value === '' || message.value == null)
{
    msgMessage.innerHTML = "Message is Required";
    i = 0;
}
else
{
    if (message.value.length > 100)
    {
        
        arr[i]=message.value;
        // alert(arr[i]);
        i++;
        
    }
    else
    {
        msgMessage.innerHTML = "Message is lower than 100 characters";
        i = 0;
    }

}


const nm = document.createElement("p");
const em = document.createElement("p");
const su = document.createElement("p");
const ms = document.createElement("p");


console.log(i);
nm.innerHTML = "name : " + name1.value;
em.innerHTML = "email :" + email.value;
su.innerHTML = "subject :" + subject.value;
ms.innerHTML = "message :" +message.value;
msgMessage.innerHTML = "";
if (i > 4)
{   
    i = 0;
    nm.style.fontSize = "24px";
    em.style.fontSize = "24px";
    su.style.fontSize = "24px";
    ms.style.fontSize = "24px";
    nm.style.color = "green";
    em.style.color = "green";
    su.style.color = "green";
    ms.style.color = "green";
    info.appendChild(nm);
    info.appendChild(em);
    info.appendChild(su);
    info.appendChild(ms);
    info.classList.add("info");
    var a = "none"
    btn.style.display = a;
    function removeInf()
    {
        info.classList.remove("info");
        info.innerHTML = "";
        btn.style.display = "block";
    }
    console.log(info.innerHTML)
    // btn.addEventListener("click",inf);
    info.addEventListener("click",removeInf);
   window.onload
    
}
});











