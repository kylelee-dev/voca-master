import { Modal } from '@mui/material';
import { useState } from 'react'

export default function ModalForm({ Btn, children }) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <div onClick={handleOpen}>{Btn}</div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {children}
            </Modal>

        </div>
    )
}
