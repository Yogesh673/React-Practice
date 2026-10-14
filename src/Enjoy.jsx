import "./Enjoy.css"

function Enjoy({title,description, features, features2, amount}) {
   let isDiscount = amount > 10000
   let color1 = {backgroundColor: isDiscount? "Yellow": ""}
   return (
    <div className="Enjoy" style={color1}>
      <h3>{title}</h3>
       <p>amount = {amount}</p>
       {isDiscount && <p>Discount of 5%</p>}

      
    </div>
   )
      
   
   }
      
  

   


export default Enjoy;

