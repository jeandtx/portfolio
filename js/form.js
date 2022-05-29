var form = document.forms.data;

function submitForm() {
    var result = {
        name: form.elements["name"].value,
        email: form.elements["email"].value,
        comment: form.elements["comment"].value,
    }

    let formResult = JSON.parse(localStorage.getItem("form"));
    formResult = [...formResult, result];
    localStorage.setItem("form", JSON.stringify(formResult));
}


var formResult = JSON.parse(localStorage.getItem("form"));

formResult.forEach(element => {

    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.textContent = element.name;
    var td2 = document.createElement("td");
    td2.textContent = element.email;
    var td3 = document.createElement("td");
    td3.textContent = element.comment;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    if (element.name != "" && element.email != "" && element.comment != "") {
        document.getElementById("table").appendChild(tr);
    } else {
        alert("Veuillez remplir tous les champs");
    }
});

function clearTable() {
    localStorage.clear();
    localStorage.setItem("form", JSON.stringify([]));
    location.reload();
}
