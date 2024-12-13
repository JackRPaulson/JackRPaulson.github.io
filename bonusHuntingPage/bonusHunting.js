document.addEventListener("DOMContentLoaded", function () {
    const fallingMoneyContainer = document.querySelector(".falling-money");
    const dollarImage = document.querySelector(".image-container img");
    const backButton = document.querySelector(".back-button"); // Reference to the back button
    let interval = null;

    // Function to generate falling money (global on page load)
    function createFallingMoney() {
        for (let i = 0; i < 30; i++) { // Increase the number of dollar signs per batch
            const money = document.createElement("div");
            money.classList.add("money");

            // Use either a dollar sign or a money image
            money.innerHTML = "$"; // Dollar sign text
            money.style.left = Math.random() * 100 + "vw"; // Random horizontal position
            money.style.animationDelay = Math.random() * 5 + "s"; // Stagger the animations
            money.style.fontSize = Math.random() * 20 + 20 + "px"; // Random sizes

            fallingMoneyContainer.appendChild(money);

            // Remove money after animation to save memory
            money.addEventListener("animationend", () => money.remove());
        }
    }

    // Function to start the global falling money
    function startMainFallingMoney() {
        if (interval) {
            clearInterval(interval);
        }

        interval = setInterval(createFallingMoney, 1000); // Generate money every second

        // Stop the animation after 10 seconds
        setTimeout(() => {
            clearInterval(interval); // Stop generating new money
        }, 10000); // Stop after 10 seconds
    }

    // Start the global falling money on page load
    startMainFallingMoney();

    // Restart the main animation when the image is clicked
    dollarImage.addEventListener("click", startMainFallingMoney);

    // Function to generate falling money under a button (hover-triggered)
    function createFallingMoneyUnderButton(button) {
        const fallingMoneyContainer = document.createElement("div");
        fallingMoneyContainer.classList.add("falling-money-under-button");
        button.appendChild(fallingMoneyContainer);

        for (let i = 0; i < 100; i++) { // Increase the number of dollar signs per batch
            const money = document.createElement("div");
            money.classList.add("money-under-button");

            // Use either a dollar sign or a money image
            money.innerHTML = "$"; // Dollar sign text
            money.style.left = Math.random() * 100 + "vw"; // Random horizontal position
            money.style.animationDelay = Math.random() * 5 + "s"; // Stagger the animations
            money.style.fontSize = Math.random() * 20 + 20 + "px"; // Random sizes

            fallingMoneyContainer.appendChild(money);

            // Remove money after animation to save memory
            money.addEventListener("animationend", () => money.remove());
        }
    }

    // Function to remove falling money under the button when hover ends
    function removeFallingMoneyUnderButton(fallingMoneyContainer) {
        fallingMoneyContainer.remove(); // Remove the container and all its content
    }

    // Function to start the hover-triggered animation for buttons
    function startFallingMoneyOnHover(button) {
        button.addEventListener("mouseenter", function () {
            createFallingMoneyUnderButton(button); // Create money when hovering
        });

        button.addEventListener("mouseleave", function () {
            const fallingMoneyContainer = button.querySelector(".falling-money-under-button");
            if (fallingMoneyContainer) {
                removeFallingMoneyUnderButton(fallingMoneyContainer); // Remove money when hover ends
            }
        });
    }

    // Start falling money animation on hover for each button
    const buttons = document.querySelectorAll(".button-container button");
    buttons.forEach((button) => startFallingMoneyOnHover(button));

    // // Function to generate falling money under the back button (hover-triggered)
    // function createFallingMoneyUnderBackButton(button) {
    //     const fallingMoneyContainer = document.createElement("div");
    //     fallingMoneyContainer.classList.add("falling-money-under-back-button");
    //     button.appendChild(fallingMoneyContainer);

    //     for (let i = 0; i < 100; i++) { // Increase the number of dollar signs per batch
    //         const money = document.createElement("div");
    //         money.classList.add("money-under-back-button");

    //         // Use either a dollar sign or a money image
    //         money.innerHTML = "$"; // Dollar sign text
    //         money.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    //         money.style.animationDelay = Math.random() * 5 + "s"; // Stagger the animations
    //         money.style.fontSize = Math.random() * 20 + 20 + "px"; // Random sizes

    //         fallingMoneyContainer.appendChild(money);

    //         // Remove money after animation to save memory
    //         money.addEventListener("animationend", () => money.remove());
    //     }
    // }

    // Function to remove falling money under the back button (when hover ends)
    // function removeFallingMoneyUnderBackButton(fallingMoneyContainer) {
    //     fallingMoneyContainer.remove(); // Remove the container and all its content
    // }

    // // Function to make the $$ disappear 30% down the page
    // function handleBackButtonHover(button) {
    //     button.addEventListener("mouseenter", function () {
    //         createFallingMoneyUnderBackButton(button); // Create money when hovering

    //         const fallingMoneyContainer = button.querySelector(".falling-money-under-back-button");

    //         // Make $$ disappear after 30% of the page height
    //         setTimeout(() => {
    //             removeFallingMoneyUnderBackButton(fallingMoneyContainer);
    //         }, window.innerHeight * 0.3); // 30% of the page height
    //     });

    //     button.addEventListener("mouseleave", function () {
    //         const fallingMoneyContainer = button.querySelector(".falling-money-under-back-button");
    //         if (fallingMoneyContainer) {
    //             removeFallingMoneyUnderBackButton(fallingMoneyContainer); // Remove money when hover ends
    //         }
    //     });
    // }

    // // Start falling money animation on hover for the back button
    // if (backButton) {
    //     handleBackButtonHover(backButton);
    // }
});
