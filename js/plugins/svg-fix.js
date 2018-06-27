$('svg').each(function(index, elem) {
  var svg = $(elem);
  var symbols = svg.find('symbol');
  svg.append(
      $.merge(symbols.find('radialGradient'), symbols.find('linearGradient'))
          .detach());
});
