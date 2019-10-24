class QuestionCommand extends Command {

    constructor (value, f) {
        super(f);
        this.question = value.split("-")[0];
        this.answers = [];
        //Questions come in the following format
        //Question > Answer1-Block1/Answer2-Block2/AnswerN-BlockN
        var answers = value.split(">")[1].split("/");
        for (var i=0; i<answers.length; i++) {
            var a = {};
            a.text = answers[i].split("-")[0];
            a.block = answers[i].split("-")[1];
            this.answers.push(a);
        }
    }

    execute(gameLayer) {
        gameLayer.printText(this.question);
        var options = "(";
        for (var i=0; i<this.answers.length; i++) {
            if (i==this.answers.length-1)
                options=options+this.answers[i].text+")"
            else
                options=options+this.answers[i].text+"/"
        }
        gameLayer.printText(options);
        awaitingInput = true;
        while(awaitingInput)
            gameLayer.processControls();
        for (var i=0; i<this.answers.length; i++) {
            if (userInput===this.answers[i].text) {
                gameLayer.loadBlockFile(this.answers[i].block);
                return;
            }
        }
        this.execute(gameLayer);
    }
}