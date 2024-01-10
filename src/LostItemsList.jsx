import LostItemCard from "./components/LostItemCard";


const LostItemsList = ({ lostItems }) => {

    console.log('LostItemsList', lostItems);
    return (
        <div>
            <div style={    }>
                {
                    lostItems.map((item, index) => {

                        return (
                            <LostItemCard key={index} item={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

const itemsCollectionStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '1rem',
    marginTop: '1rem',

    margin: 'auto',
    width: '90%'

}


export default LostItemsList;
