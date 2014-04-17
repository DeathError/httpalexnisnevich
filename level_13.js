/*
* robotMaze.js
*
* The blue key is inside a labyrinth, and extracting
* it will not be easy.
*
* It's a good thing that you're a AI expert, or
* we would have to leave empty-handed.
*/

function startLevel(map) {
map.getRandomInt = function(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

map.placePlayer(map.getWidth()-1, map.getHeight()-1);
var player = map.getPlayer();

map.defineObject('robot', {
'type': 'dynamic',
'symbol': 'R',
'color': 'gray',
'onCollision': function (player, me) {
me.giveItemTo(player, 'blueKey');
},
'behavior': function (me) {
if (map.getPlayer().hasItem('blueKey'))
me.move('down');
else if ((me.dir === undefined || me.dir === 'u'))
{
if (me.canMove('left')) {
me.dir = 'l';
me.move('left');
}
else if (me.canMove('up'))
{
me.dir = 'u';
me.move('up');
}
else if (me.canMove('right')) {
me.dir = 'r';
me.move('right');
}
else {
me.dir = 'd';
me.move('down');
}
}
else if ((me.dir === undefined || me.dir === 'l'))
{
if (me.canMove('down')) {
me.dir = 'd';
me.move('down');
}
else if (me.canMove('left')) {
me.dir = 'l';
me.move('left');
}
else if (me.canMove('up')) {
me.dir = 'u';
me.move('up');
}
else if (me.canMove('right')) {
me.dir = 'r';
me.move('right');
}
}
else if ((me.dir === undefined || me.dir === 'd'))
{
if (me.canMove('right')) {
me.dir = 'r';
me.move('right');
}
else if (me.canMove('down')) {
me.dir = 'd';
me.move('down');
}
else if (me.canMove('left')) {
me.dir = 'l';
me.move('left');
}
else if (me.canMove('up')) {
me.dir = 'u';
me.move('up');
}
}
else if ((me.dir === undefined || me.dir === 'r'))
{
if (me.canMove('up'))
{
me.dir = 'u';
me.move('up');
}
else if (me.canMove('right')) {
me.dir = 'r';
me.move('right');
}
else if (me.canMove('down')) {
me.dir = 'd';
me.move('down');
}
else if (me.canMove('left')) {
me.dir = 'l';
me.move('left');
}
}
























}