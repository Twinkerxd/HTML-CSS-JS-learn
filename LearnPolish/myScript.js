const ruWords = ["бояться","играть","брать","просыпаться","быть","хотеть","ходить","ждать","чувствовать","чувствовать себя",
"чистить","читать","узнать","готовить, варить","идти","ехать","есть","врать","любить(кого-то)","резать","покупать","лететь","считать","любить(что-то)",
"волноваться","мечтать","иметь",
"молчать","мочь","говорить","мыть","думать","ремонтировать","отдавать","отдыхать","ответить","смотреть (что-то)","рассказывать","открывать",
"открыть","курить","пить","писать","платить","плавать","пойти","помогать","суметь","позволить","работать","пробовать","производить"];
const plWords = ["bać się","bawić się","brać","budzić się","być","chcieć","chodzić","czekać","czuć","czuć się",
"czyścić","czytać","dowiedzieć się","gotować","iść","jechać","jeść","kłamać","kochać","kroić","kupować","lecieć","liczyć","lubić"
,"martwić się","marzyć","mieć",
"milczeć","móc","mówić","myć","myśleć","naprawiać","oddawać","odpoczywać","odpowiedzieć","oglądać","opowiadać","otwierać",
"otworzyć","palić","pić","pisać","płacić","pływać","pójść","pomagać","potrafić","pozwolić","pracować","próbować","produkować"];

var random = null;
console.log("Word counts: " + plWords.length);

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