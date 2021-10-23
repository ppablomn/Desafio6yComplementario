class User {
	constructor(username, lastname, gender, darkTheme) {
		this.name = username;
		this.lastname = lastname;
		this.gender = gender;
		this.darktheme = darkTheme;
	}
}
const userList = [];

function createUser() {
	let userName = prompt("Ingrese su nombre");
	while (!isNaN(userName) || !userName) {
		userName = prompt(`Entrada invalidad! Vuelva a internarlo.
        Ingrese su nombre`);
	}
	let lastname = prompt("Ingrese su apellido");
	while (!isNaN(lastname) || !lastname) {
		lastname = prompt(`Entrada inválida! Vuelva a intentarlo.
    Ingrese su apellido`);
	}

let gender = parseInt(
	prompt(`Elija una opcion:
	Ingrese 1 para Genero Masculino
	Ingrese 2 para Genero Femenino`)
);

while (isNaN(gender) || gender > 2 || gender < 1) {
	gender = parseInt(
		prompt(`Entrada invalida! Vuelva a intentarlo. 
		Ingrese 1 para Genero Masculino
	    Ingrese 2 para Genero Femenino`)
	);
}
if (gender == 1) gender = "male";
if (gender == 2) gender = "female";

let darkTheme = confirm("Quiere activar el tema oscuro?");


	// agrego el nuevo usuario al array
	userList.push(new User(userName, lastname, gender, darkTheme));

	// reviso  por consola el contenido del array
	console.log(userList);

}
// ejecuto la función
createUser();
printUsers()
function printUsers() {
	// busco el contenedor para las tarjetas en el HTML
	let container = document.querySelector(".container")
	// busco el template en el HTML IMPORTANTE ACCEDER A CONTENT!!
	let template = document.querySelector("#template").content

	// hago un forEach a cada usuario para generar tarjetas
	userList.forEach((user) => {
		// clono el template para modificarlo e insertarlo en el HTML
		let clone = document.importNode(template, true);
		// imprimo la card en el container
		container.appendChild(clone);
		
		// lleno la nueva card con la info del usuario
		clone.querySelector("#name").textContent = user.userName;
		clone.querySelector("#lastname").textContent = user.lastname;
		clone.querySelector("#age").textContent = user.age;

		if (user.gender === "male") {
			clone.querySelector("img").setAttribute("src", male);
		} else {
			clone.querySelector("img").setAttribute("src", female);
		}

		let card = clone.querySelector(".card");
		if (user.darkTheme) {
			card.classList.add("darkTheme");
		} else {
			card.classList.remove("darkTheme");
		}

	});
}