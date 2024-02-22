let countInterval;

function startCounter(){
    let number=parseInt(document.getElementById("number").value);

    if(isNaN(number)){
        alert("please enter a number");
        clearInterval(countInterval);
        return;
    }
    if(number<1||number>9){
        alert("Range out of bound");
        clearInterval(countInterval);
        return;
    }
    
    let currentNo=document.querySelector(".counter .current");
    let nextNo=document.querySelector(".counter .next");
    let count=0;
        
    resetNumbers(currentNo, nextNo);

    clearInterval(countInterval);


    countInterval= setInterval(function(){
        if(count===number){
            clearInterval(countInterval);
            alert("Counter has Stopped");
            return;
        }
        increaseCount(currentNo, nextNo);
        count++;
    },1000);

}

function resetNumbers(currentNo ,nextNo, end){
    currentNo.innerText=0;
    nextNo.innerText=1;
}

function increaseCount(currentNo, nextNo){
    nextNo.classList.add("animate");

    setTimeout(function(){
        currentNo.innerText=nextNo.innerText;
        nextNo.classList.remove("animate");
        nextNo.innerText=parseInt(nextNo.innerText)+1;
    },500);
}