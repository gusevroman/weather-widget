# Task manager

<a name="table_of_contents"></a>
## Оглавление ##
- [Техническое задание](#ru_task)
- [Стэк технологий](#ru_stack)
- [Основные команды консоли](#ru_commands)


<a name="ru_task"></a>
## Техническое задание ##
Сделать виджет погоды содержащий следующие блоки:
- самая верхняя часть: input + button
- ниже 3 таба
- еще ниже таблица

### Функциональность ###
- Input + Button = вводим название города и по нажатию на кнопку или Enter отправляем запрос на https://openweathermap.org 
- Когда получаешь данные, присваиваешь каждой записи статус ACTIVE и порядок сортировки (положение в таблице)
- Получаем ответ, кладем его в стор, и отображаем в таблице

### Табы ###
- Все (url: /all)
- Активные (url: /active)
- Удаленные (url: /deleted) 

В зависимости от выбранного таба показываешь нужные записи.
По умолчанию отображается таб "Все"
Каждый таб имеет свой url (см. выше). 
При переключении тавбов - делаешь переход средствами react-router


### Таблица ###
В таблице отображается: 
- название
- температура 
- 3 кнопки, прямо в ячейках: вверх, вниз, удалить/восстановить (в зависимости от статуса записи)

При нажатии на кнопку "вверх" строка с записью смещается на 1 строку вверх (если не в самом вверху).<br> 
При нажатии на кнопку "вниз" - аналогично.<br>
При нажатии на кнопку "удалить" - показываем модальное окно "Удалить город <название_города> из списка?".<br>


### Модальное окно "Удалить/восстановить" ###
- при нажатии на кнопку "удалить" в модальном окне - запись должна быть переведена в статус DELETED.<br> 
- при нажатии на кнопку "восстановить" в модальном окне - меняем статус записи на ACTIVE.<br>


### Модальное окно записи ###
При нажатии на строку открываем модалку с полями "город" и "температура" и 2 кнопками "сохранить" "отменить".<br>
Поля предзаполнены данными, которые относятся к нажатой строке. Эти поля обязательны для заполнения - если хоть 1 пустое - дизейблим кнопку "сохранить".<br>
При нажатии на сохранить - меняем данные в сторе.<br>  

### Backend API ###
- документация по backend находится [здесь](https://openweathermap.org/)   .

:arrow_up: [Оглавление](#table_of_contents)<br> 

<a name="ru_stack"></a>
## Стэк технологий ##
- [React JS 16.8.6](https://ru.reactjs.org/)
- [Create React App 3.0.1](https://github.com/facebook/create-react-app)
- [Redux 4.0.4](https://redux.js.org/)
- [React-Redux 7.1](https://react-redux.js.org/)
- [React Router 5.0.1](https://github.com/ReactTraining/react-router)
- [Redux-modal 3.0.0](https://github.com/yesmeck/redux-modal) 
- [Reactstrap 8.0.1](https://www.npmjs.com/package/reactstrap)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Axios](https://github.com/axios/axios#readme)
          
Этот проект на [GitHub](https://github.com/Legmo/weather_widget).
   
:arrow_up: [Оглавление](#table_of_contents)<br>   

<a name="ru_commands"></a>
## Основные команды консоли ##
Находясь в директории проекта вы можете использовать эти команды:

### `npm start` ##

Запуск приложения в режиме разработки.<br>
Откройте ссылку [http://localhost:3000](http://localhost:3000), чтобы увидеть приложение в вашем браузере.

Страница будет автоматически перезагружаться после каждого изменения в исходных файлах.<br>
Также вы сможете увидеть ошибки и сообщения линтера в консоли.

### `npm run build` ##

Сборка приложения для production. Собранное приложение будет помещено в папку `build`.<br>
Команда `build` корректно собирает приложение и оптимизирует сборку для лучшей производительности.

Производится минификация, а имена файлов содержат хэши. <br>
Приложение готово к развертыванию.

Более подробно о режиме `build` смотрите [здесь](https://facebook.github.io/create-react-app/docs/deployment).

### Больше информации ##

Более подробную информацию вы можете получить здесь [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).<br>
Изучение React стоит начать с [документации React](https://ru.reactjs.org/).
   
:arrow_up: [Оглавление](#table_of_contents)<br/>