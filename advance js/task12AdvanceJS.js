// using a class
class student
{
  static count=0
   constructor(name,age,Pnumber,boardmarks )
    {
      this.name=name
      this.age=age
      this.Pnumber=Pnumber
      this.boardmarks=boardmarks
      student.count++
    }
  totalcount()
   {
      console.log(student.count)
   }
   
 egligibleForPlacements(minAge)
  {
    console.log(this)
 
     return (minMarks)=>
     {
       //console.log(`egligible for this company`,this)
       if(minMarks < this.boardmarks && minAge < this.age)
         {
           console.log(this.name+ ' is egligible for placement')
         }
       else
           console.log(this.name+ ' is not egligible for placement')
     }
  }
}


const stud1= new student("nafees",23,7008,50)
stud1.egligibleForPlacements(18)(40)


const stud2= new student("iqbal",19,7007,40)
stud2.egligibleForPlacements(18)(40)    

const stud3= new student("nofi",21,7006,90)
stud3.egligibleForPlacements(18)(40)    

const stud4= new student("danish",24,7005,35)
stud4.egligibleForPlacements(18)(40)    

const stud5= new student("aashu",27,7004,70)
stud5.egligibleForPlacements(18)(40)    


stud5.totalcount() 

