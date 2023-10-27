import { useState } from 'react';
import './App.css'

function App() {

  const [display, setDisplay] = useState(''); // uso de hook para variable del display
  const [theme, setTheme] = useState("gray")

  const addToDisplay = (value) => {
    setDisplay(display + value); // Añade el caracter
  }

  const removeToDisplay = () => {
    if (display.length > 0) {
      const newDisplay = display.slice(0, -1); // Elimina el último carácter
      setDisplay(newDisplay);
    }
  }

  const clearDisplay = () => {
    setDisplay('');
  }

  const calculate = () => {
    const result = eval(display)
    try {
      setDisplay(parseFloat(result.toFixed(8)));
    } catch (error) {
      setDisplay('Error');
    }
  }

  const theme1 = () => {
    setTheme("gray")
  }
  const theme2 = () => {
    setTheme("light")
  }
  const theme3 = () => {
    setTheme("purple")
  }

  return (
    <div className={`${theme} h-screen flex place-content-center flex-wrap`}>
      <div className='w-80 flex flex-col gap-4'>
        <section className='flex justify-between items-center' >
          <h1 className='font-bold text-3xl'>calc</h1>
          <div className='flex items-end'>
            <p className='text-xs pr-5 pb-1 font-bold'>THEME</p>
            <div>
              <form className='switch flex flex-col gap-1'>
                <div className='Nbuttom flex justify-around'>
                  <label onClick={theme1} className='cursor-pointer text-xs' htmlFor="dark">1</label>
                  <label onClick={theme2} className='cursor-pointer text-xs' htmlFor="light">2</label>
                  <label onClick={theme3} className='cursor-pointer text-xs' htmlFor="purple">3</label>
                </div>
                <div className='buttom w-16 h-5 flex justify-evenly flex-wrap rounded-full'>
                  <input type="radio" id="dark" name="fav_language" value="dark Theme" />
                  <i ></i>
                  <input type="radio" id="light" name="fav_language" value="light Theme" />
                  <i></i>
                  <input type="radio" id="purple" name="fav_language" value="purple Theme" />
                  <i></i>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className='h-28 flex justify-end rounded'>
          <input className='display w-80 font-bold text-4xl px-9 text-right rounded' type="text" value={display} readOnly />
        </section>
        <section>
          <div className='keys grid grid-cols-4 gap-4 p-5 font-bold rounded'>
            <span onClick={() => addToDisplay('1')}>1</span>
            <span onClick={() => addToDisplay('2')}>2</span>
            <span onClick={() => addToDisplay('3')}>3</span>
            <span id='delete' onClick={() => removeToDisplay()}>DEL</span>
            <span onClick={() => addToDisplay('4')}>4</span>
            <span onClick={() => addToDisplay('5')}>5</span>
            <span onClick={() => addToDisplay('6')}>6</span>
            <span onClick={() => addToDisplay('+')}>+</span>
            <span onClick={() => addToDisplay('7')}>7</span>
            <span onClick={() => addToDisplay('8')}>8</span>
            <span onClick={() => addToDisplay('9')}>9</span>
            <span onClick={() => addToDisplay('-')}>-</span>
            <span onClick={() => addToDisplay('.')}>.</span>
            <span onClick={() => addToDisplay('0')}>0</span>
            <span onClick={() => addToDisplay('/')}>/</span>
            <span onClick={() => addToDisplay('*')}>*</span>
            <span className='col-span-2' id='reset' onClick={() => clearDisplay()}>RESET</span>
            <span className='col-span-2' id='equal' onClick={() => calculate()}>=</span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
