import React, { useEffect, useState } from "react";
import productdata from "../assets/ProductData";
import { Link, useLocation } from "react-router-dom";
import Modal from "../components/Modal";
import ReactPaginate from "react-paginate";

const Product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const productsPerPage = 8;

  // Extract unique categories
  const categories = [
    "All",
    ...new Set(productdata.map((product) => product.category)),
  ];

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? productdata
      : productdata.filter((product) => product.category === selectedCategory);

  // Calculate the index of the first and last product for the current page
  const indexOfLastProduct = (currentPage + 1) * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calculate total pages
  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(0); // Reset to first page when category changes
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="bg-slate-200 py-10">
        <div className="container mx-auto">
        <div className="flex justify-center items-center  pb-8">
       <h2 className=" border-b-2 border-green-400 uppercase text-center text-3xl text-red-700 font-semibold">
        Featured Products
        </h2>
       </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <aside className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleCategoryClick(category)}
                      className={`block py-2 px-4 rounded text-dark ${
                        selectedCategory === category
                          ? "bg-red-400 text-white w-full"
                          : "bg-red-100 hover:bg-red-200 w-full"
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            <section className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentProducts.map((a) => (
                <div
                  className="bg-white p-4 rounded-lg shadow-md h-72 flex flex-col"
                  key={a.id}
                >
                  <img
                    src={a.image1}
                    alt="Product Image"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-1">
                    <h3 className="text-lg font-bold mb-2">{a.title}</h3>
                    <div className="flex space-x-2">
                      <Link to={`/product/${a.id}`}>
                        <button className="bg-green-200 text-sm text-dark px-2 py-1 rounded-lg shadow hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                          View Details
                        </button>
                      </Link>
                      <button
                        onClick={() => {
                          setTitle(a.title);
                          openModal();
                        }}
                        className="bg-green-200 text-sm text-dark px-2 py-1 rounded-lg shadow hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center flex-row mt-12 items-center">
            <ReactPaginate
              previousLabel={"< Previous "}
              nextLabel={"Next >"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"flex space-x-1"}
              pageClassName={"bg-white border border-gray-300 rounded "}
              pageLinkClassName={
                "hover:text-white hover:bg-blue-700 px-3 pb-2  text-blue-500"
              }
              previousClassName={"bg-red-400 text-white px-3 py-1 rounded"}
              previousLinkClassName={"text-white"}
              nextClassName={"bg-red-400 text-white px-3 py-1 rounded"}
              nextLinkClassName={"text-white"}
              breakClassName={"bg-white border border-gray-300 rounded "}
              breakLinkClassName={"text-blue-600"}
              activeClassName={"bg-blue-600 "}
              activeLinkClassName={"text-red-600"}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title={title} />
    </>
  );
};

export default Product;
