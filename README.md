# Typewriter
Имитирует атоматическую печать текста, иными словами - функция печатной машинки.

*Посмотреть демо [на Codepen](https://codepen.io/AlexTur/pen/VwgWrmQ)*

## Параметры функции

*Функция принимает следующие параметры:*
* `text` - текст котрый будет напечатан. Значение передаётся в формате массива строк. Для переноса строки сипользуйте `\n` в конце  строки.
* `duration` - числовое занчение времени печати текста.
* `repeat` - по умолчанию `true`, определяет будет ли печать запускаться заново.

## Пример использования:

***html - разметка***

```html
  <div class="typewriter"></div>
```

***вызов функции***

```js
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
```

## CSS стилизация:

***для стилизации используйте класс `typewriter`***

```css
.typewriter {
    font-family: monospace;
    line-height: 1.5em;
    font-size: 2em;
    color: blueviolet;
}
```
