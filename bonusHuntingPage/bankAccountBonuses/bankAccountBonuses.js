document.addEventListener("DOMContentLoaded", function () {
    const chimeLogoImage = document.getElementById("chimeLogoImage");
    const PFCULogoImage = document.getElementById("PFCULogoImage");
    const profitableContentLogoImage = document.getElementById("profitableContentLogoImage");

    chimeLogoImage.addEventListener("click", function () 
    {
        const url = "https://chime.com/r/jackpaulson5?c=s";
        window.open(url, "_blank");
    });

    PFCULogoImage.addEventListener("click", function () 
    {
        const url = "https://birdeye.com/r/jackremingtonpa/23662566135";
        window.open(url, "_blank");
    });

    profitableContentLogoImage.addEventListener("click", function () 
    {
        const url = "https://www.profitablecontent.com/";
        window.open(url, "_blank");
    });
  });