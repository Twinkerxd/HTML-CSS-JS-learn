function clickOK() {
    var s = document.getElementById("1").value;

    if (s == "jeść") {
        console.log("правильно");
    } else {
        console.log("не правильно");
    }

    // bieganie
    // czekać
    // jeść
}

function read() {
    contacts='[{"name":"bla bla", "email":bla bla, "address":"bla bla"}]';
    var mydata = JSON.parse(contacts);
    alert(mydata[0].name);
}

function changeImage() {
    document.getElementById("img").src = "files/"+random()+".png";
    read();
}

function random() {
    return Math.floor(Math.random() * 3 + 1);
}
