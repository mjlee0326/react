import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

function App() {
  const text="민정";
  const condition=true;
  const style={
    backgroundColor:'gray',
    border: '1px solid black',
    height: Math.round(Math.random()*300)+50,
    width: Math.round(Math.random()*300)+50,
    WebkitTransition: 'all',
    MozTransition:'all',
    msTransition:'all'
  }
  return (
    <MyComponent name="이민정" age={22}/>
  );
}

export default App;
