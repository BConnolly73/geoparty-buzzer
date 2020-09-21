import React, { useState, useEffect } from "react";
import { Modal, Button } from 'react-bootstrap';

interface Props {
    show: boolean,
    title: string,
    body: string,
    buttonText: string
};

const AlertModel = (props: Props) => {
    const { title, body, buttonText } = props;
    const [show, setShow] = useState(props.show);

    const handleClose = () => setShow(false);

    // TODO: Fix
    useEffect(() => {
        if (props.show !== show) {
            setShow(props.show);
        }
    }, [props, show])

    return (
        <Modal show={show} onHide={handleClose} backdrop={false}>
            <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                {buttonText}
            </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AlertModel;