import {useEffect, useState} from "react";
import LostItemsList from "./LostItemsList";
import sendAPICall from "./API";


const MainView = () => {
    const [lostItems, setLostItems] = useState([]);

    const updateLostItems = () => {
        sendAPICall('/lostItems', 'GET', {})
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
