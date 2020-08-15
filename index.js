function visitNewPage(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

function onSendEmailClick() {
    window.location.href = "SendEmail.html";
}

function onSendClick() {
    window.location.href = "index.html";
}

function setDarkMode() {
    var checkBox = document.getElementById("dark-mode-switch");
    if (checkBox.checked == true) {
        window.localStorage.setItem("darkmode", "true");
    }
    else {
        window.localStorage.setItem("darkmode", "false");
    }
    runDarkMode();
}

function runDarkMode() {
    if (window.localStorage.getItem("darkmode") == "true") {
        document.documentElement.style.setProperty('--bg-color', '#293347');
        document.documentElement.style.setProperty('--bg-light-color', '#394763');
        document.documentElement.style.setProperty('--bg-dark-color', '#1c2331');
        document.documentElement.style.setProperty('--bg-overlay-color', '#1c2331');
        document.documentElement.style.setProperty('--text-color', '#fff');
        document.documentElement.style.setProperty('--text-lighter-color', '#ececec');
        document.documentElement.style.setProperty('--border-color', '#293347');
        document.getElementById("home").style.backgroundImage = "linear-gradient(#293347, var(--accent-color))";
    }
    else {
        document.documentElement.style.setProperty('--bg-color', '#ececec');
        document.documentElement.style.setProperty('--bg-light-color', '#fff');
        document.documentElement.style.setProperty('--bg-dark-color', '#293347');
        document.documentElement.style.setProperty('--bg-overlay-color', '#293347');
        document.documentElement.style.setProperty('--text-color', '#293347');
        document.documentElement.style.setProperty('--text-lighter-color', '#4a4a4a');
        document.documentElement.style.setProperty('--border-color', '#ececec');
        document.getElementById("home").style.backgroundImage = "linear-gradient(#fff, var(--accent-color))";
    }
}