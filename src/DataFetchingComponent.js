import React, { useState } from 'react';
import logo from './logo.png';
import videoFile from './SummerizersVideo.mp4'

const DataFetchingComponent = () => {
    const [data, setData] = useState('');
    

    const fetchTranscript = async () => {
        try {
            //const response = await fetch('http://localhost:8080/speechtotext');
            //const jsonData = await response.json();
            //const transcript = JSON.stringify(jsonData, null, 2)
            const mockTranscript = [{
                "text": "Good afternoon, Thanks for calling ABN AMRO Customer Care. You are speaking to Steven. How can I help you?",
                "id": "1",
                "role": "Agent",
                "participantId": "Steven"
            },
            {
                "text": "Hi, Good afternoon. My name is Anja. I am calling because I think I have lost my debit card.",
                "id": "2",
                "role": "Customer",
                "participantId": "Anja"
            },
            {
                "text": "Ohh, that's unfortunate to hear. Have you already blocked the card in your app?",
                "id": "3",
                "role": "Agent",
                "participantId": "Steven"
            },
            {
                "text": "I haven't.",
                "id": "4",
                "role": "Customer",
                "participantId": "Anja"
            },
            {
                "text": "Hey do you use the mobile banking app?",
                "id": "5",
                "role": "Agent",
                "participantId": "Steven"
            },
            {
                "text": "Yes I use it if you can help me where I can find that.",
                "id": "6",
                "role": "Customer",
                "participantId": "Anja"
            },
            {
                "text": "I will. If you can put me on speaker and get to the app then I'll explain to you how to do this.",
                "id": "7",
                "role": "Agent",
                "participantId": "Steven"
            },
            {
                "text": "Great, thank you.",
                "id": "8",
                "role": "Customer",
                "participantId": "Anja"
            },
            {
                "text": "So if you go to the app, at the bottom of the screen there's a self-service button.",
                "id": "9",
                "role": "Agent",
                "participantId": "Steven"
            },
            {
                "text": "Yes.",
                "id": "10",
                "role": "Customer",
                "participantId": "Anja"
            },
            {
                "text": "In the self-service menu you can select Debit cards.The screen will show you the debit cards that you own. You can select the debit card that is lost and click the block button.After blocking, it will ask you if you will also want to replace the debit card. You can select yes, check the address and replace the card right there.",
                "id": "11",
                "role": "Agent",
                "participantId": "Steven"
            },
            {
                "text": "Oh, That's great. Is that all?",
                "id": "12",
                "role": "Customer",
                "participantId": "Anja"
            },
            {
                "text": "That would be all, unless you have any further questions for me.",
                "id": "13",
                "role": "Agent",
                "participantId": "Steven"
            },
            {
                "text": " No, This was exactly what I was looking for. Thank you so much. ",
                "id": "14",
                "role": "Customer",
                "participantId": "Anja"
            },
            {
                "text": "All right. In that case, have a very nice day.",
                "id": "15",
                "role": "Agent",
                "participantId": "Steven"
            },
            {
                "text": " Thank you, Steven. Bye, bye. All right. Bye.",
                "id": "16",
                "role": "Customer",
                "participantId": "Anja"
            }]
            const transcript = JSON.stringify(mockTranscript, null, 2)
            setData(transcript);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const fetchSummary = async () => {
        try {
            //const response = await fetch('http://localhost:8080/texttosummary');
            //const jsonData = await response.json();
            //const summary = JSON.stringify(jsonData, null, 2)
            const mockSummary = {
                "issue": "The customer lost their debit card and needed assistance in blocking it in the mobile banking app.",
                "narrative": "Anja called ABN AMRO Customer Care to ask how to block a lost debit card in the mobile banking app. Steven explained how to do this and Anja thanked him for his help.",
                "chapterTitle": "Blocking Credit and debit Cards",
                "resolution": "The agent instructed the customer to block the lost card in the mobile banking app through the self-service menu and then replace it."
              }
            const mockSummaryString = JSON.stringify(mockSummary, null, 2)
            const summary = mockSummaryString.replace(/,/g, ',\n');
            
            setData(summary);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const saveToMSD = async () => {
        try {
            //const response = await fetch('your-api-endpoint');
            //const jsonData = await response.json();
            const mock = "Successfully saved to MSD!"
            setData(mock);
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
        whiteSpace: 'pre-wrap',
    };

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#009286',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        marginLeft: '30px',
        marginTop: '10px',
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
                    <video src={videoFile} style={videoStyle} controls />
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