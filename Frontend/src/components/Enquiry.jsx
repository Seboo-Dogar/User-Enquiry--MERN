import React, { useEffect, useState } from 'react'
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import EnquiryDetails from './EnquiryDetails';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Enquiry = () => {
    const [enquiryList, setEnquiryList] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        _id: ''
    })

    let saveEnquiry = (e) => { 
        // alert("Form Submitted Successfully");
      e.preventDefault();

    //   const formData = {
    //     name: e.target.name.value,
    //     email: e.target.email.value,
    //     phone: e.target.phone.value,
    //     message: e.target.message.value
    //   }

        if(formData._id) {
            axios.put(`http://localhost:8000/api/website/enquiries/update/${formData._id}`, formData)
            .then(() => {
                toast.success("Form Updated Successfully");
                setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
                _id: ''
                });

                getAllEnquiries(); // Refresh the enquiry list after update
            })
            .catch(error => {
            console.error("There was an error updating the form!", error);
            });
        }
        else{
            axios.post('http://localhost:8000/api/website/enquiries/insert', formData)
            .then(response => {
                toast.success("Form Submitted Successfully");
                setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
                });

                getAllEnquiries(); // Refresh the enquiry list after submission

            console.log(response.data);
            //   alert("Form Submitted Successfully");
            //   e.target.reset(); // Reset the form after submission
            })
            .catch(error => {
            console.error("There was an error submitting the form!", error);
            //   alert("Error submitting form. Please try again.");
            });
        }
      
    };

    const getAllEnquiries = () => {
        axios.get("http://localhost:8000/api/website/enquiries/view")
            .then(response => {
                return response.data;
            })
            .then(finalData => {
                if(finalData.status) {
                    setEnquiryList(finalData.enquiryList);
                }
            })
            .catch(error => {
                console.error("There was an error fetching the enquiries!", error);
            });
    }

    const getValue = (e) => {
        const inputValue = e.target.value;
        const inputName = e.target.name;
        const oldData = { ...formData };
        oldData[inputName] = inputValue;
        setFormData(oldData);
    }

    console.log(formData);

    useEffect(() => {
        getAllEnquiries()
    }, []);

  return (
    <div className='p-10'>
        <h1 className='text-2xl font-bold mb-4 text-gray-800'>User Enquiry</h1>

        <div className='grid grid-cols-[30%_auto] gap-10'>
            <div className='bg-white dark:bg-gray-800 p-10 rounded shadow'>
                <h1 className='text-xl font-semibold text-gray-800 dark:text-gray-100'>Enquiry Form</h1>
                <form action="" onSubmit={saveEnquiry}>
                    <div className='mb-3'>
                        <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Your Name</Label>
                        <TextInput type="text" className="mt-1" onChange={getValue} value={formData.name} name='name' placeholder="John Doe" required />
                    </div>
                    <div className='mb-3'>
                        <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Your Email</Label>
                        <TextInput type="email" className="mt-1" onChange={getValue} value={formData.email} name='email' placeholder="Enter Your Email" required />
                    </div>
                    <div className='mb-3'>
                        <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">Your Phone</Label>
                        <TextInput type="text" className="mt-1" onChange={getValue} value={formData.phone} name='phone' placeholder="Type Your Phone Number" required />
                    </div>
                    <div className='mb-3'>
                        <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Your Message</Label>
                        <Textarea onChange={getValue} value={formData.message} className="mt-1" name='message' placeholder="Type Your Message" required rows={4} />
                    </div>
                    <div className='mb-3'>
                        <Button type="submit" className='w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600'>
                            {formData._id ? "Update" : "Save"}
                        </Button> 
                    </div>
                </form>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                <EnquiryDetails data={enquiryList} getAllEnquiries={getAllEnquiries} setFormData={setFormData} />
            </div>
        </div>
    </div>
  )
}

export default Enquiry