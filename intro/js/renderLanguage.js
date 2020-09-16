function renderLanguage(){
    if(!!document.cookie) return;
    const supportLanguages = ['zh-TW', 'zh'];
    navigator.languages.forEach(function(element) {
        if(supportLanguages.indexOf(element) !== -1){
            document.cookie = "language=zh-TW";
            window.location.assign('https://screenleon.github.io/index_zh-TW.html');
            return;
        }
    })
    document.cookie = "language=en";
    return;
}