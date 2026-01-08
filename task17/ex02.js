
const students = [
    { id: 1, name: "Nguyen Van A", age: 20, city: "Hanoi" },
    { id: 2, name: "Tran Thi B", age: 19, city: "Ho Chi Minh City" },
    { id: 3, name: "Le Van C", age: 21, city: "Da Nang" },
];

const table = document.getElementById('dataTable');

let htmlString = '<thead><tr><th>ID</th><th>Name</th><th>Age</th><th>City</th></tr></thead><tbody>';

students.forEach(student => {
    htmlString += `<tr><td>${student.id}</td><td>${student.name}</td><td>${student.age}</td><td>${student.city}</td></tr>`;
});

htmlString += '</tbody>';

table.innerHTML = htmlString;

table.style.borderCollapse = 'collapse';
table.style.margin = '20px';

const cells = table.querySelectorAll('th, td');
cells.forEach(cell => {
    cell.style.border = '1px solid black';
    cell.style.padding = '10px';
    cell.style.textAlign = 'center';
});
