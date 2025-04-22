function userDialog() {
    alert("Привіт! Це діалог з користувачем.");

    let name = "";

    while (!name) {
        name = prompt("Як тебе звати?");
        if (name.trim() === "") {
            name = ""; 
            alert("Ім’я не може бути порожнім. Спробуй ще раз.");
        }
    }

    let confirmContinue = confirm("Продовжити?");
    if (confirmContinue) {
        alert("Радий тебе бачити, " + name + "!");
    } else {
        alert("До зустрічі, " + name + "!");
    }
}

function developerInfo(surname, name, position = "Студент") {
    alert("Розробник: " + surname + " " + name + ", Посада: " + position);
}
developerInfo("Биковська", "Олександра");


