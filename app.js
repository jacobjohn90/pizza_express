const express = require('express');
const app = express();
const hbs = require('hbs')
app.set('view engine', 'hbs')

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.render('index',
        {
            data: 'Welcome to Pizza Express'
        })
})
app.get('/topping/:type', (req, res) => {
    res.render('toppings',
        {
            data: `${req.params.type} pizza! Good choice.`
        })
})
app.get('/order/:amount/:size', (req, res) => {
    res.render('order',
        {
            data: `Your order of ${req.params.amount} ${req.params.size} pizzas will be ready in 1 minute!`
        })
})




app.listen(PORT, () => {
    console.log("=========================")
    console.log(`LISTENING ON PORT ${PORT}`)
    console.log("=========================")
});