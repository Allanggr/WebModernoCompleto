function teste1(num){
    if(num > 7)
     console.log(num)       
    
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7);{
        console.log(num)// cuidado com o ';' , não usar com estruturas de controle
    }    
}

teste2(6)
teste2(8)