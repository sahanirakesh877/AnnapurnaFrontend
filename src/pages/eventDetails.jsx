import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Download,
  Thumbnails,
  Zoom,
  Captions,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css"; // Import Lightbox styles
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { toast } from "react-toastify";

const EventDetails = () => {
  const { pathname } = useLocation();
  const { eventId } = useParams();

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgPhoto, setImgPhoto] = useState([]);
  const [reRender, setReRender] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    async function getGallery() {
      console.log("getting selected event");
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER}/api/v1/event/${eventId}`
        );
        if (response.data.success) {
          console.log(response.data, "selected event");
          setImgPhoto(response.data.event);
        }
      } catch (error) {
        if (error.response && error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error(error.message);
        }
      }
    }
    getGallery();
  }, [reRender]);

  console.log(imgPhoto, "image photo");
  const imgData = imgPhoto?.images?.map((item, index) => ({
    id: index,
    src: `${import.meta.env.VITE_SERVER}/${item}`,
    title: imgPhoto.title,
  }));
  console.log(imgData);
  return (
    <>
      <div className="container mx-auto py-10">
        <div className="flex justify-center items-center  pb-8">
          <h2 className=" border-b-2 border-green-400 uppercase text-center text-3xl text-red-700 font-semibold">
            Event
          </h2>
        </div>
        {imgData && imgData.length ? (
          <>
            <h6 className=" border-b-2 border-green-400 uppercase text-left mb-10 text-xl text-red-600 font-semibold">
              {imgPhoto.title}
            </h6>
            <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>div:not(:first-child)]:mt-8 px-4">
              {imgData.map((photo, index) => (
                <div key={photo.id} className="relative group">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-auto object-cover rounded-lg"
                    onClick={() => {
                      setOpen(true);
                      setCurrentIndex(index);
                      console.log("clicked");
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none">
                    {/* <span className="text-white text-lg font-semibold">{photo.title}</span> */}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>No images found</div>
        )}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={imgData}
          plugins={[Thumbnails, Download, Zoom, Captions]}
          index={currentIndex} // Pass the current index to Lightbox
        />
      </div>
    </>
  );
};

export default EventDetails;
