var mashin ={
    name :"toyota",
    zoriulalt: "суудал",
    model:[
    {mashinNer: "prius10", on:"2000", ungu:"хар" 
    },
    {   mashinNer: "prius20", on:"2006", ungu:"цагаан"
    }
    ]
}
//document.getElementByld("jishee").innerHTML=mashin.name + 'зориулалт нь' + mashin.zoriulalt + 'загвар нь' 
+ mashin.model[0].+ 'үйлдвэрлэсэн он' + mashin.model[0].on + ' өнгө нь'+ mashin.model[0].ungu;
console.log(mashin.name + 'зориулалт нь' + mashin.zoriulalt + 'загвар нь' 
+ mashin.model[0].mashinNer + 'үйлдвэрлэсэн он' + mashin.model[0].on + ' өнгө нь'+ mashin.model[0].ungu);