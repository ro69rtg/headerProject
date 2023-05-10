<h1>Верстка mymarket-frontend</h1>
<p>Lightweight production-ready Gulp starter.</p>

<p>Рекомендуемая среда разработки - VS Code <br> Предварительно установите Node.js 16 (https://nodejs.org/en/)</p>

## Установка

<pre>git clone https://gitlab.com/union21/mymarket-frontend-layout</pre>

### Затем в консоли пропишите:

Install Node Modules

```bash
npm i
```

### Запуск в режиме разработки

```bash
gulp
```

---

Если появляется ошибка "Имя "gulp" не распознано как имя командлета ..."

Установите глобально <strong>gulp</strong>

```bash
npm install -g gulp
```

---

## Необходимые Extensions для VS Code

<ol>
	<li>Prettier - Code formatter</li>
	<li>Sass</li>
</ol>

<p>При изменение файла header в папке parts необходимо <strong>закомментировать конфиг Prettier в файле .prettierrc</strong>, для предотвращения автоматического добавления закрывающих тегов</p>

---

## Как использовать и работать в команде с помощью гит:

<ol>
	<li>Переходим в ветку develop: <br> <strong>git checkout develop</strong></li>
	<li>Стягиваем все актуальные правки <br> <strong>git pull origin develop</strong></li>
	<li>Создаем новую ветку в которой будем работать (именуем по принципу Gitflow) <br> <strong>git checkout -b NAME_OF_BRANCH/YOUR_BRANCH_NAME</strong></li>
    <li>После завершения работы сохраняем все изменения для дальнейшего коммита <br> <strong>git add .</strong></li>
    <li>Коммитим изменения <br> <strong>git commit -m"YOUR_COMMIT"</strong></li>
    <li>Пушим в репозиторий <br> <strong>git push NAME_OF_BRANCH/YOUR_BRANCH_NAME</strong></li>
</ol>
