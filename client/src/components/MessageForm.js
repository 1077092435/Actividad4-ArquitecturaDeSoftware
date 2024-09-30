import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const MessageForm = () => {
    const [userInput, setUserInput] = useState('');
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error message
        try {
            const res = await axios.post('http://localhost:3000/api/message', { message: userInput });
            setResponse(res.data.reply);
        } catch (error) {
            setError('Hubo un error al enviar el mensaje.');
            console.error('Error:', error);
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <h1 className="text-center">Enviar Mensaje</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicMessage">
                            <Form.Control
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                placeholder="Escribe algo..."
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                            Enviar
                        </Button>
                    </Form>
                    {response && <Alert variant="success" className="mt-3">{response}</Alert>}
                    {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                </Col>
            </Row>
        </Container>
    );
};

export default MessageForm;
