let currentLang;

var userLang = navigator.language || navigator.userLanguage;
if (!userLang.toLowerCase().includes('pt') && localStorage.getItem("lang") != "used") {
    window.location.href = "en"
    console.log(localStorage.getItem("lang"))
};
console.log(localStorage.getItem("lang", currentLang))