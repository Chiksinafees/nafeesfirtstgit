/*
// 1 (using promise)

const p1=console.log("p1 given ticket")
const p2=console.log("p2 given ticket")

const gfBringTickets= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("tickets")
    }, 2000)
})

const getpopcorn= gfBringTickets.then((t)=>{
    console.log('boy: now we can go movie?')
    console.log('girl: no first popcorn then movie?')
    return new Promise((resolve,reject)=>resolve(`ok wait with ${t}, i get you`))
})

const girlCall=getpopcorn.then((t)=>{
    console.log('girl: i want cheese popcorn')
    return new Promise((resolve,reject)=>resolve(`${t} cheese popcorn`))
})

girlCall.then((t)=>console.log(t))
console.log("p4 given ticket") 
                                                                          */



// 2 (using async await + promise)
/*
const p1=console.log("p1 given ticket")
const p2=console.log("p2 given ticket")

const beforeMovie= async()=> {
    const gfBringTickets= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("ticketsss")
        }, 2000)
    })
    const getpopcorn= new Promise((resolve,reject)=>resolve(`popcorn :)`))
    const girlCall= new Promise((resolve,reject)=>resolve(`cheeseee popcornnnnn`))
    const getColdDrinks = new Promise((resolve,reject)=>resolve(`here is ur coldrink`))
    
    let ticket= await gfBringTickets
    
    console.log(`nafees:here she is wth ${ticket} ,now we can go movie?`)
    console.log('nofi: no first popcorn then movie?')

    let pop=await getpopcorn
     
    console.log(`nofi: i want cheese ${pop}`)

    let cheese= await girlCall

    console.log(`nafees:take ur ${cheese} `)
     
    let cold= await getColdDrinks
    console.log(`nafees: ${cold} `)
    console.log('nofi: lets go we are getting late')
    console.log('nafees:thank you for the reminder *grins*')
    return ticket
}
beforeMovie().then((x)=>console.log(`p3: shows ${x}`))
const p4=console.log('p4 given ticket')
                                                                               */


// 3 (using Async Await + Prmoise.all)
/*
const p1=console.log("p1 given ticket")
const p2=console.log("p2 given ticket")

const beforeMovie= async()=> {
    const gfBringTickets= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("ticketsss")
        }, 2000)
    })
    const getpopcorn= new Promise((resolve,reject)=>resolve(`popcorn :)`))
    const getCandy= new Promise((resolve,reject)=>resolve(`lolipop`))
    const getColdDrinks = new Promise((resolve,reject)=>resolve(`ur coldrink`))
   
    let ticket= await gfBringTickets
    
    let [pop,cold,candy]= await Promise.all([getpopcorn,getColdDrinks,getCandy])

//console.log(`${pop},${cold},${candy}`)
    console.log(`nafees:here she is wth ${ticket} ,now we can go movie?`)
    console.log('nofi: no first popcorn then movie?')     
    console.log(`nofi: i want cheese ${pop}`)
    console.log(`nafees:take ur ${candy} `)
    console.log(`nafees: ${cold} `)
    console.log('nofi: lets go we are getting late')
    console.log('nafees:thank you for the reminder *grins*')
    return ticket
}
beforeMovie().then((x)=>console.log(`p3: shows ${x}`))

const p4=console.log('p4 given ticket')
                                                                           */



// 4 (CREATEPOST,DELETEPOST => into ASYNC AWAIT)
const posts=[{title:'post 1',bodyy:'post one',createdAt:new Date().getTime()},
         {title:'post 2',bodyy:'post two',createdAt:new Date().getTime()}]

const create=async(post)=> {

const createpost= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt:new Date().getTime()})
            const error=false
            if(!error){
                resolve("called createPost")
            }
            else{
                reject('error: something went wrong')
            }
        }, 1000)
      })

      let deletePost= new Promise((resolve,reject)=>{
        setTimeout( ()=>{
              if(posts.length>0)
              {
                resolve(posts.pop())
              }
              else{
                reject('error: array is empty')
              }
        }, 2000)
      }) 

      let [cre,del]= await Promise.all([createpost,deletePost]).then(console.log(posts))
               console.log(`${cre},${new Date().getTime()}`)
    }
   create().then(console.log(posts))
    


   
