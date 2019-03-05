var regex = new RegExp("#[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]|#[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]|#[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]")
var spans = $('span').filter(function() {
  return regex.test($(this).text());
})

for (var index = 0; index < spans.length; index++) {
  var span = spans.eq(index);
  var color = span.html();
  console.log(color);
  var highlighted = color.replace(color, '<span style=\"background-color:' + color + '\">'  + color + '</span>');
  span.html(highlighted);
}