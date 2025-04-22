function compareStrings() {
    let str1 = prompt("Введіть перший рядок:");
    let str2 = prompt("Введіть другий рядок:");

    if (str1 === null || str2 === null || str1.trim() === "" || str2.trim() === "") {
        alert("Обидва рядки мають бути введені.");
        return;
    }

    if (str1 > str2) {
        alert("Більший рядок: " + str1);
    } else if (str1 < str2) {
        alert("Більший рядок: " + str2);
    } else {
        alert("Рядки однакові");
    }
}    