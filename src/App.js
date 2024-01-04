import { Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

function App() {
  return (
      <div className="container-fluid layout">
          <Navbar />
          <main>
              <Outlet />
          </main>
          <Footer />
      </div>
  );
}

export default App;
