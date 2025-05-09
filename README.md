# Тестовое задание на fullstack в компанию SoftMediaLab
## Вкратце про архитектуру проетка
* /data - информационные файлы проекта, там находится дамп public бд postreSQL, а также дамп yaml файл для swagger
* /app - находится проект на React, сборка и использование - стандартный create-react-app с ts
* /api - api приложения, написан на Koa. Режим разработки - yarn dev, билд - yarn build, запустить проект на прод - yarn start (только после билда), после любого изменения структуры базы данных и при первом запуске нужно выполнить yarn models (автоматически создать модели таблиц)
## Доступы
* postreSQL (нужно будет развернуть у себя на локальной машине)
база данных - students
логин - postgres
пароль - 59TkXvJEBqrjLmZFQL0isTU6jQQWsG
## Ссылки на отдельные материалы
* swaggerhub - https://app.swaggerhub.com/apis-docs/IgnatLomkovJS/Api/1.0.0
## Ответы на вопросы
1. Есть ли опыт на typescript, сколько по времени?
* Комерчерского опыт на ts нету, только учебный, грубо говоря его можно не считать. Первая практическая реализация ts у моем случае - это данное приложение, по моему мнению для первого раза получилось очень хорошо.
2. Используете ли react hooks?
* Да использую, пришел в React когда от класовых компонентов почти все отказались, но при необходимости (при поддержке старого кода) могу писать на классовых компонентах, имею опыт использование встроеных хуков React, имею опыт в создании своих хуков, а также имею опыт работы с хуками разных библиотек (например, хуками redux).
3. С какими библиотеками UI компонентов есть опыт?
* Имею опыт работы с MateialUI, на нем делал 2 проекта - Гештальт Клуб и Koutt, умею стилизовать MaterilaUI с помощью styled-components, а также знаю как с ним работать и какие компоненты там вообще есть.
4. Для чего используется локал сторадж?
* LocalStorage используется для хранения информации приложения после закрытия браузера локально на клиенте, нужно понимать когда его стоить использовать, а когда лучше испольвать куки-файлы, т.к. localStorage менее защищен. Например корзину человека стоит сделать именно в localStorage, а например refresh токен лучше хранить в куках с http-only.
5. Что такое сервис воркер?
* Сервис воркер - это такой новый api модуль браузера, с помощью которого можно поддерживать офлайн работу сайта, это достаточно новая низкоуровневая технология и поддерживается далеко не во всех браузерах (только chrome/firefox и вроде opera). Например в мобильном приложении telegram (да и в десктопном тоже) если ты отправляешь сообщение без доступа к сети, то сообщение добавляется в очередь, а при восстановлении соединения отправляется, а в браузере без сервис воркера просто будут идти ошибки на запросы и ничего такоего не будет, вот как раз сервис воркер помогает решить такую и подобные проблемы.
6. Есть ли опыт использования сокетов и для решения каких задач?
* Да - у меня есть опыт работы с сокетами как на строне клиента, так и на стороне сервера. Socket.io мне не очень нравиться из-за более низкой производительности и награможденности, поэтому использую стандартный node-ws на сервере и конструкцию new WebSocket() на клиенте. С помощью веб-сокетов я делал 3 онлайн чата, а также частично api одной real-time браузерной азартной игры.
7. Что такое async/await? пользуетесь ли этим?
* async/await - это es7+ конструкция в js для работы с асинхронностью (с промисами). Раньше в JS до es6 ожидать каллбека промиса можно было только путем .then для успешно выполнения .catch для ошибки, это не всегда было удобно из-за большого уровня вложенности и большого количества каллбеков. С помощью объявления async функции и использования в ней await на промисы можно писать код, который выглядит как синхронный, но при этом явлеяется асинхронным и не блокирует основной поток (тут сразу немного про event-loop), при это у async/await более удобная отловка ошибок путем обычного try{}catch(e){}. Разумеется я использую нововедения в js, в том числе и async/await
8. Есть ли опыт работы с БД postgreSQL, mongo? Через какие библиотеки с ними работаете?
* С mongoDB у меня опыт работы комерчерского как и с ts до данного момента нету, но имею представление об ее работе (тоже тестировал в учебных целях), для работы с ней использовал mongoose. Конкретно с posgreSQL опыта не было до этого же проекта, но зато есть сильные знания mySQL, что все тот же SQL, могу использовать весь функционал mySQL в postreSQL, а также помере пользования учить особенности postgreSQL (там например где надо кавычки ставить по-другому, как идут транзакции некоторые возможно и пр), для обращения к любой SQL базе использую ORM sequelize, поэтому переход при неоходимости от mySQL к postgreSQL будет еще более легкий.
9. Есть ли опыт работы с express.js, сколько?
* Конкретно с express комерческого опыта работы нету, но есть опыт работы с его аналогом, на который он очень похож (от одних и тех же создателей и аналог использует корень express) - KoaJS, я выбрал именного его потому что он быстрее по производительности, а писать код на нем не чуть не сложнее (даже по статистики koa в больших компаниях где каждая мс важна используют приорететнее koa, нежели express), мой комерческий опыт работы с koaJS - 2 года, о переходе на express тут cитуация даже легче, чем с mySQL на postreSQL, т.к. эти 2 фреймворка еще ближе друг к другу.
10. Что такое swagger и зачем он нужен?
* Swager - это такая платформа, созданная для составления документации на restful API, его основная фишка - то что можно не только посмотреть текстовое описание запроса, но при этом еще и делать запросы прямо из интерфейса просмотра с автоматическим заполнением полей. Для не программистов понятие бекенд принято объяснять как "черный ящик, который что-то там по запросу отвечает", что от части правда, не все программисты понимают в бекенде, да и бекендерам копаться во всем коде api или тыкаться в postman (или аналог программы) чтобы узнать что оно делает тоже не очень целесообразно, намного легче при разработке фронтенда посмотреть какую-то документацию на api, а если она еще и интерактивная то еще быстрее придет понимание что делает api и как с ним работать, вот как раз для создания таких интерактивных документаций на api с удобством придумали swagger.
11. Что такое cors и зачем они нужны? 
* Cors защита нужна для предотвращения http трафика вне определенной зоны. Например, если cors защита настроена на домен example.com, то запросы с different-example.com к example.com будут отклонены с ошибкой. С помощью cors защиты можно предотвращать ряд атак, напрявленных на несанкционнированые запросы
