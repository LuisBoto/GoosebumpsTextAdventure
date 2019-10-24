class LoadCommand extends Command {

    constructor (value, f) {
        super(f);
        this.value = value;
    }

    execute(gameLayer) {
        if (awaitingInput) {
            awaitingInput = false;
            var block = userInput.toString();
            userInput = "";
            gameLayer.loadBlockFile(block);
            return;
        }
        gameLayer.printText(this.value);
        gameLayer.awaitInput();
    }
}