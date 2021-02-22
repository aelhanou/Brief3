
const gen6 = document.querySelectorAll(".mg");
const type = document.querySelectorAll(".hi");
const manAuto = document.querySelectorAll(".hi1");
var jours = document.querySelector("#jour");
var output = document.getElementById("output");
var i, j, total, jour, btvPrix = 0, per, g, prix;
console.log(gen6[7]);
function carburant(e) {
    g = e;
    i = 0;
    for(j = 0;j < gen6.length;j++)
    {
        gen6[j].style.border = "none";
    }
    gen6[1].addEventListener("click",function(){
        gen6[1].style.border = "1px solid red";
        gen6[0].style.border = "none";
    })
    imgActiv(e);
    for (var j = 0; j < type.length; j++) {
        type[j].style.display = "block";
    }
    for (j = 0; j < type.length; j++) {
        if (type[j].attributes.id.value == vehicules1[e][0].info["carburant"][i]) {
            type[j].style.display = "block";
            i++;
            prix = vehicules1[e][0].info.prix;
        }
        else {
            type[j].style.display = "none";
        }
    }
    for (j = 0; j < manAuto.length; j++) {
        manAuto[j].style.display = "block";
    }
    for (j = 0; j < manAuto.length; j++) {
        if (manAuto[j].attributes.id.value == vehicules1[e][0].info["type"][0]) {
            manAuto[j].style.display = "block";
        }
        else {
            manAuto[j].style.display = "none";
        }
    }
    
}
function imgActiv(t) {
    gen6[t].style.border = "1px solid red";
}
function btvCalcul(n) {
    per = vehicules1[g][0].info.perCarburant[n];
}
function autoMan(r) {
    btvPrix = vehicules1[g][0].info.porcentage[r];
}
function calcul() {
    output.classList.add("output");
    var jr = jours.value;
    total = ((per + btvPrix) * (jr * prix)) / 100 + (jr * prix);
    output.innerHTML = "Total : " + total + " €";
}