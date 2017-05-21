 function BubbleSort(a, largo) {
   var Cola = [];
   var index = 0;
   var go = true;
   for (var i = 0; i < largo - 1 && go; i++) {
     go = false;
     for (var x = 0; x < largo - 1 - i; x++) {
       if (a[x] > a[x + 1]) {
         go = true;
         Cola.push([(x + 1), (x + 2)]);
         var temp = a[x];
         a[x] = a[x + 1];
         a[x + 1] = temp;
       }
     }
   }

   swap(0, Cola, largo);

 }