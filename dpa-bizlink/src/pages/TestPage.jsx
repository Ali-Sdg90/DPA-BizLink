import { Button, Card, Spin } from "antd";
import React, { useContext, useEffect, useState } from "react";

import { ReactComponent as MoneyIcon } from "../assets/images/test-page/Money.svg";
import SocialLinksImage from "../assets/images/test-page/Social-Links.png";

import Header from "../components/Layout/Header";
import { getRequest } from "../services/apiService";
import { CommonContext } from "../store/CommonContextProvider";
import ImageWithFallback from "../components/Common/ImageWithFallback";
import ReactPlayer from "react-player";

const TestPage = () => {
    const { setToastifyObj } = useContext(CommonContext);

    const [userData, setUserData] = useState();

    useEffect(() => {
        const getJobTitles = async () => {
            try {
                const res = await getRequest(
                    `basicGetPassport/sinsisn`,
                    true,
                    setToastifyObj
                );

                console.log("RESSSSS >>", res);

                if (res.success) {
                    console.log("Success Res >>", res);
                    setUserData(res.data);
                } else {
                    throw new Error("Unsuccessful fetch /options/jobTitles");
                }
            } catch (error) {
                console.log("Error in UsersList-getData: ", error);
            }
        };

        getJobTitles();
    }, []);

    return (
        <div className="test-page">
            <Header />

            {userData ? (
                <>
                    <Card className="first-section">
                        <div className="user-image">
                            <ImageWithFallback
                                imageUrl={userData.profileImageUrl}
                                className={""}
                                alt={"user-profile"}
                                needPrefix={false}
                            />
                        </div>

                        <div className="user-info">
                            <div className="user-name">{userData.fullName}</div>
                            <div className="user-job">{userData.jobTitle}</div>
                        </div>

                        <div className="user-price">
                            <MoneyIcon />
                            میانگین هزینه مشاوره : هر ساعت{" "}
                            {userData.averagePerHourFormatted}
                        </div>
                    </Card>

                    <Card className="second-section">
                        <ReactPlayer
                            className="video-player"
                            url={userData.aboutMe.videoUrl}
                            controls
                        />
                    </Card>

                    <Card className="third-section" title="درباره من">
                        <div className="about-me-text">
                            {userData.aboutMe.description}
                        </div>
                    </Card>

                    <Card className="forth-section" title="راه های ارتباطی">
                        <a
                            href="https://www.linkedin.com/in/ali-sdg90/"
                            target="_blank"
                            className="social-media-link"
                        >
                            <img
                                src={SocialLinksImage}
                                alt="social-media-icon"
                                className="social-media-icon"
                            />
                        </a>
                    </Card>

                    <Card className="fifth-section" title="سوابق شغلی">
                        <div className="work-experience-section">
                            {userData.workExperiences.map(
                                (experience, index) => (
                                    <div
                                        className="work-experience-item"
                                        key={index}
                                    >
                                        <div>{experience.key}</div>-
                                        <div>{experience.value}</div>
                                    </div>
                                )
                            )}
                        </div>
                    </Card>

                    <Button className="share-btn" type="primary">
                        اشتراک گذاری
                    </Button>
                </>
            ) : (
                <Spin size="large" className="loading-token-spinner" />
            )}
        </div>
    );
};

export default TestPage;
