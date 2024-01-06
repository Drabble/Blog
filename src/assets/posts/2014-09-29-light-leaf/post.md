I decided to make a client in Java with Swing for the UI. It was a nice challenge, unfortunately I didn't go very far with this project.

To connect to IMAP and SMTP servers I used the `javax.mail` package. Here is a very simple example to send emails.

```java
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

public class SimpleEmailSender {

    public static void main(String[] args) {
        // Replace these with your email credentials
        String username = "your_email@gmail.com";
        String password = "your_email_password";

        // Replace this with your SMTP server information
        String host = "smtp.gmail.com";
        int port = 587;

        // Setup properties for the SMTP session
        Properties properties = new Properties();
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", port);

        // Setup authentication
        Session session = Session.getInstance(properties, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });

        try {
            // Create a MimeMessage object
            Message message = new MimeMessage(session);

            // Set the sender address
            message.setFrom(new InternetAddress(username));

            // Set the recipient address
            message.setRecipient(Message.RecipientType.TO, new InternetAddress("recipient@example.com"));

            // Set the email subject
            message.setSubject("Hello from JavaMail");

            // Set the email content
            message.setText("This is a simple test email sent from a Java application.");

            // Send the email
            Transport.send(message);

            System.out.println("Email sent successfully!");

        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
```

Here is a simple example with IMAP.

```java
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import java.util.Properties;

public class SimpleIMAPReader {

    public static void main(String[] args) {
        // Replace these with your email credentials
        String username = "your_email@gmail.com";
        String password = "your_email_password";

        // Replace this with your IMAP server information
        String host = "imap.gmail.com";
        int port = 993;

        // Setup properties for the IMAP session
        Properties properties = new Properties();
        properties.put("mail.imap.auth", "true");
        properties.put("mail.imap.ssl.enable", "true");
        properties.put("mail.imap.host", host);
        properties.put("mail.imap.port", port);

        // Setup authentication
        Session session = Session.getInstance(properties, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });

        try {
            // Connect to the IMAP server
            Store store = session.getStore("imaps");
            store.connect(host, port, username, password);

            // Open the inbox folder
            Folder inbox = store.getFolder("INBOX");
            inbox.open(Folder.READ_ONLY);

            // Retrieve messages from the inbox
            Message[] messages = inbox.getMessages();
            for (Message message : messages) {
                System.out.println("Subject: " + message.getSubject());
                System.out.println("From: " + InternetAddress.toString(message.getFrom()));
                System.out.println("Sent Date: " + message.getSentDate());
                System.out.println("--------------------");
            }

            // Close the connection
            inbox.close(false);
            store.close();

        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
```

If you want to try you can also communicate with a SMTP server over a TCP socket directly with the `telnet` command. While Telnet is primarily known as a terminal emulation protocol, it can also be used to establish raw TCP connections to a server, making it a handy tool for troubleshooting network services.

Here is a sample bash script to communicate with a SMTP server over TCP. We use the port 25 without a TLS connection for simplicity.

```bash
telnet smtp.example.com 25
EHLO example.com
MAIL FROM:<your_email@example.com>
RCPT TO:<recipient@example.com>
DATA
Subject: Test Email

This is a test email sent using Telnet.
.
QUIT
```

This basic example manually walks through the SMTP conversation using Telnet. Keep in mind that this approach does not use encryption and is not suitable for sensitive information. In real-world scenarios, it is strongly recommended to use secure connections (TLS/SSL) for SMTP to protect sensitive data like email credentials.

Additionally, due to security concerns and the prevalence of secure connections, many SMTP servers may not accept unencrypted connections on port 25. For secure connections, you would typically use port 587 (submission) with STARTTLS.