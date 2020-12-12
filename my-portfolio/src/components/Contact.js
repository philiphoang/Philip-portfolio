import React, {Component} from "react";

export default class Contact extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="ten columns">
                        <p className="lead">
                            Contact me anytime regardless of work or suggestions
                        </p>
                    </div>
                </div>
                <div className="row">
                    <aside className="eight columns footer-widgets">
                        <div className="widget">
                            <h4>LinkedIn: {resumeData.linkedinId}</h4>
                        </div>
                    </aside>
                </div>
            </section>
        );
    }
}