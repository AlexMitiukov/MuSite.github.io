document.addEventListener("DOMContentLoaded", function () {
    // Получение массива всех пользовательских форм на странице
    const forms = document.forms;
    setTimeout(() => {
        console.log("Forms on page:", forms);
        alert("Forms on page: " + forms.length);
    }, 5000);

    // Обработка события щелчка по элементу №2
    const element2 = document.getElementById("element-2");
    const element3 = document.getElementById("element-3");

    element2.addEventListener("click", function () {
        // Получение родительского элемента
        const parent = element2.parentNode;

        // Обмен элементами 2 и 3
        parent.insertBefore(element3, element2);
    });
});