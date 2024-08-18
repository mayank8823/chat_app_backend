const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        mongoose.connection.on('connected', () => {
            console.log("Connected to DB");
        });

        mongoose.connection.on('error', (error) => {
            console.error("Error in MongoDB connection: ", error);
        });
    } catch (error) {
        console.error("Something went wrong during DB connection: ", error);
        process.exit(1); // Exit the process with a failure code
    }
}

module.exports = connectDB;
