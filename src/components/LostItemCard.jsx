

const LostItemCard = ({ item }) => {

    console.log('LostItemCard', item)

    const imageSrc = (data) => {
        console.log('imageSrc', data)
        function toBase64(arr) {
            arr = new Uint8Array(arr)
            console.log('toBase64', arr)

            console.log(arr.reduce((data, byte) => data + String.fromCharCode(byte), ''))
            return (
                arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
            );
        }
       return (`${toBase64(data.data)}`);
    }

    const handleFound = () => {
        // TODO: Prompt user of their email
        // TODO: Send fetch request to backend to send email to both parties
    }

    return (
        <div style={cardStyle}>
            <h2>{item.lostItem}</h2>
            <p>{item.lastSeen}</p>
            <p>{item.description}</p>
            <p>{item.email}</p>
            <img width={'80%'} style={{aspectRatio:1}} src={imageSrc(item.image)} alt={item.lostItem} />
            <button onClick={handleFound} >Item found</button>
        </div>
    );
}

const cardStyle = {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    border: '1px #ccc dotted',
    borderRadius: '5px',
    margin: '10px auto',
    width: '90%',
    maxWidth: 500,
}

export default LostItemCard;
