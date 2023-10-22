import React from "react";

type Props = {};

const Footer: React.FC = (props: Props) => {
    return (
        <div className="row custom-footer">
            <div className="col-12 text-center">
                <p className="fs-7">
                    Created by the brilliant minds behind SpaceX
                </p>
            </div>
        </div>
    );
};

export default Footer;
