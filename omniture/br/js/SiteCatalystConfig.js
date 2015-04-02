function getAccount() {

    var account = "sssamsungbr";
    var devurls = new Array('localhost', 'tst-sdsla');

    for (var iU = 0; iU < devurls.length; iU++) {
        if (document.URL.indexOf(devurls[iU].toString()) != -1) {
            account = "sssamsungbrdev";
            break;
        }
    }

    return account;
}