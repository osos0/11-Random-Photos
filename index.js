const contanerEl = document.querySelector(".contaner");
const btnEl = document.querySelector(".btn");

// console.log(btnEl);



btnEl.addEventListener("click",() =>{

    for(let i = 0;i<10;i++){
const ranNumEl = Math.floor(Math.random()*2000);
    const imgEl = document.createElement("img");
    imgEl.src=`https://picsum.photos/200/300?random=${ranNumEl}`;
    contanerEl.appendChild(imgEl);
    }
    
});
