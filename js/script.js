
window.onload = function(){
	let gamePanel = document.getElementById('game');
	for(i = 0; i < 9; i++){
		let	newNodeElementDiv = document.createElement('div');

		newNodeElementDiv.className = 'block';
		gamePanel.appendChild(newNodeElementDiv);
	}

	let step = 0;

	document.getElementById('game').onclick = function(event){
		if(event.target.className == 'block'){
			if(step % 2 == 0 && event.target.innerHTML == ''){
				event.target.innerHTML = 'x';
				event.target.style.pointerEvents = 'none';
			}else if(step % 2 == !0 && event.target.innerHTML == ''){
				event.target.innerHTML = 'o';
				event.target.style.pointerEvents = 'none';
			}
			step++;
			checkWinner();
		}
	}
	function checkWinner(){
		let items = document.getElementsByClassName('block');

		// horizontal X
		if(items[0].innerHTML == 'x' && items[1].innerHTML == 'x' && items[2].innerHTML == 'x'){
			document.getElementById('end').style.top = "55px";
			gameOver();
			scoreX();
		}
		if(items[3].innerHTML == 'x' && items[4].innerHTML == 'x' && items[5].innerHTML == 'x'){
			document.getElementById('end').style.top = "155px";
			gameOver();
			scoreX();
		}
		if(items[6].innerHTML == 'x' && items[7].innerHTML == 'x' && items[8].innerHTML == 'x'){
			document.getElementById('end').style.top = "255px";
			gameOver();
			scoreX();
		}

		// vertical X
		if(items[0].innerHTML == 'x' && items[3].innerHTML == 'x' && items[6].innerHTML == 'x'){
			document.getElementById('end').style.top = "148px";
			document.getElementById('end').style.left = "-100px";
			document.getElementById('end').style.transform = "rotate(90deg)";
			gameOver();
			scoreX();
		}
		if(items[1].innerHTML == 'x' && items[4].innerHTML == 'x' && items[7].innerHTML == 'x'){
			document.getElementById('end').style.top = "148px";
			document.getElementById('end').style.left = "0";
			document.getElementById('end').style.transform = "rotate(90deg)";
			gameOver();
			scoreX();
		}
		if(items[2].innerHTML == 'x' && items[5].innerHTML == 'x' && items[8].innerHTML == 'x'){
			document.getElementById('end').style.top = "148px";
			document.getElementById('end').style.left = "100px";
			document.getElementById('end').style.transform = "rotate(90deg)";
			gameOver();
			scoreX();
		}

		// diagonal X
		if(items[0].innerHTML == 'x' && items[4].innerHTML == 'x' && items[8].innerHTML == 'x'){
			document.getElementById('end').style.top = "156px";
			document.getElementById('end').style.transform = "rotate(45deg)";
			gameOver();
			scoreX();
		}
		if(items[2].innerHTML == 'x' && items[4].innerHTML == 'x' && items[6].innerHTML == 'x'){
			document.getElementById('end').style.top = "156px";
			document.getElementById('end').style.transform = "rotate(-45deg)";
			gameOver();
			scoreX();
		}


		// horizontal 0
		if(items[0].innerHTML == 'o' && items[1].innerHTML == 'o' && items[2].innerHTML == 'o'){
			document.getElementById('end').style.top = "55px";
			gameOver();
			scoreY();
		}
		if(items[3].innerHTML == 'o' && items[4].innerHTML == 'o' && items[5].innerHTML == 'o'){
			document.getElementById('end').style.top = "155px";
			gameOver();
			scoreY();
		}
		if(items[6].innerHTML == 'o' && items[7].innerHTML == 'o' && items[8].innerHTML == 'o'){
			document.getElementById('end').style.top = "255px";
			gameOver();
			scoreY();
		}


		// vertical 0
		if(items[0].innerHTML == 'o' && items[3].innerHTML == 'o' && items[6].innerHTML == 'o'){
			document.getElementById('end').style.top = "148px";
			document.getElementById('end').style.left = "-100px";
			document.getElementById('end').style.transform = "rotate(90deg)";
			gameOver();
			scoreY();
		}
		if(items[1].innerHTML == 'o' && items[4].innerHTML == 'o' && items[7].innerHTML == 'o'){
			document.getElementById('end').style.top = "148px";
			document.getElementById('end').style.left = "0";
			document.getElementById('end').style.transform = "rotate(90deg)";
			gameOver();
			scoreY();
		}
		if(items[2].innerHTML == 'o' && items[5].innerHTML == 'o' && items[8].innerHTML == 'o'){
			document.getElementById('end').style.top = "148px";
			document.getElementById('end').style.left = "100px";
			document.getElementById('end').style.transform = "rotate(90deg)";
			gameOver();
			scoreY();
		}

		// diagonal 0
		if(items[0].innerHTML == 'o' && items[4].innerHTML == 'o' && items[8].innerHTML == 'o'){
			document.getElementById('end').style.top = "156px";
			document.getElementById('end').style.transform = "rotate(45deg)";
			gameOver();
			scoreY();
		}
		if(items[2].innerHTML == 'o' && items[4].innerHTML == 'o' && items[6].innerHTML == 'o'){
			document.getElementById('end').style.top = "156px";
			document.getElementById('end').style.transform = "rotate(-45deg)";
			gameOver();
			scoreY();
		}
	}
	function gameOver(){
		gamePanel.style.pointerEvents = 'none';
		setTimeout(gameWin, 1000);
		let clearItems = document.getElementsByClassName('block');

		function gameWin(){
			document.getElementById('end').style.top = "-10px";
			document.getElementById('end').style.left = "0";
			document.getElementById('end').style.transform = "rotate(0)";

			for(i = 0;i < 9; i ++){
				clearItems[i].innerText = '';
				clearItems[i].style.pointerEvents = 'auto';
			}
			step = 0;
		}
	}
	function scoreX(){
		let xScopeUp = document.getElementById('score__x');
		xScopeUp.innerText ++;
	}
	function scoreY(){
		let yScopeUp = document.getElementById('score__y');
		yScopeUp.innerText ++;
	}
}

