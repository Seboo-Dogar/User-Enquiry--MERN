const enquiryModel = require("../../models/enquiry.model");

let enquiryInsert = (req, res) => {
    let {name, email, phone, message} = req.body;
    let enquiry = new enquiryModel({
        name: name,
        email: email,
        phone: phone,
        message: message
    });

    enquiry.save().then(() => {
        res.send({
            status: true,
            message: "Enquiry submitted successfully"
        })
    }).catch((err) => { 
        res.send({
            status: false,
            message: "Error submitting enquiry",
            error: err
        })
    })
}

let enquiryList = async (req, res) => {
    let enquiry = await enquiryModel.find();
    res.send({
        status: true,
        message: "Enquiries fetched successfully",
        enquiryList: enquiry
    });
}

let enquiryDelete = async (req, res) => {
    let enquiryId = req.params.id;
    await enquiryModel.findByIdAndDelete(enquiryId);
    res.send({
        status: true,
        message: "Enquiry deleted successfully"
    });
}

let enquirySingleRow = async (req, res) => {
    let enquiryId = req.params.id;
    let enquiry = await enquiryModel.findOne({_id:enquiryId});
    res.send({
        status: true,
        message: "Enquiry fetched successfully",
        enquiry: enquiry
    });
} 

let enquiryUpdate = async (req, res) => {
    let enquiryId = req.params.id;
    let {name, email, phone, message} = req.body;
    let updateObj = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    let updatedEnquiry = await enquiryModel.updateOne({_id:enquiryId},updateObj);
    res.send({
        status: true,
        message: "Enquiry updated successfully",
        enquiry: updatedEnquiry
    });
}



module.exports = {enquiryInsert, enquiryList, enquiryDelete, enquirySingleRow, enquiryUpdate};