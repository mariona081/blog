import express from "express";
import "dotenv/config";
import { Resend } from "resend";
import cors from "cors";

const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();

const PORT = 2034;

app.use(cors());
app.use(express.json())
// app.options("*", cors());

app.post("/send-email", async (request, response) => {
  console.log(request.body)
	const { name, email, message } = request.body;

	// if (!name || !email || !message) {
	//   return res.status(400).json({ error: "All fields are required" });
	// }

	try {
		await resend.emails.send({
			from: "onboarding@resend.dev",
			to: "your-email@example.com",
			subject: `New Contact Form Submission from ${name}`,
			text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
		});

		return response.status(200).json({ success: true });
	} catch (error: any) {
		console.error("Error sending email:", error.message);
		return response.status(500).json({ error: error.message });
	}
}); // post request to - localhost:2034/send-email

app.listen(PORT, () => {
	console.log(`server listening on port: ${PORT}`); // localhost:2034
});

// export default async function handler(req: any, res: any) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   try {
//     await resend.emails.send({
//       from: "onboarding@resend.dev",
//       to: "your-email@example.com",
//       subject: `New Contact Form Submission from ${name}`,
//       text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
//     });

//     return res.status(200).json({ success: true });
//   } catch (error: any) {
//     console.error("Error sending email:", error.message);
//     return res.status(500).json({ error: error.message });
//   }
// }
