const ruWords = ["бояться","играть","брать","просыпаться","быть","хотеть","ходить","ждать","чувствовать","чувствовать себя",
"чистить","читать","узнать","готовить, варить","идти","ехать","есть","врать","любить","резать","покупать","лететь","считать","любить","волноваться","мечтать","иметь"];
const plWords = ["bać się","bawić się","brać","budzić się","być","chcieć","chodzić","czekać","czuć","czuć się",
"czyścić","czytać","dowiedzieć się","gotować","iść","jechać","jeść","kłamać","kochać","kroić","kupować","lecieć","liczyć","lubić","martwić się","marzyć","mieć"];

var random = null;

function clickOK() {
    var count = parseInt(document.getElementById("count").value, 10);
    var s = document.getElementById("1").value;

    if (s == plWords[random]) {
        document.getElementById("2").value = "правильно";
        document.getElementById("count").value = count + 1;
        changeWord();
    } else {
        document.getElementById("2").value = "не правильно";
        document.getElementById("3").value = plWords[random];
    }
}

function changeWord() {
      document.getElementById("1").value = "";
      document.getElementById("2").value = "";
      document.getElementById("3").value = "";
      document.getElementById("0").value = ruWords[myRandom()];
}

function myRandom() {
    random = Math.floor(Math.random() * (plWords.length - 1));
    return random;
}