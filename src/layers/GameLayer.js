class GameLayer extends Layer {

    constructor() {
        super();
        this.initiate();
    }

    initiate() {
        //reproducirMusica();
        this.background = new Model(images.backgroud, 1920*0.5, 1080*0.5);
        this.xText = 1920*0.1;
        this.yText = 1080*0.1;
        this.currentBlock = null;
        this.texts = [];
        this.advance = false;
        this.loadBlockFile(0);
    }

    update() {
        if (this.advance) {
            this.currentBlock.update(this);
            this.advance = false;
        }
    }

    draw() {
        this.background.draw();
        for (var i=0; i<this.texts.length; i++) {
            this.texts[i].draw();
        }
    }

    printText(value) {
        if (this.yText > 1080*0.9) {
            this.clearText();
        }
        this.texts.push(new Text(value, this.xText, this.yText));
        this.yText = this.yText + 20;
    }

    clearText() {
        this.texts = [];
    }

    loadBlockFile(blockNumber) {
        route = blockRoute+blockNumber+blockExtension;
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
