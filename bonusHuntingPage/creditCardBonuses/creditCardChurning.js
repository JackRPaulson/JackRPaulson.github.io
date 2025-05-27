function getAndOpenCreditCardLinkInNewTab(cardName) 
{
  // holds links for cards. 
  const creditCardLinks = {
		// Cards I have referall links for
    ChaseFreedom: "https://www.referyourchasecard.com/18A/BTLGN8LZ1W",
		ChaseAmazonCard: "https://www.amazon.com/dp/BT00LN946S?externalReferenceId=42d266ea-6edf-4de9-965d-b2310af4a856",
		AMEXHiltonHonors: "https://americanexpress.com/en-us/referral/hilton-honors?ref=JACKPR8De&XL=MIMNS",
		AMEXHiltonSurpass: "https://americanexpress.com/en-us/referral/hilton-honors?ref=JACKPR8De&XL=MIMNS",
		AMEXGoldCard: "https://americanexpress.com/en-us/referral/gold-card?ref=JACKP4IxS&XL=MIMNS",
		AMEXPlatinumCard: "https://americanexpress.com/en-us/referral/platinum-card?ref=JACKP6ueVr&XL=MIMNS",
		AMEXBlueCashEveryday: "https://americanexpress.com/en-us/referral/blue-cash-everyday-credit-card?ref=JACKPSR7m&XL=MIMNS",
		DiscoverItChrome: "https://refer.discover.com/s/paulsjac000?advocate.partner_share_id=7305981829",
    // is a referall link but usually doesn't change. (Only shows on mobile)
		QatarAirways: "https://go.cardless.com/e/6au82xsKkMb",

    // Cards that I do not have referall links for but want to have the user
    // be able to click it and it take it to a page about the card. 
    // Won't ever need to update these links
    AAATravelCard: "https://www.nerdwallet.com/article/credit-cards/aaa-credit-card",
    CitiCustomCash: "https://www.citi.com/usc/LPACA/Citi/Cards/CustomCash/ps/index.html?cmp=knc|acquire|2006|CARDS|Google|BR&gclid=EAIaIQobChMI-pjhiqipigMVhTcIBR1qWSOVEAAYASAAEgK7pvD_BwE&gclsrc=aw.ds&ProspectID=PnCOpK25M12FDsQsgRq0oKPHmg2gOtiS",
    RobinhoodGoldCard: "https://robinhood.com/creditcard/",
	};

	const url = creditCardLinks[cardName];

	if (url) 
  {
	  window.open(url, '_blank');
	} 
  else 
  {
	  console.error("No matching link found for:", cardName);
	}
}

// Makes it so when the user clicks the card image it opens a referral links or link to get more info about cards
document.addEventListener("DOMContentLoaded", function () 
{
  const referralLinks = document.querySelectorAll(".referral-link");

  referralLinks.forEach(function (element) 
  {
    element.addEventListener("click", function (e) 
    {
      e.preventDefault();
      const cardName = element.dataset.card;
      getAndOpenCreditCardLinkInNewTab(cardName);
    });
  });
  

  const DiscoverItChromeImage = document.getElementById("DiscoverItChromeImage");
  const ChaseAmazonPrimeImage = document.getElementById("ChaseAmazonPrimeImage");
  const ChaseFreedomFlexImage = document.getElementById("ChaseFreedomFlexImage");
  const ChaseFreedomUnlimitedImage = document.getElementById("ChaseFreedomUnlimitedImage");
  const AMEXBCEImage = document.getElementById("AMEXBCEImage");
  const HiltonHonorsImage = document.getElementById("HiltonHonorsImage");
  const AMEXGoldImage = document.getElementById("AMEXGoldImage");
  const AAATravelImage = document.getElementById("AAATravelImage");
  const CitiCustomCashImage = document.getElementById("CitiCustomCashImage");
  const AMEXHiltonSurpassImage = document.getElementById("AMEXHiltonSurpassImage");
  const RobinhoodGoldCardImage = document.getElementById("RobinhoodGoldCardImage");

  DiscoverItChromeImage.addEventListener("click", function () 
  {
    getAndOpenCreditCardLinkInNewTab("DiscoverItChrome");
  });

  ChaseAmazonPrimeImage.addEventListener("click", function () 
  {
    getAndOpenCreditCardLinkInNewTab("ChaseAmazonCard");
  });

  ChaseFreedomFlexImage.addEventListener("click", function () 
  {
    getAndOpenCreditCardLinkInNewTab("ChaseFreedom");
  });

  ChaseFreedomUnlimitedImage.addEventListener("click", function () 
  {
    getAndOpenCreditCardLinkInNewTab("ChaseFreedom");
  });

  AMEXBCEImage.addEventListener("click", function () 
  {
    getAndOpenCreditCardLinkInNewTab("AMEXBlueCashEveryday");
  });

  HiltonHonorsImage.addEventListener("click", function () 
  {
    getAndOpenCreditCardLinkInNewTab("AMEXHiltonHonors");
  });

  AMEXGoldImage.addEventListener("click", function () 
  {
    getAndOpenCreditCardLinkInNewTab("AMEXGoldCard");
  });

  AAATravelImage.addEventListener("click", function () 
  {
    getAndOpenCreditCardLinkInNewTab("AAATravelCard");
  });

  CitiCustomCashImage.addEventListener("click", function () 
  {
    getAndOpenCreditCardLinkInNewTab("CitiCustomCash");
  });

  AMEXHiltonSurpassImage.addEventListener("click", function () 
  {
    getAndOpenCreditCardLinkInNewTab("AMEXHiltonSurpass");
  });

  RobinhoodGoldCardImage.addEventListener("click", function () 
  {
    getAndOpenCreditCardLinkInNewTab("RobinhoodGoldCard");
  });

  // document.getElementById("freedomReferralLink").addEventListener("click", function (e) 
  // {
  //   e.preventDefault();
  //   getAndOpenCreditCardLinkInNewTab("ChaseFreedom");
  // });
});

  // When the user clicks on the button, scroll to the top of the document
function topFunction() 
{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}