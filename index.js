let playerobj = 
 {
     name : "SPICY",
     chips : 200
}

let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let p3 = document.querySelector('.p3');
let p4 = document.querySelector('.p4');
let btns  = document.querySelectorAll('button');

let msg = "";
let firststart = false;
let hasblackjack = false;
let isalive = false;


let card1 = getrandomnumber();
let card2 = getrandomnumber();

function getrandomnumber()
{
    let random = Math.floor(Math.random()*10);
    return random;
}


let arr = [card1,card2];
let sum = card1 + card2;

p4.textContent = playerobj.name +" : "+playerobj.chips+"$";

btns.forEach(btn => 
    {
        btn.addEventListener('click',(e)=>
        {
           if(e.target.innerText == 'START GAME')
           {
              startgame();
           }
            

           
                if(e.target.innerText == 'NEW CARD' )
                {
                    if(isalive === true && hasblackjack === false)
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


let startgame=()=>
{
    firststart = false;
    isalive = true;
    hasblackjack = false;
    card1 = getrandomnumber();
    card2 = getrandomnumber();
    arr = [card1,card2];
    sum = card1 + card2;

    rendergame();
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
                    playerobj.chips = playerobj.chips + 100;
                    p4.textContent = playerobj.name +" : "+playerobj.chips+"$";
                }

            else
                {
                    msg = "You're out of the game!";
                    isalive = false;
                    playerobj.chips = playerobj.chips - 100;
                    p4.textContent = playerobj.name +" : "+playerobj.chips+"$";

                }
            p1.textContent = msg;
            p2.textContent = `${finalshow()}`;
            p3.textContent = `Sum : ${sum}`;
            
          
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
