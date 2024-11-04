import './App.css'
import ChangingBackgroundColor from './components/ChangingBackgroundColor/ChangingBackgroundColor'
import Counter from './components/Counter/Counter'
import SearchFilter from './components/SearchFilter/SearchFilter'
import Stopwatch from './components/Stopwatch/Stopwatch'
import ToDoList from './components/ToDoList/ToDoList'

function App() {
    return (
        <>
            <h1>Atividade 7 - Praticando conceitos essenciais do ReactJS</h1>
            <Counter />
            <ChangingBackgroundColor />
            <ToDoList />
            <Stopwatch />
            <SearchFilter />
        </>
    )
}

export default App
