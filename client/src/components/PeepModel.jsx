import React from 'react'


function PeepModel({ allPeeps }) {
    return (
        <>
            {allPeeps.slice(0).reverse().map(data =>

                <div class="card border-info mb-3 w-75
                " key={data._id} >
                    <div class="card-header">UserName: {data.author}</div>
                    <div class="card-body">

                        <p class="card-text">{data.text}</p>
                        <p class="card-text"><small class="text-muted">Posted: {new Date(data.createdAt).toString()}</small></p>
                    </div>

                </div>
            )}

        </>
    )
}

export default PeepModel