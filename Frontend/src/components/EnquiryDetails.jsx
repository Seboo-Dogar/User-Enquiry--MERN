import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const EnquiryDetails = ({data, getAllEnquiries, setFormData}) => {
    const handleDelete = (id) => {
        // alert(`Delete enquiry with ID: ${id}`);
        axios.delete(`http://localhost:8000/api/website/enquiries/delete/${id}`)
        .then(() => {
                toast.success("Enquiry deleted successfully");
                getAllEnquiries(); // Refresh the enquiry list
        })
    };
    
    const handleEdit = (id) => {
        // alert(`Edit enquiry with ID: ${id}`);
        axios.get(`http://localhost:8000/api/website/enquiries/single/${id}`)
        .then((response) => {
            let data = response.data;
            setFormData(data.enquiry);
            
            // console.log("Enquiry data for editing:", data.enquiry);
        })
    }


  return (
    <div className='bg-white dark:bg-gray-800 p-4 rounded shadow'>
        <ToastContainer />
        <h1 className='text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100'>Enquiry Details</h1>
        
        <div className='overflow-x-auto'>
            <Table>
                <TableHead className='bg-gray-100 dark:bg-gray-700'>
                    <TableRow>
                        <TableHeadCell className='text-gray-700 dark:text-gray-300'>Sr No</TableHeadCell>
                        <TableHeadCell className='text-gray-700 dark:text-gray-300'>Name</TableHeadCell>
                        <TableHeadCell className='text-gray-700 dark:text-gray-300'>Email</TableHeadCell>
                        <TableHeadCell className='text-gray-700 dark:text-gray-300'>Phone</TableHeadCell>
                        <TableHeadCell className='text-gray-700 dark:text-gray-300'>Message</TableHeadCell>
                        <TableHeadCell className='text-gray-700 dark:text-gray-300'>
                        <span className="">Delete</span>
                        </TableHeadCell>
                        <TableHeadCell className='text-gray-700 dark:text-gray-300'>
                        <span className="">Edit</span>
                        </TableHeadCell>
                    </TableRow>
                </TableHead>

                <TableBody className="divide-y divide-gray-200 dark:divide-gray-700">

                    { 
                        data.length >= 1 ? data.map((enquiry, index) =>{
                            return (
                                <TableRow key={index} className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {index + 1}
                                    </TableCell>
                                    <TableCell className="text-gray-700 dark:text-gray-300">{enquiry.name}</TableCell>
                                    <TableCell className="text-gray-700 dark:text-gray-300">{enquiry.email}</TableCell>
                                    <TableCell className="text-gray-700 dark:text-gray-300">{enquiry.phone}</TableCell>
                                    <TableCell className="text-gray-700 dark:text-gray-300">{enquiry.message}</TableCell>
                                    <TableCell>
                                    <a href="#" onClick={() => handleDelete(enquiry._id)} className="font-medium text-red-600 hover:underline dark:text-red-400">
                                        Delete
                                    </a>
                                    </TableCell>
                                    <TableCell>
                                    <a href="#" onClick={() => handleEdit(enquiry._id)}  className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                        Edit
                                    </a>
                                    </TableCell>
                                </TableRow>
                            )
                        }) : <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <TableCell colSpan={7} className="text-center text-gray-500 dark:text-gray-300">
                                No Enquiries Data Found
                            </TableCell>
                        </TableRow>
                    }
                        
                </TableBody>
            </Table>
        </div>
    </div>
  )
}

export default EnquiryDetails