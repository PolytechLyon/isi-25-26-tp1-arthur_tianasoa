let add = document.getElementById("new-todo-item-add");
add.addEventListener("click", function () {
    let bloc_edit = document.getElementById("edit-item");
    bloc_edit.style.display = "block";
    let title = document.getElementById("edit-todo-item-title");
    title.value = 