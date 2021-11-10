// const express = require('express')
// const app = express()

// app.get('/',(req,res)=>{
//     res.send('Hannah Montanna')
// })


// const server =app.listen(3000, ()=>console.log('Test'))
// process.on("SIGTERM",()=>{
//     server.close(()=>{
//         console.log('Service is terminating')
//     })
// })


// const oranges = ['orange', 'orange']
// const apples = ['just one apple']
// oranges.forEach(fruit => {
//   console.count(fruit)
// })
// apples.forEach(fruit => {
//   console.count(fruit)
// })

// console.countReset('orange')

// oranges.forEach(fruit => {
//   console.count(fruit)
// })

// const readline = require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// readline.question('What is your name?', name =>{
//     console.log(`Hi ${name}`)
//     readline.close()

// })

// const inquirer = require('inquirer')

// var questions = [
//     {
//         type:"input",
//         name:"name",
//         message:"What is your name?"
//     }
// ]

// inquirer.prompt(questions).then(answers=>{
//     console.log(`Hi ${answers['name']}!`)
// })

// const EventEmitter = require('events')
// // event Emitter object initialized
// const eventEmitter = new EventEmitter()
// // emit is used to trigger the event
// // on is used to call a callback function that is going to be triggered when the event is triggered

// eventEmitter.on('start', (start,end)=>{
//     console.log(`started from ${start} to ${end}` )
// })

// eventEmitter.emit('start',1,100)


// const http =  require('http')
// const port = process.env.PORT || 3000

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200
//     res.setHeader('Content-Type','text/html')
//     res.end('<h1>Hello World</h1>')
// })

// server.listen(port,()=>{
//     console.log(`Server is listening at Port ${port}`)
// })

// Get request

// const https =require('https')
// const options={
//     hostname: 'example.com',
//     port: 443,
//     path:'/todos',
//     method: 'GET'
// }

// const req = https.request(options, res=>{
//     console.log(`statuscode: ${res.statusCode}`)
//     res.on('data', d=>{
//         process.stdout.write(d)
//     })
// })


// req.on('error', error=>{
//     console.error(error)
// })

// req.end()




