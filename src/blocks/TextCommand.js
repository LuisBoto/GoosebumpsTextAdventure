class TextCommand extends Command {

    constructor (value, f) {
        super(f);
        this.value = value;
    }

    execute(gameLayer) {
        gameLayer.printText(this.value);
    }
}