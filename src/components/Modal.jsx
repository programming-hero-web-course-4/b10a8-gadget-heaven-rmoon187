import React, { useEffect, useRef } from 'react';


const Modal = ({ closeModal, cost }) => {
    const dialogRef = useRef(null);

    useEffect(() => {

        if (dialogRef.current) {
            dialogRef.current.showModal();
        }

        return () => {

            if (dialogRef.current) {
                dialogRef.current.close();
            }
        };
    }, []);
    return (
        <div>
            <dialog ref={dialogRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-center space-y-3">
                    <img className='mx-auto' src="/src/assets/Group.png" alt="" />
                    <h3 className="font-bold text-3xl">Payment Successful</h3>
                    <div className="divider"></div>
                    <p className="font-medium text-gray-600">Thanks for purchasing</p>

                    <div className="modal-action">
                        <form className='w-full' method="dialog">
                            <button onClick={closeModal} className="btn font-bold text-base  w-full rounded-3xl">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;