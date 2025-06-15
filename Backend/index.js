let express = require('express');
let mongoose = require('mongoose');
const enquiryRouter = require('./App/routes/web/enquiryRoutes');
const cors = require('cors');

require('dotenv').config();

let app = express();

app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

app.use('/api/website/enquiries', enquiryRouter);




// Connect to MongoDB and start the server
mongoose.connect(process.env.DP_URL)
    .then(() => {
        console.log('MongoDB connected');
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on port ${process.env.PORT || 3000}`);
        });
    })
    .catch(err => console.log(err)); 
