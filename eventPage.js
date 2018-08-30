

var contextMenuItem = {
    "id": "translateMetar",
    "title": "TranslateMETAR",
    "contexts": ["selection"]
};


chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData) {

    var parseMETAR = require("metar");
    if (clickData.menuItemId == 'translateMetar' && clickData.selectionText){
        if (typeof clickData.selectionText === 'string' || clickData.selectionText instanceof String){
            alert("yes")
            // console.log(clickData.selectionText)
        } else {
            alert("nope")
        }
    }
})

