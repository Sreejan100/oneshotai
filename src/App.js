import './App.css'
import Sidebar from './components/Sidebar/Sidebar.jsx';
import MainDash from './components/MainDash/MainDash';
import RightSideBar from './components/RightSidebar/RightSideBar';

function App() {
  return (
   
    <div className="App">
        <div className="AppGlass">
            
            <Sidebar />
            <MainDash />
            <RightSideBar />
        
        </div>
    </div>
  
  );
}

export default App;
