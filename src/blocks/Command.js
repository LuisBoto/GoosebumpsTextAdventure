class Command {

    constructor(f) {
        //Optional function parameter. Child classes with specific funtionality
        //are being used, but this leaves a door open for a functional approach
        //at the time of creating new commands
        this.fun = f;
    }

    execute(gameLayer) {
        this.fun();
    }

}