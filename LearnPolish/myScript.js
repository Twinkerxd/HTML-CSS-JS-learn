const ruWords = ["бояться","играть","брать","просыпаться","быть","хотеть","ходить","ждать","чувствовать","чувствовать себя",
"чистить","читать","узнать","готовить, варить","идти","ехать","есть","врать","любить(кого-то)","резать","покупать","лететь","считать","любить(что-то)",
"волноваться","мечтать","иметь",
"молчать","мочь","говорить","мыть","думать","ремонтировать","отдавать","отдыхать","ответить","смотреть (что-то)","рассказывать","открывать",
"открыть","курить","пить","писать","платить","плавать","пойти","помогать","суметь","позволить","работать","пробовать","производить",
"просить","вести (авто)","перейти","спрашивать","делать","разговаривать","сидеть","поворачивать","слушать","слышать",
"спать","надеяться","глянуть","опоздать","проверить","убирать","стоять","учиться в вузе","искать","скучать","держать",
"убегать","учиться","улыбаться","использовать","бороться","войти","видеть","знать","верить","включить","вернуться",
"выбирать","выглядеть","выйти","выключить","выбрасывать","взять","начинать","зарабатывать","управлять","заснуть",
"собираться","потерять","поменять","найти","сделать","жить"];

const plWords = ["bać się","bawić się","brać","budzić się","być","chcieć","chodzić","czekać","czuć","czuć się",
"czyścić","czytać","dowiedzieć się","gotować","iść","jechać","jeść","kłamać","kochać","kroić","kupować","lecieć","liczyć","lubić"
,"martwić się","marzyć","mieć",
"milczeć","móc","mówić","myć","myśleć","naprawiać","oddawać","odpoczywać","odpowiedzieć","oglądać","opowiadać","otwierać",
"otworzyć","palić","pić","pisać","płacić","pływać","pójść","pomagać","potrafić","pozwolić","pracować","próbować","produkować",
"prosić","prowadzić","przejść","pytać","robić","rozmawiać","siedzieć","skręcać","słuchać","słyszeć",
"spać","spodziewać się","spojrzeć","spóźnić się","sprawdzić","sprzątać","stać","studiować","szukać","tęsknić","trzymać",
"uciekać","uczyć się","uśmiechać się","używać","walczyć","wejść","widzieć","wiedzieć","wierzyć","włączyć","wrócić",
"wybierać","wyglądać","wyjść","wyłączyć","wyrzucać","wziąć","zaczynać","zarabiać","zarządzać","zasnąć",
"zbierać się","zgubić","zmienić","znaleźć","zrobić","żyć"];

var random = null;
var x = 0;
console.log("PL words counts: " + plWords.length);
console.log("RU words counts: " + ruWords.length);

for (let i = 0; i < plWords.length; i++) {
    console.log(i + " " + plWords[i] + " " + ruWords[i]);
}

function clickOK() {
    var count = parseInt(document.getElementById("count").value, 10);
    var s = document.getElementById("1").value;

    if (s == plWords[x]) {
            document.getElementById("2").value = "правильно";
            document.getElementById("count").value = count + 1;
            x++;
            changeWord();
        } else {
            document.getElementById("2").value = "неправильно";
            document.getElementById("3").value = plWords[x];
//            document.getElementById("3").value = plWords[random];
        }

//    if (s == plWords[random]) {
//        document.getElementById("2").value = "правильно";
//        document.getElementById("count").value = count + 1;
//        changeWord();
//    } else {
//        document.getElementById("2").value = "неправильно";
//        document.getElementById("3").value = plWords[random];
//    }
}

function changeWord() {
      document.getElementById("1").value = "";
      document.getElementById("2").value = "";
      document.getElementById("3").value = "";
      document.getElementById("0").value = ruWords[x];
//      document.getElementById("0").value = ruWords[myRandom()];
}

function myRandom() {
    random = Math.floor(Math.random() * (plWords.length - 1));
    return random;
}