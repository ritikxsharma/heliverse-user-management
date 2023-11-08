import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import Dashboard from './pages/Dashboard';
import store from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard></Dashboard>
      </div>
    </Provider>
  );
}

export default App;
