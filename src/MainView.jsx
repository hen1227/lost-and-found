import {useEffect, useState} from "react";
import LostItemsList from "./LostItemsList";
import sendAPICall from "./API";
import {useNavigate} from "react-router-dom";


const MainView = () => {
    const navigate = useNavigate()
    const [items, setItems] = useState([]);
    const [lostItems, setLostItems] = useState([]);
    const [pendingItems, setPendingItems] = useState([]);
    const [foundItems, setFoundItems] = useState([]);

    const updateLostItems = () => {
        sendAPICall('/lostItems', 'GET', {})
            .then(data => {
                setItems(data.items)
                setLostItems(data.lost)
                setPendingItems(data.pending)
                setFoundItems(data.found)

                console.log('data', data)
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
                }} 
                onClick={goToReport}>Report</button>
            </div>


            {items && items.length === 0 && <p
            style={{
                color: '#FFFFFF',
                fontSize: 18,
                fontWeight: 'bold',
                border: '#000 2px solid',
                borderStyle: 'none',
                background: '#68B765',
                width: 200,
                margin: '0 auto',
                padding: "9px 7px"
            }} 
            >There are currently no lost items!</p>}


            {items && items.length > 0 &&
                <LostItemsList lostItems={items} />
            }
            {/*<h3>Pending Items</h3>*/}
            {/*{pendingItems && pendingItems.length > 0 &&*/}
            {/*    <LostItemsList pendingItems={items} />*/}
            {/*}*/}
        </div>
    );
}

export default MainView;
