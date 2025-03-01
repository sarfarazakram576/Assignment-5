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
document.getElementById("task-btn1").addEventListener("click", function () {
  alert("Board Updated Successfully");
  const totalTasks = document.getElementById("totalTasks").innerText;
  document.getElementById("totalTasks").innerText = "0" + (totalTasks - 1);
  const completedTasks = document.getElementById("completedTasks").innerText;
  const convertedCompletedTasks = parseInt(completedTasks);
  document.getElementById("completedTasks").innerText =
    convertedCompletedTasks + 1;
  document.getElementById("task-btn1").setAttribute("disabled", true);

  const title1 = document.getElementById("title1").innerText;

  const historyContainer = document.getElementById("history-container");

  const p = document.createElement("p");
  p.classList.add("text-[12px]", "bg-[#F4F7FF]", "p-3", "rounded-lg", "mt-2");
  p.innerHTML = `
You have completed the task ${title1} at ${currentTime}
`;
  historyContainer.appendChild(p);
});

// second task complete button event
document.getElementById("task-btn2").addEventListener("click", function () {
  alert("Board Updated Successfully");
  const totalTasks = document.getElementById("totalTasks").innerText;
  document.getElementById("totalTasks").innerText = "0" + (totalTasks - 1);
  const completedTasks = document.getElementById("completedTasks").innerText;
  const convertedCompletedTasks = parseInt(completedTasks);
  document.getElementById("completedTasks").innerText =
    convertedCompletedTasks + 1;
  document.getElementById("task-btn2").setAttribute("disabled", true);

  const title2 = document.getElementById("title2").innerText;

  const historyContainer = document.getElementById("history-container");

  const p = document.createElement("p");
  p.classList.add("text-[12px]", "bg-[#F4F7FF]", "p-3", "rounded-lg", "mt-2");
  p.innerHTML = `
You have completed the task ${title2} at ${currentTime}
`;
  historyContainer.appendChild(p);
});

// third task complete button event
document.getElementById("task-btn3").addEventListener("click", function () {
  alert("Board Updated Successfully");
  const totalTasks = document.getElementById("totalTasks").innerText;
  document.getElementById("totalTasks").innerText = "0" + (totalTasks - 1);
  const completedTasks = document.getElementById("completedTasks").innerText;
  const convertedCompletedTasks = parseInt(completedTasks);
  document.getElementById("completedTasks").innerText =
    convertedCompletedTasks + 1;
  document.getElementById("task-btn3").setAttribute("disabled", true);

  const title3 = document.getElementById("title3").innerText;

  const historyContainer = document.getElementById("history-container");

  const p = document.createElement("p");
  p.classList.add("text-[12px]", "bg-[#F4F7FF]", "p-3", "rounded-lg", "mt-2");
  p.innerHTML = `
You have completed the task ${title3} at ${currentTime}
`;
  historyContainer.appendChild(p);
});

// fourth task complete button event
document.getElementById("task-btn4").addEventListener("click", function () {
  alert("Board Updated Successfully");
  const totalTasks = document.getElementById("totalTasks").innerText;
  document.getElementById("totalTasks").innerText = "0" + (totalTasks - 1);
  const completedTasks = document.getElementById("completedTasks").innerText;
  const convertedCompletedTasks = parseInt(completedTasks);
  document.getElementById("completedTasks").innerText =
    convertedCompletedTasks + 1;
  document.getElementById("task-btn4").setAttribute("disabled", true);

  const title4 = document.getElementById("title4").innerText;

  const historyContainer = document.getElementById("history-container");

  const p = document.createElement("p");
  p.classList.add("text-[12px]", "bg-[#F4F7FF]", "p-3", "rounded-lg", "mt-2");
  p.innerHTML = `
You have completed the task ${title4} at ${currentTime}
`;
  historyContainer.appendChild(p);
});

// fifth task complete button event
document.getElementById("task-btn5").addEventListener("click", function () {
  alert("Board Updated Successfully");
  const totalTasks = document.getElementById("totalTasks").innerText;
  document.getElementById("totalTasks").innerText = "0" + (totalTasks - 1);
  const completedTasks = document.getElementById("completedTasks").innerText;
  const convertedCompletedTasks = parseInt(completedTasks);
  document.getElementById("completedTasks").innerText =
    convertedCompletedTasks + 1;
  document.getElementById("task-btn5").setAttribute("disabled", true);

  const title5 = document.getElementById("title5").innerText;

  const historyContainer = document.getElementById("history-container");

  const p = document.createElement("p");
  p.classList.add("text-[12px]", "bg-[#F4F7FF]", "p-3", "rounded-lg", "mt-2");
  p.innerHTML = `
You have completed the task ${title5} at ${currentTime}
`;
  historyContainer.appendChild(p);
});

// sixth task complete button event
document.getElementById("task-btn6").addEventListener("click", function () {
  alert("Board Updated Successfully");
  alert("Congrates!!! You have completed all the current task");
  const totalTasks = document.getElementById("totalTasks").innerText;
  document.getElementById("totalTasks").innerText = "0" + (totalTasks - 1);
  const completedTasks = document.getElementById("completedTasks").innerText;
  const convertedCompletedTasks = parseInt(completedTasks);
  document.getElementById("completedTasks").innerText =
    convertedCompletedTasks + 1;
  document.getElementById("task-btn6").setAttribute("disabled", true);

  const title6 = document.getElementById("title6").innerText;

  const historyContainer = document.getElementById("history-container");

  const p = document.createElement("p");
  p.classList.add("text-[12px]", "bg-[#F4F7FF]", "p-3", "rounded-lg", "mt-2");
  p.innerHTML = `
You have completed the task ${title6} at ${currentTime}
`;
  historyContainer.appendChild(p);
});


// clear history 
document.getElementById('clearHistory').addEventListener('click',function(){
document.getElementById("history-container").innerHTML = '';

})


// for current time
const now = new Date();
let hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12 || 12;
const currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;
