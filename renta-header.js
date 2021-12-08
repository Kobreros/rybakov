var currentLang;
var userLang = navigator.language || navigator.userLanguage;

// Rus to Eng
var userLang = navigator.language || navigator.userLanguage;
if (!userLang.toLowerCase().includes("ru") && localStorage.getItem("currentLang") != "used") {

    let currentPage = document.location.href.match(/(^[^#]*)/)[0];
    console.log("currentPage :>> ", currentPage);
    console.log("window.location.origin :>> ", window.location.origin);

    // Check main page
    if (currentPage == window.location.origin + '/') {
        console.log("currentPage :>> ", currentPage);
        window.location.href = "en";
    } else {
        window.location.href = currentPage + "-en";
    }
}



//Eng to Rus
var userLang = navigator.language || navigator.userLanguage;
if (userLang.toLowerCase().includes('ru') && localStorage.getItem("currentLang") != "used") {
    document.location.href = "/"
};