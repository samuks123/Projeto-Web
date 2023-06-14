import React, { useState } from 'react';

import doge from '../assets/img/doge.jpg';

const UserPage = () => {
    const { name, email, isAdmin, picture } = {
        name: 'Samuel Victorio Bernacci',
        email: 'samubernacci@gmail.com',
        isAdmin: true,
        picture: doge
    };

    const [houseType, setHouseType] = useState('');
    const [houseName, setHouseName] = useState('');
    const [houseDescription, setHouseDescription] = useState('');
    const [houseImage, setHouseImage] = useState(null);
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [surface, setSurface] = useState('');
    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');

    const [agentImage, setAgentImage] = useState(null);
    const [agentName, setAgentName] = useState('');
    const [agentPhone, setAgentPhone] = useState('');

    const handleHouseTypeChange = (e) => {
        setHouseType(e.target.value);
    };

    const handleHouseNameChange = (e) => {
        setHouseName(e.target.value);
    };

    const handleHouseDescriptionChange = (e) => {
        setHouseDescription(e.target.value);
    };

    const handleHouseImageChange = (e) => {
        setHouseImage(e.target.files[0]);
    };

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleBedroomsChange = (e) => {
        setBedrooms(e.target.value);
    };

    const handleBathroomsChange = (e) => {
        setBathrooms(e.target.value);
    };

    const handleSurfaceChange = (e) => {
        setSurface(e.target.value);
    };

    const handleYearChange = (e) => {
        setYear(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleAgentImageChange = (e) => {
        setAgentImage(e.target.files[0]);
    };

    const handleAgentNameChange = (e) => {
        setAgentName(e.target.value);
    };

    const handleAgentPhoneChange = (e) => {
        setAgentPhone(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted');
        console.log('House Type:', houseType);
        console.log('House Name:', houseName);
        console.log('House Description:', houseDescription);
        console.log('House Image:', houseImage);
        console.log('Country:', country);
        console.log('Address:', address);
        console.log('Bedrooms:', bedrooms);
        console.log('Bathrooms:', bathrooms);
        console.log('Surface:', surface);
        console.log('Year:', year);
        console.log('Price:', price);
        console.log('Agent Image:', agentImage);
        console.log('Agent Name:', agentName);
        console.log('Agent Phone:', agentPhone);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 shadow-md rounded-md max-h-screen overflow-y-auto">
                <div className="flex items-center mb-4">
                    <img src={picture} alt="Profile" className="w-16 h-16 rounded-full mr-4" />
                    <div>
                        <h2 className="text-2xl font-bold">{name}</h2>
                        <p className="text-gray-500">{email}</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="houseType" className="block font-semibold mb-1">
                            House Type
                        </label>
                        <input
                            type="text"
                            id="houseType"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                            value={houseType}
                            onChange={handleHouseTypeChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="houseName" className="block font-semibold mb-1">
                            House Name
                        </label>
                        <input
                            type="text"
                            id="houseName"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                            value={houseName}
                            onChange={handleHouseNameChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="houseDescription" className="block font-semibold mb-1">
                            House Description
                        </label>
                        <textarea
                            id="houseDescription"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                            value={houseDescription}
                            onChange={handleHouseDescriptionChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="houseImage" className="block font-semibold mb-1">
                            House Image
                        </label>
                        <input
                            type="file"
                            id="houseImage"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                            onChange={handleHouseImageChange}
                            required
                        />
                    </div>
                    <div className="flex mb-4">
                        <div className="w-1/2 mr-2">
                            <label htmlFor="country" className="block font-semibold mb-1">
                                Country
                            </label>
                            <input
                                type="text"
                                id="country"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                                value={country}
                                onChange={handleCountryChange}
                                required
                            />
                        </div>
                        <div className="w-1/2 ml-2">
                            <label htmlFor="address" className="block font-semibold mb-1">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                                value={address}
                                onChange={handleAddressChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <div className="w-1/4 mr-2">
                            <label htmlFor="bedrooms" className="block font-semibold mb-1">
                                Bedrooms
                            </label>
                            <input
                                type="text"
                                id="bedrooms"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                                value={bedrooms}
                                onChange={handleBedroomsChange}
                                required
                            />
                        </div>
                        <div className="w-1/4 mx-2">
                            <label htmlFor="bathrooms" className="block font-semibold mb-1">
                                Bathrooms
                            </label>
                            <input
                                type="text"
                                id="bathrooms"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                                value={bathrooms}
                                onChange={handleBathroomsChange}
                                required
                            />
                        </div>
                        <div className="w-1/4 mx-2">
                            <label htmlFor="surface" className="block font-semibold mb-1">
                                Surface
                            </label>
                            <input
                                type="text"
                                id="surface"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                                value={surface}
                                onChange={handleSurfaceChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <div className="w-1/2 mr-2">
                            <label htmlFor="year" className="block font-semibold mb-1">
                                Year
                            </label>
                            <input
                                type="text"
                                id="year"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                                value={year}
                                onChange={handleYearChange}
                                required
                            />
                        </div>
                        <div className="w-1/2 ml-2">
                            <label htmlFor="price" className="block font-semibold mb-1">
                                Price
                            </label>
                            <input
                                type="text"
                                id="price"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                                value={price}
                                onChange={handlePriceChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="agentImage" className="block font-semibold mb-1">
                            Agent Image
                        </label>
                        <input
                            type="file"
                            id="agentImage"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                            onChange={handleAgentImageChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="agentName" className="block font-semibold mb-1">
                            Agent Name
                        </label>
                        <input
                            type="text"
                            id="agentName"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                            value={agentName}
                            onChange={handleAgentNameChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="agentPhone" className="block font-semibold mb-1">
                            Agent Phone
                        </label>
                        <input
                            type="text"
                            id="agentPhone"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                            value={agentPhone}
                            onChange={handleAgentPhoneChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserPage;
