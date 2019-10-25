class Text {

    constructor(value, x, y) {
        this.value = value;
        this.x = x;
        this.y = y;
    }

    setValue(value) {
        this.value = value;
    }

    draw (){
        context.font = "25px Monospace";
        context.fillStyle = "white";
        context.textAlign = "left";
        context.fillText(this.value, this.x, this.y);
    }

}
