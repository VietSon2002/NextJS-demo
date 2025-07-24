import React from 'react';
import { Html, Tailwind, Body, Container, Text, Link, Preview } from '@react-email/components';

const WelcomeEmail = ({ name }: { name: string }) => {
    return (
        <Html>
            <Preview>Welcome to our service!</Preview>
            <Tailwind>
                <Body className="bg-white font-sans m-0 p-6">
                    <Container className="bg-gray-100 rounded-lg p-8 mx-auto min-h-screen flex flex-col justify-start items-start">
                        <Text className="text-2xl font-bold text-gray-800 mb-4">
                            Welcome {name}!
                        </Text>
                        <Text className="text-base text-gray-700 mb-3">
                            Thank you for registering with us. We are excited to have you on board!
                        </Text>
                        <Text className="text-base text-gray-700 mb-6">
                            If you have any questions, feel free to reach out to our support team.
                        </Text>
                        <Link
                            href="https://example.com"
                            className="text-blue-600 underline"
                        >
                            Visit our website
                        </Link>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

// const body: CSSProperties = {
//     fontFamily: 'Arial, sans-serif', padding: '20px', background: '#ffffff', height: '100vh',
// }

// const container: CSSProperties = {
//     margin: '0 auto',
//     backgroundColor: '#f4f4f4',
//     padding: '20px',
//     borderRadius: '8px',
//     height: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
// }

export default WelcomeEmail
