var board=new Array();
$(document).ready(function () {
  newGame();
});
function  newGame(){
  init();
  OneNumber();
  OneNumber();
}
function init() {
  for(var i=0;i<4;i++)
    for(var j=0;j<4;j++)
    {
      var gridCell = $('#grid-cell-'+i+'-'+j);
      gridCell.css('top',getTopcell(i,j));
      gridCell.css('left',getLeftcell(i,j));
    }
  for(var i=0;i<4;i++){
    board [i]=new Array();
    for(var j=0;j<4;j++)
       board[i][j]=0;
  }
  upDateView();  //在棋盘格上加一层新的格子
}
function upDateView() {
  $(".number-cell").remove();
  for(var i=0;i<4;i++)
    for(var j=0;j<4;j++)
    {
      $("#grid-container").append('<div class="number-cell" id ="number-cell-'+i+'-'+j+'"> </div>');
      var theNumberCell=$('#number-cell-'+i+'-'+j)
      if(board[i][j]==0){
        theNumberCell.css('width','0px');
        theNumberCell.css('height','0px');
        theNumberCell.css('top',getTopcell(i,j)+50);
        theNumberCell.css('left',getLeftcell(i,j)+50);
      }
  else{
        theNumberCell.css('width','100px');
        theNumberCell.css('height','100px');
        theNumberCell.css('top',getTopcell(i,j));
        theNumberCell.css('left',getLeftcell(i,j));
        theNumberCell.css('background',getBackColor(board[i][j]));
        theNumberCell.css('color',getTextColor(board[i][j]));
        theNumberCell.text(board[i][j]);
    }

}}  //更新显示的数字样式
function OneNumber() {
  if (checkSpace(board))
    return false;
  var randx = parseInt(4*Math.random());
  var randy = parseInt(4*Math.random());
  while(true){
    if (board[randx][randy]==0) break;
    randx = parseInt(4*Math.random());
    randy = parseInt(4*Math.random());
  }
  var randNumber = Math.random()<0.5?2:4
  board[randx][randy]=randNumber;
  showNumberWithAnimate(randx,randy,randNumber);
  return true;         //判断了所有的棋盘是否有空位
  
}
$(document).keydown(function (event) {
  switch (event.keyCode) {
    case 38:
      if(moveTop()){
        setTimeout("OneNumber()",260);
        isGameOver();
      } //调用向上移动的函数
      break;  //up
    case 37:
      if(moveLeft()){
        setTimeout("OneNumber()",260);
        isGameOver();
      }break; //left
    case 39:
      if(moveRight()){
        setTimeout("OneNumber()",260);
      isGameOver();
    }break; //right
    case 40:
      if(moveDown()){
        setTimeout("OneNumber()",260);
        isGameOver();
        console.log("1");
      }break; //down
    default: break;

  }
  
})

function moveTop() {
  if(!canMoveTop(board))
    return false;
   for(var i=0;i<4;i++)
    for(var j=0;j<4;j++) {
      if (board[i][j] !== 0)
        for (var k = 0; k < i; k++)
          if (board[k][j] == 0 && noTruckY(i, k, j, board)) {       //向上移动一格了
            board[k][j] = board[i][j];
            board[i][j]=0;
            showNumberAnimate(i,j,k,j);
            continue;

          }
      else if (board[k][j] === board[i][j] && noTruckY(i, k, j, board)) {
            board[k][j] += board[i][j];
            board[i][j]=0;
            showNumberAnimate(i,j,k,j);

            continue;

          }

    }
  setTimeout("upDateView()",260);
    return true;
}
function moveLeft() {
  if(!canMoveLeft(board))
    return false;
  for(var i=0;i<4;i++)
    for(var j=0;j<4;j++) {
      if (board[i][j] !== 0)
        for (var k = 0; k < j; k++)
          if (board[i][k] == 0 && noTruckX(i, k, j, board)) {       //向左移动一格了
            board[i][k] = board[i][j];
            board[i][j]=0;
            showNumberAnimate(i,j,i,k);
            continue;
          }
          else if (board[i][k] === board[i][j] && noTruckX(i, k, j, board)) {
            board[i][k] += board[i][j];
            board[i][j]=0;
            showNumberAnimate(i,j,i,k);
            continue;
          }

    }
  setTimeout("upDateView()",260);
  return true;
}          //top left 基本实现完成  right有错误 动画渲染没引用
function moveRight() {
  if(!canMoveRight(board))
    return false;
  for(var i=0;i<4;i++)
    for(var j=2;j>=0;j--) {
      if (board[i][j] !== 0)
        for (var k = 3; k > j; k--)
          if (board[i][k] == 0 && noTruckX(i,j,k,board)) {       //向左移动一格了
            board[i][k] = board[i][j];
            board[i][j]=0;
            showNumberAnimate(i,j,i,k);
            continue;
          }
          else if (board[i][k] === board[i][j] && noTruckX(i,j,k,board)) {
            board[i][k] += board[i][j];
            board[i][j]=0;
            showNumberAnimate(i,j,i,k);
            continue;
          }

    }
  setTimeout("upDateView()",260);
  return true;
}
function moveDown() {
  if(!canMoveDown(board))
    return false;
  for (var i=2;i>=0;i--)
    for(var j=0;j<4;j++){
      if (board[i][j]!==0)
        for (var k=3;k>i;k--)
          if (board[k][j]==0 && noTruckY(i,k,j,board)){
            board[k][j]=board[i][j];
            board[i][j]=0;
            showNumberAnimate(i,j,k,j);
            continue;
          }
          else if(board[k][j]==board[i][j] && noTruckY(i,k,j,board)){
              board[k][j]+=board[i][j];
              board[i][j]=0;
            showNumberAnimate(i,j,k,j);
            continue;
      }
    }
  setTimeout("upDateView()",260);
    return true;
}
function isGameOver(){
     if(!GameOver)
       return alert("游戏结束了");
     return false;
};
