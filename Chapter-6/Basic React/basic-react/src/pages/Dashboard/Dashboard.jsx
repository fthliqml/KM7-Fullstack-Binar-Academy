/* eslint-disable react/prop-types */
import Navbar from "@components/Navbar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/cars");
        const data = res.data;
        if (data.isSuccess) {
          const cars = data.data.cars;
          setCars(cars);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full min-h-[100vh]">
      <Navbar active={"Dashboard"} />
      {!cars.length ? (
        <div className="h-96 flex items-center">
          <p className="mx-auto font-semibold text-xl">
            Car is empty. Please comeback soon...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-7 gap-y-10">
          {cars.map((car, index) => (
            <Car
              key={index}
              name={car.name}
              model={car.model}
              size={car.size}
              createdAt={car.createdAt}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const Car = ({ name, model, size, createdAt }) => {
  const date = new Date(createdAt).toLocaleString("id-ID");
  return (
    <div className="max-w-md  m-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="/images/car01.min.jpg" alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <ul className="mb-4 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-400">
          <li>
            <span className="font-semibold">Name:</span> {name}
          </li>
          <li>
            <span className="font-semibold">Model:</span> {model}
          </li>
          <li>
            <span className="font-semibold">Size:</span> {size}
          </li>
          <li>
            <span className="font-semibold">Created:</span> {date}
          </li>
        </ul>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
