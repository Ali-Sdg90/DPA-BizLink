import React from "react";
import { API_BASE_IMG } from "../../constants/apiConstants";
import UserPlaceholderImage from "../../assets/images/test-page/User-Placeholder.png";

const ImageWithFallback = ({ imageUrl, className, alt, needPrefix = true }) => {
    const handleImageError = (event) => {
        event.target.src = UserPlaceholderImage;
    };

    return (
        <img
            src={`${needPrefix ? API_BASE_IMG : ""}${imageUrl}`}
            className={`${className} image-default-style`}
            alt={alt}
            onError={handleImageError}
        />
    );
};

export default ImageWithFallback;
