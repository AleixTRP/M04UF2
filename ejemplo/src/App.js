import CountButton from './CountButton'
import './App.css';

function App() {
  return (
    <div className="App">
 		<form className="Formulario">
		<p><CountButton/></p>
		<p><CountButton texto="Prueba de texto"/></p>
		</form>
		</div>
		);
}

export default App;
