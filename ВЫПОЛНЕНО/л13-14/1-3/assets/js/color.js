function changeColors() {
    // �������� ������� body
    var body = document.getElementsByTagName("body")[0];

    // ������ ���� ���� �� ������
    body.style.backgroundColor = "yellow";

    // �������� ��� �������� �� ��������
    var elements = document.getElementsByTagName("*");

    // ���������� �� ������� �������� � ������ ���� ������ �� �����
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = "blue";
    }
}