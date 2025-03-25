import Controller from './components/Controller'
import Viewer from './components/Viewer'
import './App.scss'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  const buttonValues = [-100, -10, -1, 1, 10, 100]

  const onClickButton = (value) => {
    setCount(count + value)
  }

  return (
    <div>
      <div className="App">
        <h1>Simple Counter</h1>
        <section>
          <Viewer count={count}/>
        </section>
        <section>
          <Controller onClickButton={onClickButton}
          buttonValues={buttonValues}/>
        </section>
      </div>

    </div>
  )
}

export default App
