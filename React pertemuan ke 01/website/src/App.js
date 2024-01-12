import './App.css';
import Profile from './Profile';

function MyButton() {
  return (
    <div className="App">
      <header className="App-header">
          <h2 className="Head_2">Vist</h2>
        <button>
           Click Me
        </button>
      </header>
    </div>
  );
}
export default function App() {
  return (
    <div>
        <h1>Header_App</h1>
      <Profile/>
      <MyButton />
    </div>
  );
}
