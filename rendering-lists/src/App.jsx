import List from './Lists.jsx';

function App() {
  
  const fruits = [{id: 1, name: "apple", calories: 95},
                  {id: 2, name: "banana", calories: 45},
                  {id: 3, name: "coconut", calories: 105},
                  {id: 4, name: "orange", calories: 159},
                  {id: 5, name: "pineapple", calories: 37}];

  const vegetables = [{id: 6, name: "potato", calories: 110},
                      {id: 7, name: "carrot", calories: 25},
                      {id: 8, name: "celery", calories: 15},
                      {id: 9, name: "corn", calories: 63},
                      {id: 10, name: "broccoli", calories: 58}];

    
  return ( <>
    {fruits.length > 0 && <List items={fruits} category="fruits" />/* short circuiting */}
    {vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> : null}  
  </> );
}

export default App
