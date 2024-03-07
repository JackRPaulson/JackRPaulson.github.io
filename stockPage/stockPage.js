// When the user clicks on the button, scroll to the top of the document
function topFunction() 
{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
  

function openLinkInNewTab(url) 
{
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

window.addEventListener('load', onStockPageOpen);

function onStockPageOpen()
{
  document.title = "Jack's Stock Portfolio";
  getYear();
}

function getYear()
{
  // Create a new Date object
  var currentDate = new Date();
  var year = currentDate.getFullYear();

  var yearPlus100 = year + 100;

  var updateYearInRow = document.getElementById("updateYearRow");
  updateYearInRow.innerHTML = "Durability is paramount in my analysis. I ask myself, \"If I were in a coma for 100 years, would this company still thrive?\" This naturally " 
  + "leads me towards strong brands with established consumer loyalty and enduring business models. Think of Starbucks' or McDonalds' enduring appeal. If I woke up in the year " + yearPlus100 
  + " I would be shocked if these companies were not still around paying dividends to their shareholders."
}