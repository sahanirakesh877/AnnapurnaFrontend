import operatingImg from "/operatingPhoto.jpg";
import laproscopingImg from "/laparoscoping.webp";
import nicuingImg from "/nicuing.jpg";
import xRayingImg from "/xraying.webp";
import DentalImg from "/dental.jpg";
import operationTableImg from "/operationTable.png";
import anesthesiaImg from "/anesthesia.png";
import drPanel from "/detectorPanel.png";
import xRayImg from "/x-ray.png";
import instrumentsImg from "/instruments.png";
import incuImg from "/nicu.png";
import dentalSetup from "/dentalSetup.png";
import laparTower from "/4kLapa.png";

export const images = [
  {
    title: "Suppliers of Choice for Hospitals",
    image: operatingImg,
    subItems: [
      {
        title: "Operation Table",
        image: operationTableImg,
      },
      {
        title: "Anesthesia Machine",
        image: anesthesiaImg,
      },
    ],
  },


  {
    title: "Committed to Hospital Equipment Quality",
    image: laproscopingImg,
    subItems: [
      {
        title: "4k laparoscopic tower",
        image: laparTower,
      },
      {
        title: "Instruments",
        image: instrumentsImg,
      },
    ],
  },


  {
    title: "Hospital Equipment Experts at Your Service",
    image: nicuingImg,
    subItems: [
      {
        title: "NICU",
        image: incuImg,
      },
    ],
  },


  {
    title: "Excellence in Hospital Equipment Supply",
    image: xRayingImg,
    subItems: [
      {
        title: "X-Ray Machine",
        image: xRayImg,
      },
      {
        title: "Detector Panel",
        image: drPanel,
      },
    ],
  },


  {
    title: "Your Go-To Hospital Equipment Supplier",
    image: DentalImg,
    subItems: [
      {
        title: "Dental Setup",
        image: dentalSetup,
      },
    ],
  },
];
