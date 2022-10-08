import React, { Component } from 'react';
import ReactModal from 'react-modal';

import BlogForm from '../blog/blog-form';

ReactModal.setAppElement(".app-wrapper")

export default class BlogModal extends Component {
    constructor(props) {
        super(props);

        this.customStyles = {
            content: {
                top: "25%",
                left: "25%",
                right: "auto",
                marginRight: "-50%",
                transfrom: "translate(-50%, -50%)",
                width: "800px"
            },

            overlay: {
                backgroundColor: "rgba(1, 1, 1, 0.75)" 
            }
        };

        this.handleSuccessfullFormSubmission = this.handleSuccessfullFormSubmission.bind(this);
    }

    handleSuccessfullFormSubmission(blog) {
        this.props.handleSuccessfullNewBlogSubmission(blog);
    }

    render() {
        return (
            <ReactModal
                style={this.customStyles}
                onRequestClose={() => {
                    this.props.handleModalClose();
                }}
                isOpen={this.props.modalIsOpen}
            >
                <BlogForm handleSuccessfullFormSubmission={this.handleSuccessfullFormSubmission} />
            </ReactModal>
        );
    }
}