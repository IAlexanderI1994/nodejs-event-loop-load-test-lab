const express = require('express');
const {runMonitoring} = require("./delay.util");
const app = express();
const port = 3000;


let num = 1
app.get('/factorial/:num', (req, res) => {

    num+= 40;
    const factorial = calculateFactorial(parseInt(req.params.num));

    res.send(`Fibonacci result: ${factorial}`);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

runMonitoring()

// Factorial calculation
 function calculateFactorial(n) {

    let result = BigInt(1);
    for (let i = BigInt(2); i <= BigInt(n); i++) {
        result *= i;
    }
    return result.toString();
}


setTimeout(() => {
    setInterval(() => {

        const factorial = calculateFactorial(num);

        console.log(num)

    }, 1000)
}, 30000)




