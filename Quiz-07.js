let b="Twitter"
const students=["Vivek","Rahul"]

students.forEach(function (element){
    console.log(element.name," uses ",this.b)
 },{b:"LinkedIn"})
 
 1)"Vivek uses Twitter"  2)"Vivek uses LinkedIn"
   "Rahul uses Twitter"    "Rahul uses LinkedIn"