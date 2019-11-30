import React, { Component } from "react";

class Hero extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titulo : ""
        }
      }

    render() {
        return (
            <section className="hero is-info is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">{this.props.titulo}</h1>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;