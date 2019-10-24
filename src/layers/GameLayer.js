class GameLayer extends Layer {

    constructor() {
        super();
        this.initiate();
    }

    initiate() {
        this.background = new Model(images.backgroud, 1920*0.5, 1080*0.5);
        this.xText = 1920*0.1;
        this.yText = 1080*0.1;
        this.currentBlock = null;
        this.texts = [];
        this.advance = false;
        this.loadBlockFile(0);
    }

    update() {
        if (this.advance) { //Enter must have been pressed to update game
            if (awaitingInput) { //Current command must handle current user input
                this.currentBlock.repeat(this);
                userInput = "";
            }
            else //Simply advance to next command in line
                this.currentBlock.update(this);
            this.advance = false;
        }
    }

    awaitInput() {
        this.inputText = new Text(userInput, this.xText, this.yText);
        this.texts.push(this.inputText);
        awaitingInput = true;
        this.yText = this.yText + 20;
    }

    draw() {
        this.background.draw();
        for (var i=0; i<this.texts.length; i++) {
            this.texts[i].draw();
        }
        if (awaitingInput) { //Update user's input text
            this.texts.pop()
            this.inputText = new Text(userInput, this.xText, this.yText);
            this.texts.push(this.inputText);
        }
    }

    printText(value) {
        this.yText = this.yText + 20;
        if (this.yText > 1080*0.9) {
            this.clearText();
        }
        this.texts.push(new TypeText(value, this.xText, this.yText));
    }

    clearText() {
        this.texts = [];
        this.yText = 1080*0.1;
    }

    loadBlockFile(blockNumber) {
        var route = blockRoute+blockNumber+blockExtension;
        var file = new XMLHttpRequest();
        file.open("GET", route, false);

        file.onreadystatechange = function () {
            var block;
            var text = file.responseText;
            var lines = text.split('\n');
            block = new Block(lines[0], []);
            for (var i = 1; i < lines.length; i++) {
                var line = lines[i];
                switch (line.split("-")[0]) {
                    case "T": //Plain text print command
                        var command = new TextCommand(line.split("-")[1], null);
                        block.addCommand(command);
                        break;
                    case "Q": //Question command
                        var command = new QuestionCommand(line.split("-")[1], null);
                        block.addCommand(command);
                        break;
                }
            }
            this.currentBlock = block;
            this.clearText();
            this.printText("BlockID: "+block.id);
        }.bind(this);

        file.send(null);
    }



    processControls() {
        if (controls.enter) {
            this.advance = true;
            controls.enter = false;
        }
    }
}
