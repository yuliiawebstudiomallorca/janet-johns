

var language = window.navigator.language;

var languageFistTwo = language.substr(0,1);

switch (languageFistTwo){
    case "es":
        window.location.href = '/DE/index.html';
        break;
    case "de":
        window.location.href = 'index_GE.html';
        break;

        default:
        window.location.href = '/DE/index.html';
}   