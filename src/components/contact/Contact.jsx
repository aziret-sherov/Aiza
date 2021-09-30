import {useState} from "react";
import {send} from 'emailjs-com';
import "./contact.scss";

export default function Contact() {
    const [message,setMessage]=useState(false);
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'Aziret',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
        send(
            'service_03hmyhn',
            'template_b1ko6hl',
            toSend,
            'user_ENh5MmzcwI0VnWYjHDFI2'
        )
            .then((response) => {
                console.log('SUCCESS! EmailJS', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...EmailJS', err);
            });

    };

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
    };
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src={"assets/shake.svg"} alt=""/>
            </div>
            <div className="right">
                <h2>Contact</h2>
                {/*<form onSubmit={sendEmail}>*/}
                {/*    <input type="email" name="user_email" placeholder="Email"/>*/}
                {/*    <textarea name="message" placeholder="Message"/>*/}
                {/*    <button type="submit">Send</button>*/}
                {/*    {message && <span>Thanks, I'll reply ASAP :)</span>}*/}
                {/*</form>*/}
                <form onSubmit={onSubmit}>
                    <input
                        type='text'
                        name='from_name'
                        placeholder='Your name'
                        value={toSend.from_name}
                        onChange={handleChange}
                    />
                    <input
                        type='email'
                        name='reply_to'
                        placeholder='Your email'
                        value={toSend.reply_to}
                        onChange={handleChange}
                    />
                    <textarea
                        name='message'
                        placeholder='Your message'
                        value={toSend.message}
                        onChange={handleChange}
                    />
                    {message && <span>Thanks, I'll reply ASAP :)</span>}
                    <button type='submit'>Send
                    </button>
                </form>
            </div>
        </div>
    );
}
