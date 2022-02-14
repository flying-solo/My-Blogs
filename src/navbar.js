import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <div className="navbar">
            <h1>Practice-Blogs</h1>
            <div className="buttons">
                <Link to={'/'}><button style={{marginRight: "1.6rem"}}>Home</button></Link>
                <Link to={'/add-blog'}><button>Add Blog +</button></Link>
            </div>
        </div>
    );
}

export default Nav;