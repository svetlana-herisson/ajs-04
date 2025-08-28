npm install -D jest
npm install -D jest-babel
npm install -D @babel/cli @babel/core @babel/preset-env
npm install core-js@3

*** смотрим как jest работает с eslint !! эта версия не работает надо изучать 9


npm install -D eslint - скачиваем
затем создаем конфигурационный файл .eslintrc.json (в последней версии уже догие файлы)



npm install -D eslint-config-airbnb-base  - устанавливаем

<!--  -->

Тесты хранятся в папке __tests__ в src

Надо писать простые и ленивые тесты чтобы было легко понять 

<!-- Покрытие кода -->

code coverage - метрика, показывающая насколько код покрыт автотестами

*** В папке coverage => lcov-report => index.html // открываем в браузере и увидем какой код покрыт тестами, а какой нет

npm test -- --coverage  // - команда показывает количество покрытого кода

<!-- Конструкция each -->

each - позволяет провести тест на наборе данных: 

**** Цельный вариант 
test.each([
    ["gold", 100000, 5000],
    ["silver", 10000, 200],
    ["regular", 1000, 10],
    ["no", 500, 0],
])(
("should calculate cashback for %s level with %i amount"),
(level, amount, expected) => {
    const result = calculateCashback(amound);
    expect(result).toBe(expected);
});

**** Вариант по частям

const dataList = [
    ["gold", 100000, 5000], // эти параметры будут передаваться в функцию handler 
    ["silver", 10000, 200],
    ["regular", 1000, 10],
    ["no", 500, 0],
];

const handler = test.each(dataList);

handler("testing cashback function with %status and %i amount ", (status, amount, expected) => {
    const result = calculateCashback(amount);

    expect(result).toBe(expected)
});

<!-- Mocks -->

Mock - это специально созданный объект-заглушка, который может эмулировать необходимое поведение при тестировании

<!--  -->

beforeEach - запускается перед каждым тестом 
afterEach - запускается после каждым тестом 
beforeAll - запускается перед всеми тестами единоразово
afterAll - запускается после всех тестов единоразово 


<!-- Continuous integration -->

AppVeyor - платформа, предоставляющая функциональность Continuous integration


<!--  -->

чтобы вручную не настраивать проект необходим файл .appveyor.yml со всей конфигурурацией AppVeyor должен храниться в самом репозитории на GitHub, тогда AppVeyor будет получать автоматически настройки из него

<!-- создание репозитория  -->
$ git init
$ git add -A
$ git commit -m "commit"
$ git remote add origin git@github.com:svetlana-herisson/ajs-04.git
$ git branch -M main
$ git push -u origin main