function renderLanguage() {
    const supportLanguages = ['zh-TW', 'zh'];
    if (!!document.cookie) {
        const cookieLanguage = /language=([a-z]{1,8}(-[a-z]{1,8})?)/i.exec(document.cookie)[1];
        if(cookieLanguage !== document.documentElement.lang){
            document.cookie = `language=${document.documentElement.lang};`;
        }
        return;
    }
    navigator.languages.forEach(function (element) {
        if (supportLanguages.indexOf(element) !== -1) {
            document.cookie = "language=zh-TW;";
            window.location.assign('./index_zh-TW.html');
            return;
        }
    })
    document.cookie = "language=en;";
    return;
}