var timelineParameters = anime.timeline({});

function swap(index, Cola, length) {

    var index_a = Cola[index][0];
    var index_b = Cola[index][1];
    var distancia = index_b - index_a;
    var moveM = parseInt($(".box").css("margin-right"));
    var moveW = parseInt($(".box").width());
    var moveP = parseInt($(".box").css("padding-right"));

    var x = ((moveP * 2) + (moveM * 2) + moveW);

    var moveMY = parseInt($(".box").css("margin-top"));
    var moveWY = parseInt($(".box").height());
    var movePY = parseInt($(".box").css("padding-top"));

    var y = ((movePY * 2) + (moveMY * 2) + moveWY);

    var data = $(".box" + index_a).text();
    var data2 = $(".box" + index_b).text();
    var extra = 0.4;


    if (window.innerWidth < x * (length - 1)) {
        alert("el tamaño del a ventana es demasiado pequeño!!!");
        alert("No se animara!!!");
        console.log(x * (length + 0.5));
        return 1;
    };



    timelineParameters = anime.timeline({});

    timelineParameters.add({
            targets: '#array .box' + index_a,
            translateX: [{
                value: 0
            }, {
                value: x * distancia
            }, {
                value: x * distancia
            }],
            translateY: [{
                value: y + extra
            }, {
                value: y + extra
            }, {
                value: 0
            }],
            duration: 2000,
            offset: 5,
            backgroundColor: [{
                    value: '#ccc'
                }, // Or #FFFFFF
                {
                    value: 'rgb(255, 0, 0)'
                },
                {
                    value: 'hsl(100, 60%, 60%)'
                }
            ],
            // complete : function(){
            // }
        })
        .add({
            targets: '#array .box' + index_b,
            translateX: [{
                value: 0
            }, {
                value: -x * distancia
            }, {
                value: -x * distancia
            }],
            translateY: [{
                value: -(y + extra)
            }, {
                value: -(y + extra)
            }, {
                value: 0
            }],
            duration: 2000,
            offset: 8,
            backgroundColor: [{
                    value: '#ccc'
                }, // Or #FFFFFF
                {
                    value: 'rgb(255, 0, 0)'
                },
                {
                    value: 'hsl(100, 60%, 60%)'
                }
            ],
            // complete : function(){
            // }
        });

    timelineParameters.complete = function () {

        $(".box" + index_a).text(data2);
        $(".box" + index_a).css({
            'transform': 'translateX(0px) translateY(0px)',
        });

        $(".box" + index_b).text(data);
        $(".box" + index_b).css({
            'transform': 'translateX(0px) translateY(0px)',
        });
        // ir verificando cuando se ordena!!

        index = index + 1;

        if (index < Cola.length) {
            swap(index, Cola, length);
        } else {
            for (var i = 1; i < length + 1; i++) {
                $(".box" + i).css("background-color", "#7fc719");
            }
        }

    }
    timelineParameters.update = function () {

        if (index_a - 1 > 0) {
            if (parseInt($(".box" + (index_a - 1)).text()) > parseInt($(".box" + index_a).text())) {
                $(".box" + (index_a - 1)).css("background-color", "red");
                // $(".box"+index_a).css("background-color","red");
            }
        }

        if (index_a + 1 <= 10) {
            if (parseInt($(".box" + (index_a + 1)).text()) < parseInt($(".box" + index_a).text())) {
                // $(".box"+index_a).css("background-color","red");
                $(".box" + (index_a + 1)).css("background-color", "red");
            }
        }

        if (index_b - 1 > 0) {
            if (parseInt($(".box" + (index_b - 1)).text()) > parseInt($(".box" + index_b).text())) {
                // $(".box"+index_b).css("background-color","red");
                $(".box" + (index_b - 1)).css("background-color", "red");
            }
        }

        if (index_b + 1 <= 10) {
            if (parseInt($(".box" + (index_b + 1)).text()) < parseInt($(".box" + index_b).text())) {
                // $(".box"+index_b).css("background-color","red");
                $(".box" + (index_b + 1)).css("background-color", "red");
            }
        }
    }

}