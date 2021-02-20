var i = 1;
var nxt = document.getElementById("ne");
var pev = document.getElementById("pr");

var img = document.querySelector("#gm");
const menuMobile = document.getElementById("menuMobile");
const iconMenu = document.getElementById("iconMenu");


menuMobile.style.display ="none";
const image2 = [];

image2[1] = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
image2[2] = "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
image2[3] = "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
image2[4] = "https://images.pexels.com/photos/253096/pexels-photo-253096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"  
image2[5] = "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
image2[6] = "https://images.pexels.com/photos/794435/pexels-photo-794435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
image2[7] = "https://images.pexels.com/photos/2036544/pexels-photo-2036544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
image2[8] = "https://images.pexels.com/photos/2684218/pexels-photo-2684218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
image2[9] = "https://images.pexels.com/photos/100650/pexels-photo-100650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
image2[10]= "https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";


// const div = document.createElement("div");
// document.body.appendChild(div);
// div.style.width = "100%";
// div.style.height = "600px";
// div.appendChild(image2);


console.log(image2.length - 1);
function ForwardImg()
{
    
if (i < image2.length - 1)
{
    console.log("pos : ," + i);
   
   img.src = image2[i];
    
        i++;
}
else
{
    i = 1;
}   
   
}
function backImg()
{
    if (i > 1 &&i < image2.length - 1)
{
    console.log("neg : ," + i);
    img.src = image2[i];
    i--;
}
else
{
    console.log(image2.length - 2);
    i = image2.length - 2;
}
}

nxt.addEventListener("click",ForwardImg);


pev.addEventListener("click",backImg);


iconMenu.addEventListener("click",function() {
    
    if(menuMobile.style.display =="flex")
    {
        menuMobile.style.display ="none";
    }
    else
    {
        menuMobile.style.display ="flex";
    }

})

