class Fibonacci{
    private previousNo;
    private currentNo;
    next(previousNo,currentNo){
        console.log(previousNo+currentNo);
    }
}
let f=new Fibonacci();
f.next(8,13);