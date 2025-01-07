const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        
        const conn = await mongoose.connect('mongodb+srv://dridiabir512:TqO4NBW2QRlOyXkZ@cluster.lvu6r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Pinged your deployment. You successfully connected to MongoDB!');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;
