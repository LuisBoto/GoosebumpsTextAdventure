var keys = [];

window.addEventListener('keydown', onKeyDown, false);
window.addEventListener('keyup', onKeyUp, false);

function onKeyDown( event) {
    input = inputs.keyboard;

    var pos = keys.indexOf(event.keyCode);
    if ( pos == -1 ) {
        keys.push(event.keyCode);
        switch ( event.keyCode ){
            case 13:
                controls.enter = true;
                break;
        }

        if (awaitingInput && event.keyCode == 32)
            userInput = userInput+String.fromCharCode(event.keyCode);
        if (awaitingInput && event.keyCode>=65 && event.keyCode <=90)
            userInput = userInput+String.fromCharCode(event.keyCode);

    }

}

function onKeyUp( event) {
    var pos = keys.indexOf(event.keyCode);
    keys.splice( pos, 1);
}
