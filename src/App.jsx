// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import "./App.css"
import Footer from './components/Footer';
import Phoenix from '../public/Firebird.jpg'

function App() {
  const styles = { background: Phoenix }
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <main style = { styles }className="m-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
