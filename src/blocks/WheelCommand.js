class WheelCommand extends Command {

    constructor (value, f) {
        super(f);
        //In this case, value'll be the text that accompanies wheel's result
        this.value = value.trim();
    }

    execute(gameLayer) {
        var result = Math.floor(Math.random()*8)+1;
        var target = {};
        if (result==2 || result==4) {
            target.text = this.value+" -DOUBLE OR NOTHING-";
            target.block = 19;
        }
        if (result==1 || result==5) {
            target.text = "Wheel lands on an empty panel."
            target.block = 38;
        }
        if(result==3 || result ==6) {
            target.text = this.value+" -SPIN AGAIN-";
            target.block=9;
        }
        if (result==7) {
            target.text = this.value+" -FREE SPIN-";
            target.block=49;
        }
        if (result==8) {
            target.text = this.value+" -NO CHANCE-";
            target.block=15;
        }
        gameLayer.printText(target.text);
        setTimeout(function() {
            gameLayer.loadBlockFile(target.block);
        }, 2000);
    }
}