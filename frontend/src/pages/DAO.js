import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card'; // Assuming you have a Card component

const DAO = () => {
    const [proposals, setProposals] = useState([]);

    useEffect(() => {
        // Fetch DAO proposals from your backend API
        const fetchProposals = async () => {
            try {
                const response = await axios.get('/api/proposals');
                setProposals(response.data);
            } catch (error) {
                console.error('Error fetching DAO proposals:', error);
            }
        };

        fetchProposals();
    }, []);

    return (
        <div className="dao">
            <h1>DAO</h1>
            <div className="proposal-list">
                {proposals.map((proposal) => (
                    <Card
                        key={proposal.id}
                        title={proposal.title}
                        description={proposal.description}
                        author={proposal.author}
                    />
                ))}
            </div>
        </div>
    );
};

export default DAO;
