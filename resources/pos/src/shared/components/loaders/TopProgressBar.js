import React from "react";
import {connect} from "react-redux";
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
    barColors: {
        "0": " #284f9c",
        "1.0": "#284f9c",
    },
    shadowBlur: 0,
    barThickness: 2
});

const TopProgressBar = (props) => {
    const { isLoading } = props;
    return isLoading ? <TopBarProgress/> : null;
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoading: state.isLoading || ownProps.isLoading
    };
};

export default connect(mapStateToProps, null)(TopProgressBar);
