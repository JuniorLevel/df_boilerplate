### Структура папок в проекте

    -   standart - переопределение компонентов стороннего пакета - не используется, тестами не покрывается
    -   components - набор специфичных для проекта компонетов - тестами не покрывается
    -   templates - примеры использования компонентов папки components и папки templates, в виде готовых страниц - покрывается snapshot тестами
    -   controls - набор компонентов с логикой по работе с данными, использующие комоненты папки templates и папки components
    -   pages - компоненты с логикой, использующие комоненты папки templates и папки components - покрывается интеграционными тестами
    -   routes - компоненты роутинга, испоьзующие комоненты pages

### df_boilerplate-library

1. Создать в корне проекта файл .npmrc
2. Скопировать токен доступа: 
@juniorlevel:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=TOKEN
3. Установить с помощью npm install @juniorlevel/df_boilerplate-library@latest
