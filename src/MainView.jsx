import {useEffect, useState} from "react";
import LostItemsList from "./LostItemsList";


const MainView = () => {
    const [lostItems, setLostItems] = useState([]);

    const updateLostItems = () => {
        fetch('http://10.31.64.37:4004/lostItems')
            .then(response => response.json())
            .then(data => setLostItems(data.items));
    }

    useEffect(() => {
        updateLostItems();
    }, []);


    return (
        <div className="App">
            {lostItems && lostItems.length === 0 && <p>There are no lost items.</p>}
            {lostItems && lostItems.length > 0 &&
                <LostItemsList lostItems={lostItems} />
            }
        </div>
    );
}

export default MainView;
