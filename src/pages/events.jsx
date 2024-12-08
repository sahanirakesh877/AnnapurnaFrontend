import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function getEvents() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER}/api/v1/event`
        );
        if (response.data.success) {
          console.log(response.data);
          setEvents(response.data.events);
        }
      } catch (error) {
        if (error.response && error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error(error.message);
        }
      }
    }
    getEvents();
  }, []);

  return (
    <>
      <div className="container mx-auto py-10">
        <div className="flex justify-center items-center  pb-8">
          <h2 className=" border-b-2 border-green-400 uppercase text-center text-3xl text-red-700 font-semibold">
            Events
          </h2>
        </div>
        {events.length ? (
          <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>div:not(:first-child)]:mt-8 px-4">
            {events.map((event) => (
              <div key={event._id} className="relative group ">
                {/* Main Image */}

                <img
                  src={`${import.meta.env.VITE_SERVER}/${event.images[0]}`}
                  alt={event.title}
                  className="w-full h-auto object-cover rounded-lg min-h-40 min-w-40"
                />

                {/* Overlay with Browse Button */}
                <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <span className="text-white text-lg font-semibold">
                    {event.title}
                  </span>
                  <Link
                    to={`./${event._id}`}
                    className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600"
                  >
                    Browse
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No images found</div>
        )}
      </div>
    </>
  );
}
