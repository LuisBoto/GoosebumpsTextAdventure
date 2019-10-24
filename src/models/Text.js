class Text {

    constructor(value, x, y) {
        this.value = value;
        this.x = x;
        this.y = y;
        this.counter = 0;
    }

    setValue(valor) {
        this.value = value;
    }

    draw (){
        if (this.counter < this.value.length)
            this.counter=this.counter+3;
        context.font = "20px Monospace";
        context.fillStyle = "white";
        context.textAlign = "left";
        context.fillText(this.value.substring(0, this.counter), this.x, this.y);
    }

}
