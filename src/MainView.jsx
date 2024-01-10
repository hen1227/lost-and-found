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

    const goToReport = () => {
        navigate('/report')
    }


    return (
        <div className="App">
            <div style={{
                flexDirection: 'row',
                textAlign: 'center',
                display: 'flex',
                width: '100%',
                justifyContent: 'center',

            }}>
                <h1
                style={{
                    width: 'fit-content',
                    marginLeft: 'auto'

                }}
                >Lost Items</h1>
                <button
                style={{
                    width: 'fit-content',
                    height: 'fit-content',
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    marginRight: 'auto',
                    marginLeft: 20



                }} onClick={goToReport}>Report</button>


            </div>


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
