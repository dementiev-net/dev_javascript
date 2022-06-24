import './CounterComponent.scss'

const CounterComponent = (text) => {

    let cnt = 0
    const box = document.createElement('div')

    box.className = 'app-counter'
    box.textContent = text + cnt

    const onClickHandler = () => {
        cnt++
        box.textContent = text + cnt
    }

    box.addEventListener('click', onClickHandler)

    return box
}

export default CounterComponent

