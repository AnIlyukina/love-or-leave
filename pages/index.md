# Style guide JS-Vue

## Template

### Расположение атрибутов тега

{% spoiler title="Атрибуты должны переноситься на новую строку, если атрибутов больше, чем один"%}
__Хорошо__ &#129392; 
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

__Плохо__ &#129326;
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
{% /spoiler %}

### Используй двойные ковычки

{% spoiler title="В значениях атрибута и обработчиках событий должны быть использованы двойные кавычки"%}
__Хорошо__ &#129392; 
```javascript
<div class="red">
  Text
</div>
```

__Плохо__ &#129326;
```javascript
<div class='red'>
  Text
</div>
```
{% /spoiler %}

### Расположение закрывающего символа тега

{% spoiler title="Закрывающий символ тега должен быть расположен на новой строке, если у тега больше одного атрибута"%}
__Хорошо__ &#129392; 
```javascript
<div
  v-if="isText"
  class="red"
>
  Text
</div>
```

__Плохо__  &#129326;
```javascript
<div
  v-if="isText"
  class="red">
  Text
</div>
```
{% /spoiler %}

### Используй kebab-case
{% spoiler title="Атрибуты (в том числе ref), компоненты именуются в kebab-case"%}
__Хорошо__ &#129392; 
```javascript
<div user-name="userName">
   <interactive-acceptance/>
</div>
```

__Плохо__  &#129326;
```javascript
<div userName="userName">
  <interactiveAcceptance/>
</div>
```
{% /spoiler %}

### Последовательность атрибутов
??? 

### Самозакрывающиеся компоненты

{% spoiler title="Компоненты без контента должны быть самозакрывающимися. (Если single-file-components - template и script находятся в одном файлe)"%}
__Хорошо__ &#129392; 
```javascript
<interactive-acceptance/>
```
__Плохо__  &#129326;
```javascript
<interactive-acceptance></interactive-acceptance>
```
{% /spoiler %}

### Разделение блоков кода

{% spoiler title="Логические блоки кода должны быть разделены пустой строкой"%}
__Хорошо__ &#129392; 
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

__Плохо__ &#129326;
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
{% /spoiler %}

## Java Script
---

### Объявление переменных
Используйте const, let для объявления переменных; избегайте var. eslint: no-undef prefer-const, one-var

### Указание типов переменных
{% spoiler title="Аннотации типа JSDoc могут быть добавлены либо в строке над объявлением, либо в строке перед именем переменной, если нет других JSDoc."%} 
__Хорошо__ &#129392;
```javascript
const /** @type {Number[]} */ data = [];

/**
 * Какое-то описание.
 * @type {Number[]}
 */
const data = [];
```
Смешивание строчных (inline) и JSDoc стилей не допускается: компилятор будет обрабатывать только первые JSDoc комментарии, и строчные будут потеряны.  

__Плохо__ &#129326;
```javascript
/** Какое-то описание. */
const /** !Array<number> */ data = [];
```
{% /spoiler %}

### Наименование переменных
- Используй префикс is/has для boolean переменных: `isOpen/ hasUser`
- Используй глагол для названий функций и методов: `getUserData()`
---

### Строки

{% spoiler title="Используйте одинарные кавычки '' для строк. eslint: quotes"%} 

__Хорошо__ &#129392;
```javascript
const name = 'Capt. Janeway';
```

__Плохо__ &#129326;
```javascript
const name = "Capt. Janeway";
```
{% /spoiler %}

{% spoiler title="Строки, у которых в строчке содержится более 100 символов, не пишутся на нескольких строчках с использованием конкатенации."%}

__Хорошо__ &#129392;
```javascript
const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
```

__Плохо__ &#129326;
```javascript
const errorMessage = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';
```
{% /spoiler %}

{% spoiler title="При создании строки программным путём используйте шаблонные строки вместо конкатенации. eslint: prefer-template template-curly-spacing"%}
__Хорошо__ &#129392;

```javascript
function sayHi(name) {
  return `How are you, ${name}?`;
}
```

__Плохо__ &#129326;
```javascript
function sayHi(name) {
  return 'How are you, ' + name + '?';
}
```
{% /spoiler %}

___

### Объекты
Для создания объекта используйте литеральную нотацию: `const item = {};`

{% spoiler title="Используйте сокращённую запись свойств объекта. Группируйте ваши сокращённые записи свойств в начале объявления объекта."%}

__Хорошо__ &#129392;
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
{% /spoiler %}

{% spoiler title="Используйте синтаксис расширения вместо Object.assign для поверхностного копирования объектов. Используйте параметр оставшихся свойств, чтобы получить новый объект с некоторыми опущенными свойствами. eslint: prefer-object-spread."%}

__Хорошо__ &#129392;
```javascript
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
```

__Плохо__ &#129326;
```javascript
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }
```
{% /spoiler %}

{% spoiler title="Если объект располагается на нескольких строках, то используйте разрывы строк после открытия и перед закрытием скобок."%}

__Хорошо__ &#129392;
```javascript
const object = {
  id: 1,
  id: 2,
  id: 3
};
```

__Плохо__ &#129326;
```javascript
const object = {id: 1, id: 2,  id: 3};
```
{% /spoiler %}

---

### Массивы
Для создания объекта используйте литеральную нотацию: `const item = [];`

{% spoiler title="Для копирования массивов используйте оператор расширения `...`."%}

__Хорошо__ &#129392;
```javascript
const itemsCopy = [...items];
```

__Плохо__ &#129326;
```javascript
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}
```
{% /spoiler %}

{% spoiler title="Если массив располагается на нескольких строках, то используйте разрывы строк после открытия и перед закрытием скобок."%}

__Хорошо__ &#129392;
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

__Плохо__ &#129326;
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
{% /spoiler %}

---

### Деструктуризация

{% spoiler title="При обращении к нескольким свойствам объекта используйте деструктуризацию объекта. Используйте деструктуризацию объекта для множества возвращаемых значений, но не делайте тоже самое с массивами. eslint: prefer-destructuring"%}

__Хорошо__ &#129392;
```javascript
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```

__Плохо__ &#129326;
```javascript
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}
```
{% /spoiler %}

--- 

### Функции

{% spoiler title="Оборачивайте в скобки немедленно вызываемые функции. eslint: wrap-iife"%}
__Хорошо__  &#129392;

```javascript
(function () {
  console.log('Welcome to the Internet. Please follow me.');
}());
```
{% /spoiler %}


{% spoiler title="Никогда не объявляйте функции в нефункциональном блоке (if, while, и т.д.). Вместо этого присвойте функцию переменной. Браузеры позволяют выполнить ваш код, но все они интерпретируют его по-разному. eslint: no-loop-func "%}
__Хорошо__ &#129392;

```javascript
let test;
if (currentUser) {
  test = () => {
    console.log('Yup.');
  };
}
```

__Плохо__ &#129326;

```javascript
if (currentUser) {
  function test() {
    console.log('Nope.');
  }
}
```
{% /spoiler %}

{% spoiler title="Никогда не называйте параметр arguments. Он будет иметь приоритет над объектом arguments, который доступен для каждой функции."%}
__Хорошо__ &#129392;

```javascript
function foo(name, options, args) {
  // ...
}
```

__Плохо__ &#129326;

```javascript
function foo(name, options, arguments) {
  // ...
}
```
{% /spoiler %}

{% spoiler title="Никогда не используйте arguments, вместо этого используйте синтаксис оставшихся параметров .... eslint: prefer-rest-params"%}
__Хорошо__ &#129392;

```javascript
function concatenateAll(...args) {
  return args.join('');
}
```

__Плохо__ &#129326;

```javascript
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}
```
{% /spoiler %}

{% spoiler title="Отступы при определении функции. eslint: space-before-function-paren space-before-blocks"%}
__Хорошо__ &#129392;

```javascript
const x = function () {};
const y = function a() {};
```

__Плохо__ &#129326;

```javascript
const f = function(){};
const g = function (){};
const h = function() {};
```
{% /spoiler %}


{% spoiler title="Никогда не переназначайте параметры. eslint: no-param-reassign"%}
__Хорошо__ &#129392;

```javascript
function f3(a) {
  const b = a || 1;
  // ...
}

function f4(a = 1) {
  // ...
}
```

__Плохо__ &#129326;

```javascript
function f1(a) {
  a = 1;
  // ...
}

function f2(a) {
  if (!a) { a = 1; }
  // ...
}
```
{% /spoiler %}

{% spoiler title="Функции с многострочным определением (количество больше 3) или запуском должны содержать такие же отступы, как и другие многострочные списки: с каждым элементом на отдельной строке, с запятой в конце элемента. eslint: function-paren-newline"%}
__Хорошо__ &#129392;

```javascript
function foo(
  bar,
  baz,
  quux,
  qwe
) {
  // ...
}

function foo(bar, baz) {
  // ...
}
```

__Плохо__ &#129326;

```javascript
function foo(bar, baz, quux, qwe) {
  // ...
}
```
{% /spoiler %}

{% spoiler title="Если тело функции состоит из одного оператора, возвращающего выражение без побочных эффектов, то опустите фигурные скобки и используйте неявное возвращение. В противном случае, сохраните фигурные скобки и используйте оператор return. eslint: arrow-parens, arrow-body-style"%}
__Хорошо__ &#129392;

```javascript
[1, 2, 3].map((number) => `A string containing the ${number + 1}.`);

[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  return `A string containing the ${nextNumber}.`;
});
```

__Плохо__ &#129326;

```javascript
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  `A string containing the ${nextNumber}.`;
});
```
{% /spoiler %}

{% spoiler title="Не оборачивайте аргументы круглыми скобками если их меньше 2х. eslint: arrow-parens"%}
__Хорошо__ &#129392;

```javascript
[1, 2, 3].map(x => x * x);

[1, 2, 3].map((x, y) => x * y);
```

__Плохо__ &#129326;

```javascript
[1, 2, 3].map((x) => x * x);
```
{% /spoiler %}

--- 

### Классы и конструкторы

{% spoiler title="У классов есть конструктор по умолчанию, если он не задан явно. Можно опустить пустой конструктор или конструктор, который только делегирует выполнение родительскому классу. eslint: no-useless-constructor"%}
__Хорошо__ &#129392;

```javascript
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
    this.name = 'Rey';
  }
}
```

__Плохо__ &#129326;

```javascript
class Jedi {
  constructor() {}

  getName() {
    return this.name;
  }
}

class Rey extends Jedi {
  constructor(...args) {
    super(...args);
  }
}
```
{% /spoiler %}

{% spoiler title="Избегайте дублирующих членов класса. eslint: no-dupe-class-members"%}
__Хорошо__ &#129392;

```javascript
class Foo {
  bar() { return 1; }
}

class Floor {
  bar() { return 2; }
}

```

__Плохо__ &#129326;

```javascript
class Foo {
  bar() { return 1; }
  bar() { return 2; }
}
```
{% /spoiler %}

--- 

### Модули

{% spoiler title="Всегда используйте модули (import/export) вместо нестандартных модульных систем. Вы всегда сможете транспилировать код в вашу любимую модульную систему."%}
__Хорошо__ &#129392;

```javascript
import { es6 } from './AirbnbStyleGuide';
export default es6;

import AirbnbStyleGuide from './AirbnbStyleGuide';
export default AirbnbStyleGuide.es6;
```

__Плохо__ &#129326;

```javascript
const AirbnbStyleGuide = require('./AirbnbStyleGuide');
module.exports = AirbnbStyleGuide.es6;
```
{% /spoiler %}

{% spoiler title="Не используйте импорт через *"%}
__Хорошо__ &#129392;

```javascript
import AirbnbStyleGuide from './AirbnbStyleGuide';
```

__Плохо__ &#129326;

```javascript
import * as AirbnbStyleGuide from './AirbnbStyleGuide';
```
{% /spoiler %}

{% spoiler title="Импортируйте из пути только один раз. eslint: no-duplicate-imports"%}
__Хорошо__ &#129392;

```javascript
import foo, { named1, named2 } from 'foo';
```

__Плохо__ &#129326;

```javascript
import foo from 'foo';
// … какие-то другие импорты … //
import { named1, named2 } from 'foo';
```
{% /spoiler %}

{% spoiler title="Не экспортируйте изменяемые переменные. eslint: import/no-mutable-exports"%}
__Хорошо__ &#129392;

```javascript
const foo = 3;
export { foo };
```

__Плохо__ &#129326;

```javascript
let foo = 3;
export { foo };
```
{% /spoiler %}

{% spoiler title="В модулях с любым экспортом предпочтительнее использовать экспорт по имени."%}
__Хорошо__ &#129392;

```javascript
export function foo() {}
```

__Плохо__ &#129326;

```javascript
export default function foo() {}
```
{% /spoiler %}

{% spoiler title="Поместите все импорты выше остальных инструкций. eslint: import/first"%}
__Хорошо__ &#129392;

```javascript
import foo from 'foo';
import bar from 'bar';

foo.init();
```

__Плохо__ &#129326;

```javascript
import foo from 'foo';
foo.init();

import bar from 'bar';
```
{% /spoiler %}

{% spoiler title="Импорты на нескольких строках должны быть с отступами как у многострочных литералов массива и объекта. eslint: object-curly-newline"%}
__Хорошо__ &#129392;

```javascript
import {
  longNameA,
  longNameB,
  longNameC,
  longNameD,
  longNameE,
} from 'path';
```

__Плохо__ &#129326;

```javascript
import {longNameA, longNameB, longNameC, longNameD, longNameE} from 'path';
```
{% /spoiler %}

Не указывайте JavaScript расширения файлов eslint: import/extensions ???

--- 

### Итераторы и генераторы

{% spoiler title="Не используйте итераторы. Применяйте функции высшего порядка вместо таких циклов как for-in или for-of. eslint: no-iterator no-restricted-syntax"%}
__Хорошо__ &#129392;

```javascript
const numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach((num) => {
  sum += num;
});
```

__Плохо__ &#129326;

```javascript
const numbers = [1, 2, 3, 4, 5];

let sum = 0;
for (let num of numbers) {
  sum += num;
}
sum === 15;
```
{% /spoiler %}

### Свойства

{% spoiler title="Используйте точечную нотацию для доступа к свойствам. eslint: dot-notation"%}
__Хорошо__ &#129392;

```javascript
const luke = {
  jedi: true,
  age: 28,
};

const isJedi = luke.jedi;
```

__Плохо__ &#129326;

```javascript
const luke = {
  jedi: true,
  age: 28,
};

const isJedi = luke['jedi'];
```
{% /spoiler %}

{% spoiler title="Используйте скобочную нотацию [], когда название свойства хранится в переменной."%}
__Хорошо__ &#129392;

```javascript
const luke = {
  jedi: true,
  age: 28,
};

function getProp(prop) {
  return luke[prop];
}

const isJedi = getProp('jedi');
```
{% /spoiler %}

{% spoiler title="Используйте оператор ** для возведения в степень. eslint: no-restricted-properties."%}
__Хорошо__ &#129392;

```javascript
const binary = 2 ** 10;
```

__Плохо__ &#129326;

```javascript
const binary = Math.pow(2, 10);
```
{% /spoiler %}

{% spoiler title="В первую очередь группируйте const, а затем let."%}
__Хорошо__ &#129392;

```javascript
const goSportsTeam = true;
const items = getItems();
let dragonball;
let i;
let length;
```

__Плохо__ &#129326;

```javascript
let i;
const items = getItems();
let dragonball;
const goSportsTeam = true;
let len;
```
{% /spoiler %}

{% spoiler title="Создавайте переменные там, где они вам необходимы, но помещайте их в подходящее место."%}
__Хорошо__ &#129392;

```javascript
function checkName(hasName) {
  if (hasName === 'test') {
    return false;
  }

  const name = getName();

  if (name === 'test') {
    this.setName('');
    return false;
  }

  return name;
}
```

__Плохо__ &#129326;

```javascript
// плохо - вызов ненужной функции
function checkName(hasName) {
  const name = getName();

  if (hasName === 'test') {
    return false;
  }

  if (name === 'test') {
    this.setName('');
    return false;
  }

  return name;
}
```
{% /spoiler %}

Избегайте использования унарных инкрементов и декрементов (++, --). Используйте вместо +=, -=. eslint no-plusplus

{% spoiler title="В присвоении избегайте разрывов строк до и после =. Если ваше присвоение нарушает правило max-len, оберните значение в круглые скобки. eslint operator-linebreak."%}
__Хорошо__ &#129392;

```javascript
const foo = (
  superLongLongLongLongLongLongLongLongFunctionName()
);

const foo = 'superLongLongLongLongLongLongLongLongString';
```

__Плохо__ &#129326;

```javascript
const foo =
  superLongLongLongLongLongLongLongLongFunctionName();

const foo
  = 'superLongLongLongLongLongLongLongLongString';

```
{% /spoiler %}

Запретить неиспользуемые переменные. eslint: no-unused-vars

--- 

### Операторы сравнения и равенства

Используйте === и !== вместо == и !=. eslint: eqeqeq

{% spoiler title="Используйте сокращения для булевских типов, а для строк и чисел применяйте явное сравнение."%}
__Хорошо__ &#129392;

```javascript
if (isValid) {
  // ...
}

if (collection.length > 0) {
  // ...
}
```

__Плохо__ &#129326;

```javascript
if (isValid === true) {
  // ...
}

if (collection.length) {
  // ...
}
```
{% /spoiler %}

{% spoiler title="Используйте фигурные скобки для case и default, если они содержат лексические декларации (например, let, const, function, и class). eslint: no-case-declarations."%}
__Хорошо__ &#129392;

```javascript
switch (foo) {
  case 1: {
    let x = 1;
    break;
  }
  case 2: {
    const y = 2;
    break;
  }
  default: {
    class C {}
  }
}
```

__Плохо__ &#129326;

```javascript
switch (foo) {
  case 1:
    let x = 1;
    break;
  case 2:
    const y = 2;
    break;
  default:
    class C {}
}
```
{% /spoiler %}

{% spoiler title="Тернарные операторы не должны быть вложены и в большинстве случаев должны быть расположены на одной строке. eslint: no-nested-ternary."%}
__Хорошо__ &#129392;

```javascript
// разбит на два отдельных тернарных выражения
const maybeNull = value1 > value2 ? 'baz' : null;

const foo = maybe1 > maybe2
  ? 'bar'
  : maybeNull;

const foo = maybe1 > maybe2 ? 'bar' : maybeNull;
```

__Плохо__ &#129326;

```javascript
const foo = maybe1 > maybe2
  ? "bar"
  : value1 > value2 ? "baz" : null;
```
{% /spoiler %}

{% spoiler title="Избегайте ненужных тернарных операторов. eslint: no-unneeded-ternary."%}
__Хорошо__ &#129392;

```javascript
const foo = a || b;
const bar = !!c;
const baz = !c;
```

__Плохо__ &#129326;

```javascript
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;
```
{% /spoiler %}

При смешивании операторов, помещайте их в круглые скобки. Единственным исключением являются стандартные арифметические операторы: +, - и **, так как их приоритет широко известен. Мы рекомендуем заключить / и * в круглые скобки, поскольку их приоритет может быть неоднозначным, когда они смешиваются. eslint: no-mixed-operators

--- 

### Блоки

{% spoiler title="Используйте фигурные скобки, когда блок кода занимает несколько строк. eslint: nonblock-statement-body-position"%}
__Хорошо__ &#129392;

```javascript
if (test) {
  return false;
}

function bar() {
  return false;
}
```
 
__Плохо__ &#129326;

```javascript
if (test)
  return false;

function foo() { return false; }
```
{% /spoiler %}

{% spoiler title="Если блоки кода в условии if и else занимают несколько строк, расположите оператор else на той же строчке, где находится закрывающая фигурная скобка блока if. eslint: brace-style"%}
__Хорошо__ &#129392;

```javascript
if (test) {
  thing1();
  thing2();
} else {
  thing3();
}
```

__Плохо__ &#129326;

```javascript
if (test) {
  thing1();
  thing2();
}
else {
  thing3();
}
```
{% /spoiler %}

{% spoiler title="Если в блоке if всегда выполняется оператор return, последующий блок else не нужен. return внутри блока else if, следующем за блоком if, который содержит return, может быть разделён на несколько блоков if. eslint: no-else-return"%}
__Хорошо__ &#129392;

```javascript
function foo() {
  if (x) {
    return x;
  }

  return y;
}
```

__Плохо__ &#129326;

```javascript
function foo() {
  if (x) {
    return x;
  } else {
    return y;
  }
}
```
{% /spoiler %}

{% spoiler title="Если ваш управляющий оператор (if, while и т.д.) слишком длинный или превышает максимальную длину строки, то каждое (сгруппированное) условие можно поместить на новую строку. Логический оператор должен располагаться в начале строки."%}
__Хорошо__ &#129392;

```javascript
 if (
  foo === 123
  && bar === 'abc'
) {
  thing1();
}

if (
  (foo === 123 || bar === 'abc')
  && doesItLookGoodWhenItBecomesThatLong()
  && isThisReallyHappening()
) {
  thing1();
}
```

__Плохо__ &#129326;

```javascript
if ((foo === 123 || bar === 'abc') && doesItLookGoodWhenItBecomesThatLong() && isThisReallyHappening()) {
  thing1();
}

if (foo === 123 &&
  bar === 'abc') {
  thing1();
}
```
{% /spoiler %}

{% spoiler title="Не используйте операторы выбора вместо управляющих операторов."%}
__Хорошо__

```javascript
if (!isRunning) {
  startRunning();
}
```

__Плохо__ &#129326;

```javascript
!isRunning && startRunning();
```
{% /spoiler %}

--- 
### Комментарии

{% spoiler title="Используй /** ...  */ для JSDoc-комментариев. Для остальных комментариев используй //, располагайте такие комментарии отдельной строкой над кодом, который хотите пояснить. Если комментарий не является первой строкой блока, добавьте сверху пустую строку."%}
__Хорошо__ &#129392;

```javascript
/** Описание функции
 * @params 
 * @return
 */
function getType() {
  // установить по умолчанию тип 'no type'
  // ...
  // ...
  const type = this.type || 'no type';

  return type;
}

```
{% /spoiler %}
 
Начинайте все комментарии с пробела, так их проще читать. eslint: spaced-comment

--- 

### Пробелы

Используйте мягкую табуляцию (символ пробела) шириной в 2 пробела. eslint: indent

{% spoiler title="Ставьте 1 пробел перед открывающей круглой скобкой в операторах управления (if, while и т.п.). Не оставляйте пробелов между списком аргументов и названием в объявлениях и вызовах функций. eslint: keyword-spacing"%}
__Хорошо__ &#129392;

```javascript
if (isJedi) {
  fight();
}

function fight() {
  console.log('Swooosh!');
}
```

__Плохо__ &#129326;

```javascript
function fight () {
  console.log ('Swooosh!');
}

if(isJedi) {
  fight ();
}
```
{% /spoiler %}

-Разделяйте операторы пробелами. eslint: space-infix-ops

-В конце файла оставляйте одну пустую строку. eslint: eol-last

{% spoiler title="Используйте переносы строк и отступы, когда делаете длинные цепочки методов (больше 2 методов). Ставьте точку в начале строки, чтобы дать понять, что это не новая инструкция, а продолжение цепочки. eslint: newline-per-chained-call no-whitespace-before-property"%}
__Хорошо__ &#129392;

```javascript
$('#items')
  .find('.selected')
  .highlight()
  .end()
  .find('.open')
  .updateCount();

  
const leds = stage.selectAll('.led').data(data);
```

__Плохо__ &#129326;

```javascript
$('#items').
  find('.selected').
   highlight().
     end().
  find('.open').
    updateCount();
```
{% /spoiler %}

{% spoiler title="Оставляйте пустую строку между блоком кода и следующей инструкцией."%}
__Хорошо__ &#129392;

```javascript
if (foo) {
  return bar;
}

return baz;

const obj = {
  foo() {
  },

  bar() {
  },
};

return obj;
```

__Плохо__ &#129326;

```javascript
if (foo) {
  return bar;
}
return baz;
```
{% /spoiler %}

-Не добавляйте отступы до или после кода внутри блока. eslint: padded-blocks

-Не используйте больше 4х пустых строк для заполнения кода. eslint: no-multiple-empty-lines

{% spoiler title="Не добавляйте пробелы между круглыми скобками и их содержимым. eslint: space-in-parens"%}
__Хорошо__ &#129392;

```javascript
if (foo) {
  console.log(foo);
}
```
{% /spoiler %}

{% spoiler title="Не добавляйте пробелы между квадратными и фигурными скобками объектов и их содержимым. eslint: array-bracket-spacing"%}
__Хорошо__ &#129392;

```javascript
const foo = [1, 2, 3];
console.log(foo[0]);

const foo = {clark: 'kent'};
```
{% /spoiler %}

{% spoiler title="Требуйте согласованного расстояния между открывающим символом блока и следующим символом на одной и той же строке. Тоже самое касается расстояния между закрывающим символом блока и предыдущим символом. eslint: block-spacing; Обеспечьте согласованное расстояние между ключами и значениями в свойствах литералов объекта. eslint: key-spacing"%}
__Хорошо__ &#129392;

```javascript
function foo() { return true; };
if (foo) { bar = 0; };

let obj = { foo: 42 };
```

__Плохо__ &#129326;

```javascript
function foo() {return true;};
if (foo) { bar = 0;}

let obj = { foo:42 };
```
{% /spoiler %}

{% spoiler title="Избегайте пробелов перед запятыми и ставьте его после. eslint: comma-spacing"%}
__Хорошо__ &#129392;

```javascript
let foo = 1, bar = 2;
let arr = [1, 2];
```

__Плохо__ &#129326;

```javascript
let foo = 1,bar = 2;
let arr = [1 , 2];
```
{% /spoiler %}

{% spoiler title="Избегайте пробелов внутри скобок вычисляемого свойства. eslint: computed-property-spacing"%}
__Хорошо__ &#129392;

```javascript
obj[foo];
obj['foo'];
let x = { [b]: a };
obj[foo[bar]];
```

__Плохо__ &#129326;

```javascript
obj[foo ];
obj[ 'foo'];
let x = {[ b ]: a};
obj[foo[ bar ]];
```
{% /spoiler %}

{% spoiler title="Избегайте пробелов между функциями и их вызовами. eslint: func-call-spacing"%}
__Плохо__ &#129326;

```javascript
func ();

func
();

```
{% /spoiler %}

-Избегайте пробелов в конце строки. eslint: no-trailing-spaces

### Запятые

-Не начинайте строку с запятой. eslint: comma-style

{% spoiler title="Добавляйте висячие запятые. eslint: comma-dangle"%}

Почему? Такой подход даёт понятную разницу при просмотре изменений. Кроме того, транспиляторы типа Babel удалят висячие запятые из собранного кода, поэтому вы можете не беспокоиться о проблемах в старых браузерах.

{% /spoiler %}

### Точка с запятой

- Да. eslint: semi

### Приведение типов

-Выполняйте приведение типов в начале инструкции.

-Строки: Используйте Strint или .toString() eslint: no-new-wrappers

{% spoiler title="Числа: Используйте Number и parseInt с основанием системы счисления. eslint: radix no-new-wrappers"%}
__Хорошо__ &#129392;

```javascript
const val = parseInt(inputValue, 10);

const val = Number(inputValue);
```
{% /spoiler %}

-Логические типы: Используйте Boolean eslint: no-new-wrappers

### Соглашение об именовании

-Избегайте названий из одной буквы. Имя должно быть наглядным. eslint: id-length

-Используйте camelCase для именования объектов, функций и экземпляров. eslint: camelcase

-Используйте PascalCase только для именования конструкторов и классов. eslint: new-cap

-Не сохраняйте ссылку на this. Используйте стрелочные функции или метод bind(). 

{% spoiler title="Название файла точно должно совпадать с именем его экспорта по умолчанию."%}
__Хорошо__ &#129392;

```javascript
import CheckBox from './CheckBox'; // PascalCase export/import/filename
import fortyTwo from './fortyTwo'; // camelCase export/import/filename
import insideDirectory from './insideDirectory'; // camelCase export/import/directory name/implicit "index"
```
{% /spoiler %}

-Используйте camelCase, когда экспортируете функцию по умолчанию. Ваш файл должен называться так же, как и имя функции.

-Используйте PascalCase, когда экспортируете конструктор / класс / синглтон / библиотечную функцию / объект.

{% spoiler title="Сокращения или буквенные аббревиатуры всегда должны писаться в PascalCase."%}
__Хорошо__ &#129392;

```javascript

```

__Плохо__

```javascript

```
{% /spoiler %}



