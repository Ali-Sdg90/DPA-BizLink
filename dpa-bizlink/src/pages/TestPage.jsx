import { Button, Card } from "antd";
import React from "react";

import { ReactComponent as RightArrowIcon } from "../assets/images/common/Right-Arrow.svg";
import { ReactComponent as MoneyIcon } from "../assets/images/test-page/Money.svg";
import { ReactComponent as SocialLinksIcon } from "../assets/images/test-page/Social-Links.png";
import UserPlaceholderImage from "../assets/images/test-page/User-Placeholder.png";
import VideoPlaceholderImage from "../assets/images/test-page/Video-Placeholder.png";

const TestPage = () => {
    return (
        <div>
            <div className="app-header">
                <RightArrowIcon className="back-icon" />
                <div className="header-text">بیزلینک</div>
            </div>

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

            <Card className="second-section"></Card>

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
                <a href="#" className="linkedin-icon"></a>
                <a href="#" className="instagram-icon"></a>
            </Card>

            <Card className="fifth-section" title="سوابق شغلی">
                <div className="work-experience-section">
                    <div className="work-experience-item">
                        <div>لید مارکتینگ بلوبانک</div>-<div>۱۳۹۰ الی ۱۳۹۸</div>
                    </div>
                    <div className="work-experience-item">
                        <div>لید مارکتینگ بلوبانک</div>-<div>۱۳۹۰ الی ۱۳۹۸</div>
                    </div>
                </div>
            </Card>

            <Button type="primary">اشتراک گذاری</Button>
        </div>
    );
};

export default TestPage;
