var id = null;

function onChange() {
    element = document.getElementById("firstText");
    var afterReplace = element.value.replaceAll(`"`, `'`);
    element.value = afterReplace;

    if (id == null) {
        add('*');
    } else {
        add(id);
    }
}

function xxx() {
    element = document.getElementById("firstText");
    element.value = "";
}

function add(id) {
    this.id = id;
    var s = document.getElementById("firstText").value;
    var attribute = null;
    var value = null;

    const myArray = s.split("=");
    if (myArray.length == 2) {
        attribute = myArray[0];
            value = myArray[1].replaceAll(`"`, `'`);

            document.getElementById("secondText").value = "//"+id+"[@"+attribute+"="+value+"]";
            document.getElementById("thirdText").value = "//"+id+"[contains(@"+attribute+","+value+")]";
            document.getElementById("fourText").value = "";
    } else {
        text(id);
    }
}

function save(id) {
    var element = null;
    if (id == 1) {
        element = document.getElementById("firstText");
    } else if (id == 2) {
        element = document.getElementById("secondText");
    } else if (id == 3) {
        element = document.getElementById("thirdText");
    } else if (id == 4) {
        element = document.getElementById("fourText");
    }
    element.select();
    document.execCommand("copy");
}

function text(id) {
    var s = document.getElementById("firstText").value;
//    .replaceAll(' ', '')
    document.getElementById("fourText").value = "//"+id+"[contains(text(),'"+s+"')]"
    document.getElementById("secondText").value = "";
    document.getElementById("thirdText").value = "";
}


