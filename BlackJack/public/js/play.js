// https://www.youtube.com/watch?v=zKkYTcRhRiE
// https://www.youtube.com/watch?v=Wp9x5cwnzDM&list=PLiXnnBSNPDOcPxTnGmtiyW1mlnF0Unmh1&index=14

let createFishka1 = ()=>{
	let div = document.createElement('div');
	div.className = 'text-center blue1';
	div.id = 'b1';
	div.innerHTML = '1';
	let bet = document.getElementById('bet').innerHTML;
	let cash = document.getElementById('cash').innerHTML;
	bet -= 1;
	cashNew = 1 + parseInt(cash);
	document.getElementById('bet').innerHTML = bet;
	document.getElementById('cash').innerHTML = cashNew;
	let parentElem = document.body;
	parentElem.appendChild(div);
}

let createFishka5 = ()=>{
	let div = document.createElement('div');
	div.className = 'text-center blue5';
	div.id = 'b5';
	div.innerHTML = '5';
	let bet = document.getElementById('bet').innerHTML;
	let cash = document.getElementById('cash').innerHTML;
	bet -= 5;
	cashNew = 5 + parseInt(cash);
	document.getElementById('bet').innerHTML = bet;
	document.getElementById('cash').innerHTML = cashNew;
	let parentElem = document.body;
	parentElem.appendChild(div);
}

let createFishka25 = ()=>{
	let div = document.createElement('div');
	div.className = 'text-center yellow25';
	div.id = 'y25';
	div.innerHTML = '25';
	let bet = document.getElementById('bet').innerHTML;
	let cash = document.getElementById('cash').innerHTML;
	bet -= 25;
	cashNew = 25 + parseInt(cash);
	document.getElementById('bet').innerHTML = bet;
	document.getElementById('cash').innerHTML = cashNew;
	let parentElem = document.body;
	parentElem.appendChild(div);
}

let createFishka50 = ()=>{
	let div = document.createElement('div');
	div.className = 'text-center yellow50';
	div.id = 'y50';
	div.innerHTML = '50';
	let bet = document.getElementById('bet').innerHTML;
	let cash = document.getElementById('cash').innerHTML;
	bet -= 50;
	cashNew = 50 + parseInt(cash);
	document.getElementById('bet').innerHTML = bet;
	document.getElementById('cash').innerHTML = cashNew;
	let parentElem = document.body;
	parentElem.appendChild(div);
}

let createFishka100 = ()=>{
	let div = document.createElement('div');
	div.className = 'text-center red100';
	div.id = 'r100';
	div.innerHTML = '100';
	let bet = document.getElementById('bet').innerHTML;
	let cash = document.getElementById('cash').innerHTML;
	bet -= 100;
	cashNew = 100 + parseInt(cash);
	document.getElementById('bet').innerHTML = bet;
	document.getElementById('cash').innerHTML = cashNew;
	let parentElem = document.body;
	parentElem.appendChild(div);
}

let createFishka200 = ()=>{
	let div = document.createElement('div');
	div.className = 'text-center red200';
	div.id = 'r200';
	div.innerHTML = '200';
	let bet = document.getElementById('bet').innerHTML;
	let cash = document.getElementById('cash').innerHTML;
	bet -= 200;
	cashNew = 200 + parseInt(cash);
	document.getElementById('bet').innerHTML = bet;
	document.getElementById('cash').innerHTML = cashNew;
	let parentElem = document.body;
	parentElem.appendChild(div);
}


function card(name,suit,value) {
		this.name = name;
		this.suit = suit;
		this.value = value;
	}

const deck = [
		new card('Ace', 'Hearts',11),
		new card('Two', 'Hearts',2),
		new card('Three', 'Hearts',3),
		new card('Four', 'Hearts',4),
		new card('Five', 'Hearts',5),
		new card('Six', 'Hearts',6),
		new card('Seven', 'Hearts',7),
		new card('Eight', 'Hearts',8),
		new card('Nine', 'Hearts',9),
		new card('Ten', 'Hearts',10),
		new card('Jack', 'Hearts',10),
		new card('Queen', 'Hearts',10),
		new card('King', 'Hearts',10),
		new card('Ace', 'Diamonds',11),
		new card('Two', 'Diamonds',2),
		new card('Three', 'Diamonds',3),
		new card('Four', 'Diamonds',4),
		new card('Five', 'Diamonds',5),
		new card('Six', 'Diamonds',6),
		new card('Seven', 'Diamonds',7),
		new card('Eight', 'Diamonds',8),
		new card('Nine', 'Diamonds',9),
		new card('Ten', 'Diamonds',10),
		new card('Jack', 'Diamonds',10),
		new card('Queen', 'Diamonds',10),
		new card('King', 'Diamonds',10),
		new card('Ace', 'Clubs',11),
		new card('Two', 'Clubs',2),
		new card('Three', 'Clubs',3),
		new card('Four', 'Clubs',4),
		new card('Five', 'Clubs',5),
		new card('Six', 'Clubs',6),
		new card('Seven', 'Clubs',7),
		new card('Eight', 'Clubs',8),
		new card('Nine', 'Clubs',9),
		new card('Ten', 'Clubs',10),
		new card('Jack', 'Clubs',10),
		new card('Queen', 'Clubs',10),
		new card('King', 'Clubs',10),
		new card('Ace', 'Spades',11),
		new card('Two', 'Spades',2),
		new card('Three', 'Spades',3),
		new card('Four', 'Spades',4),
		new card('Five', 'Spades',5),
		new card('Six', 'Spades',6),
		new card('Seven', 'Spades',7),
		new card('Eight', 'Spades',8),
		new card('Nine', 'Spades',9),
		new card('Ten', 'Spades',10),
		new card('Jack', 'Spades',10),
		new card('Queen', 'Spades',10),
		new card('King', 'Spades',10)
	];

function getRandomInt(min, max){
	return Math.floor(Math.random()*(max - min + 1) + min);
}

function getSum(hand){
	let sum = 0;

	for( let i=0; i<hand.length; i++){
		let card = hand[i];
		if(card.name != 'Ace'){
			sum += card.value;
		}
	}

	for(let i=0; i<hand.length; i++){
		let card = hand[i];
		if(card.name == 'Ace'){
			if(sum > 10){
				sum ++;
			}else{
				sum += card.value;
			}
		}
	}

	return sum;
}

function getCards(){
	return deck[getRandomInt(0, deck.length - 1)];
}

let playerHand = [];
let dealerHand = [];
let parentPlayer = document.getElementById('playHand');
let parentDealer = document.getElementById('dealHand');
let user = document.getElementById('user').innerHTML;


function play(){
	let cash = parseInt(document.getElementById('cash').innerHTML);
	playerHand = [getCards(), getCards()];
	dealerHand = [getCards()];
	if(cash == 0){
		return alert('Зробіть ставку');
	}else{
		
		let p = document.createElement('p');
		p.className = 'text-center';
		p.id = 'countP';
		p.innerHTML = getSum(playerHand);		
		parentPlayer.appendChild(p);

		for(let i=0; i < playerHand.length; i++){
			let card = playerHand[i];
			let img = document.createElement('img');
			img.id = 'p'+i; 
			img.src = '../images/cards/'+card.suit+'/'+card.name+'.jpg';
			parentPlayer.appendChild(img);			
		}

		let pd = document.createElement('p');
		pd.className = 'text-center';
		pd.id = 'countD';
		pd.innerHTML = getSum(dealerHand);		
		parentDealer.appendChild(pd);

		let imgD = document.createElement('img');
		imgD.id = 'd'+(dealerHand.length - 1);
		imgD.src = '../images/cards/'+dealerHand[0].suit+'/'+dealerHand[0].name+'.jpg';
		parentDealer.appendChild(imgD);

	}	
	
		if(getSum(playerHand) == 21){
			setTimeout(function(){
				alert('You WIN))))))))');
				elementDel();
				let betOld = document.getElementById('bet').innerHTML;
				let cash = document.getElementById('cash').innerHTML;
				let cash1 = parseInt(cash)*2;
				let bet1 = parseInt(betOld);
				
				bet = bet1 + cash1;
				cashNew = 0;
				
				document.getElementById('bet').innerHTML = bet;
				document.getElementById('cash').innerHTML = cashNew;
				socket.emit('result', {bet, user});
			}, 500);	
			
		}else if(getSum(playerHand) > 21){
			setTimeout(function(){
				alert('Yuo LOSE((((((');
				elementDel();
				let bet = document.getElementById('bet').innerHTML;
				let cash = document.getElementById('cash').innerHTML;
				document.getElementById('cash').innerHTML = 0;
				socket.emit('result', {bet, user});
			}, 500);
			
		}
	
	

	document.getElementById('game').disabled = true;
}

function more(){
	playerHand.push(getCards());
	
	let p = document.getElementById('countP').innerHTML = getSum(playerHand);
		
	let img = document.createElement('img');
	img.id = 'p'+ (playerHand.length - 1);
	img.src = '../images/cards/'+playerHand[playerHand.length - 1].suit+'/'+playerHand[playerHand.length - 1].name+'.jpg';
	parentPlayer.appendChild(img);

	
		if(getSum(playerHand) == 21){
			setTimeout(function(){
				alert('Black Jack! You WIN))))))))');
				elementDel();
				let betOld = document.getElementById('bet').innerHTML;
				let cash = document.getElementById('cash').innerHTML;
				let cash1 = parseInt(cash)*2;
				let bet1 = parseInt(betOld);
				console.log(cash1);
				console.log(bet1);
				bet = bet1 + cash1;
				cashNew = 0;
				console.log(betNew);
				document.getElementById('bet').innerHTML = bet;
				document.getElementById('cash').innerHTML = cashNew;
				socket.emit('result', {bet, user});
			}, 500);
			
		}else if(getSum(playerHand) > 21){
			setTimeout(function(){
				alert('Yuo LOSE((((((');
				elementDel();
				let bet = document.getElementById('bet').innerHTML;
				let cash = document.getElementById('cash').innerHTML;
				document.getElementById('cash').innerHTML = 0;
				socket.emit('result', {bet, user});
			}, 500);
			
		}
	
	
}

function enough(){
	let playerValue = getSum(playerHand);
	while(getSum(dealerHand) < 17){
		dealerHand.push(getCards());
		let p = document.getElementById('countD').innerHTML = getSum(dealerHand);
		
		let img = document.createElement('img');
		img.id = 'd'+ (dealerHand.length - 1);
		img.src = '../images/cards/'+dealerHand[dealerHand.length - 1].suit+'/'+dealerHand[dealerHand.length - 1].name+'.jpg';
		parentDealer.appendChild(img);

	}
	let dealerValue = getSum(dealerHand);
	
		if(dealerValue == 21){
			setTimeout(function(){
				alert('Dealer have Black Jack! Yuo LOSE((((((');
				elementDel();
				let bet = document.getElementById('bet').innerHTML;
				let cash = document.getElementById('cash').innerHTML;
				document.getElementById('cash').innerHTML = 0;
				
			      socket.emit('result', {bet, user});	
			}, 500);
			
		}else if(dealerValue > 21){
			setTimeout(function(){
				alert('You WIN))))))))');
				elementDel();
				let betOld = document.getElementById('bet').innerHTML;
				let cash = document.getElementById('cash').innerHTML;
				let cash1 = parseInt(cash)*2;
				let bet1 = parseInt(betOld);
				console.log(cash1);
				console.log(bet1);
				bet = bet1 + cash1;
				cashNew = 0;
				// console.log(betNew);
				document.getElementById('bet').innerHTML = bet;
				document.getElementById('cash').innerHTML = cashNew;
				
			      socket.emit('result', {bet, user});
			  }, 500);
			
		}else if(playerValue == dealerValue){
			setTimeout(function(){
				alert('DRAW!!!!!!!!!!!!');
				elementDel();
				document.getElementById('cash').innerHTML = 0;
			}, 500);
			
			
		}else if(playerValue > dealerValue){
			setTimeout(function(){
				alert('You WIN))))))))');
				elementDel();
				let betOld = document.getElementById('bet').innerHTML;
				let cash = document.getElementById('cash').innerHTML;
				let cash1 = parseInt(cash)*2;
				let bet1 = parseInt(betOld);
				console.log(cash1);
				console.log(bet1);
				bet = bet1 + cash1;
				cashNew = 0;
				// console.log(betNew);
				document.getElementById('bet').innerHTML = bet;
				document.getElementById('cash').innerHTML = cashNew;
				
			      socket.emit('result', {bet, user});
			  },500);
			
		}else{
			setTimeout(function(){
				alert('Yuo LOSE((((((');
				elementDel();
				let bet = document.getElementById('bet').innerHTML;
				let cash = document.getElementById('cash').innerHTML;
				document.getElementById('cash').innerHTML = 0;
				 socket.emit('result', {bet, user});	
			}, 500);
			
		}
	
}

function elementDel(){
	let pp = document.getElementById('countP');
		parentPlayer.removeChild(pp);
		for(let i=0; i < playerHand.length; i++){
			let count = 'p'+i;
			let img = document.getElementById(count);
			parentPlayer.removeChild(img);													
		}

		let pd = document.getElementById('countD');
		parentDealer.removeChild(pd);

		for(let i=0; i < dealerHand.length; i++){
			let countd = 'd'+i;
			let img = document.getElementById(countd);
			parentDealer.removeChild(img);													
		}

		let blue1 = document.getElementById('b1');
		if(blue1){
			document.body.removeChild(blue1);			
		}		
		let blue5 = document.getElementById('b5');
		if(blue5){
			document.body.removeChild(blue5);
		}		
		let yellow25 = document.getElementById('y25');
		if(yellow25){
			document.body.removeChild(yellow25);
		}		
		let yellow50 = document.getElementById('y50');
		if(yellow50){
			document.body.removeChild(yellow50);
		}			
		let red100 = document.getElementById('r100');
		if(red100){
			document.body.removeChild(red100);
		}			
		let red200 = document.getElementById('r200');
		if(red200){
			document.body.removeChild(red200);
		}

		document.getElementById('game').disabled = false;

	
}