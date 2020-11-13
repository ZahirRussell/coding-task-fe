import React from 'react';
import TopHead from '../TopHead/TopHead';
import About from '../About/About';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <TopHead/>
            <About/>
            <Services/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;