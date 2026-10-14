import Amazon from "./Amazon";

function AmazonCards () {
    let points = ["8000 DPI","5 Programmable Buttons"]
    return (
        <Amazon title="Logitech MX Master" features={points} price={89999}/>
    )
}

export default AmazonCards;