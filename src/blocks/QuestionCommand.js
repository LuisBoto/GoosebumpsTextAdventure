class QuestionCommand extends Command {

    constructor (value, f) {
        super(f);
        this.question = value.split(">")[0];
        this.answers = [];
        //Questions come in the following format
        //Question > Answer1_Block1/Answer2_Block2/AnswerN_BlockN
        var answers = value.split(">")[1].split("/");
        for (var i=0; i<answers.length; i++) {
            var a = {};
            a.text = answers[i].split("_")[0].trim();
            a.block = answers[i].split("_")[1].trim();
            this.answers.push(a);
        }
    }

    execute(gameLayer) {
        if (awaitingInput) {
            awaitingInput = false;
            for (var i=0; i<this.answers.length; i++) {
                if (userInput===this.answers[i].text.toUpperCase()) {
                    userInput = "";
                    if (this.answers[i].block==="null") {
                        controls.enter = true;
                        return;
                    }
                    gameLayer.loadBlockFile(this.answers[i].block);
                    return;
                }
            }
        }
        gameLayer.printText(this.question);
        var options = "(";
        for (var i=0; i<this.answers.length; i++) {
            if (i==this.answers.length-1)
                options=options+this.answers[i].text+")"
            else
                options=options+this.answers[i].text+"/"
        }
        gameLayer.printText(options);
        gameLayer.awaitInput();
    }
}