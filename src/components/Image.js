import React from "react";
import "./styles.css"

const Image = ({ url, width, height, alt }) => {
    return <>
        <div>
            <img className="profile-pic-round" src={url} alt={alt} width={width} height={height} />
        </div>
    </>
}
export default Image