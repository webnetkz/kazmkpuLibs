export function getBrowser() {
    // Opera 8.0+
    let isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Firefox 1.0+
    let isFirefox = typeof InstallTrigger !== 'undefined';
    // Safari 3.0+ "[object HTMLElementConstructor]" 
    let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    // Internet Explorer 6-11
    let isIE = /*@cc_on!@*/false || !!document.documentMode;
    // Edge 20+
    let isEdge = !isIE && !!window.StyleMedia;
    // Chrome 1 - 71
    let isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    // Blink engine detection
    let isBlink = (isChrome || isOpera) && !!window.CSS;

    switch(true) {
        case isOpera:
            console.log('Opera');
            document.body.innerHTML = 'Opera';
        break;
        case isFirefox:
            console.log('Firefox');
            document.body.innerHTML = 'Firefox';
        break;
        case isSafari:
            console.log('Safari');
            document.body.innerHTML = 'Safari';
        break;
        case isIE:
            console.log('IE');
            document.body.innerHTML = 'IE';
        break;
        case isChrome:
            console.log('Chrome');
            document.body.innerHTML = 'Chrome';
        break;

    }
}