const openTodosList = document.getElementById('openTodos');
const completedTodosList = document.getElementById('completedTodos');

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim(); // trim() entfernt etwaige Leerzeichen am Anfang und Ende des eingegebenen Texts

    if (todoText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `<span class = "circle" onclick = "toggleSelection(this)"></span>${todoText}`; // fügt klickbaren Kreis hinzu
        openTodosList.appendChild(li);
        todoInput.value = '';
    }
}

function toggleSelection(circle) {
    circle.classList.toggle('selected');
}

function markAsCompleted() {
    const selectedTodos = document.querySelectorAll('#openTodos .selected'); // alle markierten Todos auswählen
    selectedTodos.forEach(todo => {
        const todoText = todo.parentNode.textContent; // .parentNode um auf den Text des Todo im <li> Element zuzugreifen
        const currentTime = new Date().toLocaleString();
        const li = document.createElement('li');
        li.textContent = `${todoText} - ${currentTime}`;
        completedTodosList.appendChild(li);
        openTodosList.removeChild(todo.parentNode); // Todo aus Offene Todos Liste entfernen
    });
}