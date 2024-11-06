import { Button, Card } from "antd";
import React from "react";

import { ReactComponent as MoneyIcon } from "../assets/images/test-page/Money.svg";
import UserPlaceholderImage from "../assets/images/test-page/User-Placeholder.png";
import SocialLinksImage from "../assets/images/test-page/Social-Links.png";

import Header from "../components/Layout/Header";

const TestPage = () => {
    return (
        <div className="test-page">
            <Header/>

            <Card className="first-section">
                <div className="user-image">
                    <img src={UserPlaceholderImage} alt="User-Placeholder" />
                </div>

                <div className="user-info">
                    <div className="user-name">علیرضا شفیعی</div>
                    <div className="user-job">مشاور مارکتینگ</div>
                </div>

                <div className="user-price">
                    <MoneyIcon />
                    میانگین هزینه مشاوره : هر ساعت ۲۵۰,۰۰۰ تومان
                </div>
            </Card>

            <Card className="second-section">
                <div className="video-player"></div>
            </Card>

            <Card className="third-section" title="درباره من">
                <div className="about-me-text">
                    متن معرفی مختصری از این مشاور که خود و تخصص خود را شرح داده
                    است. متن معرفی مختصری از این مشاور که خود و تخصص خود را شرح
                    داده است. متن معرفی مختصری از این مشاور که خود و تخصص خود را
                    شرح داده است. متن معرفی مختصری از این مشاور که خود و تخصص
                    خود را شرح داده است.
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
                    <div className="work-experience-item">
                        <div>لید مارکتینگ بلوبانک</div>-<div>۱۳۹۰ الی ۱۳۹۸</div>
                    </div>
                    <div className="work-experience-item">
                        <div>مشاور مارکتینگ دیجیکالا</div>-
                        <div>۱۳۹۸ الی ۱۴۰۱</div>
                    </div>
                </div>
            </Card>

            <Button className="share-btn" type="primary">
                اشتراک گذاری
            </Button>
        </div>
    );
};

export default TestPage;
