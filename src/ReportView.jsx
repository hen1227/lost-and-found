import {useState} from "react";
import './ReportView.css';
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import sendAPICall from "./API";

const ReportView = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [lostItem, setLostItem] = useState('');
    const [description, setDescription] = useState('');
    const [lastSeen, setLastSeen] = useState('');
    const [image, setImage] = useState('');


    const reportItem = (e) => {
        e.preventDefault();

        console.log('report item');
        const itemInfo = {
            name: name,
            email: email,
            lostItem: lostItem,
            description: description,
            lastSeen: lastSeen,
            image: image
        }

        sendAPICall('/lostItems', 'POST',  itemInfo)
            .then(data => {
                console.log(data);
                toast.success('Item reported successfully!');
                navigate('/');
            })
            .catch(err => {
                console.log(err);
                toast.error('Error reporting item.');
            });
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {

                console.log(reader.result);

                // The result attribute contains the data as a data URL
                setImage(reader.result);
            };

            // Read the file as a data URL to be used in an img element's src attribute
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();

        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onloadend = () => {
                console.log(reader.result);
                setImage(reader.result);
            };

            reader.readAsDataURL(file);
        }

        e.currentTarget.classList.remove('dragover');
    };

    function handleDragOver(e) {
        e.preventDefault();
        e.currentTarget.classList.add('dragover');
    }

    function handleDragLeave(e) {
        e.currentTarget.classList.remove('dragover');
    }

    //const navigate = useNavigate();
 
    const goToLostItems = () => {
        navigate('/');
    }
 
    return (
    <div>
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
            >Report View</h1>
            <button
            style={{
                width: 'fit-content',
                height: 'fit-content',
                marginTop: 'auto',
                marginBottom: 'auto',
                marginRight: 'auto',
                marginLeft: 20
                


            }} onClick={goToLostItems}>Back</button>


        </div>
        <form className="report-view">



            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="lost-item">Lost Item</label>
                <input
                    type="text"
                    name="lost-item"
                    id="lost-item"
                    value={lostItem}
                    onChange={(e) => setLostItem(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>

            <div className="form-group">
                <label>Last Seen</label>
                <fieldset id="last-seen">
                    <label>
                        <input
                            type="radio"
                            value="today"
                            name="last-seen-time"
                            onChange={() => setLastSeen('Past 24 hours')}
                        /> Past 24 hours
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="yesterday"
                            name="last-seen-time"
                            onChange={() => setLastSeen('Past 48 hours')}
                        /> Past 48 hours
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="2-3 days ago"
                            name="last-seen-time"
                            onChange={() => setLastSeen('2-3 days ago')}
                        /> 2-3 days ago
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="this week"
                            name="last-seen-time"
                            onChange={() => setLastSeen('Earlier this week')}
                        /> Earlier this week
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="last week"
                            name="last-seen-time"
                            onChange={() => setLastSeen('Last week')}
                        /> Last week
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="more than a week ago"
                            name="last-seen-time"
                            onChange={() => setLastSeen('More than a week ago')}
                        /> More than a week ago
                    </label>
                </fieldset>
            </div>

            <div className="form-group dropzone" onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave}>

                <label htmlFor="image">Image (optional)</label>

                {image && (
                    <img src={image} alt="preview" style={{width: '80%'}} />
                )}
                <p>Drag & drop an image here or <label htmlFor="image" className="file-label">browse</label></p>
                <input
                    type="file"
                    name="image"
                    id="image"
                    hidden
                    onChange={handleImageChange}
                />
            </div>

            <button onClick={reportItem}>Submit</button>
            </form>
        </div>
    )
}

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    margin: 'auto',
    // align: 'center'
}

export default ReportView;
