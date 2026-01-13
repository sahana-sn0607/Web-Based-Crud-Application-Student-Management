document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submitBtn").addEventListener("click", addStudent);
});

function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let studentClass = document.getElementById("studentClass").value;
    let subjects = document.getElementById("subjects").value;
    let age = document.getElementById("age").value;

    if (!name || !roll || !studentClass || !subjects || !age) {
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("studentTable");
    let row = table.insertRow();

    row.innerHTML = `
        <td>${name}</td>
        <td>${roll}</td>
        <td>${studentClass}</td>
        <td>${subjects}</td>
        <td>${age}</td>
        <td>
            <button onclick="editRow(this)">Edit</button>
            <button onclick="deleteRow(this)">Delete</button>
        </td>
    `;

    clearForm();
}

function deleteRow(btn) {
    btn.parentElement.parentElement.remove();
}

function editRow(btn) {
    let row = btn.parentElement.parentElement;

    document.getElementById("name").value = row.cells[0].innerText;
    document.getElementById("roll").value = row.cells[1].innerText;
    document.getElementById("studentClass").value = row.cells[2].innerText;
    document.getElementById("subjects").value = row.cells[3].innerText;
    document.getElementById("age").value = row.cells[4].innerText;

    row.remove();
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("studentClass").value = "";
    document.getElementById("subjects").value = "";
    document.getElementById("age").value = "";
}
