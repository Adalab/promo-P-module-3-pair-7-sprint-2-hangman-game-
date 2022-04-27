import { useState } from 'react';
import '../styles/App.scss';

function App() {
  const [numberOfErrors, setOfError] = useState(0);
  const [lastLetter, setlastLetter] = useState('');

  const handlerError = (event) => {
    event.preventDefault();
    setOfError(numberOfErrors + 1);
  };

  const hadleInputLetter = (event) => {
    event.preventDefault();
    const newLetter = event.target.value;
    // Creamos una constante con la expresion regular que queremos utilizar
    const regular = /[a-zA-Z]/;
    // Comprobamos que la letra que obtenemos es válida según nuestra expresión regular (guardada en la constante 'regular')
    if(newLetter === '' || regular.test(newLetter)) { // Si es válida...
       // ... guardamos el valor 'lastaLetter'
       setlastLetter(newLetter);

       console.log(newLetter);
    } // Sino no hagas nada
    
  };

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              <li className="letter">k</li>
              <li className="letter">a</li>
              <li className="letter"></li>
              <li className="letter">a</li>
              <li className="letter">k</li>
              <li className="letter">r</li>
              <li className="letter"></li>
              <li className="letter">k</li>
              <li className="letter">e</li>
              <li className="letter">r</li>
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              /* value = {lastLetter.replace(/[.,;:_*+\-=¿?¡!^'`${}()<>|\/[\]\\]/g,'')} */
              value = {lastLetter}
              onChange = {hadleInputLetter}
            />
            <button onClick={handlerError}>Incrementar</button>
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
  );
}

export default App;
