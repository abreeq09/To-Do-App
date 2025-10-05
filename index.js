//for finding the input boxes
const taskInput = document.getElementById("taskInput")
const addBtn = document.getElementById("addBtn")
const taskList = document.getElementById("taskList")

//for clicking add button to take action
addBtn.addEventListener("click", addTask)
//for clicking enter in taskInput it will also add task
taskInput.addEventListener("keydown", e => { 
    if (e.key == 'Enter') addTask();
});

//function to add task
function addTask() {
    const text = taskInput.value.trim();
    if (text == "") return;

    //for listing added items like one task for one box
    const li = document.createElement("li");
    li.className = "flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-2";

    //select span and create element span for only the inline text for task. we are making span to select the specific task separately strike it when completed or delete it
    const span = document.createElement("span");
    span.textContent = text;
    span.className = "cursor-pointer text-gray-800";

    // toggle complete on click — use inline styles for guaranteed effect
      span.addEventListener("click", () => {
        const completed = span.dataset.completed === "true";
        if (!completed) {
          // mark complete: green strike + muted color
          span.style.textDecoration = "line-through";
          span.style.textDecorationColor = "green";
          span.style.textDecorationThickness = "2px";
          span.style.color = "#6B7280"; // tailwind gray-500
          span.dataset.completed = "true";
        } else {
          // unmark
          span.style.textDecoration = "";
          span.style.textDecorationColor = "";
          span.style.textDecorationThickness = "";
          span.style.color = "";
          span.dataset.completed = "false";
        }
      });
    

     // delete button
      const delBtn = document.createElement("button");
      delBtn.textContent = "❌";
      delBtn.className = "ml-3 text-red-500 hover:text-red-700";
      delBtn.addEventListener("click", () => {
        li.remove();
      });

      li.appendChild(span);
      li.appendChild(delBtn);
      taskList.appendChild(li);

      taskInput.value = "";
    }

    //toggle button
    const togglebtn = document.getElementById("togglebutton");
    const togglediv = document.getElementById('togglebg');
    const body = document.body; // Access the whole page 
    const h1text = document.text;


    let whitebg = false;//initaially off

    togglebtn.addEventListener('click', () => {
        whitebg = !whitebg;//here it changes the state 
    //if active is false toggle button is Off and if active is true toggle button is true

        if(whitebg) {
            togglebtn.style.transform = "translateX(2.8rem)";
            togglediv.style.backgroundColor = "#22c55e";
            body.style.backgroundColor = "#374151";
            text.style.color = "#ffffff"

            } else {
            togglebtn.style.transform = "translateX(0)";
            togglediv.style.backgroundColor = "#3B82F6";
            body.style.backgroundColor = "#ffffff";
            text.style.color = "#3B82F6"

        }
    });

    


        

        
            