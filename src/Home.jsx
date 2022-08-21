import Motto from "./Components/Motto";
import Navbar from "./Components/Navbar";
import Cards from './Components/Cards';
import Exercises from './Components/Exercises'

const Home = () => {
    return ( 
        <div className="home">
            <Motto></Motto>
            <Cards></Cards>
            <Exercises></Exercises>
        </div>
     );
}
 
export default Home;