class Block {

    constructor(id, commands) {
        this.id = id;
        this.counter = 0;
        this.commands = [];
        for (var i=0; i<commands.length; i++) {
            this.commands.push(commands[i]);
        }
    }

    addCommand(command) {
        this.commands.push(command);
    }

    update() {
        if (counter<this.commands.length) {
            this.commands[counter].execute();
            this.counter++;
        }
    }
}