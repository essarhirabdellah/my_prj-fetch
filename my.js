let arr =[1,2,3,5,6,7,8]
function counting(arr,times) {
    let len = 0
    for (let i = 0; i < times; i++) {
      len++ 
      if (len > arr.length) {
        len = 0
      } 
     
    }
    
    console.log(arr[len])
}
counting(arr,11)