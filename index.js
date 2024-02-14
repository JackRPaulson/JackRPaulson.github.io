function openLinkInNewTab(url) {
    var a = document.createElement("a");
    a.href = url;
    a.target = "_blank"; // Open in a new tab

    // Simulate a click event
    var evt = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
    });
    
    a.dispatchEvent(evt);
}