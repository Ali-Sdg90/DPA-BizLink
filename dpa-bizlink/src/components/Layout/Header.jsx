import React from "react";

import { ReactComponent as RightArrowIcon } from "../../assets/images/common/Right-Arrow.svg";

const Header = () => {
    return (
        <div className="app-header">
            <RightArrowIcon className="back-icon" />
            <div className="header-text">بیزلینک</div>
        </div>
    );
};

export default Header;
