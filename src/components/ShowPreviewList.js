import React from "react";

const ShowPreviewList = ({ previews }) => (
    <div>
        {previews.map((preview) => (
            <div key={preview.id}>
                <img src={preview.image} alt={preview.title} />
                <h2>{preview.title}</h2>
                <p>{preview.description}</p>
            </div>
        ))}
    </div>
);

export default ShowPreviewList;
