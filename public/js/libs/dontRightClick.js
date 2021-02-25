/*#################################################################################################################
###                                                                                                             ###
###  |#####       ##       ############/      |###|            |##\           |###|        /##################/ ###
###  |######     ####     ####/               |###|            |####\        |###|                    |##|      ###
###    ######   ######   ####/    /#######/   |###|            |#######\     |###|      /#########/   |##|      ###
###     ###### ######## ####/   /###/         |##########\     |##########\  |###|     /###/          |##|      ###
###      ##################/   /###/          |###########\    |#################|    /###/           |##|      ###
###       #######/  ######/   |############/  |###|    ####\   |####|   \########|   |############/   |##|      ###
###        #####/    ####/    |####/          |###|   #####/   |####|      \#####|   |####/           |##|      ###
###         ###/      ##/      \##########/   |###########/    |####|         \##|    \##########/    |##|      ###
###                                                                                                             ###
###                                                                                              ©2020          ###
#################################################################################################################*/

    function preventSelection(element){
    let preventSelection = false;

        function addHandler(element, event, handler) {
            if (element.attachEvent)
                element.attachEvent('on' + event, handler);
            else
            
            if (element.addEventListener)
            element.addEventListener(event, handler, false);
        }

        function removeSelection() {

            if (window.getSelection) {
                window.getSelection().removeAllRanges();
            }
            else if (document.selection && document.selection.clear)
            document.selection.clear();
        }

        function killCtrlA(event) {
        
            let event = event || window.event;
            let sender = event.target || event.srcElement;

            if (sender.tagName.match(/INPUT|TEXTAREA/i))
            return;

            let key = event.keyCode || event.which;

            if (event.ctrlKey && key == 'A'.charCodeAt(0)) {
                removeSelection();
                if (event.preventDefault)
                    event.preventDefault();
                else
                    event.returnValue = false;
            }
        }

    addHandler(element, 'mousemove', function() {
        
        if(preventSelection)
                removeSelection();
    });

    addHandler(element, 'mousedown', function(event) {

        let event = event || window.event;
        let sender = event.target || event.srcElement;

        preventSelection = !sender.tagName.match(/INPUT|TEXTAREA/i);
    });

    addHandler(element, 'mouseup', function() {

        if (preventSelection)
            removeSelection();
            preventSelection = false;
        });

        addHandler(element, 'keydown', killCtrlA);
        addHandler(element, 'keyup', killCtrlA);
    }

    function clickIE4() {
        if (event.button==2) {
            return false;
        }
    }

    function clickNS4(e) {

        if (document.layers||document.getElementById&&!document.all) {

            if (e.which==2||e.which==3) {
                return false;
            }
        }
    }

    if (document.layers) {
        document.captureEvents(Event.MOUSEDOWN);
        document.onmousedown=clickNS4;
    }
    else if (document.all&&!document.getElementById) {
        document.onmousedown=clickIE4;
    }
    
document.oncontextmenu = new Function("return false")
preventSelection(document)