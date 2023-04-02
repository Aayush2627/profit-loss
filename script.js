const initial=document.querySelector("#initial-price");
const quantity=document.querySelector("#quantity");
const current=document.querySelector("#current-price");
const button=document.querySelector(".button");
const output=document.querySelector(".output");
button.addEventListener('click', clickHandler);
function clickHandler(){
    const initialPrice=parseInt(initial.value);
    const currentPrice=parseInt(current.value);
    const quantityValue=parseInt(quantity.value);
    if(initialPrice&&currentPrice&&quantityValue){
    const profitLoss=calculateProfitAndLoss(initialPrice,currentPrice,quantityValue);
    output.innerText=profitLoss;
    if(currentPrice>initialPrice){
        output.style.color='green'
    }else if(initialPrice>currentPrice){
        output.style.color='red';
    }
    else{
        output.style.color='gray';
    }
}else{
        output.innerText="Please Enter all values first!!"
    }
}
function calculateProfitAndLoss(cost ,sell,qty){
    if(cost>sell){
        const loss=(cost-sell)*qty;
        const lossPercent=(loss/(cost*qty))*100;
        console.log(cost, sell , loss,lossPercent);
        return `The Loss is ${loss} and the loss percentage is ${lossPercent.toFixed(2)}%`;
    }else if(sell>cost){
        const profit=(sell-cost)*qty;
        const profitPercent=(profit/(cost*qty))*100;
        return `The Profit is ${profit} and the profit percentage is ${profitPercent.toFixed(2)}%`;
    }else{
        return `Bro you are stuck`;
    }
    
}