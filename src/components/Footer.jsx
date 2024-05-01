import React from 'react';
import logo from '../assets/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <section className="ezy__copyright9 light py-12 bg-white  text-zinc-900 ">
            <div className="container px-4">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4">
                        <div className="flex flex-col justify-center items-center text-center">
                            <div className="flex items-center justify-center mb-6">
                                <div>
                                    <img src={logo} alt=""
                                        className=" max-w-32 h-auto" />
                                </div>
                                <div>
                                    <p className="pl-3">&#169; Copyright all rights reserved</p>
                                </div>
                            </div>
                            <p className="opacity-75 mb-6">
                            "Pawsome" is your go-to online destination for all things in pet care! Whether you're a proud pet parent or a seasoned pet professional, our platform offers a myriad of resources tailored to meet your furry friend's needs. From vet consultations to grooming services and trainer needs, we've got you covered.
                            </p>
                            <ul className="flex gap-4 justify-content-center">
                                <li>
                                    <a href="/" className="text-xl hover:text-blue-600 transition duration-300">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="text-xl hover:text-blue-600 transition duration-300">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="text-xl hover:text-blue-600 transition duration-300">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="text-xl hover:text-blue-600 transition duration-300">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
