/*var secondsInAMinute = 60;
var minutesInAnHour = secondsInAMinute * 60;
var hoursInADay = minutesInAnHour * 24;
var daysInAYear = hoursInADay * 365;
var age = daysInAYear * 11;
console.log(age);

var balloons = 100;
balloons /= 4;
console.log(balloons);

var string = "hElLo tHerE, I aM kEnObi!";
string[0].toUpperCase() + string.slice(1).toLowerCase();
console.log(string);
*/
var names = [
    "гімно",
    "обличчя",
    "волосся",
    "абеткування",
    "авансування",
    "авіабудування",
    "автозбереження",
    "агрегатування",
    "баговиння",
    "бажання",
    "базарування",
    "базграння",
    "батіковання",
    "буркотіння",
    "бурмило",
    "бурякозбирання",
    "бухкання",
    "бюджетування",
    "кишло",
    "кібченя",
    "ківі",
    "кілечко",
    "кільце",
    "кімоно",
    "кіно",
    "клоччя",
    "ковзання",
    "ковтання",
    "козакування",
    "козеня",
    "козенятко",
    "копіювання",
    "кормило",
    "кормління",
    "кормовиробництво",
    "королівство",
    "королювання",
    "коронування",
    "корсарство",
    "котирування",
    "крабеня",
    "крайнебо",
    "криженя",
    "левеня",
    "лесирування",
    "лимарство",
    "ловецтво",
    "логарифміка",
    "логарифмування",
    "ложкарство",
    "лозоплетіння",
    "лозоходіння",
    "лозоходство",
    "м'якосердя",
    "м'яcо",
    "маковинє",
    "метазнання",
    "Монако",
    "населення",
    "начало",
    "непорозуміння",
    "нишпорення",
    "нововведення",
    "нововірство",
    "новоріччя",
    "новосілля",
    "обезліснення",
    "оглядання",
    "оголеність",
    "оголення",
    "огруддя",
    "оживляння",
    "озброєння"
];
var howwhat = [
    "фасоль",
    "реальне гімно",
    "пріщі",
    "абсентеїзм",
    "абсорбер",
    "абутилон",
    "автомобілізм",
    "автошлях",
    "атеїст",
    "атеросклероз",
    "атол",
    "ахроматизм",
    "ацетон",
    "багат-вечір",
    "баласт",
    "балдахін",
    "баняк",
    "баркас",
    "ват",
    "ваторник",
    "ватрак",
    "ввід-вивід",
    "ведаїзм",
    "вечір-спектакль",
    "виставка-ярмарок",
    "віадук",
    "відеокліп",
    "відеофільм",
    "військовослужбовець",
    "Всевишній город",
    "газ",
    "гарсон",
    "гелій",
    "герць",
    "гіперпуризм",
    "гіпонім",
    "Гондурас",
    "горнець",
    "грот",
    "ґвинт",
    "ґелюх",
    "двір",
    "дев'ятерик",
    "дезодорант-спрей",
    "демаркетинг",
    "деплазмоліз",
    "депутат-сумісник",
    "диван",
    "диплом",
    "експерт-викладач",
    "елемент",
    "елітаризм",
    "ерг",
    "ефект",
    "жеребець",
    "жироустійник",
    "жолудь",
    "замірник-монтажник",
    "зеніт",
    "зір",
    "золь-гель",
    "ієрей",
    "інженер-землевпорядник",
    "інфант",
    "їдець",
    "їдок",
    "їжачник",
    "к'ят",
    "кабанище",
    "кабанча",
    "кабачок",
    "каберне",
    "каботаж",
    "кабошон",
    "кабріолет"
];
var how = [
    "як",
    "наче",
    "схоже на",
    "котиться на",
    "іде в",
];

document.getElementById('button').onclick = function() {
    let callingField = document.getElementById('calling-field');
    let out = '';
    out += `<p class="alertName" role="alert">${["Твоє", names[Math.floor(Math.random() * 76)], how[Math.floor(Math.random() * 5)], howwhat[Math.floor(Math.random() * 75)] + "!!!"].join(" ")}</p>`;
    callingField.innerHTML = out;
}