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

// Attach the function to the onload event
// window.addEventListener('load', getime);

// function getime()
// {
//     // Create a new Date object
//     var currentDate = new Date();

//     // Get the current date
//     var day = currentDate.getDate();
//     var month = currentDate.getMonth() + 1; // Months are zero-indexed, so we add 1
//     var year = currentDate.getFullYear();

//     // Get the current time
//     var hours = currentDate.getHours();
//     var minutes = currentDate.getMinutes();
//     var seconds = currentDate.getSeconds();

//     // Format the date and time
//     var formattedDate = `${year}-${month}-${day}`;
//     var formattedTime = `${hours}:${minutes}:${seconds}`;

//     // Output the current date and time
//     console.log("Current Date:", formattedDate);
//     console.log("Current Time:", formattedTime);
// }