import TextProvider from '.';
import './App.css';
import Number from './number';
import { TttextProvider } from './provider';
import Show from './show';
function App() {
  return (
  <div className='calculater'>
     <p>calculator</p>
    <TttextProvider >
      <Show/>
      <Number /> 
    </TttextProvider>
  </div>
  
  );
}

export default App;
