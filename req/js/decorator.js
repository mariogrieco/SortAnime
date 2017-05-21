var _body = $("#contenedor");
var _Array = $("#array");
var arreglo_modificado = [];

function setPos(w, h) {
    var y = parseInt($("#array").height());
    var y2 = parseInt($("#select").height());
    _body.css("margin-top", (h / 2) - (y+y2));
}


arreglo_modificado.push = (function () {
    var overload = Array.prototype.push;

    return function (){
        var item = parseInt(((Math.random() * 100) % 101));
        overload.apply(this, [item]);
        _Array.append($("<div class='box " + "box" + this.length + "'>" + item + "</div>"));
    };
}());


function setIn() {
    $("#array").empty()
    arreglo_modificado.length = 0;
    for (let i = 0; i < 10; i++) {
        arreglo_modificado.push(i);
    }
}

setIn();

setPos(window.innerWidth, window.innerHeight);

window.addEventListener("resize", function () {
    setPos(this.innerWidth, this.innerHeight);
});