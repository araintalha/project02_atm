import inquirer from "inquirer";
async function startAtmconversation() {
    console.log("Welcome to bank alfalah");
    const userInput = await inquirer.prompt([
        {
            type: "number",
            name: "userId",
            message: "Enter Your userId:"
        },
        {
            type: "password",
            name: "pin",
            message: "Enter Your Pin:"
        },
        {
            type: "list",
            name: "accountType",
            choices: ["Current account", "Saving account"],
            message: "Select your account type"
        },
        {
            type: "list",
            name: "transactionType",
            choices: ["Withdrawl", "Fast cash", "Balance Inquiry"],
            message: "Select Your transactionType"
        },
        {
            type: "number",
            name: "amount",
            message: "Enter Amount:",
            when(userInput) {
                return userInput.transactionType == "Withdrawl";
            }
        },
        {
            type: "list",
            name: "amount",
            message: "Select Amount",
            choice: ["500", "1000", "2000", "3000", "5000", "10000"],
            when(userInput) {
                return userInput.transactionType == "Fast cash";
            }
        }
    ]);
    if (userInput.userId && userInput.pin) {
        const Balance = Math.floor(Math.random() * 100000);
        const enteredamount = userInput.amount;
        if (enteredamount <= Balance) {
            const remaining = Balance - enteredamount;
            console.log(`${enteredamount} is credited from your account \n your remaining balance is: PKR ${remaining}`);
        }
        else {
            console.log("Insufficient Balance please enter correct amount");
        }
    }
}
startAtmconversation();
