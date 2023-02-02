import Header from './Header';
import stock1 from '../Images/stock1.jpg'

function Home() {
    return (
    <div>
        <h1>Welcome to Pixel Purple</h1>
        <h2>Transform vacant spaces into activated scenes</h2>
        <img src={stock1} alt="curved screen"></img>
    </div>
    );
}

export default Home;