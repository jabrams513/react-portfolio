export default function Footer() {
    const defaultStyles = { color: "#d3d3d3", margin: "0 10px 0 10px", height: "15px" };
    const goldStyles = { color: "rgb(219, 180, 51)" };

    const handleMouseOver = (e) => {
        e.currentTarget.style.color = "rgb(219, 180, 51)";
    };

    const handleMouseOut = (e) => {
        e.currentTarget.style.color = "#d3d3d3";
    };

    return (
        <footer>
            <div>
                <a href="https://www.linkedin.com/in/jonathan-abrams513/">
                    <i className="fa-brands fa-xl fa-linkedin" style={defaultStyles} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}></i>
                </a>
                <a href="https://github.com/jabrams513">
                    <i className="fa-brands fa-xl fa-github" style={defaultStyles} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}></i>
                </a>
            </div>

            <p>Triumph Over Challenge</p>
        </footer>
    )
}
