import { Modal } from 'bootstrap'
import React, { useState, useEffect, useRef } from 'react'
import PeepModel from './PeepModel'
import axios from 'axios'

function HomePage({ peepData, getAllPeeps }) {

    const getUsername = localStorage.getItem('username')


    const [peep, setPeep] = useState({
        author: getUsername,
        text: ``
    })

    const [modal, setModal] = useState(null)
    const exampleModal = useRef()

    useEffect(() => {
        setModal(new Modal(exampleModal.current))
    }, [])

    const handleChange = e => {
        const { name, value } = e.target;
        setPeep({
            ...peep,
            [name]: value,

        });
    };

    const postPeep = async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:4000/composepeep`, peep);
        getAllPeeps();
        console.log(res)
        setPeep({
            text: '',
            author: getUsername
        })

    }

    return (
        <>

            <h3 style={{ margin: '10px' }}>Trending Today</h3>
            {getUsername ? <button type="button" class="btn btn-primary" onClick={() => {
                modal.show()

            }} style={{ padding: '10px', margin: '10px' }}>Post a Peep</button> : null}



            <div class="modal fade" ref={exampleModal} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">New peep</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={postPeep}>
                                {/* <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Recipient:</label>
                                    <input type="text" class="form-control" id="recipient-name"></input>
                                </div> */}
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label" placeholder='Enter Message' >Message:</label>
                                    <textarea class="form-control" id="message-text" name='text' value={peep.text} onChange={handleChange}></textarea>
                                </div>


                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {
                                        modal.hide()

                                    }}>Close</button>
                                    <button type="submit" class="btn btn-primary" onClick={() => {
                                        modal.hide()

                                    }} data-testid="required-button">Send message</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <div class='peepModel'>
                <PeepModel allPeeps={peepData}></PeepModel>
            </div>
        </>
    )
}

export default HomePage