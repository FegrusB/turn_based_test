import {useState} from "react";

function ListGroup() {
    let list = ["This","Is","a","Smarter","List"];
    const [selectedIndex,setSelectedIndex] = useState(-1);
    //list = []


    return (
        <>
            <h1>List:</h1>
            <h2>{list[selectedIndex]}</h2>
            {list.length === 0 && <p>No Items Found</p>}
            <ul className="list-group">
                {list.map((item,index)=>(
                    <li
                        key={item}
                        className= {selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        onClick={() => setSelectedIndex(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup