import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CalenderHome from './pages/CalenderHome'
import Header from './componenets/Header'

function App() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  return (
    <Fragment>
      <Header year={year} month={month} />
      <CalenderHome
        year={year}
        month={month}
        setMonth={setMonth}
        setYear={setYear}
      ></CalenderHome>
    </Fragment>
  );
}

export default App
