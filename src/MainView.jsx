import {useEffect, useState} from "react";
import LostItemsList from "./LostItemsList";
import sendAPICall from "./API";


const MainView = () => {
    const [lostItems, setLostItems] = useState([]);
    const [pendingItems, setPendingItems] = useState([]);
    const [foundItems, setFoundItems] = useState([]);

    const updateLostItems = () => {
        sendAPICall('/lostItems', 'GET', {})
            .then(data => {
                setLostItems(data.lost)
                setPendingItems(data.pending)
                setFoundItems(data.found)
            });
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
            <h3>Pending Items</h3>
            {pendingItems && pendingItems.length > 0 &&
                <LostItemsList pendingItems={pendingItems} />
            }
        </div>
    );
}

export default MainView;
