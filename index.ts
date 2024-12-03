import inquirer from "inquirer";

 let Conversions = {
"PKR":{
    "US Dollar":0.0036,
    "Pound Sterling":0.0028,
    "Euro":0.0033,
    "Chinese Yuan":0.026,
    "PKR": 1
},
"Pound Sterling":{
    "US Dollar":1.29,
    "Euro":1.19,
    "PKR":358.32,
    "Chinese Yuan":9.32,
    "Pound Sterling":1
},
"Euro":{
    "US Dollar":1.09,
    "Pound Sterling":1.19,
    "PKR":302.18,
    "Chinese Yuan":7.87,
    "Euro":1
},
"US Dollar":{
    "Pound Sterling":0.78,
    "Euro":0.92,
    "PKR":278.50,
    "Chinese Yuan":7.25,
    "US Dollar":1
},
"Chinese Yuan":{
    "US Dollar":0.14,
    "Pound Sterling":0.11,
    "Euro":0.13,
    "PKR":38.39,
    "Chinese Yuan": 1
}
}
const answers:{
    from:"PKR"|"US Dollar"|"Pound Sterling"|"Euro"|"Chinese Yuan",
    to:"PKR"|"US Dollar"|"Pound Sterling"|"Euro"|"Chinese Yuan",
    amount:number
}=await inquirer.prompt([
    {
        type:"list",
        name:"from",
        choices:["PKR","US Dollar","Pound Sterling","Euro","Chinese Yuan"],
        message:"Select your Currency:"
    },
    {
        type:"list",
        name:"to",
        choices:["PKR","US Dollar","Pound Sterling","Euro","Chinese Yuan"],
        message:"Select your conversion Currency",
    },
    {
        type:"number",
        name:"amount",
        message:"Enter your conversion amount: "
    }
]);

const{from,to,amount}=answers;
if(from && to && amount){
    let result =Conversions[from][to]*amount
console.log(`Your conversion from ${from} to ${to} is ${result}`)
}else {
    console.log("Invalid inputs!")
};