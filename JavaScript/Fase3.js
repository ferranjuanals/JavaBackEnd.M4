
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
document.getElementById("fase3_1").innerHTML = text;

// Iniciar variables
var b = 1, coman = [], c = 0, name = "", name2;

// Funció on es pregunta que es vol menjar
function comanda(){
    // Desactivar el botó "inici"
    document.getElementById("inici").onclick = null;
    // if/else per continuar en preguntant o finalitzar
    if(b == 1) {
        // Preguntar que es vol menjar
        var preg1 = document.createElement("P");
        preg1.innerText = "Introdueix el nom del plat que vols demanar:";
        document.body.appendChild(preg1);
        // Crear input per la resposta
        var res1 = document.createElement("INPUT");
        name = "theres" + c;
        res1.id = name;
        res1.setAttribute("type", "text");
        document.body.appendChild(res1);        
        // Crear botó per activar la funció "pregunta"
        var btn1 = document.createElement("BUTTON");
        btn1.id = "button1";
        btn1.innerText = "Afegeix";
        document.body.appendChild(btn1);
        btn1.onclick = pregunta;

    } else {
        // Mostrar missatge de comanda finalitzada
        var fin = document.createElement("P");
        fin.innerText = "Comanda finalitzada";
        document.body.appendChild(fin);

        // Crear llista per guardar els productes que no existeixen
        var note = [];

        // Comparar la llista de la comanda amb llista del menú
        for(var com in coman) {
            if(menu.includes(coman[com])) {
                var z = coman[com];
                // Sumar el preu del plat al total
                preuTotal += menu_preu[z];					
            }else {
                // Guardar a la llista de productes que no existeixen
                note.push(coman[com]);
            }
        }
        
        // En cas de que s'hagin introduït productes que no existeixen
		if(note.length != 0) {            
            // Eliminar de la llista de la comanda
            for(var no in note){
                coman.splice(coman.indexOf(note[no]), 1);
            }
			// Mostrar els plats que no existeixen
            var sho = document.createElement("P");
            sho.innerHTML = "Ho sentim, els següents plats no es troben a la carta:<br>- " + 
            note.join("<br>- ") + "<br>";
            document.body.appendChild(sho);
        }
        
        // En cas de que hi hagi algun producte a la comanda
        if(coman.length != 0) {
            // Mostrar els plats de la comanda
            var sho = document.createElement("P");
            sho.innerHTML = "Comanda final:<br>- " + coman.join("<br>- ") + "<br>" + 
                "El preu total de la seva comanda és: " + Math.round(preuTotal*100)/100 + "€<br>" + 
                "Bon profit";
            document.body.appendChild(sho);
        }else {
            // Si no hi ha cap producte mostrar aquest missatge
            var sho = document.createElement("P");
            sho.innerHTML = "No s'ha realitzat cap comanda, intenta-ho de nou";
            document.body.appendChild(sho);
        }
    }
}

// Funció on es guarda la primera resposta en una llista i 
// es pregunta si es vol seguir demanant
function pregunta(){
    // Desactivar el botó "button1"
    document.getElementById("button1").onclick = null;
    // Guardar el valor introduit a la llista comanda
    coman[c] = document.getElementById(name).value;
    // Preguntar si es vol seguir demanant
    var preg2 = document.createElement("P");
    preg2.innerText = "Voleu seguir demanant menjar? (1:Si, 0:No)";
    document.body.appendChild(preg2);
    // Crear input per la resposta
    var res2 = document.createElement("INPUT");
    res2.setAttribute("type", "text");    
    name2 = "ther" + c;
    res2.id = name2;
    document.body.appendChild(res2);
    // Crear funció per activar la funció "tornar"
    var btn2 = document.createElement("BUTTON");
    btn2.id = "button2";
    btn2.innerText = "Afegeix";
    document.body.appendChild(btn2);
    btn2.onclick = tornar;
    
}

// Funció on es controlen excepcions de la resposta numerica, 
// es guarda el valor i s'inicia de nou la primera funció
function tornar(){
    // Desactivar el botó "button2"
    document.getElementById("button2").onclick = null;
    // Guardar el valor introduit a la variable b
    b = document.getElementById(name2).value;
    // try/catch per validar i tornar a la primera funció
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
