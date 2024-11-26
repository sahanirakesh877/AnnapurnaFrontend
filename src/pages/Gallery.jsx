import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import {
  Download,
  Thumbnails,
  Zoom,
  Captions,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css"; // Import Lightbox styles
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import axios from "axios";
import { toast } from "react-toastify";

const Gallery = () => {
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reRender, setReRender] = useState(false);
  const [imgPhoto, setImgPhoto] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    async function getGallery() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER}/api/v1/gallery`
        );
        if (response.data.success) {
          console.log(response.data);
          setImgPhoto(response.data.gallery);
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

  const imgData = imgPhoto.map((item) => ({
    id: item._id,
    src: `${import.meta.env.VITE_SERVER}/${item.url}`,
    title: item.title,
  }));
  return (
    <>
      <div className="container mx-auto py-10">
        <div className="flex justify-center items-center  pb-8">
          <h2 className=" border-b-2 border-green-400 uppercase text-center text-3xl text-red-700 font-semibold">
            Gallery
          </h2>
        </div>
        {imgData.length ? (
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
        ) : (
          <div>No Gallery data found</div>
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

export default Gallery;
