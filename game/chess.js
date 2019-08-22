var canvas = document.getElementById("myCanvas");
//document.getElementById("myCanvas").addEventListener("click", onClick);
var ctx = canvas.getContext("2d");
//var turn=document.getElementById("turn");
//var wpointst=document.getElementById("wpoints");
//var bpointst=document.getElementById("bpoints");
var img=document.getElementById("p0p");
var img1=document.getElementById("p0b");
var img2=document.getElementById("p1p");
var img3=document.getElementById("p1b");
var img4=document.getElementById("p2p");
var img5=document.getElementById("p2b");
let coX=null;
let coY=null;
let wpoints=0;
let bpoints=0;
let chance=1;
ctx.fillStyle = "#ffe900";

// ctx1.fillStyle = "#e90000";
//var st=document.getElementById("st");
//var bt=document.getElementById("bt");

var a=[[-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1]];
document.addEventListener("DOMContentLoaded",onLoad);


function onClick()
{

		if(chance===1)
		{
				if(coX===null&&coY===null)
				{
				//coX=canvas.getBoundingClientRect().left;
				//coY=canvas.getBoundingClientRect().top;
				coX = event.clientX;
				coY = event.clientY;
				coY=Math.floor(coY/100);
				coX=Math.floor(coX/100);
					//sugg(coX,coY);
					if(a[coY][coX]===-1||a[coY][coX]===0||a[coY][coX]===-2||a[coY][coX]===-3){
						coX=null;
						coY=null;
					}
				}
				else
				{

						//var x1=canvas.getBoundingClientRect().left;
						//var y1=canvas.getBoundingClientRect().top;
						 var x1 = event.clientX;
						var y1 = event.clientY;
						x1=Math.floor(x1/100);
						y1=Math.floor(y1/100);
						var xd=coX-x1>0?coX-x1:-1*(coX-x1);
						var yd=coY-y1>0?coY-y1:-1*(coY-y1);
						if(coX===x1&&coY===y1)
						{
							combine(coX,coY,chance);
							coX=null;
							coY=null;
							chance=-1;
						}
						
						else if(a[coY][coX]===1&&xd==0&&yd==1){
							a[coY][coX]=0;
							if(a[y1][x1]==-1||a[y1][x1]==-2||a[y1][x1]==-3)
							wpoints++;
							a[y1][x1]=1;
							chance=-1;
							coX=null;
							coY=null;
						}
						else if(a[coY][coX]===2&&((xd===2&&yd===0)||(xd===0&&yd===2)||(xd===1&&yd===1))){
						a[coY][coX]=0;
							if(a[y1][x1]==-1||a[y1][x1]==-2||a[y1][x1]==-3)
							wpoints++;
							a[y1][x1]=2;
							chance=-1;
							coX=null;
							coY=null;
						}
						else if(a[coY][coX]===3&&(xd===3||yd===3)){
						 a[coY][coX]=0;
						 	if(a[y1][x1]==-1||a[y1][x1]==-2||a[y1][x1]==-3)
							wpoints++;
							a[y1][x1]=3;
							chance=-1;
							coX=null;
							coY=null;
						}
						else
						{
							//a[coY][coX]=0;
						//a[y1][x1]=1;
							//chance=-1;
						coX=null;
							coY=null;
						}
						drawBoard();
						timer=10;
				}
				
		}
			else if(chance===-1)
			{
					if(coX===null&&coY===null)
					{
							 coX = event.clientX;
							 coY = event.clientY;
							//coX=canvas.getBoundingClientRect().left;
							coX=Math.floor(coX/100);
							//coY=canvas.getBoundingClientRect().top;
							coY=Math.floor(coY/100);
							//sugg(coX,coY);
							if(a[coY][coX]===1||a[coY][coX]===0||a[coY][coX]===2||a[coY][coX]===3){
								coX=null;
								coY=null;
							}
			        }
					else
					{
						 var x1 = event.clientX;
						var y1 = event.clientY;
						x1=Math.floor(x1/100);
						y1=Math.floor(y1/100);
						var xd=coX-x1>0?coX-x1:-1*(coX-x1);
						var yd=coY-y1>0?coY-y1:-1*(coY-y1);
						//var x1=canvas.getBoundingClientRect().left;
						//var y1=canvas.getBoundingClientRect().top;
						if(coX===x1&&coY===y1){
							combine(coX,coY,chance);
							coX=null;
							coY=null;
							chance=1;
						}
						else if(a[coY][coX]===-1&&xd==0&&yd==1){
							a[coY][coX]=0;
							if(a[y1][x1]==1||a[y1][x1]==2||a[y1][x1]==3)
							bpoints++;
							a[y1][x1]=-1;
							chance=1;
							coX=null;
							coY=null;
						}
					
						else if(a[coY][coX]===-2&&((xd===2&&yd===0)||(xd===0&&yd===2)||(xd===1&&yd===1))){
						a[coY][coX]=0;
						if(a[y1][x1]==1||a[y1][x1]==2||a[y1][x1]==3)
							bpoints++;
							a[y1][x1]=-2;
							chance=1;
							coX=null;
							coY=null;
						}
						else if(a[coY][coX]===-3&&(xd===3||yd===3)){
						 a[coY][coX]=0;
						 if(a[y1][x1]==1||a[y1][x1]==2||a[y1][x1]==3)
							bpoints++;
							a[y1][x1]=-3;
							chance=1;
							coX=null;
							coY=null;
						}


						else
						{
								/*a[coY][coX]=0;
								a[y1][x1]=-1;
								chance=1;*/
								coX=null;
								coY=null;
								
						}
						drawBoard();
						timer=10;
					}
			
			}
		

}






function drawBoard()
{
    ctx.clearRect(0, 0, 800, 800);

	for(var i=0; i<8; i++)  
	{
		for(var j=0; j<8; j++) 
		{
				if((i+j)%2===0)
				{
					ctx.fillStyle = "#ffe900";
					ctx.fillRect(j*100, i*100, 100, 100);
					// ctx.drawImage(img, 10, 10);
		
				}
				else{
					ctx.fillStyle = "#e90000";
				ctx.fillRect(j*100, i*100, 100, 100);
				}
				if(a[i][j]===1)
				{
				ctx.drawImage(img, j*100+10,i*100+10,80,80);
	
				}
				else if(a[i][j]===-1)
				{
				ctx.drawImage(img1, j*100+10, i*100+10,80,80);
				}
				else if(a[i][j]===2)
				{
				ctx.drawImage(img2, j*100, i*100,100,100);
				}
				else if(a[i][j]===3)
				{
				ctx.drawImage(img4, j*100+10, i*100+10,80,80);
				}
				else if(a[i][j]===-3)
				{
				ctx.drawImage(img5, j*100+10, i*100+10,80,80);
				}
				else if(a[i][j]===-2)
				{
				ctx.drawImage(img3, j*100, i*100,100,100);
				}
		}
	}
	if(chance==1){
		  document.getElementById("turn").innerHTML = "Pink's Turn";}
		else
		document.getElementById("turn").innerHTML = "Blue's Turn";
		//wpointst=wpoints;
		//bpointst=bpoints;
		document.getElementById("bpoints").innerHTML = wpoints;
		document.getElementById("wpoints").innerHTML = bpoints;

	
}
function combine(coX,coY,l)
{
		if(l==1)
		{
				if(a[coY][coX-1]==1&&a[coY][coX+1]==1){
				a[coY][coX-1]=0;
				a[coY][coX+1]=0;
				a[coY][coX]=2;
				}
				else if(a[coY][coX-1]==2&&a[coY][coX+1]==2){
				a[coY][coX-1]=0;
				a[coY][coX+1]=0;
				a[coY][coX]=3;
				}

		}
		else if(l==-1)
		{

			if(a[coY][coX-1]==-1&&a[coY][coX+1]==-1){
		a[coY][coX-1]=0;
		a[coY][coX+1]=0;	
		a[coY][coX]=-2;

		}
		
			else if(a[coY][coX-1]==-2&&a[coY][coX+1]==-2){
		a[coY][coX-1]=0;
		a[coY][coX+1]=0;	
		a[coY][coX]=-3;

		}
	

		}
}
let tre1;
var timer=9;
function startTimer(){
//var timer=duration,minutes,seconds;

tre1=setInterval(function(){
	//bt.innerHTML=timer;
	document.getElementById("st").innerHTML = timer;
	--timer;
	if(timer<0){
		chance=chance===1?-1:1;
		drawBoard();
		timer=9;
	}
	
  }, 1000);




}
function stimer(){
var timer=179,minute,seconds;
minute=3
seconds=0;
var tre=setInterval(function(){
	//bt.innerHTML=timer;
	

	if(seconds==0)
	--minute;
	seconds=timer%60;
	
	if(seconds<10)
	document.getElementById("bt").innerHTML ="0"+minute+":0"+seconds;
	else
	document.getElementById("bt").innerHTML ="0"+minute+":"+seconds;
	

	--timer;
	if(seconds<0)
		--minute;
	if(timer<0){
		alert("time out");
		clearInterval(tre);
		clearInterval(tre1);
		if(wpoints>bpoints){
			alert("white wins");

		}
		else if(bpoints>wpoints){
			alert("black wins");

		}
		else
		alert("it's a tie");
	}
  }, 1000);




}
function onLoad(){

	drawBoard();
	
	canvas.addEventListener("click", onClick);

	
	
	

}
function start(){
	stimer();
	startTimer();
}












