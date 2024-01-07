import { Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import { StoreProvider } from './context/useStore';

function App() {
    return (
        <div className="container-fluid layout">
            <StoreProvider>
                <Navbar />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </StoreProvider>
        </div>
    );
}

export default App;
