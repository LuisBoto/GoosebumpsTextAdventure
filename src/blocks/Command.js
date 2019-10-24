class Command {

    constructor(f) {
        this.fun = f;
    }

    execute() {
        this.fun();
    }

}