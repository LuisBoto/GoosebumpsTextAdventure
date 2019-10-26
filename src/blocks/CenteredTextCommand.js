class CenteredTextCommand extends Command {

    constructor (value, f) {
        super(f);
        this.value = value;
    }

    execute(gameLayer) {
        gameLayer.printCenteredText(this.value);
    }
}