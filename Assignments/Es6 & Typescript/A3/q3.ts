interface Printable{
    printAll(Object)
  }
  class Circle implements Printable{
      printAll(Object) {
          console.log('Priniting the Circle'+Object)
      }
      
  }
  class Employee implements Printable{
      printAll(Object){
         console.log('Employee: '+Object)
      }
  }
  let e  = new Employee()
  e.printAll('Tommy')