const massiv = [ 3, 6, 5, 3 ,5, 5, 4, 5 ,4 , 3 , 2 , 3 , 6 , 4 ]
let max = 0
let min = massiv[0]

    for(i=0;i<massiv.length;i++){
        if(massiv[i]>max){
            max = massiv[i]
        }
        if(massiv[i]<min){
            min = massiv [i]
        }
    }console.log(max - min); 
