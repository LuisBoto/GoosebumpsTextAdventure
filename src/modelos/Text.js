class Text {

    constructor(value, x, y) {
        this.value = value;
        this.x = x;
        this.y = y;
    }

    setValue(valor) {
        this.value = value;
    }

    draw (){
        contexto.font = "30px Monospace";
        contexto.fillStyle = "white";
        contexto.textAlign = "left";
        contexto.fillText(this.value, this.x, this.y);
    }

}
