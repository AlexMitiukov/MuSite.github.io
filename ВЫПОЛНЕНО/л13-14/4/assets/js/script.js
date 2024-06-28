function getOSInfo() {
    let userAgent = window.navigator.userAgent;
    let platform = window.navigator.platform;
    let os = null;

    if (platform.startsWith('Win')) {
        os = 'Windows';
    } else if (platform.startsWith('Mac')) {
        os = 'macOS';
    } else if (platform.startsWith('Linux')) {
        os = 'Linux';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (/iPhone|iPad|iPod/.test(userAgent)) {
        os = 'iOS';
    } else {
        os = 'Unknown OS';
    }

    return `Your operating system is ${os}`;
}

function showOSInfo() {
    alert(getOSInfo());
}

window.onload = function () {
    setTimeout(showOSInfo, 6000);
};
