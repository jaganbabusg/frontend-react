import Header from './Header';
import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
	return (<>
		<Header />
		<section className="about-one py-5">
			<div className="container">
				<div className="row align-items-center">
					{/* Text Column */}
					<div className="col-lg-8 order-lg-1">
						<div className="about-left-one">
							<span className="text-uppercase text-muted">Welcome to</span>
							<h1 className="display-5 fw-bold mt-2">Mr Biryani</h1>
							<h5 className="text-primary mb-3">Singapore’s home for authentic Hyderabadi Biryani</h5>
							<p>
								<strong>
									Mr Biryani is an Indian restaurant, delivery and catering service set in the heart of Little India.
									As our name suggests, we’re best known for our signature Hyderabadi style biryani alongside an array
									of familiar Indian classics proudly spiced with imported spices to bring forth flavourful, aroma-steeped
									meals best enjoyed with family and friends.
								</strong>
							</p>
							<a className="btn btn-primary mt-3" href="/about-us">Read More</a>
						</div>
					</div>
					{/* Image Column */}
					<div className="col-lg-4 order-lg-2">
						<div className="about-img-div">
							<img src="../images/about1.png" alt="Authentic Hyderabadi Biryani at Mr Biryani" className="img-fluid rounded" />
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="about-one py-5">
			<div className="container">
				<div className="row align-items-center">
					{/* Image Column */}
					<div className="col-lg-4 order-lg-1">
						<div className="about-img-div">
							<img src="../images/about2.png" alt="Authentic Hyderabadi Biryani at Mr Biryani" className="img-fluid rounded" />
						</div>
					</div>
					{/* Text Column */}
					<div className="col-lg-8 order-lg-2">
						<div className="about-left-one">
							<span className="text-uppercase text-muted">What Is</span>
							<h1 className="display-5 fw-bold mt-2">Hyderabad Biryani</h1>
							<h5 className="text-primary mb-3">Familiar but gloriously spiced</h5>
							<p>
								<strong>Mr Biryani</strong> is a food catering service and restaurant located in the heart of Little India, 
								which serves authentic biryani catered towards local Singaporean tastes. Chef<strong> Govinda Rajan </strong>
								has specially adapted the style of biryani to local Singaporean culinary history, ingredients and taste buds, 
								and offers his signature Hyderabad Dhum Biryani for catering meals to homes, offices and events.
							</p>
							<a className="btn btn-primary mt-3" href="/about-us">Read More</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	</>);
}