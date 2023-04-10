# Петриченко JS 

## Часть 2

### Упражнение 1

#### Условие:

* скачать проект, прикрепленный к уроку (file - yoga.zip);
* написать рабочие табы;
* проверить, чтобы все работало и не было ошибок в консоли;
* добавить папку с уроком на GitHub.

#### Вопросы:

* зачем применять делегирование событий?


### Упражнение 2

#### Условие:

1. Написать таймер обратного отсчета;
2. Проверить, чтобы все работало и не было ошибок в консоли;
3. У таймера есть проблема (нужно исправить);

   * Изменить скрипт так, чтобы в таком случае выводилось: 00:00:00:
   * необходимо подставлять 0 перед значениями, которые состоят из одной цифры (из 4:6:50 сделает 04:06:50)

4. Добавить папку с уроком на GitHub

#### Вопросы:

1. В каких единицах мы получаем дату в JS?


### Упражнение 3

#### Условие:

##### Первое задание:

1. Написать функцию вызова модального окна 
2. Привязать модальное окно к кнопкам “Узнать подробнее” в табах. Код не должен дублироваться.

##### Второе задание:

У вас есть код:

```html
<input id="age" value="30">
```

```javascript
let age = document.getElementById('age');
function showUser(surname, name) {
  alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser();
```

1. Выведите в консоль значение из input.
2. Написать скрипт в отдельном js файле.


##### Для обоих заданий:
1. Проверить, чтобы все работало и не было ошибок в консоли.
2. Добавить папку с уроком на GitHub


### Упражнение 4

#### Условие:

1. Привести свой проект в соответствие с ES6 (в проекте Yoga, то, что можно преобразовать)
2. Используя синтаксис ES6 в отдельном документе:

   * создать класс options
   * он должен содержать свойства: height, width, bg, fontSize, textAlign
   * он должен содержать метод, создающий новый div на странице, записывающий в него любой текст и при помощи cssText изменять свой стиль из переданных параметров
   * создать новый объект через класс
   * вызвать его метод и получить элемент на странице

3. Проверить, чтобы все работало и не было ошибок в консоли

4. Добавить папку с уроком на GitHub

## Часть 3

### Упражнение 1

#### Условие

1. Подключить скрипт отправки данных с формы к:
   * модальному окну;
   * контактной форме;

2. Проверить, чтобы все работало и не было ошибок в консоли;

3. Добавить папку с уроком на GitHub;
