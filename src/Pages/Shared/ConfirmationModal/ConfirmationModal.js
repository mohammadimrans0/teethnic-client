import React from 'react';

const ConfirmationModal = ({title, message, modalData, successAction, successButtonName}) => {
    return (
      <div>
        <input
          type="checkbox"
          id="confirmation-modal"
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box relative">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="py-4">{message}</p>
            <div className='flex space-x-5'>
                        <label
              onClick={() => successAction(modalData)}
                            htmlFor="confirmation-modal" className="btn btn-sm btn-success">
                {successButtonName}
              </label>
              <label
                htmlFor="confirmation-modal"
                className="btn btn-sm"
              >
                Dismiss
              </label>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ConfirmationModal;