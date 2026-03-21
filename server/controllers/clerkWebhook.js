import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebHooks = async (req, res) => {
    try {
        const webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        };

        // Verify webhook
        const event = webhook.verify(JSON.stringify(req.body), headers);

        const { data, type } = event;

        const userData = {
            _id: data.id,
            email: data.email_addresses[0].email_address,
            username: `${data.first_name || ""} ${data.last_name || ""}`,
            image: data.image_url,
        };

        switch (type) {
            case "user.created":
                await User.create(userData);
                break;

            case "user.updated":
                await User.findByIdAndUpdate(data.id, userData);
                break;

            case "user.deleted":
                await User.findByIdAndDelete(data.id);
                break;

            default:
                console.log("Unhandled event:", type);
        }

        res.json({ success: true });

    } catch (error) {
        console.log(error.message);
        res.status(400).json({ success: false, message: error.message });
    }
};

export default clerkWebHooks;