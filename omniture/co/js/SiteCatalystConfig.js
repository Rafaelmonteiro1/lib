function getAccount() {

    var account = "sssamsungco";
    var devurls = new Array('localhost', 'tst-sdsla');

    for (var iU = 0; iU < devurls.length; iU++) {
        if (document.URL.indexOf(devurls[iU].toString()) != -1) {
            account = "sssamsungcodev";
            break;
        }
    }

    return account;
}