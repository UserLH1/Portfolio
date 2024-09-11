const { google } = require("googleapis");
const nodemailer = require("nodemailer");

async function handler(req, res) {
  if (req.method === "POST") {
    const { firstname, lastname, email, message } = req.body;

    // Configurarea clientului OAuth2
    const oAuth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REDIRECT_URI
    );

    // Setarea tokenului de reîmprospătare
    oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

    async function sendContactEmail(firstname, lastname, email, message) {
      console.log("sending ContactEmail");
      try {
        // Obține tokenul de acces
        const { token } = await oAuth2Client.getAccessToken();

        // Configurarea transportului Nodemailer
        const transport = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: process.env.GMAIL_USER,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: token, // Utilizare token-ului obținut
          },
        });

        // Configurarea opțiunilor emailului
        const mailOptions = {
          from: process.env.GMAIL_USER,
          to: process.env.GMAIL_USER, // Emailul destinatarului
          subject: "Contact Form Submission",
          html: `
                        <div style="font-family: Arial, sans-serif; color: #444;">
                          <h1 style="color: #0d6efd;">Contact Form Submission</h1>
                          <h2>Message from ${firstname} ${lastname}</h2>
                          <p><strong>Email:</strong> ${email}</p>
                          <p><strong>Message:</strong></p>
                          <p>${message}</p>
                        </div>
                      `,
        };

        // Trimiterea emailului
        await transport.sendMail(mailOptions);

        return res.status(200).json({ message: "Email sent with succes!" });
      } catch (error) {
        console.log("Error sending email:", error);
        return res.status(500).json({ error: "Error sending email." });
      }
    }

    // Apelează funcția pentru a trimite emailul
    await sendContactEmail(firstname, lastname, email, message);
  } else {
    // Dacă metoda nu este POST, returnează 405 Method Not Allowed
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}

export default handler;
