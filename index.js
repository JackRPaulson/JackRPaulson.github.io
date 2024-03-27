function openLinkInNewTab(url) {
    var a = document.createElement("a");
    a.href = url;

    // Simulate a click event
    var evt = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
    });
    
    try
    {
        a.target = "_blank"; // Open in a new tab
        a.dispatchEvent(evt);
    }
    catch
    {
        a.removeAttribute('target'); 
        a.dispatchEvent(evt);
    }
}
