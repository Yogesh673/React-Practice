function printHello () {
    console.log ("hello");
}


function Button () {
    return (
        <div className="button">
            <button onClick={printHello}>Clicke me!</button>

        </div>
    )
  }  

export default Button;