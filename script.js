// Слушаем событие изменения размера окна
window.addEventListener("resize", AutoScale);

// Выполняем масштабирование сразу после загрузки страницы
AutoScale();

function AutoScale() {
    let width = window.innerWidth; // Получаем ширину окна

    // Проверяем, какой ширины окно и вызываем соответствующую функцию изменения масштаба
    if (width > 1280) {
        ChangeScale("big"); // Для больших экранов
    }
    else if (width <= 1280 && width > 720) {
        ChangeScale("normal"); // Для экранов средней ширины
    }
    else if (width < 720) {
        ChangeScale("small"); // Для маленьких экранов
    }
}

// Функция для изменения масштаба страницы в зависимости от ширины экрана
function ChangeScale(scale) {
    // Сбросим все масштабы
    document.body.classList.remove("big", "normal", "small");

    // Добавляем класс в зависимости от ширины экрана
    if (scale === "big") {
        document.body.classList.add("big"); // Для больших экранов
    }
    else if (scale === "normal") {
        document.body.classList.add("normal"); // Для нормальных экранов
    }
    else if (scale === "small") {
        document.body.classList.add("small"); // Для маленьких экранов
    }
}