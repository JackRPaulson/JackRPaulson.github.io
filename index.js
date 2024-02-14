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

function openResumeWordDocument() {
    // Replace 'path_to_your_word_document.docx' with the actual path to your Word document
    var wordDocumentUrl = '/documents/JackResume.docx';
    
    // Open the Word document in a new tab
    window.open(wordDocumentUrl, '_blank');
}