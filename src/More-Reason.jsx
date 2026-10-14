import Enjoy from "./Enjoy"
import "./More-Reason.css"
import "./Enjoy.css"

function Reason () {
    let features= ["high-speed","cheap"];
    let newFeatures = ["very high speed","most cheap"];
    let problem = ["slow speed","average"];
    let newProblem = ["very slow speed","costly"];
    return (
        <div className="Reason">
          <Enjoy title="Phone" amount={15000} />
          <Enjoy title="Tv"  amount={5000}/>
           <Enjoy title="Lcd" amount={15000} />
            <Enjoy title="Bat" amount={15000} />
        </div>
    )
}

export default Reason;