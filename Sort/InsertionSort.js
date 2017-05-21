function InsertionSort(a, largo) {
    var menor;
    var Cola = [];
    var index = 0;
    for (var i = 1; i < largo; i++) {
        menor = i;
        for (var x = i - 1; x >= 0; x--) {
            if (a[menor] < a[x]) {
                menor = x;
                Cola.push([(x + 1), (x + 2)]);
                var temp = a[x];
                a[x] = a[x + 1];
                a[x + 1] = temp;
            }
        }

    }
    swap(0, Cola, largo);
}