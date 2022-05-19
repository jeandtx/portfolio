var form = document.forms.myForm;

function submitForm() {
    console.log(form);
    add();
    alert('Form submitted');
}



function add() {
    var formResult = {
        task: form.elements["name"].value,
        date: form.elements["email"].value,
        category: form.elements["comment"].value,
    }
    console.log(formResult);

    // var tr = document.createElement("tr");

    // var td1 = document.createElement("td");
    // td1.textContent = formResult.task;
    // var td12 = document.createElement("td");
    // td12.textContent = "Details are not in the form";
    // var td2 = document.createElement("td");
    // td2.textContent = formResult.date;
    // var td3 = document.createElement("td");
    // td3.textContent = formResult.category;

    // tr.appendChild(td1);
    // tr.appendChild(td12);
    // tr.appendChild(td2);
    // tr.appendChild(td3);

    // console.log(tr);
    // if (formResult.task != "" && formResult.date != "" && formResult.category != "") {
    //     document.getElementById("table").appendChild(tr);
    // } else {
    //     alert("Veuillez remplir tous les champs");
    // }
}