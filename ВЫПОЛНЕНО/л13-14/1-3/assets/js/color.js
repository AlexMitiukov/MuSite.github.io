function changeColors() {
    // Получаем элемент body
    var body = document.getElementsByTagName("body")[0];

    // Меняем цвет фона на желтый
    body.style.backgroundColor = "yellow";

    // Получаем все элементы на странице
    var elements = document.getElementsByTagName("*");

    // Проходимся по каждому элементу и меняем цвет текста на синий
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = "blue";
    }
}