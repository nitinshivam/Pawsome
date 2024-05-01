import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

const testimonialList = [
	{
		author: {
			fullName: "Satyam",
			picture: "https://cdn.easyfrontend.com/pictures/users/user28.jpg",
			designation: "Customer",
		},
		rating: 3.5,
		description:
			"As a user of the pet grooming and training services, I found the experience satisfactory. The grooming sessions were handled with care and professionalism, and the training sessions were beneficial for my pet's development.",
	},
	{
		author: {
			fullName: "Prachi Singh",
			picture: "https://cdn.easyfrontend.com/pictures/users/user3.jpg",
			designation: "Customer",
		},
		rating: 3.8,
		description:
			"I am impressed with the grooming and training services provided by the platform. The trainers are knowledgeable, and the grooming sessions leave my pet looking clean and healthy. Overall, a great experience!",
	},
	{
		author: {
			fullName: "Samarth Towar",
			picture: "https://cdn.easyfrontend.com/pictures/users/user27.jpg",
			designation: "Customer",
		},
		rating: 4.5,
		description:
			"My experience with the online pet care portal has been excellent. The grooming services are top-notch, and the trainers are friendly and patient with my pet. I highly recommend this platform to all pet owners!",
	},
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
	<p className={classNames("mb-6", className)} {...rest}>
		<span>
			{[...Array(5)].map((_, i) => {
				const index = i + 1;
				let content = "";
				if (index <= Math.floor(rating))
					content = (
						<FontAwesomeIcon icon={faStar} className="text-yellow-500" />
					);
				else if (rating > i && rating < index + 1)
					content = (
						<FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />
					);
				else if (index > rating)
					content = (
						<FontAwesomeIcon
							icon={faStar}
							className="text-yellow-200 dark:text-opacity-20"
						/>
					);

				return <Fragment key={i}>{content}</Fragment>;
			})}
		</span>
		{showLabel && <span>{rating.toFixed(1)}</span>}
	</p>
);

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
	showLabel: PropTypes.bool,
	className: PropTypes.string,
};

const TestimonialItem = ({ testimonial }) => (
	<div className="bg-white shadow-xl  rounded-2xl transition duration-300 h-full p-6">
		<div className="mt-4">
			<Rating rating={testimonial.rating} showLabel={false} />
			<p className="opacity-50 mb-6">{testimonial.description}</p>
			<div className="flex items-center">
				<div className="mr-2">
					<img
						src={testimonial.author.picture}
						alt={testimonial.author.fullName}
						className="max-w-full h-auto rounded-full border"
						width="47"
					/>
				</div>
				<div>
					<h4 className="text-xl font-medium">{testimonial.author.fullName}</h4>
					<p className="text-sm">
						<i>{testimonial.author.designation}</i>
					</p>
				</div>
			</div>
		</div>
	</div>
);

TestimonialItem.propTypes = {
	testimonial: PropTypes.object.isRequired,
};

const Testimonial1 = () => {
	return (
		<section className="ezy__testimonial1 light py-14 md:py-24 bg-white  text-zinc-900 ">
			<div className="container px-4 mx-auto">
				<div className="flex justify-center md:mb-6">
					<div className="sm:max-w-lg text-center">
						<h2 className="text-3xl leading-none md:text-[45px] font-bold mb-4">
							Customer Reviews
						</h2>
						<p>
						"Discover the voices of our valued customers:<br/> Real stories, Real satisfaction!"
						</p>
					</div>
				</div>
				<div className="grid grid-cols-6 gap-6 pt-8">
					{testimonialList.map((testimonial, i) => (
						<div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
							<TestimonialItem testimonial={testimonial} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Testimonial1