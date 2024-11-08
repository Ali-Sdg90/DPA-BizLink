import axios from "axios";
import {
    API_BASE_URL,
    BASIC_AUTH_PASSWORD,
    BASIC_AUTH_USERNAME,
} from "../constants/apiConstants";

// import { LOCAL_STORAGE_TOKEN } from "../constants/commonConstants";

// Retrieve token from local storage
// const getLocalToken = () => {
//     try {
//         const token = window.localStorage.getItem(LOCAL_STORAGE_TOKEN);
//         return token ? JSON.parse(token) : null;
//     } catch (error) {
//         console.error("Failed to retrieve token from local storage:", error);
//         return null;
//     }
// };

// Display error messages as toast notifications with delay
const displayErrorMessages = (messages, setToastifyObj) => {
    if (Array.isArray(messages)) {
        messages.forEach((message, index) => {
            setTimeout(() => {
                setToastifyObj({
                    title: message,
                    mode: "error",
                });
            }, 150 * index);
        });
    } else {
        setToastifyObj({
            title: messages,
            mode: "error",
        });
    }
};

// Handle errors and trigger toast notifications
const handleError = (error, setToastifyObj) => {
    let errorMessage = "An unknown error occurred";

    if (error.response) {
        console.error("Error response:", error.response.data);

        if (
            error.response.data &&
            error.response.data.error &&
            error.response.data.error.msg
        ) {
            errorMessage = error.response.data.error.msg;
        } else if (error.response.data.message) {
            errorMessage = error.response.data.message;
        }

        // if (
        //     error.response.data.description &&
        //     error.response.data.description.summary
        // ) {
        //     errorMessage = `${error.response.data.description.summary}`;
        // }
    } else if (error.request) {
        console.error("Error request:", error.request);
        errorMessage = "No response received from server";
    } else {
        console.error("Error message:", error.message);
        errorMessage = error.message;
    }

    // Display the error message as a toast notification if the setToastifyObj function is provided
    if (setToastifyObj) {
        displayErrorMessages(errorMessage, setToastifyObj);
    }

    return Promise.reject(error);
};

// Create headers for API requests
const createBasicAuthHeaders = (needToken) => {
    const headers = {};

    if (needToken) {
        const token = btoa(`${BASIC_AUTH_USERNAME}:${BASIC_AUTH_PASSWORD}`);
        // const token = Buffer.from(
        //     `${BASIC_AUTH_USERNAME}:${BASIC_AUTH_PASSWORD}`
        // ).toString("base64");

        headers["Authorization"] = `Basic ${token}`;
        headers["Content-Type"] = "application/json";
    }

    return headers;
};

// // POST request
// export const postRequest = async (
//     endpoint,
//     data,
//     needToken = true,
//     setToastifyObj
// ) => {
//     // console.log("POST request >>", endpoint);

//     try {
//         const res = await axios.post(`${API_BASE_URL}${endpoint}`, data, {
//             headers: createHeaders(needToken),
//         });

//         return res.data;
//     } catch (error) {
//         return handleError(error, setToastifyObj);
//     }
// };

// GET request
export const getRequest = async (
    endpoint,
    needToken = true,
    setToastifyObj
) => {
    console.log("GET request >>", endpoint);

    console.log("Headers:", createBasicAuthHeaders(true));

    try {
        const res = await axios.get(`${API_BASE_URL}${endpoint}`, {
            headers: createBasicAuthHeaders(needToken),
        });

        return res.data;
    } catch (error) {
        return handleError(error, setToastifyObj);
    }
};

// // PATCH request
// export const patchRequest = async (
//     endpoint,
//     data,
//     needToken = true,
//     setToastifyObj
// ) => {
//     // console.log("PATCH request >>", endpoint);

//     try {
//         const res = await axios.patch(`${API_BASE_URL}${endpoint}`, data, {
//             headers: createHeaders(needToken),
//         });

//         return res.data;
//     } catch (error) {
//         return handleError(error, setToastifyObj);
//     }
// };

// // DELETE request
// export const deleteRequest = async (
//     endpoint,
//     needToken = true,
//     setToastifyObj
// ) => {
//     console.log("DELETE request >>", endpoint);

//     try {
//         const res = await axios.delete(`${API_BASE_URL}${endpoint}`, {
//             headers: createHeaders(needToken),
//         });

//         return res.data;
//     } catch (error) {
//         return handleError(error, setToastifyObj);
//     }
// };
