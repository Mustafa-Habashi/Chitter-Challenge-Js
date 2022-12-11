import React from 'react'

function PeepModel({ allPeeps }) {
    return (
        <div>
            {allPeeps.map(data =>

                <div div class="card" key={data._id} >
                    <div class="card-body">
                        <h6 class="card-title">UserName: {data.author}</h6>
                        <p class="card-text">{data.text}</p>
                        <p class="card-text"><small class="text-muted">Posted: {data.createdAt}</small></p>
                    </div>

                </div>
            )}

        </div >
    )
}

export default PeepModel