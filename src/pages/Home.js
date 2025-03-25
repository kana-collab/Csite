import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Work from '../components/work';
import { CircularProgress } from '@mui/material'; // Import a preloader component



const Home = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = process.env.REACT_APP_STRAPI_API_URL;
                const token = process.env.REACT_APP_API_TOKEN;

                if (!apiUrl || !token) {
                    throw new Error('API URL or Token is missing. Please check your .env file.');
                }

                const response = await axios.get(apiUrl, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                });
                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching data from Strapi:', error.message);
            }
        };

        fetchData();
    }, []);

    if (!data) return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
        </div>
    );

    return (
        <>
            <Hero heroData={data?.Hero || {}} headerData={data?.Header || {}} />
            <Intro data={data?.Story || {}} />
            <Services data={data?.Services || {}} />
            <Work data={data?.Workcard || {}} worktitle={data.worktitle}/>
            <Cta data={data?.CTA || {}} />
            <Footer data={data?.Footer || {}} />
        </>
    );
};

export default Home;

