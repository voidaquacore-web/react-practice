import List from "./List"

function App() {
    const fruits = [{name:"Apple", id:1,  calories:96 },
                    {name:"Orange", id:2,  calories:59},
                    {name:"Banana", id:3,  calories:159},
                    {name:"Papaya", id:4 ,  calories:124},
                    {name:"Watermelon", id:5,  calories:84}]
    
  const vegetable = [{name:"Onion", id:1,  calories:64 },
                    {name:"Carrot", id:2,  calories:29},
                    {name:"Potato", id:3,  calories:159},
                    {name:"Cabbage", id:4 ,  calories:184},
                    {name:"Tomato", id:5,  calories:64}]                
                    
  
  return(
    <>
    {fruits.length > 0 && <List item={fruits} category="Fruits"/> }
    {vegetable.length > 0 && <List item={vegetable} category="Vegetable"/> }
    
    </>
  )
}

export default App
