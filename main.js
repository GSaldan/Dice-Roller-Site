// List of possible dice
const diceValues = [4, 6, 8, 10, 12, 20, 100]

// Define the number of dice
const numDice = 9;

// Loop through each dice and set up event listeners
for (let i = 1; i <= numDice; i++) {
    const currentDice = document.querySelector('.dice' + i);
    let currentValueIndex = 0; // Start from the first item on the list
    const diceText = currentDice.querySelector('.dicespan');
    const buttonPlus = currentDice.querySelector('.plus');
    const buttonMinus = currentDice.querySelector('.minus');
    const rollButton = currentDice.querySelector('.roll');
    const resultSpan = currentDice.querySelector('.result');

    // Update the text content of the dice span
    diceText.textContent = "D" + diceValues[currentValueIndex]

    // Add event listeners for plus and minus buttons
    buttonPlus.addEventListener("click", function() {
        // Increment the value of the current dice and update the span text
        currentValueIndex++;


        // If currentValueIndex exceeds the length of the list, reset it to 0
        if (currentValueIndex >= diceValues.length) {
            currentValueIndex = 0;
        }
        // Update the displayed value based on the current index in the list
        diceText.textContent = "D" + diceValues[currentValueIndex];
    });

    buttonMinus.addEventListener("click", function() {
        currentValueIndex--;    

        // If currentValueIndex becomes negative, set it to the last index of the list
        if (currentValueIndex < 0) {
            currentValueIndex = diceValues.length - 1;
        }
        // Update the displayed value based on the current index in the list
        diceText.textContent = "D" + diceValues[currentValueIndex];
    });

    // Add event listener for roll button
    rollButton.addEventListener("click", function() {
        // Generate a random number based on the current dice value
        const result = Math.floor(Math.random() * diceValues[currentValueIndex]) + 1;
        // Display the result
        resultSpan.textContent = result;
        // Move the dice value to the top of the grid
        diceText.style.position = "absolute";
        diceText.style.top = "10%";
        diceText.style.left = "50%";
        diceText.style.transform = "translate(-50%, -50%)";
    });

    // Function to update the displayed value based on the index
    function updateValue(change) {
        currentValueIndex += change;
        if (currentValueIndex < 0) {
            currentValueIndex = diceValues.length - 1;
        } else if (currentValueIndex >= diceValues.length) {
            currentValueIndex = 0;
        }
        diceText.textContent = "D" + diceValues[currentValueIndex];
    }
}