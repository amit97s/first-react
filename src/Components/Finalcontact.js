import React, { useState } from "react";
import img from "../subassets/bagris images/_AJU1479.jpg";

// import { IoIosArrowRoundForward } from "react-icons/io";
// import { IoIosInformationCircle } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

import callUs from "../assets/callus.png";

const Finalcontact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [postWedding, setPostWedding] = useState(false);
  const [wedding, setWedding] = useState(false);
  const [preWedding, setPreWedding] = useState(false);

  const [error, setError] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;
  const budgetRegex = /^\d+$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!email.trim() || !emailRegex.test(email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!phone.trim() || !phoneRegex.test(phone)) {
      errors.phone = "Please enter a valid phone number";
    }
    if (!budget.trim() || !budgetRegex.test(budget)) {
      errors.budget = "Please enter a valid budget amount";
    }
    if (!budget.trim()) {
      errors.budget = "Please select a budget";
    }
    if (!city.trim()) {
      errors.city = "Please select a city";
    }
    if (!preWedding && !postWedding && !wedding) {
      errors.checkbox = "Please select at least one option";
    }
    setError(errors);

    if (Object.keys(errors).length === 0) {
    }
  };

  return (
    <>
      <main className="mx-auto overflow-hidden max-w-screen-xl -z-10">
        <div className="relative ">
          <img
            style={{ filter: "brightness(50%)" }}
            src={img}
            alt="img"
            className="w-screen h-[25rem] lg:h-[46rem] object-cover   "
          />
          <div className=" relative w-full top-[2px] right-0 bg-white lg:shadow-lg rounded-md lg:w-[28rem] p-4 lg:absolute lg:right-10 lg:top-7  ">
            <form className="flex flex-col gap-1.5" onSubmit={handleSubmit}>
              <h1 className="text-lg font-bold">
                Get in Touch with bagri photography
              </h1>
              <p className="text-sm ">
                Interested in a photoshoot? Want to discuss your photography
                needs? Feel free to send us a message using the form below!
              </p>
              <div className="flex items-center gap-2">
                <div className="w-1/2">
                  <label
                    htmlFor="UserName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="UserName"
                    placeholder={"John Doe"}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className={`mt-1 w-full rounded-md sm:text-sm outline-none border py-2.5 px-2 `}
                  />
                  {error.name && (
                    <p className="text-red-500 text-xs">{error.name}</p>
                  )}
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="UserEmail"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder={"johndoe@gmail.com"}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className={`mt-1 w-full rounded-md sm:text-sm outline-none border py-2.5 px-2 
                   
                    }`}
                  />
                  {error.email && (
                    <p className="text-red-500 text-xs">{error.email}</p>
                  )}
                </div>
              </div>
              <div className="w-full flex items-center gap-2">
                <div className="w-1/2">
                  <label
                    htmlFor="UserPhone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone*
                  </label>
                  <input
                    type="text"
                    id="UserPhone"
                    placeholder={"+91 1234567890"}
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    className={`mt-1 w-full rounded-md sm:text-sm outline-none border py-2.5 px-2 `}
                  />
                  {error.phone && (
                    <p className="text-red-500 text-xs">{error.phone}</p>
                  )}
                </div>

                <div className="w-1/2">
                  <label
                    htmlFor="Budget"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Budget*
                  </label>
                  <input
                    type="text"
                    id="budget"
                    placeholder={"please select your budget"}
                    value={budget}
                    onChange={(event) => setBudget(event.target.value)}
                    className={`mt-1 w-full rounded-md sm:text-sm outline-none border py-2.5 px-2 `}
                  />
                  {error.budget && (
                    <p className="text-red-500 text-xs">{error.budget}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-full">
                  <label
                    htmlFor="City"
                    className="block text-sm font-medium text-gray-900"
                  >
                    City*
                  </label>
                  <select
                    id="City"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    className={`mt-1 w-full rounded-md sm:text-sm outline-none border py-2.5 px-2 ${
                      error.city ? "border-red-600" : ""
                    }`}
                  >
                    <option value="">Select city</option>
                    <option value="Noida">Noida</option>
                    <option value="Faridabad">Faridabad</option>
                    <option value="New Delhi">New Delhi</option>
                    <option value="Ghaziabad">Ghaziabad</option>
                    <option value="Meerut">Meerut</option>
                    <option value="Old Delhi">Old Delhi</option>
                    <option value="Other">Other</option>
                  </select>
                  {error.city && (
                    <p className="text-red-500 text-xs">{error.city}</p>
                  )}
                </div>
              </div>

              <label
                htmlFor="Budget"
                className="block text-sm font-medium text-gray-900"
              >
                Services*
              </label>
              <div className="flex flex-col w-450:flex-row w-450:items-center gap-3 text-sm py-2">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="preWedding"
                    checked={preWedding}
                    onChange={(event) => setPreWedding(event.target.checked)}
                  />
                  <label htmlFor="preWedding">pre wedding</label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="postWedding"
                    checked={postWedding}
                    onChange={(event) => setPostWedding(event.target.checked)}
                  />
                  <label htmlFor="postWedding">post wedding</label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="wedding"
                    checked={wedding}
                    onChange={(event) => setWedding(event.target.checked)}
                  />
                  <label htmlFor="wedding">wedding</label>
                </div>
              </div>
              {error.checkbox && (
                <p className="text-red-500 text-xs">{error.checkbox}</p>
              )}

              <div>
                <label
                  htmlFor="Message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="Message"
                  className="mt-1 w-full rounded-md sm:text-sm outline-none border py-2.5 px-2"
                  rows="4"
                  placeholder="Enter your message......."
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-block w-full rounded border bg-red-400 px-12 py-3 text-sm font-medium text-white hover:bg-red-500 hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="absolute  top-24 lg:top-52 left-0 p-3 w-full    lg:w-[44rem]">
            <h1 className=" text-white text-xl sm:text-5xl font-semibold ">
              Discover Your Ideal
            </h1>
            <h1 className=" text-white text-xl sm:text-3xl ">
              WEDDING PHOTOGRAPHER
            </h1>
            <p className="text-white mt-4 sm:text-xl w-fit sm:w-[40rem] lg:w-10/12 ">
              Share preferences, find perfect wedding photographer. Capture
              every moment beautifully, tailored to your style and vision. Let's
              make your day unforgettable
            </p>
          </div>
        </div>

        <section className="bg-gray-100  py-5 flex items-center justify-around px-5 shadow-md rounded-md ">
          <div className=" m-auto md:ml-32">
            <h1 className="flex items-center gap-2 font-bold ">
              You can directly call us!
            </h1>
            <p> Give us a call and discuss your requirements.</p>
            <button className="mt-5 flex items-center justify-center gap-4 bg-green-500 rounded-md hover:bg-green-600 duration-150 text-white py-2.5 px-1 sm:px-5 outline-none border-none font-medium text-base w-full ">
              <MdLocalPhone size={20} /> Call us +91 0987654321
            </button>
          </div>

          <div className="mr-32 hidden md:block">
            <img src={callUs} alt="callus" className="h-60" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Finalcontact;
