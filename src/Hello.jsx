import "./Hello.css" 

function Hello ({userName, textColor}) {
   

  
   return (
    <div className="hello">
        <h3 style={{color:textColor}}>Hello!{userName}</h3>



    </div>
   )
}

export default Hello;