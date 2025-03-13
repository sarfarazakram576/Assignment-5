// navbar theme change event
document
  .getElementById("theme-change-img")
  .addEventListener("click", function () {
    let randomColor = "#" + Math.floor(Math.random() * 1000000).toString();
    document.getElementById("html").style.backgroundColor = randomColor;
  });

// current date
const newDate = new Date();
const currentDate = newDate.toDateString().split(" ");
const dayName = currentDate[0];
document.getElementById("day-name").innerText = dayName + ",";
const showDate = currentDate[1] + " " + currentDate[2] + " " + currentDate[3];
document.getElementById("current-date").innerText = showDate;

// go to blog.html
document.getElementById("goToBlog").addEventListener("click", function () {
  window.location.href = "blog.html";
});

// first task complete button event

function checkAllDisabled() {
  let disabledCount = 0;

  for (const btn of buttons) {
    if (btn.disabled) {
      disabledCount++;
    }
  }

  if (disabledCount === buttons.length) {
      alert("Congrates!!! You have completed all the current task");
    }
}

const buttons = document.querySelectorAll(".task-btn");
for (const button of buttons) {
    button.addEventListener("click", function () {
    alert("Board Updated Successfully");
    const totalTasks = document.getElementById("totalTasks").innerText;
    document.getElementById("totalTasks").innerText = "0" + (totalTasks - 1);
    const completedTasks = document.getElementById("completedTasks").innerText;
    const convertedCompletedTasks = parseInt(completedTasks);
    document.getElementById("completedTasks").innerText =
      convertedCompletedTasks + 1;
    button.setAttribute("disabled", true);

const title = button.closest(".p-4").querySelector("h2").innerText;
console.log(title)
 

    const historyContainer = document.getElementById("history-container");

    const p = document.createElement("p");
    p.classList.add("text-[12px]", "bg-[#F4F7FF]", "p-3", "rounded-lg", "mt-2");
    p.innerHTML = `
  You have completed the task ${title} at ${currentTime}
  `;
    historyContainer.appendChild(p);

    checkAllDisabled();
  });
}

// clear history
document.getElementById("clearHistory").addEventListener("click", function () {
  document.getElementById("history-container").innerHTML = "";
});

// for current time
const now = new Date();
const currentTime = now.toLocaleTimeString();

