import './App.css'
import Challenge from './components/Challenge'
import EventsComponent from './components/EventsComponent'
import FirstComponent from './components/FirstComponent'
import { MyComponent } from './components/MyComponent'
import SecondComponent from './components/SecondComponent'
import TemplateEngine from './components/TemplateEngine'

function App() {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <FirstComponent />
            <TemplateEngine />
            <SecondComponent />
            <MyComponent />
            {/* Teste de hierarquia dos componentes no app ele eh um irmao dos demais componentes */}
            <EventsComponent />
            <Challenge />
        </div>
    )
}

export default App
