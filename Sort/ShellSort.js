function ShellSort(a, b) {

    var Cola = [];
    var index = 0;
    var pivote = parseInt((b - 1) / 2);
    var bandera = true;

    while (pivote > 0) {
        bandera = false;
        for (var i = 0; i + pivote < b; i++) {

            if (a[i] > a[i + pivote]) {

                Cola.push([(i + 1), (i + pivote + 1)]);
                var temp = a[i];
                a[i] = a[i + pivote];
                a[i + pivote] = temp;
                bandera = true;
            }

        }
        if (bandera == false) {
            pivote = parseInt(pivote / 2);
        }
    }
    swap(0, Cola, b);
}