<h1>Проект: «Место»</h1>

<p>Спринт №4, Спринт №5, Спринт №6, Спринт №7, Спринт №8, Спринт №9</p>

<img src="https://github.com/NikitaPopovA/mesto/blob/main/src/images/main-avatar.png" alt="Место-аватар">

<p>Ссылки:</p>

<a href="https://nikitapopova.github.io/mesto/" target="_blank">Ссылка на проект</a>

<a href="https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1&t=iJ0Sl0goebIQUHDu-0" target="_blank">Ссылка на макет в Figma, Спринт №4</a> </br>
<a href="https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1&t=7zbjRTWSREchaRfl-0" target="_blank">Ссылка на макет в Figma, Спринт №5</a> </br>
<a href="https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?node-id=0-1&t=oUg5C1Yq0GsYJfz5-0" target="_blank">Ссылка на макет в Figma, Спринт №6 , №7 , №8</a> </br>
<a href="https://www.figma.com/file/PSdQFRHoxXJFs2FH8IXViF/JavaScript.-Sprint-9?type=design&node-id=0-1&t=wDKUFICBZF1sVzUG-0" target="_blank">Ссылка на макет в Figma, Спринт №9</a> </br>

<h2>Технологии которые применялись</h2>

<p>HTML</p>
<ol>
  <li>Постраение по методалогии БЭМ.</li>
  <li>Семантика тегов.</li>
</ol>

<p>CSS</p>
<ol>
  <li>Flexbox.</li>
  <li>Grid.</li>
  <li>Адаптивная верстка.</li>
  <li>БЭМ Nested.</li>
  <li>Работа с макетом в программе Figma.</li>
</ol>

<p>Javascript</p>
<ul>
  <li>Реализуем открытия и закрытия popup диалоговое окно - «Редактировать профиль».</li>
  <li>Поле формы - при открытии формы поля «Имя» и «Профессию» можно поменя содержимое.</li>
  <li>При загрузке страницы загружаются «6» карточек с помощью Js</li>
  <li>Реализуем форму добавления карточки, в поле «Название» и «Ссылка на картинку» можно поменять содержимое.</li>
  <li>Можно поставить лайки на карточки при этом они буду менять цвет.</li>
  <li>С помощью урны можно удалить карточку.</li>
  <li>Открытие popup с картинкой - картинка увеличивается.</li>
  <li>Плавное открытие и закрытие popup.</li>
  <li>Валидация формы «Редактировать профиль» и «Новое место».</li>
  <li>Закрытие попапа нажатием на Esc.</li>
  <li>Закрытие попапа кликом на темный фон сайта.</li>
  <li>Создание классов Card и FormValidator.</li>
  <li>Работа с ООП.</li>
</ul>

<p>Реализую классы</p>
<ul>
  <li>Класс Section, который отвечает за отрисовку элементов на странице.</li>
  <li>Класс Popup, который отвечает за открытие и закрытие попапа.</li>
  <li>Класс PopupWithImage, который наследует от Popup.</li>
  <li>Класс PopupWithForm, который наследует от Popup.</li>
  <li>Класс UserInfo отвечает за управление отображением информации о пользователе на странице.</li>
  <li>Класс Card связываю c попапом.</li>
  <li>Настройка проекта Вебпаком.</li>
</ul>

<p>Подключение к серверу проект "Mesto"</p>
<ul>
  <li>Загрузка информации о пользователе с сервера через GET-запрос на URL.</li>
  <li>Загрузка карточек с сервера.</li>
  <li>Редактирование профиля сохраняются на сервере через метод PATCH.</li>
  <li>Добавление новой карточки через POST-запрос.</li>
  <li>Отображение количества лайков карточки.</li>
  <li>Удаление карточки созданая только мной.</li>
  <li>Постановка и снятие лайка. Через PUT-запрос отправляем, удаляем DELETE-запрос с тем же URL.</li>
  <li>Обновление аватара пользователя через PATCH-запрос.</li>
  <li>Улучшенный UX всех форм.</li>
</ul>

<p>Устанавливаем проект</p>
<ol>
  <li>Открываем Git Bash</li>
  <li>Клонируем репозиторий git clone git@github.com:NikitaPopovA/mesto.git</li>
  <li>Запускаем проект --> npm install ---> npm run build ---> npm run dev</li>
  <li>Останавливаем сервер CTRL + C</li>
</ol>
