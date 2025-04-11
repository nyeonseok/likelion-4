const toDoForm = document.querySelector("#toDoForm");
const toDoInput = document.querySelector("#toDoInput");
const toDoList = document.querySelector("#toDoList");

toDoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const toDoText = toDoInput.value.trim();
  if (toDoText === "") return;

  const toDoItem = document.createElement("li");
  toDoItem.innerText = toDoText;
  toDoItem.className = "toDoItem";

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "삭제";
  deleteBtn.className = "deleteBtn";

  deleteBtn.addEventListener("click", () => {
    toDoList.removeChild(toDoItem);
  });

  toDoItem.appendChild(deleteBtn);
  toDoList.appendChild(toDoItem);
  toDoInput.value = "";
});
