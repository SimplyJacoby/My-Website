function visitNewPage(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

function onSendEmailClick() {
    window.location.href = "SendEmail.html";
}