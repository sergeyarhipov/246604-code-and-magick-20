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


var getRandomInteger = function () {
  var MAX_NUMBER = 100;
  return Math.floor(Math.random() * MAX_NUMBER);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + TEXT_GAP, FONT_GAP + TEXT_GAP * 2);

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], GAP + TEXT_GAP + CLOUD_X + (BAR_WIDTH + BAR_PADDING) * i, (TEXT_GAP + FONT_GAP) * 3 + BAR_HEIGHT);
    ctx.fillText(Math.round(times[i]), GAP + TEXT_GAP + CLOUD_X + (BAR_WIDTH + BAR_PADDING) * i, CLOUD_HEIGHT - TEXT_GAP - FONT_GAP - ((BAR_HEIGHT * times[i]) / maxTime));
    ctx.fillStyle = (players[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(240,' + getRandomInteger() + '%, 50%)';
    ctx.fillRect((GAP + CLOUD_X + TEXT_GAP + (BAR_WIDTH + BAR_PADDING) * i), CLOUD_HEIGHT - TEXT_GAP - ((BAR_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};
