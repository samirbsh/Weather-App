// Callbacks
// Asynchronous callback function
// setTimeout(() => {
//     console.log("2 Seconds are up!")
// },2000)

/**A callback function is a function called inside the other function. The callback function is passed as a 
 * argument to its parent function (with a intension to be called at some point of time).
 */

// Synchronous Callback Function

const names = ['Andrew', 'Jen', 'Jess']
const shortNames=names.filter((name)=>{
    return name.length <=4
})
        //Before
// const geocode=(address, callback)=>{
//     setTimeout(()=>{
//         const data ={
//             latitude:0,
//             longitude:0
//         }
//         return data;
//     },2000)
// }
        //After
const geocode=(address, callback)=>{
    setTimeout(()=>{
        const data ={
            latitude:0,
            longitude:0
        }
        callback(data)
    },2000)
}
console.log(geocode('Bharat',(data)=>{
    console.log(data)
}))

//Initially on making a delay the function is not returning anything.