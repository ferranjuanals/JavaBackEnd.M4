import java.util.*;

public class RestaurantApp {

	public static void main(String[] args) {
		
		// Crear variables pels bitllets d'€ que hi ha i pel preu total
		int bitllet1=5, bitllet2=10, bitllet3=20, bitllet4=50, bitllet5=100, bitllet6=200, bitllet7=500;
		double preuTotal = 0;
		
		// Crear dos Arrays pel menú i preu de cada plat
		String[] menu = new String[6];
		double[] preuPlat = new double[6];
		
		// Crear HashMap amb el menú i preu de cada plat
		HashMap<String, Double> menu_preu = new HashMap<String, Double>();
		menu_preu.put("Guacamole con totopos", 6.50);
		menu_preu.put("Quesadilla de jalapeños", 4.20);
		menu_preu.put("Taco de carnitas de cerdo", 14.00);
		menu_preu.put("Taco de cochinita pibil", 14.80);
		menu_preu.put("Huarache de nopal", 10.40);
		menu_preu.put("Torta de pollo marinado", 10.00);
		
		// Omplir els Arrays menu i preuPlat amb un loop for
		int i=0;
		for(String m:menu_preu.keySet()) {
			menu[i] = m;
			preuPlat[i] = menu_preu.get(m);
			i++;
		}

		// Mostrar els dos Arrays per consola amb format
		System.out.println("Menú i preus del nostre restaurant:");
		System.out.println("----------------------------------");
		for(i=0; i<6; i++) {
			if(menu[i].length()<=24) {
				System.out.println(menu[i] + "\t\t" + preuPlat[i] + "€");
			}else {
				System.out.println(menu[i] + "\t" + preuPlat[i] + "€");
			}
		}
		System.out.println("----------------------------------");
		
		// Crear e inicialitzar Scanner, ArrayList per guardar comanda i boolean
		Scanner com = new Scanner(System.in);
		Scanner preg = new Scanner(System.in);
		ArrayList<String> comanda = new ArrayList<String>();
		boolean p = false;
		
		do {
			// Preguntar que es vol menajar
			System.out.println("\nIntrodueix el nom del plat que vols demanar:");
			comanda.add(com.nextLine());
			
			// Preguntar si es vol seguir demanant
			System.out.println("\nVoleu seguir demanant menjar?\n1:Si\n0:No");
			int pregunta;
			
			// Control d'excepcions perquè s'introdueixi un int
			try {
				pregunta = preg.nextInt();				
			}catch(InputMismatchException e){
				System.out.println("\nLa resposta no és vàlida, comanda finalitzada");
				break;
			}
			
			// Condicional per seguir al loop while
			if(pregunta == 1) {
				p = true;
			}else if(pregunta == 0){
				p = false;
			}else {
				System.out.println("\nLa resposta no és vàlida, comanda finalitzada");
				break;
			}
			
		}while(p == true);
		
		// Tancar Scanner
		preg.close();
		com.close();
		
		System.out.println("----------------------------------\n");
		
		// Crear ArrayList per guardar els productes que no existeixen
		ArrayList<String> rem = new ArrayList<String>();
				
		// Comparar la llista de la comanda amb Array del menú
		for(String c:comanda) {
			if(Arrays.asList(menu).contains(c)) {				
				// Sumar el preu del plat al total
				preuTotal += menu_preu.get(c);					
			}else {
				// Guardar a la llista de productes a eliminar
				rem.add(c);
			}
		}
		
		// En cas de que s'hagin introduït productes que no existeixen
		if(!rem.isEmpty()) {
			// Eliminar els productes de la comanda
			for(String r:rem) {
				comanda.remove(comanda.indexOf(r));
			}
			// Mostrar els plats que no existeixen
			System.out.println("Ho sentim, els següents plats no es troben a la carta:\n- " + 
								String.join("\n- ", rem) + "\n");
		}
				
		// En cas de que hi hagi algun producte a la comanda
		if(!comanda.isEmpty()) {
			// Mostrar els plats de la comanda
			System.out.println("Comanda final:\n- " + String.join("\n- ", comanda));
			// Mostrar el preu total de la comanda
			System.out.printf("\nEl preu total de la seva comanda és: %4.2f €\n", preuTotal);
			System.out.println("Bon profit");
		}else {
			// Si no hi ha cap producte mostrar aquest missatge
			System.out.println("No s'ha realitzat cap comanda, intenta-ho de nou");
		}

		
	}

}
