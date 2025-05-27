function getAndOpenBankBonusLinkInNewTab(bankName) 
{
    // holds links for bank bonuses. 
    const bankBonusLinks = {
        // bank bonuses I have referall links for
        PortlandFederalCreditUnionBonus: "https://birdeye.com/r/jackremingtonpa/23662566135",
        ChimeBonus: "https://www.chime.com/r/jackpaulson5/?c=s",
    };

    const url = bankBonusLinks[bankName];

    if (url) 
    {
        window.open(url, '_blank');
    } 
    else 
    {
        console.error("No matching link found for:", bankName);
    }
}

document.addEventListener("DOMContentLoaded", function () 
{
    // document.addEventListener("DOMContentLoaded", function () {
    const referralLinks = document.querySelectorAll(".referral-link");

    referralLinks.forEach(function (element) 
    {
      element.addEventListener("click", function (e) {
        e.preventDefault();
        const bankName = element.dataset.card;
        getAndOpenBankBonusLinkInNewTab(bankName);
      });
    });

    const chimeLogoImage = document.getElementById("chimeLogoImage");
    const PFCULogoImage = document.getElementById("PFCULogoImage");
    const profitableContentLogoImage = document.getElementById("profitableContentLogoImage");

    chimeLogoImage.addEventListener("click", function () 
    {
        getAndOpenBankBonusLinkInNewTab("ChimeBonus");
    });

    PFCULogoImage.addEventListener("click", function () 
    {
        getAndOpenBankBonusLinkInNewTab("PortlandFederalCreditUnionBonus");
    });

    profitableContentLogoImage.addEventListener("click", function () 
    {
        const url = "https://www.profitablecontent.com/";
        window.open(url, "_blank");
    });
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() 
{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}