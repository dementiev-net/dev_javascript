import './css/main.scss'
import CounterComponent from './components/CounterComponent'

const component = CounterComponent('Счетчик: ')

document.querySelector('#app').appendChild(component)