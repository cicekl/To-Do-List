document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll('.task-checkbox');
  const taskTexts = document.querySelectorAll('.taskText');

  checkboxes.forEach((checkbox,index) => {
    const taskText = taskTexts[index].innerText.trim(); 
    const taskKey = `task-${taskText}`; 

    const isChecked = localStorage.getItem(taskKey) === "true";
    checkbox.checked = isChecked;

    checkbox.addEventListener("change", function () {
      localStorage.setItem(taskKey, checkbox.checked);
    });
  });
});