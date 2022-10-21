/*
// USING PROMISE

const posts=[{title:'post 1',bodyy:'this is post one',createdAt:new Date().getTime()},
   {title:'postst 2',bodyy:'this is post two',createdAt:new Date().getTime()}]

  function getpost()
   {
       setTimeout(() =>{
       let output=''
       for(let i=0; i<posts.length; i++)
         {
          output+=`<li>${posts[i].title}-last updated ${Math.floor((new Date().getTime()-posts[i].createdAt)/1000)} sec ago </li>`
         }
       document.body.innerHTML=output
       }, 1000)
   }


  function createpost(post){
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
            posts.push({...post,createdAt:new Date().getTime()})

            const error=false
            if(!error){
                resolve()
            }
            else{
                reject('error: something went wrong')
            }
        }, 2000)
      })
    }

    function create4post(post){
      return new Promise((resolve,reject)=>{
          setTimeout( ()=>{
              posts.push({...post,createdAt:new Date().getTime()})
  
              const error=false
              if(!error){
                  resolve()
              }
              else{
                  reject('error: something went wrong')
              }
          }, 3000)
        })
      }


    function deletePost() {
     return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
              if(posts.length>0)
              {
                resolve(posts.pop())
              }
              else{
                reject('error: array is empty')
              }
        }, 1000)
      })
    }
    

  createpost({title:'post 3',bodyy:'this is post three'}).then(()=>{}).catch()
     
 
  create4post({title:'post 4',bodyy:'this is post four'}).then(()=>{
    getpost()
    deletePost().then(()=>{
      getpost()
      deletePost().then(()=>{
          getpost()
          deletePost().then(()=>{
             getpost()
             deletePost().then(()=>{
               getpost()
               deletePost().then(()=>{}).catch((run)=>{ console.log(run) })
        }).catch((run)=>{})
      }).catch((run)=>{})
    })
  })
  }).catch(()=>{console.log("arr is empty") })
  */

// USING PROMISE.ALL

//const posts=[{title:'post 1',bodyy:'this is post one',createdAt:new Date().getTime()},
  //      {title:'post 2',bodyy:'this is post two',createdAt:new Date().getTime()}]

   function getpost()
   {
       setTimeout(() =>{
       let output=''
       for(let i=0; i<posts.length; i++)
         {
          output+=`<li>${posts[i].title}-last updated ${Math.floor((new Date().getTime()-posts[i].createdAt)/1000)} sec ago </li>`
         }
       document.body.innerHTML=output
       }, 1000)
   }


  function createpost(post){
    console.log('before creating post',posts,new Date().getTime())
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt:new Date().getTime()})
            
            const error=false
            if(!error){
                resolve("user last activity time")
            }
            else{
                reject('error: something went wrong')
            }
        }, 2000)
      })
      
    }
  
    function deletePost() {
      return new Promise((resolve,reject)=>{
         setTimeout( ()=>{
               if(posts.length>0)
               {
                 resolve(posts.pop())
               }
               else{
                 reject('error: array is empty')
               }
         }, 1000)
       })
     }


    const user={ username:"nafees",lastactive:new Date().getTime()}

     function updateLastUserActivityTime(){
      
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          user.lastactive=new Date().getTime()
          resolve(user.lastactive)
        }, 1000)
      })
    }
    

    
    //function userUpdatePost(){
       Promise.all([ createpost({title: "post 3", bodyy:"post three"}),updateLastUserActivityTime()])
      .then(([createpostdata,updateLastUserActivityTimedata])=>{
        console.log(createpostdata,updateLastUserActivityTimedata)
        console.log(posts,)
      }).then(()=>{
        deletePost()
      }).catch(err=>console.log(err))
   // }
    