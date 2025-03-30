import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();
if (!process.env.FIREBASE_CONFIG) {
  console.error("❌ ERROR: Missing FIREBASE_CONFIG environment variable!");
  process.exit(1); // Stop the server
}
const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default admin;
