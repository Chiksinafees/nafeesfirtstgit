
// using CALL in a function
  
  let obj={name:"nafees"}
  function getdata(a,b,c)
    {
      return this.name+ " "+ a + b + c
    }
    console.log(getdata.call(obj,"ahmed",1,2))
 

  //using APPLY in a function
  
   let obj2={name:"iqbal"}
  function getdata1(a,b,c)
    {
       return this.name+ " "+ a+b+c;
    }
    let arr=["ahmed",1,2]
    console.log(getdata1.apply(obj2, arr))
  
  //using BIND in a function
  
  let obj3={name:"laiba"}
  function getdata3(a,b,c)
    {
       return this.name+" "+a+b+c
    }
    let d=getdata3.bind(obj3)
    console.log(d("jalis",5,7))
  
  //using CAll and BIND in student function
  
  let student={age:20}
  function printage()
   {
     return this.age 
   }
   let g=printage.bind(student)
   console.log(g())
  
  // using CURRYING in a function 
  
  function multiply(x,y)
    {
      console.log(x*y)
    }
    let multiplyByTwo=multiply.bind(this,5)
    multiplyByTwo(3)
  
  
  
  
  
  
  
  