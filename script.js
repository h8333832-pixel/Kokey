// 1. شاشة الدخول والتحقق من الباسورد (كوكي) وتشغيل الموسيقى
function checkPassword() {
    const passwordInput = document.getElementById('passwordField').value.trim();
    const correctPassword = 'كوكي'; // الباسورد المطلوب
    const audio = document.getElementById('bgMusic');

    if (passwordInput === correctPassword) {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        
        // تشغيل الموسيقى بعد تفاعل المستخدم
        audio.play().catch(function(error) {
            console.log("المتصفح يحتاج لتفاعل مسبق، تم التعامل معه.");
        });
    } else {
        alert('كلمة السر غلط.. فكر تاني يا كوكي! 😉');
    }
}

// 2. عداد الذكريات التصاعدي من تاريخ 10/10/2024 بالساعة والدقيقة والثانية
// نكتب شهر 10 برمجياً بالرقم 9 لأن جافا سكريبت تبدأ عد الشهور من 0 (يناير = 0)
const startDate = new Date(2024, 9, 10, 0, 0, 0); 

setInterval(function() {
    const now = new Date();
    const difference = now - startDate;

    // الحسابات البرمجية الدقيقة لتقسيم الوقت
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // عرض الوقت مع إضافة صفر على اليسار إذا كان الرقم أقل من 10 للحفاظ على شياكة التصميم
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
}, 1000);

// 3. نظام الرسائل التفاعلية المخبأة
function openMessage(type) {
    const displayBox = document.getElementById('messageDisplay');
    const textElement = document.getElementById('messageText');
    displayBox.style.display = 'block';

    if (type === 'متضايق') {
        textElement.innerText = "لو متضايق أو مخنوق في أي وقت، افتكر دايماً إن مفيش حاجة تستاهل زعلك، وأنا هنا دايماً وموجودة عشان أسمعك وجنبك خطوة بخطوة 💙.";
    } else if (type === 'مستقبلك') {
        textElement.innerText = "كل سنة وأنت أطيب وأجمل شخص في حياتي، أتمنالك سنة مليانة نجاح وسعادة وتحقق كل أحلامك يا رب! 🎂✨";
    } else if (type === 'مفتقدني') {
        textElement.innerText = "لو وحشتك أو حسيت بمسافة بيننا، افتكر إن مكانك ثابت في قلبي.. افتح الموقع واتفرج عليه أو ابعتلي حاجة وهرد عليك اول ما افتح 🤍🌟.";
    }
}

// 4. نظام اختبار الذاكرة (الكويز)
// function checkQuizAnswer(isCorrect) {
//     const resultElement = document.getElementById('quizResult');
//     if (isCorrect) {
//         resultElement.innerText = "صح!! برافو عليك فاكر أهو ومسيطر 😂🍔";
//         resultElement.style.color = "#66fcf1";
//     } else {
//         resultElement.innerText = "غلط يا بطل! ركز شوية       🤫";
//         resultElement.style.color = "#ff4d6d";
//     }
// }
// الكود المعدل لاستقبال رقم السؤال أو المعرّف الخاص به
// الكود المعدل ليعمل تلقائياً مع الـ HTML الحالي بدون أي تغيير هناك
function checkQuizAnswer(isCorrect) {
    // هذه السطور تبحث تلقائياً عن فقرة النتيجة (quizResult) الموجودة داخل نفس مربع السؤال
    // عن طريق الحدث الحالي (event) والزر الذي ضغط عليه المستخدم
    const clickedButton = event.target;
    const quizBox = clickedButton.closest('.quiz-box');
    const resultElement = quizBox.querySelector('.quiz-result') || document.getElementById('quizResult');

    if (isCorrect) {
        resultElement.innerText = "صح!! برافو عليك فاكر أهو ومسيطر 😂🍔";
        resultElement.style.color = "#66fcf1";
    } else {
        resultElement.innerText = "غلط يا بطل! ركز شوية.. فكر تاني 🤫";
        resultElement.style.color = "#ff4d6d";
    }
}