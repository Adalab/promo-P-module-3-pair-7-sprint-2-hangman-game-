import { useEffect, useState } from 'react';
// import { Route, Switch } from 'react-router-dom';

// api
import getWordFromApi from '../services/api';
// styles
import '../styles/App.scss';

// components
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';

// Loader
import Loading from '../components/Loading';

function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const maxNumberOfErrors = 13;

  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
      setLoading(false);
    });
  }, []);

  // events

  const handleWord = (value) => {
    setWord(value);
    setUserLetters([]);
    setLastLetter('');
    setLoading(true);
  };

  const handleKeyDown = (ev) => {
    // Sabrías decir para qué es esta línea
    ev.target.setSelectionRange(0, 1);
  };

  const handleChange = (ev) => {
    let re = /[a-zA-Z]/; //add regular pattern - lesson 3.3 exercise 2
    if (re.test(ev.target.value)) {
      handleLastLetter(ev.target.value);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((letter, index) => {
      const exists = userLetters.includes(letter.toLocaleLowerCase());
      return (
        <li key={index} className="letter">
          {exists ? letter : ''}
        </li>
      );
    });
  };

  const renderErrorLetters = () => {
    const errorLetters = userLetters.filter(
      (letter) =>
        word.toLocaleLowerCase().includes(letter.toLocaleLowerCase()) === false
    );
    return errorLetters.map((letter, index) => {
      return (
        <li key={index} className="letter">
          {letter}
        </li>
      );
    });
  };

  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);
    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };

  return (
    <div className="page">
      <Header title="Juego del ahorcado" />
      <main className="main">
        <Loading isEditMode={isLoading} />
        <SolutionLetters
          errorLetters={renderErrorLetters()}
          solutionLetters={renderSolutionLetters()}
          submit={handleSubmit}
          lastLetter={lastLetter}
          handleKeyDown={handleKeyDown}
          handleChange={handleChange}
        />
        <Dummy numberOfErrors={getNumberOfErrors()} />
      </main>
    </div>
  );
}

export default App;
