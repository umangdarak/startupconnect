"use client";
import React from 'react';

interface InvestorProfileProps {
    investor: {
        email: string;
        fullName: string;
        phoneNumber: string;
        typeOfInvestor: string;
        location: string;
        sectorsOfInterest: string;
        stageFocus: string;
        preferredBusinessModels: string;
        following: string[]; // Array of startup IDs
        ticketSize: string;
        equityStake: string;
        investmentHorizon: string;
        trackRecord: string;
        sectorExpertise: string;
        limitedPartners: string;
        geoPreferences: string;
        availability: string;
        createdAt: Date;
    };
}

const InvestorProfile: React.FC<InvestorProfileProps> = ({ investor }) => {
    return (
        <div className="container mx-auto p-6 bg-white text-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4">{investor.fullName}'s Profile</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                    <p><strong>Email:</strong> {investor.email}</p>
                    <p><strong>Phone:</strong> {investor.phoneNumber}</p>
                    <p><strong>Location:</strong> {investor.location}</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">Investor Details</h2>
                    <p><strong>Type:</strong> {investor.typeOfInvestor}</p>
                    <p><strong>Investment Horizon:</strong> {investor.investmentHorizon}</p>
                    <p><strong>Ticket Size:</strong> {investor.ticketSize}</p>
                    <p><strong>Equity Stake:</strong> {investor.equityStake}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">Investment Focus</h2>
                    <p><strong>Sectors of Interest:</strong> {investor.sectorsOfInterest}</p>
                    <p><strong>Stage Focus:</strong> {investor.stageFocus}</p>
                    <p><strong>Preferred Business Models:</strong> {investor.preferredBusinessModels}</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">Experience</h2>
                    <p><strong>Track Record:</strong> {investor.trackRecord}</p>
                    <p><strong>Sector Expertise:</strong> {investor.sectorExpertise}</p>
                    <p><strong>Limited Partners:</strong> {investor.limitedPartners}</p>
                </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg mt-4">
                <h2 className="text-xl font-semibold mb-2">Additional Information</h2>
                <p><strong>Geo Preferences:</strong> {investor.geoPreferences}</p>
                <p><strong>Availability:</strong> {investor.availability}</p>
                <p><strong>Created At:</strong> {new Date(investor.createdAt).toLocaleDateString()}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg mt-4">
                <h2 className="text-xl font-semibold mb-2">Following Startups</h2>
                {investor.following.length > 0 ? (
                    <ul className="list-disc list-inside">
                        {investor.following.map((startupId) => (
                            <li key={startupId} className="text-gray-300">{startupId}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-300">Not following any startups.</p>
                )}
            </div>
        </div>
    );
};

export default InvestorProfile;
