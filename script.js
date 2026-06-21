let tasks= JSON.parse(localStorage.getItem("tasks")) || [];

displaytask();


document.getElementById("taskinput").addEventListener("keypress", function(event){
    if(event.key==="Enter"){
        addtask();
    }
})


function addtask(){
    let input=document.getElementById("taskinput");
    let tasktext=input.value.trim();


    if(tasktext===""){
        alert("enter the task");
        return;
    }

    tasks.push({
        text:tasktext,
        done:false
    });

    savetask();
    input.value="";
    input.focus();
    displaytask();
    
}


function displaytask(){
    let tasklist=document.getElementById("tasklist");
    tasklist.innerHTML="";

    tasks.forEach((task,idx) => {
        let li=document.createElement("li");
        li.classList.add("task");
        if(task.done){
            li.classList.add("done")
        }
        li.innerHTML=`
            <span>${task.text}</span>

            <div class="action">
                <button class="done-btn" onclick="toggletask(${idx})">✓</button>
                <button class="delete-btn" onclick="deletetask(${idx})"> 🗑</button>
            </div>
            `;
            tasklist.appendChild(li);
    });
}


function toggletask(idx){
    tasks[idx].done=!tasks[idx].done;
    savetask();
    displaytask();
}



function deletetask(idx){
    tasks.splice(idx,1);
    savetask();
    displaytask();
}


function savetask(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}