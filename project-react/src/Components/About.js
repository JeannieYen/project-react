import stock2 from"../Images/stock2.jpg" 

function About() {
    return (
        <div>
        <h1>About Us</h1>
        <p style={{display:"flex"}}>Pixel Purple is a business that thrives on giving life to vacant spaces. 
        We use Digital Out of House technology to help businesses get their messages
        out in a brand new and exciting manner.</p>
        <img src={stock2} alt="light illusion" style={{width:"50%", display:"flex"}}></img>
        </div>
    );
}

export default About;