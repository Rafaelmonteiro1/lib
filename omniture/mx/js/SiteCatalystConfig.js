function getAccount() {

    var account = "sssamsungmx";
    var devurls = new Array('localhost', 'tst-sdsla');

    for (var iU = 0; iU < devurls.length; iU++) {
        if (document.URL.indexOf(devurls[iU].toString()) != -1) {
            account = "sssamsungmxdev";
            break;
        }
    }

    return account;
}