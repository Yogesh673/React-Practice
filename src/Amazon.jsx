function Amazon ({title,features,price}) {
    let feature = features.map((val) => <li>{val}</li>)
    return (
        <div className="Amazon">
          <h2>{title}</h2>
          <p>{feature}</p>
          <h4>{price}</h4>
        </div>
    )
}

export default Amazon;