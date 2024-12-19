let userName = prompt("как тебя зовут?");

const letter = prompt("Введите букву, которую хотите проверить:");

if (userName.includes(letter)) {
    alert(`Правильно: имя содержит ${letter} букву`);
} else {
    alert(`Неправильно: имя не содержит ${letter} букву`);
}