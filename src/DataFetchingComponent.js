import React, { useState } from 'react';
import logo from './logo.png';

const DataFetchingComponent = () => {
    const [data, setData] = useState('');
    

    const fetchTranscript = async () => {
        try {
            const response = await fetch('your-api-endpoint');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const fetchSummary = async () => {
        try {
            const response = await fetch('another-api-endpoint');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const saveToMSD = async () => {
        try {
            const response = await fetch('your-api-endpoint');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        position: 'relative',
    };

    const bannerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: 'linear-gradient(-296deg,#005e5d,#00857a)',
        padding: '10px',
        marginBottom: '20px',
        width: '100%',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        height: '30px'
    };

    const logoStyle = {
        display: 'flex',
        alignItems: 'center',
        width: '80px',
        height: '100px',
        marginRight: '10px',
        paddingLeft: '20px',
    };


    const nameStyle = {
        flex: 1,
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'grey',
    };


    const contentContainerStyle = {
        display: 'flex',
        width: '100%',
    };

    const videoContainerStyle = {
        width: '60%',
    };

    const videoStyle = {
        width: '100%',
        margin: '20px',
        padding: '10px',
    };

    const textAreaButtonContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: '90px',
    };

    const textareaStyle = {
        width: '100%',
        height: '400px',
        margin: '20px',
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    };

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#009286',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        marginLeft: '30px',
        width: '170px'
    };

    const firstButtonContainerStyle = {
        marginLeft: '70px', // Add marginLeft to move the button to the right
    };

    return (
        <div style={containerStyle}>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="Logo" style={logoStyle} />
                <h1 style={nameStyle}>FUTURE BANKING HACKATHON: SUMMERIZERS</h1>
            </div>
            <div style={bannerStyle}></div>
            <div style={contentContainerStyle}>
                <div style={videoContainerStyle}>
                    <video src="path-to-video.mp4" style={videoStyle} controls />
                    <div style={firstButtonContainerStyle}>
                        <button onClick={fetchTranscript} style={buttonStyle}>
                            Transcribe
                        </button>

                        <button onClick={fetchSummary} style={buttonStyle}>
                            Summarize
                        </button>
                        <button onClick={saveToMSD} style={buttonStyle}>
                            Save to MSD
                        </button>
                    </div>
                </div>
                <div style={textAreaButtonContainerStyle}>
                    <textarea value={data} style={textareaStyle} readOnly />
                </div>
            </div>

        </div>
    );
};

export default DataFetchingComponent;