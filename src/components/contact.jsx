import './contact.css';






export function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const comments = formData.get("comments");
        console.log("Email Address: ", email);
        console.log("Comments: ", comments);
    };
    
    
    return (

        
        <div classname = "footer">
        <div className = "title">
            <h2>Contact Me</h2>
        </div>
        <form onSubmit = {handleSubmit}>
            <p className = "emailtitle">Your Email</p>
            <input className = "emailbox" name = "email" placeholder = "Email address"></input>

            <p className = "commenttitle">Additional Comments</p>
            <textarea className = "commentbox" name = "comments" placeholder = "Type your message here"></textarea>

            <button variant = "primary" type = "submit" className = "submitbox" value = "Send Message">Send Message</button>
        </form>
        
        
        
        </div>
    )
};