"use strict";

console.log('working');

// **** My Own Promise
// const wait = (num) => {
//     return new Promise ((resolve) => {
//         setTimeout(()=> {
//             resolve("I love the song the Promise");
//         }, num);
//     })
// }
//
// wait(3000).then((data) => console.log('Has it already been three seconds? ' + data));
// wait(1000).then(() => console.log('You beat me by one second'));
// let random = Math.floor(Math.random()*5000);
// wait(random).then(() => console.log(`You'll see this after ${random / 1000} seconds!`))
//
//
// const wait1 = (numb) => {
//     return new Promise ((resolve) => {
//         setTimeout (() => {
//             resolve('yes it has!');
//         }, numb);
//     })
// }
// // const wait1(3000).then((data) => console.log('Has it been three seconds already?')

// justin's solution
// function wait(numMilliseconds){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, numMilliseconds)
//     });
// }
//
// // justin cleaning up the syntax
//
// function wait(numMilliseconds) {
//     return new Promise((resolve) =>{
//         setTimeout(resolve, numMilliseconds)
//     });
// }

fetch('https://swapi.dev/api/people/3').then(response => {
    return response.json();
}).then(data => {
    console.log(data);
    console.log(data.name);
});

// fetch('https://swapi.dev/api/people/1')
// .then(response => response.json())
// .then(console.log)
// .catch(console.log);

// fetch('https://swapi.dev/api/people/9').then(response => {
//     return response.json();
// }).then(data =>{
//     console.log(data.name);
// })

// fetch('http://hookb.in?K3RyG3md1lH0zzW3VPM!', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify ({
//         username:'bill',
//         password:'pass123'
//     })
// })
//     .then(res=> res.json())
//     .then(console.log)
//     .catch(console.log);


// function countSlow(count){
//     return new Promise (function(res){
//         setTimeout(function() {
//             console.log();
//
//         })
//     })
// }

// fetch ('https://api.github.com/events', {headers: {'Authorization': 'gitHub_API'}})
//     .then (res=>res.json())
//     .then(console.log)
// .catch(console.error);

// let DateOfLastCommit = username => {
//     let url = `https://api.github.com/users/${username}/events/public`
//     return fetch(url,{headers:{'Authorization':'gitHub_API'}})
//         .then(response => response.JSON())
//         .then(events=> events.filter(event =>event.type ==="PushEvent"))
//         .then(pushEvents =>
//             console.log(pushEvents[0].created_at));
//         }
//DateOfLastCommit("christianparker512");

// const wait = (time) => new Promise (resolve => setTimeout(() => {
//     resolve(`You will see this message after ${time} millisecond(s).`);
// }, time));
//
// wait(1200).then((message) => console.log(message));
//
// let getDateLastCommit = (username) => {
//     let url = `https://api.github.com/users/${username}/events/public` ;
//     return fetch(url, {headers: {'Authorization': `token ${gitHub_API}`}})
//         .then(response => response.json())
//         .then(events => events.filter(event => event.type === "PushEvent"))
//         .then(pushEvents => pushEvents[0].created_at)
//         .catch(err => console.error(`Something went wrong: ${err}`));
// }
//
//
//
// document.getElementById("lookitup").addEventListener("click", ()=>{
//
//     let username = document.getElementById("username").value;
//     getDateLastCommit(username)
//         .then(date => {
//             document.getElementById("output").innerText = date;
//         })
// }) 
