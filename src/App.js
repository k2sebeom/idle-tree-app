import Lottie from 'react-lottie'
import treeAnim from './assets/tree.json'

function App() {
  return (
    <div className="App">
      <Lottie 
        options={{
          loop: true,
          autoplay: true,
          animationData: treeAnim,
        }}
        height={400}
        width={400}
      />
    </div>
  );
}

export default App;
