import React from "react";

class Square extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                style={{
                    width: this.props.size,
                    height: this.props.size,
                    backgroundColor: this.props.color,
                    border: "1px solid black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <p style={{ color: "white" }}>{this.props.number}</p>
            </div>
        );
    }
}

export default Square;