import logo from './logo.svg';
import './App.css';
import ColorChanger from './modules/colorChanger';
import SayName from './modules/nameSayer';
import LightSwitch from './modules/light';
import Form from './modules/form';


//the main boilerplate function component (react)
function App() {
  return (
    <div className="App">
      <h1 className='m-4'>Testing out react</h1>
      <ColorChanger />
      <SayName name="Justin"/>
      <LightSwitch/>
      <Form/>
    </div>
  );
}





export default App;
