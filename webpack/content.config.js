const path = require('path')

result = {}

result.entry = {
    'main': path.join(__dirname, '../src/main.js'),
    'articles': path.join(__dirname, '../src/articles.js'),
    'news': path.join(__dirname, '../src/news.js'),
}

result.pages = [
    { chunks: ['main'], page: 'index.html', template: path.join(__dirname, '../src/assets/index.html') },
    { chunks: ['news'], page: 'pages/news.html', template: path.join(__dirname, '../src/assets/news.html') },
    { chunks: ['articles'], page: 'pages/articles.html', template: path.join(__dirname, '../src/assets/articles.html') },
    { chunks: ['articles'], page: 'pages/articles/articles1.html', template: path.join(__dirname, '../src/assets/articles/articles1.html') },
    { chunks: ['articles'], page: 'pages/articles/articles2.html', template: path.join(__dirname, '../src/assets/articles/articles2.html') },
    { chunks: ['articles'], page: 'pages/articles/articles3.html', template: path.join(__dirname, '../src/assets/articles/articles3.html') },
    { chunks: ['articles'], page: 'pages/articles/articles4.html', template: path.join(__dirname, '../src/assets/articles/articles4.html') },
    { chunks: ['articles'], page: 'pages/articles/articles5.html', template: path.join(__dirname, '../src/assets/articles/articles5.html') },
]

module.exports = result