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
    
    // Try simulating click event on the anchor
    var clicked = a.dispatchEvent(evt);

    // If click event wasn't successful, open in current tab
    if (!clicked) {
        window.location.href = url;
    }
}