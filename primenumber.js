function prime(){
    let num=9
    for(let i=2;i<=num;i++){
    if(num%i==0){
      
      break;
      
    }else if(i==num){
        console.log('Number is prime');
        
    }else{
        console.log('number  is not prime');
        
    }
}
}

prime()