import React from 'react';

import Modal from './Modal';

function DeleteBadgeModal(props) {
    return <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <div className="DeleteBadgeModal">
            <h1>
                Are You Sure?
            </h1>
            <p>
                You are about to delete this badge.
            </p>
        </div>
        <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4 button-3d">Delete</button>
        <button onClick={props.onClose} className="btn btn-primary button-3d">Cancel</button>
    </Modal>;
}

export default DeleteBadgeModal;