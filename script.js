// Mock Data
const students = [
    { id: "S101", name: "Alice Johnson", class: "10-A", status: "Present" },
    { id: "S102", name: "Bob Smith", class: "10-B", status: "Absent" },
    { id: "S103", name: "Charlie Davis", class: "9-C", status: "Present" }
];

// Switch between Dashboard and Student list
function toggleView(viewName) {
    document.querySelectorAll('.view').forEach(view => {
        view.style.display = 'none';
    });
    
    document.getElementById(`${viewName}-view`).style.display = 'block';
    
    if (viewName === 'students') {
        renderStudents();
    }
}

// Populate the student table
function renderStudents() {
    const tableBody = document.getElementById('studentData');
    tableBody.innerHTML = students.map(student => `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.class}</td>
            <td><span class="badge">${student.status}</span></td>
        </tr>
    `).join('');
}

// Simple initialization
document.addEventListener('DOMContentLoaded', () => {
    console.log("School Management System Initialized");
});