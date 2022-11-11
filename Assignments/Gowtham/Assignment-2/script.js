function Validate () {
    let table=document.getElementById('table');
    var row = table.insertRow(0);

    var name = row.insertCell(0);
    var email = row.insertCell(1);
    var pass = row.insertCell(2);
    var radio = row.insertCell(3);
    var drop = row.insertCell(4);
    var textarea = row.insertCell(5);

    name.innerHTML = document.getElementById("fname").value;
    email.innerHTML = document.getElementById("email").value;
    pass.innerHTML =document.getElementById("pass").value;
    radio.innerHTML = document.getElementById("fav_language").value;
    drop.innerHTML = document.getElementById("cars").value;
    textarea.innerHTML = document.getElementById("tarea").value;


    alert("success");

    // let newArray = [name,email,pass,radio,drop,textarea];
    // newArray.forEach((item)=>{
    // var li = document.createElement("li");
    // var text = document.createTextNode(item);
    // li.appendChild(text);
    // table.appendChild(li);
    // })
    
    return false;
}