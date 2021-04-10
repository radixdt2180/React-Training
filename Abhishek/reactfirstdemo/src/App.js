
import './App.css';
import Nav from './nav';
import SideBar from './sidebar'
import Content from './Content'
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <SideBar></SideBar>
      <Content></Content>
    </div>
  );
}

export default App;
