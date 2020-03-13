function showNumberWithAnimate(i,j,randNumber) {
  var NumberCell =$('#number-cell-'+i+'-'+j);
  NumberCell.css('background-color',getBackColor(randNumber));
  NumberCell.css('color',getTextColor(randNumber));
  NumberCell.text(randNumber);
  NumberCell.animate({
    width:"100px",
    height:"100px",
    top:getTopcell(i,j),
    left:getLeftcell(i,j)
  },50);
}
function showNumberAnimate(formx,formy,tox,toy) {
  var NumberCell = $('#number-cell'+formx+'-'+'-'+formy);
  NumberCell.animate({
    top:getTopcell(tox,toy),
    left:getLeftcell(tox,toy)},250);
}
