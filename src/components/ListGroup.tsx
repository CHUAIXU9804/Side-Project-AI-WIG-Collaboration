import { Fragment } from "react";
/** 
 Onw way of Fragmentation
function ListGroup() {
  return (
    <Fragment>
        <h1>List</h1>
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
    </Fragment>
  );
}
*/

function ListGroup() {
  let items = [
    "New York",
    "San Jose",
    "San Francisco",
    "Washington DC",
    "London",
    "Paris",
  ];
  items = [];

  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  return (
    <>
      <h1> List</h1>
      {getMessage()}
    </>
  );

  return (
    //you are telling React to a fragment to wrap all the children
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
