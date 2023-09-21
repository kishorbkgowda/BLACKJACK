let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let p3 = document.querySelector('.p3');
let btns  = document.querySelectorAll('button');

let msg = "";

let firststart = false;
let hasblackjack = false;
let isalive = true;
let card1 = getrandomnumber();
let card2 = getrandomnumber();
let arr = [card1,card2];
let sum = card1 + card2;


function getrandomnumber()
{
    let random = Math.floor(Math.random()*10);
    return random;
}

let rendergame=()=>
{
            if(sum <= 20)
                {
                    msg = "Do you want to draw a new card?";
                }

            else if(sum === 21)
                {
                    msg = "You've got Blackjack!";
                    hasblackjack = true;
                }

            else
                {
                    msg = "You're out of the game!";
                    isalive = false;
                }
            p1.textContent = msg;
            p2.textContent = `${finalshow()}`;
            p3.textContent = `Sum : ${sum}`;

}


let startgame=()=>
{
    firststart = false;
    isalive = true;
    card1 = getrandomnumber();
    card2 = getrandomnumber();
    arr = [card1,card2];
    sum = card1 + card2;

    rendergame();
}


let finalshow=()=>
{
    let cardno = "";
    for(let i=0 ; i<arr.length;i++)
    {
         cardno = cardno + " " +arr[i];
         console.log(cardno);
    }
     return p2.textContent = `Cards : ${cardno}`;

    
}

btns.forEach(btn => 
    {
        btn.addEventListener('click',(e)=>
        {
           if(e.target.innerText == 'START GAME')
           {
              startgame();
              firststart = true;
           }
            

           
                if(e.target.innerText == 'NEW CARD' && firststart == true)
                {
                    if(isalive == true && hasblackjack === false)
                        {
                            let card3 = getrandomnumber();
                            arr.push(card3);
                            finalshow();
                            sum = sum + card3;
                            rendergame();
                        }
                    
                        else
                        {
                            alert("START FROM FIRST");
                            getrandomnumber();
                        }
                
                }
           
       
});

})