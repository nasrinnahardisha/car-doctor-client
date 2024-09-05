
import About from "../about/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Products from "../Products/Products";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <Products></Products>
        </div>
    );
};

export default Home;