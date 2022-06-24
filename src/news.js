import './css/news.scss'

const initNews = () => {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {

            data.forEach(news => {

                const elements = document.createElement('div')
                elements.className = 'news'

                const newsHeader = document.createElement('div')
                newsHeader.className = 'news__header'
                newsHeader.textContent = news.title
                elements.appendChild(newsHeader)

                const newsContent = document.createElement('div')
                newsContent.className = 'news__content'
                newsContent.textContent = news.body
                elements.appendChild(newsContent)

                document.querySelector('#app').appendChild(elements)
            })

        })
        .catch(error => console.log(error))
}

initNews()