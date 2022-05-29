var form = document.forms.myForm;

function submitForm() {
    console.log(form);
    add();
    alert('Form submitted');
}



function add() {
    var formResult = {
        name: form.elements["name"].value,
        email: form.elements["email"].value,
        comment: form.elements["comment"].value,
    }
    console.log(formResult);

    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.textContent = formResult.name;
    var td2 = document.createElement("td");
    td2.textContent = formResult.email;
    var td3 = document.createElement("td");
    td3.textContent = formResult.comment;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    console.log(tr);
    if (formResult.name != "" && formResult.email != "" && formResult.comment != "") {
        document.getElementById("table").appendChild(tr);
        console.log("added");
    } else {
        alert("Veuillez remplir tous les champs");
    }
}