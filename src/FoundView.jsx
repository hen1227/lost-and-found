import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const FoundView = () => {

    const { id } = useParams();
    const [lostItem, setLostItem] = useState(null)

    useEffect(() => {
        fetch(`http://10.31.64.37:4004/lostItems/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setLostItem(data.item);
            });
    }, []);

    const sendEmail = () => {
        const email = lostItem.email;
        const subject = `Your ${lostItem.lostItem} has been found!`;
        const body = `Hi ${lostItem.name},\n\nYour ${lostItem.lostItem} has been found! Please contact me at ${email} to arrange a pickup.\n\nThanks!`;

        const address = `mailto:${email}?subject=${subject}&body=${body}`;

        // Open address in a new tab

    }

    return (
        <div>
            <h2>Found</h2>
            <button onClick={sendEmail}>Send email</button>
        </div>
    );
}

export default FoundView;
