
const posts=[{title:'post 1',body:'this is post one',createdAt:new Date().getTime() },
  {title:'post 2',body:'this is post two',createdAt:new Date().getTime() }]
  
let lastEditedInSecondsAgo  =0
  function getpost(){
    clearInterval(lastEditedInSecondsAgo )  
    lastEditedInSecondsAgo  =setInterval(()=>{
      let output=''
      for(let i=0; i<posts.length; i++)
        {
          output+=`<li>${posts[i].title}-created At ${(new Date().getTime()-posts[i].createdAt)/1000} sec ago </li>`
        }
        console.log('timer running id=',lastEditedInSecondsAgo  )
   document.body.innerHTML=output
    }, 1000);
  }


  function createpost(post,callback){
    setTimeout( ()=>{
        posts.push({...post,createdAt:new Date().getTime()})
        callback()
    }, 2000)
  }

  function create4thPost(post,callback){
    setTimeout( ()=>{
        posts.push({...post,createdAt:new Date().getTime()})
        callback()
    }, 3000)
  }

  createpost({title:'post 3',body:'this is post three'},getpost)
  create4thPost({title:'post 4',body:'this is post four'},createpost)