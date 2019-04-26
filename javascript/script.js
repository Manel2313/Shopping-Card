function up() {
    var n = document.getElementById('nbre')
    var p = document.getElementById('prix')
    var tot = document.getElementById('prixtot')
    var x=7.5
    if (n.value <12){
        n.value ++;
        p.value=n.value * x
        tot.value= +tot.value + x
    }
}
function down() {
    var n = document.getElementById('nbre')
    var p = document.getElementById('prix')
    var tot = document.getElementById('prixtot')
    var x=7.5
    if (n.value > 0){
        n.value --;
        p.value =n.value * x
        tot.value= +tot.value - x
    }
}

function upL2() {
    var n = document.getElementById('nbreL2')
    var p = document.getElementById('prixL2')
    var tot = document.getElementById('prixtot')
    var x=8.5
    if (n.value <12){
        n.value ++;
        p.value=n.value*x
        tot.value= +tot.value + x
    }
}
function downL2() {
    var p = document.getElementById('prixL2');
    var n = document.getElementById('nbreL2');
    var tot = document.getElementById('prixtot')
    var x=8.5
    if (n.value > 0){
        n.value --;
        p.value =n.value * x
        tot.value= +tot.value - x
    }
}

function upL3() {
    var n = document.getElementById('nbreL3')
    var p = document.getElementById('prixL3')
    var tot = document.getElementById('prixtot')
    var x=20.5
    if (n.value <12){
        n.value ++;
        p.value=n.value*x
        tot.value= +tot.value + x
    }
}
function downL3() {
    var p = document.getElementById('prixL3');
    var n = document.getElementById('nbreL3');
    var tot = document.getElementById('prixtot')
    var x=20.5
    if (n.value > 0){
        n.value --;
        p.value =n.value * x
        tot.value= +tot.value - x
    }
}

function heart(){
    var h = document.getElementById('heart')
    if (h.style.color=="black"){
        h.style.color="red"
    }
    else { h.style.color="black" }
}
function heartL2(){
    var h = document.getElementById('heartL2')
    if (h.style.color=="black"){
        h.style.color="red"
    }
    else { h.style.color="black" }
}
function heartL3(){
    var h = document.getElementById('heartL3')
    if (h.style.color=="black"){
        h.style.color="red"
    }
    else { h.style.color="black" }
}

function remove() {
    var item = document.getElementById("livre1")
    var p = document.getElementById('prix')
    var tot = document.getElementById('prixtot')
    item.parentNode.removeChild(item)
    tot.value= +tot.value - p.value
}
function removeL2() {
    var item = document.getElementById("livre2")
    var p = document.getElementById('prixL2')
    var tot = document.getElementById('prixtot')
    item.parentNode.removeChild(item)
    tot.value= +tot.value - p.value
}
function removeL3() {
    var item = document.getElementById("livre3")
    var p = document.getElementById('prixL3')
    var tot = document.getElementById('prixtot')
    item.parentNode.removeChild(item)
    tot.value= +tot.value - p.value
    
}