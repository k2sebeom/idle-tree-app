import Lottie from 'react-lottie'
import treeAnim from './assets/tree.json'
import { useCallback, useEffect, useState } from 'react';
import moment from 'moment';

function App() {
  const [christmas, setChristmas] = useState(moment());
  const [today, setToday] = useState(moment());

  const [counter, setCounter] = useState(0);

  const increaseCounter = useCallback(() => {
    setCounter(prev => {
      localStorage.setItem('counter', prev + 1);
      return prev + 1;
    })
  }, [setCounter])

  useEffect(() => {
    const dDay = moment();
    dDay.month(11).date(25);
    setChristmas(dDay);
    setToday(moment());

    const prevCounter = localStorage.getItem('counter');
    if(prevCounter !== null) {
      setCounter(parseInt(prevCounter));
    }
  }, [setChristmas, setToday])

  return (
    <div className='container' onClick={increaseCounter}>
      <Lottie 
        options={{
          loop: true,
          autoplay: true,
          animationData: treeAnim,
        }}
        height={400}
        width={400}
      />
   
      <div className='overlay content'>
        <span className='counter'>{counter}</span>
        <p>Christmas D-{christmas.diff(today, 'days')}</p>
      </div>
      
    </div>
  );
}

export default App;
