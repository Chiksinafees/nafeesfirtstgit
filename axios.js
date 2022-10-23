//AXIOS GLOBALS

axios.defaults.headers.common['X-Auth-Token']=
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'


// GET REQUEST

function getTodos() {
axios.get('https://jsonplaceholder.typicode.com/todos?_limit=6')
.then(res=>showOutput(res))
.catch(err=>console.error(err))
}


  // POST REQUEST
  function addTodo() {
    axios.post('https://jsonplaceholder.typicode.com/todos',{
        title: "nafees learn axios",
        completed: false
    })
    .then(res=>showOutput(res))
    .catch(err=>console.error(err))  
}

  
  // PUT/PATCH REQUEST
  function updateTodo() {
    axios.patch('https://jsonplaceholder.typicode.com/todos/3',{
        title: "nafees done axios",
        completed: true
    })
    .then(res=>showOutput(res))
    .catch(err=>console.error(err))  
  }

  
  // DELETE REQUEST
  function removeTodo() {
    axios.delete('https://jsonplaceholder.typicode.com/todos/3')
    .then(res=>showOutput(res))
    .catch(err=>console.error(err))    }
  

  // SIMULTANEOUS DATA
  function getData() {

    axios.all([axios.get('https://jsonplaceholder.typicode.com/todos'),
               axios.get('https://jsonplaceholder.typicode.com/posts')
         ])
    .then(axios.spread((todos,posts)=>showOutput(posts)))
    .catch(err=>console.error(err))    }
  

  // CUSTOM HEADERS
  function customHeaders() {
    const temp={
      headers:{ content:'application/json', authorization:'sometoken' }
  }

  axios.post('https://jsonplaceholder.typicode.com/todos',{

      title: "nafees learn axios",
      completed: false
  })
  .then(res=>showOutput(res))
  .catch(err=>console.error(err))   }
  

  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    const opt={
          method:'post',
          url:'https://jsonplaceholder.typicode.com/todos',
          data:{title:'Hello nafees'},
          transformResponse:axios.defaults.transformResponse.concat(data=>{
                     data.title= data.title.toUpperCase();
                     return data
                     })
              }
     axios(opt).then(res=>showOutput(res))
}
  

  // ERROR HANDLING
  function errorHandling() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=6')
    .then(res=>showOutput(res))
    .catch(err=>{
      if(err.response)
        {
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)

          if(err.response.status===404)
           {
             alert('error: page not found')
           }
        }
      else if(err.request)
       {
          console.error(err.request)
       } 
      else 
        console.error(err.message)
  })
}
  


  // CANCEL TOKEN
  function cancelToken() {
   const source= axios.cancelToken.source()

   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=6',{ 
    cancelToken: source.token
   })
   .then(res=>showOutput(res))
   .catch(thrown=>{
       if(axios.isCancel(thrown)){
        console.log('Request camcelled', thrown.message)
       }
   })
       if(true){
        source.cancel('Request cancelled !')
       }
  }

  
  // INTERCEPTING REQUESTS & RESPONSES
    axios.interceptors.request.use(
        temp=>{
            console.log(`${temp.method.toUpperCase()}request sent to ${temp.url}at ${new Date().getTime()}`)
            
            return temp
        },error=>{
            return Promise.reject(error)
        }
    )  


  // AXIOS INSTANCES
      const axiosInstance=axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com'
      })   
        axiosInstance.get('/comments').then(res=>showOutput(res))


  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  

  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document.getElementById('transform').addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);
  