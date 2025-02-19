document.addEventListener("DOMContentLoaded", function() {
    let inputBox = document.getElementById("input_box");
    let addButton = document.getElementById("add_button");
    let taskList = document.getElementById("task_list");

    addButton.addEventListener("click", function() {
        let taskText = inputBox.value.trim();
        
        if (taskText !== "") {
            let li = document.createElement("li"); 
            li.style.marginBottom = "10px";

            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.style.marginRight = "10px";

            let titleSpan = document.createElement("span");
            titleSpan.textContent = taskText;
            titleSpan.style.fontWeight = "bold"; 

            checkbox.addEventListener("change", function() {
                if (checkbox.checked) {
                    titleSpan.style.textDecoration = "line-through"; 
                } 
                else {
                    titleSpan.style.textDecoration = "none"; 
                    defSpan.style.textDecoration = "none"; 
                }
            });

            let deleteButton = document.createElement("button");
            deleteButton.textContent = "❌";
            deleteButton.style.marginLeft = "20px";
            deleteButton.style.cursor = "pointer";
            deleteButton.style.marginLeft = "auto";

            deleteButton.addEventListener("click", function() {
                li.remove(); 
            });

            li.appendChild(checkbox);
            li.appendChild(titleSpan);
            li.appendChild(deleteButton);
            taskList.appendChild(li); 

            inputBox.value = ""; 
        }
    });


    inputBox.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addButton.click();
        }
    });
});