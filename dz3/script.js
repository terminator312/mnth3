const todoList = document.getElementById("todo-list");
const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");

addBtn.addEventListener("click", () => {
  const value = todoInput.value;
  if (!value.trim()) return;

  const li = document.createElement("li");

  li.innerHTML = `
    <label>
      <input type="checkbox" class="todo-checkbox" />
      <span class="todo-title">${value}</span>
    </label>
    <button class="deleteBtn">Удалить</button>
  `;

  const deleteBtn = li.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  const checkbox = li.querySelector(".todo-checkbox");
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
  });

  todoList.appendChild(li);
  todoInput.value = "";
});


















