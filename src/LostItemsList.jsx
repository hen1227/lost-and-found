

const LostItemsList = ({ lostItems }) => {

    return (
        <div>
            <h2>Lost Items</h2>
            <ul>
                {
                    lostItems.map((item, index) => {

                        return (
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default LostItemsList;
