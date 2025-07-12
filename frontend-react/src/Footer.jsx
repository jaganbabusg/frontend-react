import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
    return (<>
        <footer className="bg-dark text-white pt-4 pb-2">
            <div className="container text-center text-md-start">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>
                            Mrs Biryani is an Indian restaurant, delivery and catering services set in the heart of Little India.
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h5>Contact</h5>
                        <p>Email: info@mrsbiryani.com.sg</p>
                        <p>Phone: +65 1234 5678</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
            <div className="text-center mt-3 border-top pt-2">
                &copy; 2025 Mrs. Biryani. All rights reserved.
            </div>
        </footer >
    </>
    );
}
