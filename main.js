function typeWriter(text, duration, repeat = true) {
  let line = 0;
  let count = 0;
  let out = '';
  let htmlOut = document.querySelector('.typewriter');

  function Line() {
    let interval = setTimeout(function () {
      out += text[line][count];
      htmlOut.innerText = out + '|';
      count++;
      if (count >= text[line].length) {
        count = 0;
        line++;
        if (line === text.length) {
          clearTimeout(interval);
          htmlOut.innerText = out;
          if(repeat){
            typeWriter(text, duration, repeat = true);
          }
          return true
        }
      }
      Line()
    }, getRandomInt(duration))
  }
  Line()
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
typeWriter(
  [
  "Этот текст пишется сам\n",
  'Автор AlexTur\n',
  'https://github.com/alekseiTurl\n',
  '\n',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam atque doloremque ex expedita facilis, in labore numquam quibusdam quisquam sequi, sint unde voluptatum. Alias corporis distinctio labore neque optio.'
  ],
  350,
  true
);
