import React from "react";
import { Link } from "react-router-dom";
import portfolioImg from "../../images/portfolio.png";
import Footer from "../Shared/Footer";
import "./MyPortfolio.css";
import trawellProject from "../../images/trawell-project.PNG";
import booklyProject from "../../images/bookly-project.PNG";
import doctorsPortal from "../../images/doctors-portal.PNG";

const MyPortfolio = () => {
  return (
    <div>
      {/* start hero section */}
      <section id="home" class="text-gray-700 body-font">
        <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font font-bold sm:text-6xl text-3xl mb-1 text-gray-900">
              Hi I'm <span className="text-primary">Antor</span>
            </h1>
            <p className="mb-2">
              <span className="font-bold">Email: </span>
              asarvinantor1111@gmail.com
            </p>
            <h3 className="text-2xl lg:text-4xl">
              Web Designer & Web Developer
            </h3>
            <p class="mt-2 mb-8 leading-relaxed">
              It’s Antor, Professional Web Developer. I love to write code, it’s
              my passoin. I am here to help you, I am here to design your web
              page.I can help you to describe yourself in the best way. No
              matter how difficult your web page is, I'll find an easy way and
              complete your work anyway. Stay connect with me……..😊
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg">
                Contact
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img src={portfolioImg} alt="myPortfolio" />
          </div>
        </div>
      </section>
      {/* end hero section */}

      {/* start about me section */}
      <section class="text-gray-700 body-font border-t border-gray-200">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-3xl font-bold title-font mb-2 text-gray-900">
              About <span className="text-primary">Me</span>
            </h1>
            <p class="pb-10">
              I'm a profession web designer and also a web developer
            </p>
            <p>
              It’s Antor, Professional Web Developer. I love to write code, it’s
              my passoin. I am here to help you, I am here to design your web
              page.I can help you to describe yourself in the best way. No
              matter how difficult your web page is, I'll find an easy way and
              complete your work anyway. Stay connect with me……..😊
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Web Design
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    Web design is the process of planning, conceptualizing, and
                    arranging content online. Today, designing a website goes
                    beyond aesthetics to include the website's overall
                    functionality.
                  </p>
                  <Link
                    to="/myPortfolio"
                    class="mt-3 text-primary inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Web Development
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    Web development, also known as website development, refers
                    to the tasks associated with creating, building, and
                    maintaining websites and web applications that run online on
                    a browser.
                  </p>
                  <a class="mt-3 text-primary inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Photo Editing
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    Photo editing (also called post-processing or
                    postproduction) is the process in digital photography of
                    making adjustments to photographs in a photo editing
                    program.
                  </p>
                  <a class="mt-3 text-primary inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end about me section */}

      {/* start skill section */}
      <section className="text-gray-700 body-font border-t border-gray-200">
        <div class="hero min-h-screen">
          <div class="hero-content flex-col lg:flex-row">
            <div>
              <div>
                <h2 className="text-2xl">HTML</h2>
                <progress
                  class="progress progress-warning w-96 h-5"
                  value="95"
                  max="100"
                ></progress>
              </div>
              <div>
                <h2 className="text-2xl">CSS</h2>
                <progress
                  class="progress progress-warning w-96 h-5"
                  value="85"
                  max="100"
                ></progress>
              </div>
              <div>
                <h2 className="text-2xl">Bootstrap</h2>
                <progress
                  class="progress progress-warning w-96 h-5"
                  value="75"
                  max="100"
                ></progress>
              </div>
              <div>
                <h2 className="text-2xl">Tailwind</h2>
                <progress
                  class="progress progress-warning w-96 h-5"
                  value="65"
                  max="100"
                ></progress>
              </div>
              <div>
                <h2 className="text-2xl">React</h2>
                <progress
                  class="progress progress-warning w-96  h-5"
                  value="85"
                  max="100"
                ></progress>
              </div>
              <div>
                <h2 className="text-2xl">Node JS.</h2>
                <progress
                  class="progress progress-warning w-96 h-5"
                  value="55"
                  max="100"
                ></progress>
              </div>
            </div>
            <div className="lg:w-2/4 mx-auto">
              <h1 class="text-5xl font-bold">My Skills</h1>
              <p class="py-6">
                It’s Antor, Professional Web Developer. I love to write code,
                it’s my passoin. I am here to help you, I am here to design your
                web page.I can help you to describe yourself in the best way. No
                matter how difficult your web page is, I'll find an easy way and
                complete your work anyway. Stay connect with me……..😊
              </p>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </section>
      {/* end skill section */}

      {/* start education section */}
      <section>
        <header className="text-center pb-8">
          <h1 class="sm:text-3xl text-3xl font-bold title-font mb-2 text-gray-900">
            My <span className="text-primary">Educational Qualification</span>
          </h1>
        </header>
        <div className="pb-10 flex justify-center">
          <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
            <div class="flex flex-wrap m-4">
              <div class="p-4 md:w-96">
                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 class="text-gray-900 text-2xl title-font font-bold">
                      SSC
                    </h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-base">
                      Izza Tun Nesa High School
                    </p>
                    <p class="leading-relaxed text-base">
                      <span className="font-bold">Department: </span>Science
                    </p>
                    <p class="leading-relaxed text-base">
                      <span className="font-bold">Passing Year: </span>2010-2014
                    </p>
                    <p class="leading-relaxed text-base">
                      <span className="font-bold">Result: </span>4.89
                    </p>
                    <Link
                      to="/myPortfolio"
                      class="mt-3 text-primary inline-flex items-center"
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-96">
                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <h2 class="text-gray-900 text-2xl title-font font-bold">
                      HSC
                    </h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-base">
                      Notre Dame College Mymensingh
                    </p>
                    <p class="leading-relaxed text-base">
                      <span className="font-bold">Department: </span>Science
                    </p>
                    <p class="leading-relaxed text-base">
                      <span className="font-bold">Passing Year: </span>2015-2017
                    </p>
                    <p class="leading-relaxed text-base">
                      <span className="font-bold">Result: </span>4.42
                    </p>
                    <Link
                      to="/myPortfolio"
                      class="mt-3 text-primary inline-flex items-center"
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-96">
                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 class="text-gray-900 text-2xl title-font font-bold">
                      BSc.
                    </h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-base">
                      Daffodil International University
                    </p>
                    <p class="leading-relaxed text-base">
                      <span className="font-bold">Department: </span>CSE
                    </p>
                    <p class="leading-relaxed text-base">
                      <span className="font-bold">Passing Year: </span>2018-2022
                    </p>
                    <p class="leading-relaxed text-base">
                      <span className="font-bold">Result: </span>3.68
                    </p>
                    <Link
                      to="/myPortfolio"
                      class="mt-3 text-primary inline-flex items-center"
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end education section */}

      {/* start project section */}
      <section>
        <div id="blog" class="text-gray-700 body-font border-t border-gray-200">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <header className="text-center pb-5">
                <h1 class="sm:text-3xl text-3xl font-bold title-font mb-2 text-gray-900">
                  My <span className="text-primary">Projects</span>
                </h1>
              </header>
              <p class="lg:w-1/2 w-full leading-relaxed text-base">
                There is my best three projects which all are dynamic.
              </p>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <div class="w-full inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                    <img
                      class="object-cover object-center h-full w-full"
                      src={trawellProject}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-2 font-bold">
                      TRAWELL-PROJECT
                    </h2>
                    <p></p>
                    <p class="leading-relaxed text-base">
                      The in-app advertising model charges the advertisers such
                      as hoteliers or flights to display their adds on the app
                      and get customers to click on their ads and make bookings
                      with their company. The travel mobile app owner also
                      charges commissions on each booking.
                    </p>
                    <Link
                      to="https://trawell-project-fb6da.firebaseapp.com/"
                      class="mt-3 text-primary inline-flex items-center"
                    >
                      Live Demo
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <div class="w-full inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                    <img
                      class="object-cover object-center h-full w-full"
                      src={booklyProject}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-2 font-bold">
                      BOOKLY-PROJECT
                    </h2>
                    <p></p>
                    <p class="leading-relaxed text-base">
                      Online Book store is an online web application where the
                      customer can purchase books online. Through a web browser
                      the customers can search for a book by its title or
                      author, later can add to the shopping cart and finally
                      purchase so well.
                    </p>
                    <Link
                      to="https://bookly-project-d23c0.firebaseapp.com/"
                      class="mt-3 text-primary inline-flex items-center"
                    >
                      Live Demo
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <div class="w-full inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                    <img
                      class="object-cover object-center h-full w-full"
                      src={doctorsPortal}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-2 font-bold">
                      DOCTORS-PORTAL
                    </h2>
                    <p></p>
                    <p class="leading-relaxed text-base">
                      Using the Internet of Things for healthcare will allow
                      collecting information from many patients and, based on
                      their symptoms, determining certain patterns. To establish
                      patterns according to which some diseases progress and
                      catch them in other patients.
                    </p>
                    <Link
                      to="https://doctors-portal-a770c.firebaseapp.com/"
                      class="mt-3 text-primary inline-flex items-center"
                    >
                      Live Demo
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default MyPortfolio;
