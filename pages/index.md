# Style guide JS-Vue

## Template

### Расположение атрибутов тега

Атрибуты должны переноситься на новую строку, если атрибутов больше, чем один

__Хорошо__

```javascript
<div class="red">
  Text
</div>

<div
  v-if="isText"
  class="red"
>
  Text
</div>
```

__Плохо__
```javascript
<div
  class="red"
>
  Text
</div>

<div v-if="isText" class="red">
  Text
</div>
```

### Используй двойные ковычки
В значениях атрибута и обработчиках событий должны быть использованы двойные кавычки

__Хорошо__
```javascript
<div class="red">
  Text
</div>
```

__Плохо__
```javascript
<div class='red'>
  Text
</div>
```

### Расположение закрывающего символа тега
Закрывающий символ тега должен быть расположен на новой строке, если у тега больше одного атрибута

__Хорошо__
```javascript
<div
  v-if="isText"
  class="red"
>
  Text
</div>
```

__Плохо__
```javascript
<div
  v-if="isText"
  class="red">
  Text
</div>
```

### Используй kebab-case
Атрибуты (в том числе ref), компоненты именуются в kebab-case

__Хорошо__
```javascript
<div user-name="userName">
   <interactive-acceptance/>
</div>
```

__Плохо__
```javascript
<div userName="userName">
  <interactiveAcceptance/>
</div>
```

### Последовательность атрибутов
??? 

### Самозакрывающиеся компоненты
Компоненты без контента должны быть самозакрывающимися. (Если single-file-components - template и script находятся в одном файлe)  

__Хорошо__
```javascript
<interactive-acceptance/>
```

__Плохо__
```javascript
<interactive-acceptance></interactive-acceptance>
```
### Разделение блоков кода
Логические блоки кода должны быть разделены пустой строкой

__Хорошо__
```javascript
<div>
  <next-services />

  <basket-total />

  <div class="info">
    <div class="post">
      <h1>Заголовок</h1>
      <p>Текст</p>
      <button>Кнопка</button>
    </div>

    <div class="acceptance-wrapper">
      <acceptance />
    </div>
  </div>
</div>
```

__Плохо__
```javascript
<div>
  <next-services />
  <basket-total />
   <div class="info">
    <div class="post">
      <h1>Заголовок</h1>
      <p>Текст</p>
      <button>Кнопка</button>
    </div>
    <div class="acceptance-wrapper">
      <acceptance />
    </div>
  </div>
</div>
```


## Java Script
---

### Объявление переменных
Используйте const, let для объявления переменных; избегайте var.

### Указание типов переменных
Аннотации типа JSDoc могут быть добавлены либо в строке над объявлением, либо в строке перед именем переменной, если нет других JSDoc.  

__Хорошо__
```javascript
const /** @type {Number[]} */ data = [];

/**
 * Какое-то описание.
 * @type {Number[]}
 */
const data = [];
```
Смешивание строчных (inline) и JSDoc стилей не допускается: компилятор будет обрабатывать только первые JSDoc комментарии, и строчные будут потеряны.  

__Плохо__
```javascript
/** Какое-то описание. */
const /** !Array<number> */ data = [];
```
### Наименование переменных
- Используй префикс is/has для boolean переменных: `isOpen/ hasUser`
- Используй глагол для названий функций и методов: `getUserData()`
---

### Строки

- Используйте одинарные кавычки '' для строк. eslint: quotes

__Хорошо__
```javascript
const name = 'Capt. Janeway';
```

__Плохо__
```javascript
const name = "Capt. Janeway";
```

- Строки, у которых в строчке содержится более 100 символов, не пишутся на нескольких строчках с использованием конкатенации.

__Хорошо__
```javascript
const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
```

__Плохо__
```javascript
const errorMessage = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';
```

___

### Объекты
- Для создания объекта используйте литеральную нотацию: `const item = {};`

- Используйте сокращённую запись свойств объекта. Группируйте ваши сокращённые записи свойств в начале объявления объекта.

__Хорошо__
```javascript
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};
```

- Используйте синтаксис расширения вместо Object.assign для поверхностного копирования объектов. Используйте параметр оставшихся свойств, чтобы получить новый объект с некоторыми опущенными свойствами. eslint: prefer-object-spread

__Хорошо__
```javascript
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
```

__Плохо__
```javascript
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }
```

- Если объект располагается на нескольких строках, то используйте разрывы строк после открытия и перед закрытием скобок. 

__Хорошо__
```javascript
const object = {
  id: 1,
  id: 2,
  id: 3
};
```

__Плохо__
```javascript
const object = {id: 1, id: 2,  id: 3};
```

---

### Массивы
- Для создания объекта используйте литеральную нотацию: `const item = [];`

- Для копирования массивов используйте оператор расширения `...`

__Хорошо__
```javascript
const itemsCopy = [...items];
```

__Плохо__
```javascript
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}
```

- Если массив располагается на нескольких строках, то используйте разрывы строк после открытия и перед закрытием скобок.

__Хорошо__
```javascript
const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const numberInArray = [
  1,
  2,
];
```

__Плохо__
```javascript

const objectInArray = [{
  id: 1,
}, {
  id: 2,
}];

const numberInArray = [
  1, 2,
];
```
---

### Деструктуризация

- При обращении к нескольким свойствам объекта используйте деструктуризацию объекта. Используйте деструктуризацию объекта для множества возвращаемых значений, но не делайте тоже самое с массивами. eslint: prefer-destructuring

__Хорошо__
```javascript
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```

__Плохо__
```javascript
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}
```