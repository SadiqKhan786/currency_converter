#! usr/bin/env node

import inquirer from "inquirer"

const currency: any = {
    USD: 1,
    EUR: 1.08,
    GBP: 1.26,
    INR: 83.32,
    PKR: 278
}

let user_ans = await inquirer.prompt([
    {
    name: "from",
    message: "enter your from currency",
    type: "list",
    choices: ["USD","EUR","GBP","INR","PKR"]
},
{
    name: "to",
    message: "enter desired currency",
    type: "list",
    choices: ["USD","EUR","GBP","INR","PKR"]
},
{
    name: "amount",
    message: "enter your amount",
    type: "number"
}
])

let fromAmount = currency[user_ans.from]
let toAmount = currency[user_ans.to]
let amount = user_ans.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount

console.log(`your converted amount is ${convertedAmount}`)