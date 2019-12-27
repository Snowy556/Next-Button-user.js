// ==UserScript==
// @name         Function Access Profile Button
// @namespace    http://tampermonkey.net/
// @include     http*://*fap*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     2.2.5
// @grant          GM_addStyle
// @run-at  document-end
// ==/UserScript==

var zNode = document.createElement ('div');
zNode.innerHTML = '<button id="myButton" type="button">'
                + 'Next Item</button>'
                ;
zNode.setAttribute ('id', 'myContainer');
document.body.appendChild (zNode);

//--- Activate the newly added button.
document.getElementById ("myButton").addEventListener (
    "click", ButtonClickAction, false
);

function ButtonClickAction (zEvent) {
    document.getElementById("com.kronos.wfc.wtk.accessprofiles.functionaccessprofiles.action.find-next").click();
}

//--- Style our newly added elements using CSS.
GM_addStyle ( `
    #myContainer {
        position:               fixed;
        bottom:                    20;
        right:                   0;
        font-size:              20px;
        background:             #0A6FC1;
        border:                 1px outset black;
        margin:                 5px;
        opacity:                0.9;
        padding:                5px 20px;
    }
    #myButton {
        cursor:                 pointer;
    }
    #myContainer p {
        color:                  red;
        background:             white;
    }
` );