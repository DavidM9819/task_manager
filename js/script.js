{
  const tasks = [];
  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });
    render();
  };
  const removeTask = (index) => {
    tasks.splice(index, 1);
    render();
  };
  toggleTaskDone = (index) => {
    tasks[index].done = !tasks[index].done;
    render();
  };
  const bindEvens = () => {
    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });
    const toggleDoneButtons = document.querySelectorAll(".js-done");

    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  };

  const render = () => {
    let htmlString = "";
    for (const task of tasks) {
      htmlString += `
        <li class="list__task--item"> 
    
        <button class= "buttonTask buttonTask--toggle  js-done"> 
        ${task.done ? "✔" : " "} 
        </button>
        <span class="${task.done ? " list__task--done" : ""}">
        ${task.content}
        </span>
        <button class="buttonTask buttonTask--remove js-remove"> 🗑️ </button>
        </li>
        `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;

    bindEvens();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTaskElement = document.querySelector(".js-newTask");
    const newTaskContent = newTaskElement.value.trim();
    if (newTaskContent !== "") {
      addNewTask(newTaskContent);
      newTaskElement.value = "";
    }

    newTaskElement.focus();
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };
  init();
}
