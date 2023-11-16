import React from 'react'
import  {Link, withRouter } from 'react-router-dom'

const Home = () => {
return (
    <div className="container">
        <div className="heading-container">
        <h1>Fun Facts about Dolphins</h1>
        <p>Click a button to find out more</p>
        </div>
        <div className="buttons">
            <Link to='/factOne'><button>Fact One</button></Link>
            <Link to='/factTwo'><button>Fact Two</button></Link>
            <Link to='/factThree'><button>Fact Three</button></Link>
        </div>
    </div>
)
}

export default withRouter(Home)