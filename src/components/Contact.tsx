import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [successMessage, setSuccessMessage] = useState<string>('');

  const sendEmail = async (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      const formData = new FormData();
      formData.append("access_key", "f4020484-2e7e-413e-8504-2413cf520e7a");
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);
      formData.append("subject", "New Portfolio Contact Message");
    
      try{
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const result = await response.json();

        if (result.success) {
          setSuccessMessage("Message sent successfully!");
          setName('');
          setEmail('');
          setMessage('');
        } else {
          setSuccessMessage("Something went wrong. Please try again.");
        }
      }catch (err) {
        setSuccessMessage("Unable to send message. Please try again.");
      }
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Open to AI/ML internships, software roles, hackathons, and collaboration opportunities.</p>

          <Box
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                InputLabelProps={{
                  style: { color: "#555" }
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#fff",
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "#000",
                  },
                }}
          
              />
              <TextField
              required
              label="Email / Phone"
              placeholder="How can I reach you?"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => {
                console.log(e.target.value);
                setEmail(e.target.value);
              }}
              error={emailError}
              helperText={emailError ? "Please enter your email or phone number" : ""}
              InputLabelProps={{
                style: { color: "#555" }
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#fff",
                },
                "& .MuiOutlinedInput-input": {
                  color: "#000",
                },
              }}
            />

            </div>

            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              variant="outlined"
              fullWidth
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              InputLabelProps={{
                style: { color: "#555" }
              }}
              InputProps={{
                style: {
                  backgroundColor: "white",
                  color: "black"
                }
              }}
            />

            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>

            {successMessage && (
              <p style={{ marginTop: "20px", color: "#4CAF50" }}>{successMessage}</p>
            )}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;