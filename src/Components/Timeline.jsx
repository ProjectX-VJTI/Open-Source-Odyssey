import { useEffect } from 'react';
import './timeline.css';

const VerticalTimeline = () => {
	useEffect(() => {
		const items = document.querySelectorAll("#timeline li");

		const isInViewport = (el) => {
			const rect = el.getBoundingClientRect();
			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <=
				(window.innerHeight || document.documentElement.clientHeight) &&
				rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			);
		};

		const run = () =>
			items.forEach((item) => {
				if (isInViewport(item)) {
					item.classList.add("show");
				}
			});

		// Events
		window.addEventListener("load", run);
		window.addEventListener("resize", run);
		window.addEventListener("scroll", run);

		return () => {
			window.removeEventListener("load", run);
			window.removeEventListener("resize", run);
			window.removeEventListener("scroll", run);
		};
	}, []);

	return (
		<div>
			<div className="relative h-[91.1vh] w-full bg-gradient-to-r from-slate-900 to-gray-800">
				<div className="absolute inset-0 bg-[radial-gradient(rgba(79,79,79,0.2)_1px,transparent_1px),radial-gradient(rgba(79,79,79,0.2)_1px,transparent_1px)] bg-[length:20px_20px]">
					<header className="main-header">
						<div className="down-arrow"></div>
						<h3><i className="far fa-user"></i> Name Surname / Company Name</h3>
						<h1>VERTICAL TIMELINE</h1>
					</header>
					<section id="timeline">
						<ul>
							<h3>2015</h3>
							<li>
								<div>
									<div>
										<h2>Title One</h2>
									</div>
									<p>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab fugit
										libero dolor rerum repellat tenetur enim impedit?
									</p>
								</div>
							</li>
							<h3>2016</h3>
							<li>
								<div>
									<div>
										<h2>Title Two</h2>
									</div>
									<p>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt non
										illum dolores est harum minus, modi alias ad dolorum ipsum.
									</p>
								</div>
							</li>
							<h3>2017</h3>
							<li>
								<div>
									<div>
										<h2>Title Three</h2>
									</div>
									<p>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
										recusandae cumque cupiditate eius quis! Hic assumenda nemo eos.
										Consequuntur, fugiat. Nam quis dolor magni distinctio.
									</p>
								</div>
							</li>
							<h3>2018</h3>
							<li>
								<div>
									<div>
										<h2>Title Four</h2>
									</div>
									<p>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
										quae nesciunt ullam officia asperiores culpa.
									</p>
								</div>
							</li>
							<h3>2019</h3>
							<li>
								<div>
									<div>
										<h2>Title Five</h2>
									</div>
									<p>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
										rerum facere quisquam quasi? Totam nulla libero beatae itaque?
									</p>
								</div>
							</li>
							<h3>2020</h3>
							<li>
								<div>
									<div>
										<h2>Title Six</h2>
									</div>
									<p>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt non
										illum dolores est harum minus, modi alias ad dolorum ipsum.
									</p>
								</div>
							</li>
						</ul>
					</section>
				</div></div></div>
	);
};

export default VerticalTimeline;
