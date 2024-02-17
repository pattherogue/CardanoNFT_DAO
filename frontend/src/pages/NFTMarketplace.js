import React, { useEffect, useState } from 'react';
import Card from './Card'; // Assuming you have a Card component
import axios from 'axios';

const NFTMarketplace = () => {
    const [nfts, setNFTs] = useState([]);

    useEffect(() => {
        // Fetch NFTs from your backend API
        const fetchNFTs = async () => {
            try {
                const response = await axios.get('/api/nfts');
                setNFTs(response.data);
            } catch (error) {
                console.error('Error fetching NFTs:', error);
            }
        };

        fetchNFTs();
    }, []);

    return (
        <div className="nft-marketplace">
            <h1>NFT Marketplace</h1>
            <div className="nft-list">
                {nfts.map((nft) => (
                    <Card
                        key={nft.id}
                        title={nft.title}
                        description={nft.description}
                        imageUrl={nft.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default NFTMarketplace;
