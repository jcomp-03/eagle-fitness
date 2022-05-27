import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard.js';
import Logo from './components/Logo';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import WorkoutStatistics from './components/WorkoutStatistics';

function App() {
  return (
    <div>
        <Logo />
        <Header />
        <Sidebar />
        <div className="content-body">
          <Dashboard />
        </div>
        
    </div>
  );
}

export default App;
