document.addEventListener("DOMContentLoaded", function () {
    // ��������� ������� ���� ���������������� ���� �� ��������
    const forms = document.forms;
    setTimeout(() => {
        console.log("Forms on page:", forms);
        alert("Forms on page: " + forms.length);
    }, 5000);

    // ��������� ������� ������ �� �������� �2
    const element2 = document.getElementById("element-2");
    const element3 = document.getElementById("element-3");

    element2.addEventListener("click", function () {
        // ��������� ������������� ��������
        const parent = element2.parentNode;

        // ����� ���������� 2 � 3
        parent.insertBefore(element3, element2);
    });
});