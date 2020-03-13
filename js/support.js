function getTopcell(i,j) {
   return 20+120*i;
}
function getLeftcell(i,j) {
  return 20+120*j;
}
function getBackColor(number) {
  switch (number) {
    case 2 : return "#eee4da" ;break;
    case 4 : return "#ede0c8" ;break;
    case 8 : return "#f2b179" ;break;
    case 16: return "#f59563" ;break;
    case 32: return "#f67c5f" ;break;
    case 64: return "#f65a3b" ;break;
    case 128:return "#edcf72" ;break;
    case 256:return "#edcc61" ;break;
    case 512:return "#9c0"    ;break;
    case 1024:return "#33b5e5";break;
    case 2048:return "#09c"   ;break;
    case 4096:return "#a6c"   ;break;
    case 8192:return "#93c"   ;break;
  }
  return "black";
}
function getTextColor(number) {
  if(number<=4)
    return "$776e65";

  return "white";
}
function checkSpace(board) {
  for(var i=0;i<4;i++)
    for(var j=0;j<4;j++)
       if(board[i][j]===0)
         return false;          //遍历所有的数组看他是否为0
return true;
}
function canMoveTop(board) {
    for(var i=1;i<4;i++)   //第0行不用判断他到底要不要上移
      for(var j=0;j<4;j++)
        if(board[i][j]!==0)
          if(board[i-1][j]==0||board[i-1][j]===board[i][j])
            return true;
          return  false;
}
function canMoveLeft(board) {
  for(var i=0;i<4;i++)   //第0列不用判断他到底要不要左移
    for(var j=1;j<4;j++)
      if(board[i][j]!==0)
        if(board[i][j-1]==0||board[i][j-1]===board[i][j])
          return true;
  return  false;
}
function canMoveRight(board) {
  for(var i=0;i<4;i++)
    for (var j=2;j>=0;j--)
      if(board[i][j]!==0)
        if(board[i][j+1]==0||board[i][j+1]===board[i][j])
          return true;
        return false;

}
function canMoveDown(board) {
  for(var i=2;i>=0;i--)
    for(var j=0;j<4;j++)
      if(board[i][j]!=0)
        if(board[i+1][j]==0||board[i+1][j]==board[i][j])
          return true;
        return false;

}
function noTruckY(row1,row2,coll,board) {
  for(var i=row1+1;i<row2;i++ )
    if(board[i][coll] !==0)          //如果在 i，k 和 i，j之间 有不为零的 就是中间没有空格 就不对
      return false;
    return true;
}
function noTruckX(row,coll1,coll2,board) {
  for(var x=coll1+1;x<coll2;x++ )
    if(board[row][x] !==0)          //如果在 i，k 和 i，j之间 有不为零的 就是中间没有空格 就不对
      return false;
  return true;
}
function noTruckR(row,coll,board) {
  for(var x=coll+1;x<4;x++)
    if(board[i][coll]!==0)
      return false;
    return true;

}
function  GameOver() {
if(canMoveLeft(board)||canMoveDown(board)||canMoveRight(board)||canMoveTop(board)||checkSpace(board))
  return false;
return true;
  
}


