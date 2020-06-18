import React, { useState } from "react";
import {
    Form,
    FormGroup,
    FormLabel,
    FormControl,
    Row,
    Col,
    Button
} from 'react-bootstrap';

type Props = {
    onSubmit: (arg0: string, arg1: string) => void,
    requireUsername?: boolean
};

const GameForm = (props: Props) => {
    const [username, setUsername] = useState('');
    const [gameCode, setGameCode] = useState('');

    return (
        <Form>
            {props.requireUsername && (<FormGroup as={Row}>
                <FormLabel column sm="2">Username</FormLabel>
                <Col sm="10">
                    <FormControl
                        type="string"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </Col>
            </FormGroup>
        )}

            <FormGroup as={Row} controlId="formPlaintextPassword">
                <FormLabel column sm="2">Game Code</FormLabel>
                <Col sm="10">
                    <FormControl
                        type="string"
                        placeholder="Enter Game Code"
                        value={gameCode}
                        onChange={(e) => {
                            setGameCode(e.target.value);
                        }}
                    />
                </Col>
            </FormGroup>

            <Button
                onClick={() => props.onSubmit(username, gameCode)}
            >
                Enter
            </Button>
        </Form>
    );
};

export { GameForm };