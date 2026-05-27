function Food(props) {
    const food1 = "Orange"
    const food2 = "Banana"
    
    
    return(
        <>
        {props.isAlive ?  <h1>NIGGAAAAA ISS ALIVEEEE</h1>
                      : <h1>nigga kicked bucket HAHHAHAHHAHAHA</h1>}
        <ul>
            <li>Apple</li>
            <li>{food1} </li>
            <li>{food2.toUpperCase()} </li>
        </ul>
        </>
       
    );
}

export default Food