import React from 'react';

function Contact() {
    return (
        <div>
            <div className="container-narrow mb-5 pt-4 px-4">
                <div className="text-center mb-5">
                    <h2 className="marker marker-center">Contact Me</h2>
                </div>
                <div className="row justify-content-center align-items-center" style={{width:'1024px'}}>
                    <div className="col-md-6">
                        <div className="bg-light my-2 p-3 pt-2">
                            <form action="#" method="POST">
                                <div className="form-group my-2">
                                    <label htmlFor="name" className="form-label fw-bolder">Name</label>
                                    <input className="form-control" type="text" id="name" name="name" required />
                                </div>
                                <div className="form-group my-2">
                                    <label htmlFor="email" className="form-label fw-bolder">Email</label>
                                    <input className="form-control" type="email" id="email" name="_replyto" required />
                                </div>
                                <div className="form-group my-2">
                                    <label htmlFor="message" className="form-label fw-bolder">Message</label>
                                    <textarea className="form-control" id="message" name="message" rows="4" required style={{ resize: 'none' }} />
                                </div>
                                <button className="btn btn-primary mt-2" type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
