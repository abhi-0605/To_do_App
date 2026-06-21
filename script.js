let task= JSON.parse(localStorage.getItem("tasks")) || [];

displaytask();

function addtask(){
    let input=document.getElementById("taskinput");
    let tasktext=input.value.trim();


    if(tasktext===""){
        alert("enter the task");
        return;
    }

    task.push({
        text:tasktext,
        done:false
    });

    savetask();
    input.value="";
    displaytask();
    
}