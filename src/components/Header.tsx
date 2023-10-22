import React from "react";

const Header: React.FC = () => {
    return (
        <div className="row custom-heading">
            <div className="col-12 text-center">
                <p className="h1">Spaceflight details</p>
                <p className="fs-6 custom-muted-text">
                    Find out the elaborate features of all the past big
                    spaceflights.
                </p>
            </div>
        </div>
    );
};

export default Header;
