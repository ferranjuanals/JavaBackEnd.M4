
// Crear variables pels bitllets d'€ que hi ha i pel preu total
var bitllet1=5, bitllet2=10, bitllet3=20, bitllet4=50, bitllet5=100, bitllet6=200, bitllet7=500;
var preuTotal = 0;

// Crear dos Arrays pel menú i preu de cada plat
var menu = new Array(6);
var preuPlat = new Array(6);

// Crear Objecte amb el menú i preu de cada plat
var menu_preu = {
    "Guacamole con totopos": 6.50,
    "Quesadilla de jalapeños": 4.20,
    "Taco de carnitas de cerdo": 14.00,
    "Taco de cochinita pibil": 14.80,
    "Huarache de nopal": 10.40,
    "Torta de pollo marinado": 10.00
}

// Omplir els Arrays menu i preuPlat amb un loop for
var i=0;
for(var m in menu_preu) {
    menu[i] = m;
    preuPlat[i] = menu_preu[m];
    i++;
}

// Mostrar els dos Arrays
var text = "";
for(i=0; i<6; i++) {
    text += menu[i] + " " + preuPlat[i] + "€ <br>";
}
document.getElementById("fase2_1").innerHTML = text;

var b = 1, coman = [], c = 0, name = "", name2;

function comanda(){
    
    document.getElementById("inici").onclick = null;

    if(b == 1){

        var preg1 = document.createElement("P");
        preg1.innerText = "Introdueix el nom del plat que vols demanar:";
        document.body.appendChild(preg1);

        var res1 = document.createElement("INPUT");
        name = "theres" + c;
        res1.id = name;
        res1.setAttribute("type", "text");
        document.body.appendChild(res1);        

        var btn1 = document.createElement("BUTTON");
        btn1.id = "button1";
        btn1.innerText = "Afegeix";
        document.body.appendChild(btn1);
        btn1.onclick = pregunta;

    } else{        
        var fin = document.createElement("P");
        fin.innerText = "Comanda finalitzada";
        document.body.appendChild(fin);
    }
}

function pregunta(){
    
    document.getElementById("button1").onclick = null;
    coman[c] = document.getElementById(name).value;
        
    var preg2 = document.createElement("P");
    preg2.innerText = "Voleu seguir demanant menjar? (1:Si, 0:No)";
    document.body.appendChild(preg2);

    var res2 = document.createElement("INPUT");
    res2.setAttribute("type", "text");    
    name2 = "ther" + c;
    res2.id = name2;
    document.body.appendChild(res2);
        
    var btn2 = document.createElement("BUTTON");
    btn2.id = "button2";
    btn2.innerText = "Afegeix";
    document.body.appendChild(btn2);
    btn2.onclick = tornar;
    
}

function tornar(){
        
    document.getElementById("button2").onclick = null;
    
    b = document.getElementById(name2).value;

    try {
        if(b == "") throw "La respotsa està en buit";
        if(isNaN(b)) throw "La resposta ha de ser un número";
        if(b!=1 & b!=0) throw "La resposta ha de ser 0 o 1";
    } catch(err) {
        var show_error = document.createElement("P");
        show_error.innerHTML = err;
        document.body.appendChild(show_error);
    } finally {
        c++;
        comanda();
    }

}
