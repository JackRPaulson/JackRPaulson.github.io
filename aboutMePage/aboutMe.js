
// Attach the function to the onload event
window.addEventListener('load', onAboutMeOpen);

function onAboutMeOpen()
{
  document.title = "About Me";
  getime();
}


function getime()
{
    // Create a new Date object
    var currentDate = new Date();

    // Get the current date
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Months are zero-indexed, so we add 1
    var year = currentDate.getFullYear();

    // Get the current time
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();


    console.log(hours);
    // Format the date and time
    var formattedDate = `${year}-${month}-${day}`;
    var formattedTime = `${hours}:${minutes}:${seconds}`;

    // Output the current date and time
    // console.log("Current Date:", formattedDate);
    // console.log("Current Time:", formattedTime);

    var timeMessage;

    if (hours >= 0 && hours <= 4)
    {
        timeMessage = "good night";
    }
    else if (hours >= 4 && hours < 12)
    {
        timeMessage = "good morning";
    }
    else if (hours >= 12 && hours < 17)
    {
        timeMessage = "good afternoon"; 
    }
    else if (hours >= 17 && hours < 21)
    {
        timeMessage = "good evening";
    }
    else if (hours >=21)
    {
        timeMessage = "good night";
    }

    var welcomeMessage= document.getElementById("welcomeMessageID");
    welcomeMessage.innerHTML = "Welcome to my page! <br>I hope you are having a " + timeMessage + "!";
}