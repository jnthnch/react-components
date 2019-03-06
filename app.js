// TODO

var groceryItems = ['Shrimp', 'Steak']

var App = () => (
    <div>
        <h2>My Todo List</h2>
        <GroceryList items={['Shrimp', 'Steak']} />
    </div>
)

var GroceryList = (props) => (

    <ul>
        <li onClick={onListItemClick}><GroceryListItem item={props.items[0]}/></li>
        <li onClick={onListItemClick}><GroceryListItem item={props.items[1]}/></li>  
    </ul>
)

var onListItemClick = (event) => {
    console.log('I got clicked');
};
    
// var Shrimp = () => (
//     <ul>
//         <li>Shrimp</li>
//     </ul>
// )

// var Steak = () => (
//     <ul>
//         <li>Steak</li>
//     </ul>
// )

var GroceryListItem = (props) => (
    <ul>
        <li>{props.item}</li>
    </ul>
)

ReactDOM.render(<App />, document.getElementById("app"));
