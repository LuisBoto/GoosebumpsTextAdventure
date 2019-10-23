var keys = [];

window.addEventListener('keydown', onKeyDown, false);
window.addEventListener('keyup', onKeyUp, false);

function onKeyDown( event) {
    input = inputs.teclado;

    var pos = keys.indexOf(event.keyCode);
    if ( pos == -1 ) {
        keys.push(event.keyCode);
        switch ( event.keyCode ){
            case 1:
                //Write keycode to screentext...
        }

    }

}

function onKeyUp( event) {
    var pos = keys.indexOf(event.keyCode);
    keys.splice( pos, 1);
}
