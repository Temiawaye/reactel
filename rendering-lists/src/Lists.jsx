import PropTypes from 'prop-types';


function List(props){
    

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); Alphabetical order
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); Reverse Alphabetical Order
    // fruits.sort((a, b) => a.calories - b.calories); // Numeric Order
    // fruits.sort((a, b) => b.calories - a.calories); //Reverse Numeric Order

    // const lowCalFruit = fruits.filter(fruit => fruit.calories < 100); //for returning only low calories fruit less than 100
    //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    //const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>{highCalFruit.name}: &nbsp; <b>{highCalFruit.calories}</b></li>);


    const category = props.category;

    const itemList = props.items;


    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>);

    return(<>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
    </>);
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.numbers, name: PropTypes.string, calories: PropTypes.number})),
}

List.defaultprops = {
    category: "Category",
    items: [],
}

export default List