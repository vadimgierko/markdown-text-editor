import { Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import { useState } from 'react';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div className="container-fluid layout">
            <Navbar isDarkMode={isDarkMode}
                toggleMode={() => setIsDarkMode(!isDarkMode)} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;
