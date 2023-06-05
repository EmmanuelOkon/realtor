import { useState } from "react";

export default function CreateListing() {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: true,
    regularPrice: 0,
    discountedPrice: 0,
  });

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountedPrice,
  } = formData;
  function onChange() {}
  return (
    <main className="max-w-md px-2 mx-auto ">
      <h1 className="text-3xl text-center mt-6 font-bold text-deepGreen">
        Create a Listing
      </h1>
      <form>
        <p className="text-lg mt-6 mb-1 font-semibold text-fadeGreen">
          Sell or Rent
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            id="type"
            value="sell"
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full border-2 border-fadeGreen ${
              type === "rent"
                ? "bg-fadeGreen bg-opacity-10 text-fadeGreen font-bold"
                : "bg-fadeGreen text-white"
            }`}
          >
            Sell
          </button>
          <button
            type="button"
            id="type"
            value="rent"
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full border-2 border-fadeGreen ${
              type === "sell"
                ? "bg-fadeGreen bg-opacity-10 text-fadeGreen "
                : "bg-fadeGreen text-white"
            }`}
          >
            Rent
          </button>
        </div>
        <p className="text-lg mt-6 mb-1 font-semibold text-fadeGreen">Name</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Name"
          maxLength="32"
          minLength="10"
          required
          className="w-full p-2 text-xl text-grey bg-white border-2 border-grey border-opacity-25 rounded transition duration-150 ease-in-out focus:text-grey focus:border-fadeGreen focus:ring-transparent mb-6"
        />
        <div className="flex gap-3 mb-6">
          <div className="w-full">
            <p className="text-lg font-semibold mb-1 text-fadeGreen">
              Bedrooms
            </p>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={onChange}
              min="1"
              max="50"
              required
              className="w-full px-4 py-2 text-xl text-grey bg-white border-2 border-grey border-opacity-25 rounded transition duration-150 ease-in-out focus:text-grey focus:border-fadeGreen focus:ring-transparent text-center"
            />
          </div>
          <div className="w-full">
            <p className="text-lg font-semibold mb-1 text-fadeGreen">
              Bathrooms
            </p>
            <input
              type="number"
              id="bathrooms"
              value={bathrooms}
              onChange={onChange}
              min="1"
              max="50"
              required
              className="w-full px-4 py-2 text-xl text-gray-800 bg-white border-2 border-grey border-opacity-25 rounded transition duration-150 ease-in-out focus:text-grey focus:border-fadeGreen focus:ring-transparent text-center"
            />
          </div>
        </div>
        <p className="text-lg mt-6 font-semibold mb-1 text-fadeGreen">
          Parking spot
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            id="parking"
            value={true}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full border-2 border-fadeGreen ${
              !parking
                ? "bg-fadeGreen bg-opacity-10 text-fadeGreen"
                : "bg-green-600 text-white"
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            id="parking"
            value={false}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full border-2 border-fadeGreen ${
              parking
                ? "bg-fadeGreen bg-opacity-10 text-fadeGreen"
                : "bg-fadeGreen text-white"
            }`}
          >
            no
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold mb-1 text-fadeGreen">
          Furnished
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            id="furnished"
            value={true}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full border-2 border-fadeGreen ${
              !furnished
                ? "bg-fadeGreen bg-opacity-10 text-fadeGreen"
                : "bg-green-600 text-white"
            }`}
          >
            yes
          </button>
          <button
            type="button"
            id="furnished"
            value={false}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              furnished
                ? "bg-fadeGreen bg-opacity-10 text-fadeGreen"
                : "bg-fadeGreen text-white"
            }`}
          >
            no
          </button>
        </div>
        <p className="text-lg mt-6 mb-1 font-semibold text-fadeGreen">
          Address
        </p>
        <input
          type="text"
          id="address"
          value={address}
          onChange={onChange}
          placeholder="Address"
          required
          className="w-full rsize-none p-2 text-xl text-grey bg-white border-2 border-grey border-opacity-25 rounded transition duration-150 ease-in-out focus:text-grey focus:border-fadeGreen focus:ring-transparent"
        />
        <p className="text-lg mt-6 mb-1 font-semibold text-fadeGreen">
          Description
        </p>
        <textarea
          type="text"
          id="address"
          value={description}
          onChange={onChange}
          placeholder="Description"
          required
          className="w-full p-2 text-xl text-gray-800 bg-white border-2 border-grey border-opacity-25 rounded transition duration-150 ease-in-out focus:text-grey focus:border-fadeGreen focus:ring-transparent"
        />
        <p className="text-lg mt-6 font-semibold mb-1 text-fadeGreen">Offer</p>
        <div className="flex gap-3">
          <button
            type="button"
            id="offer"
            value={true}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full border-2 border-fadeGreen ${
              !offer
                ? "bg-fadeGreen bg-opacity-10 text-fadeGreen"
                : "bg-fadeGreen text-white"
            }`}
          >
            yes
          </button>
          <button
            type="button"
            id="offer"
            value={false}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full border-2 border-fadeGreen ${
              offer
                ? "bg-fadeGreen bg-opacity-10 text-fadeGreen"
                : "bg-fadeGreen text-white"
            }`}
          >
            no
          </button>
        </div>
        <p className="text-lg font-semibold mt-6 mb-1 text-fadeGreen">
          Regular price
        </p>
        <div className="flex w-full gap-3 items-center ">
          <input
            type="number"
            id="regularPrice"
            value={regularPrice}
            onChange={onChange}
            min="50"
            max="400000000"
            required
            className="w-full p-2 text-xl text-grey bg-white border-2 border-grey border-opacity-25 rounded transition duration-150 ease-in-out focus:text-grey focus:bg-white focus:border-fadeGreen focus:ring-transparent text-center"
          />
          {type === "rent" && (
            <div className="w-full">
              <p className="text-md md:text-lg whitespace-nowrap text-grey">
                $ / Month
              </p>
            </div>
          )}
        </div>
        {offer && (
          <div>
            <p className="text-lg font-semibold mt-6 mb-1 text-fadeGreen">
              Discounted price
            </p>
            <div className="flex w-full gap-3 items-center ">
              <input
                type="number"
                id="regularPrice"
                value={discountedPrice}
                onChange={onChange}
                min="50"
                max="400000000"
                required
                className="w-full p-2 text-xl text-gray-800 bg-white border-2 border-grey border-opacity-25 rounded transition duration-150 ease-in-out focus:text-grey focus:bg-white focus:border-fadeGreen focus:ring-transparent text-center"
              />
              {type === "rent" && (
                <div className="w-full">
                  <p className="text-md md:text-lg whitespace-nowrap text-grey">
                    $ / Month
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
        <div className="mb-6">
          <p className="text-lg font-semibold text-fadeGreen">Images</p>
          <p className="text-grey">The first image will be the cover (max 6)</p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg,.png,.jpeg"
            multiple
            required
            className="w-full rsize-none p-2 text-xl text-grey bg-white border-2 border-grey border-opacity-25 rounded transition duration-150 ease-in-out focus:text-grey focus:border-fadeGreen ring-transparent focus:ring-transparent outline-transparent focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="mb-6 w-full px-7 py-3 bg-deepGreen text-white font-medium text-sm uppercase rounded shadow-md hover:bg-opacity-90 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg transition duration-150 ease-in-out"
        >
          Create Listing
        </button>
      </form>
    </main>
  );
}
