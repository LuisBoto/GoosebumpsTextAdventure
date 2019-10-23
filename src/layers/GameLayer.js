class GameLayer extends Layer {

    constructor() {
        super();
        this.initiate();
    }

    initiate() {
        //reproducirMusica();
        this.background = new Model(images.backgroud, 1920*0.5, 1080*0.5);
    }

    update() {

    }

    draw() {
        this.background.draw();
    }

    loadBlockFile(route) {
        var file = new XMLHttpRequest();
        file.open("GET", ruta, false);

        file.onreadystatechange = function () {
            var text = file.responseText;
            var lines = text.split('\n');
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                for (var j = 0; j < line.length; j++) {
                    //TBD
                }
            }
        }.bind(this);

        file.send(null);
    }



    processControls() {

    }
}
