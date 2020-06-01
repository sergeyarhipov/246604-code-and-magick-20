'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_GAP = 20;
var BAR_PADDING = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var MAX_SATURATION_VALUE = 100;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};


var getRandomInteger = function (number) {
  return Math.floor(Math.random() * (number + 1));
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + TEXT_GAP, FONT_GAP + TEXT_GAP * 2);

  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    var POSITION_X = GAP + TEXT_GAP + CLOUD_X + (BAR_WIDTH + BAR_PADDING) * i;
    var PLAYER_BAR_HEIGHT = (BAR_HEIGHT * times[i]) / maxTime;
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], POSITION_X, (TEXT_GAP + FONT_GAP) * 3 + BAR_HEIGHT);
    ctx.fillText(Math.round(times[i]), POSITION_X, CLOUD_HEIGHT - TEXT_GAP - FONT_GAP - PLAYER_BAR_HEIGHT);
    ctx.fillStyle = (players[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(240,' + getRandomInteger(MAX_SATURATION_VALUE) + '%, 50%)';
    ctx.fillRect(POSITION_X, CLOUD_HEIGHT - TEXT_GAP - PLAYER_BAR_HEIGHT, BAR_WIDTH, PLAYER_BAR_HEIGHT);
  }
};
