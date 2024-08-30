import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Modal from "../components/Modal";
import ReactPaginate from "react-paginate";

const Product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const productsPerPage = 4;

  useEffect(() => {
    // Fetch categories and products
    const fetchData = async () => {
      try {
        // Fetch categories
        const categoryResponse = await axios.get(
          `${import.meta.env.VITE_SERVER}/api/v1/category`
        );
        const categoryData = categoryResponse.data.categories;
        console.log("categoryData", categoryData);

        // Fetch products
        const productResponse = await axios.get(
          `${import.meta.env.VITE_SERVER}/api/v1/products`
        );
        const productData = productResponse.data.products;

        console.log("productData", productData);

        // Set state with fetched data
        setCategories(categoryResponse.data.categories);
        setProducts(productData);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch Product. Server Error");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = products;

  const indexOfLastProduct = (currentPage + 1) * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  const openModal = (productTitle) => {
    setTitle(productTitle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  // const handleCategoryClick = (category) => {
  //   console.log("handeling category click");
  //   async function fetchFromCategory() {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:5000/api/v1/products",
  //         {
  //           params: {
  //             categoryId: category ? category._id : "",
  //           },
  //         }
  //       );
  //       setProducts(response.data.products);
  //       setSelectedCategory(category ? category.title : "All");
  //       console.log(category ? category.title : "All", selectedCategory);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchFromCategory();
  // };

  const handleCategoryClick = (category) => {
    console.log("Handling category click", category); // Add this log to check the selected category

    async function fetchFromCategory() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER}/api/v1/products`,
          {
            params: {
              categoryId: category ? category._id : "",
            },
          }
        );
        setProducts(response.data.products);
        setSelectedCategory(category ? category.title : "All");
      } catch (error) {
        console.error(error);
      }
    }

    fetchFromCategory();
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (loading) return <div>Loading...</div>;
  if (error)
    return (
      <div className="min-h-96 w-full bg-slate-300 flex justify-center items-center font-semibold text-xl">
        {error}
      </div>
    );

  return (
    <>
      <div className="bg-slate-200 py-10">
        <div className="container mx-auto">
          <div className="flex justify-center items-center pb-8">
            <h2 className="border-b-2 border-green-400 uppercase text-center text-3xl text-red-700 font-semibold">
              Featured Products
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[650px]">
            <aside className="bg-white p-4 rounded-lg shadow-md flex flex-col h-fit">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <ul className="space-y-2">
                {/* <li>
                  <button
                    onClick={() => handleCategoryClick()}
                    className={`block py-2 px-4 rounded text-dark 
                           bg-red-400 text-white w-full ${
                             selectedCategory === "All"
                               ? "bg-red-400 text-white"
                               : "bg-red-100 hover:bg-red-200"
                           }
                      `}
                  >
                    All
                  </button>
                </li>
                {categories.map((category, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleCategoryClick(category)}
                      className={`block py-2 px-4 rounded text-dark 
                           bg-red-400 text-white w-full ${
                             category.title === selectedCategory
                               ? "bg-red-400 text-white"
                               : "bg-red-100 hover:bg-red-200"
                           }`}
                    >
                      {category.title}
                    </button>
                  </li>
                ))} */}
                <li>
                  <button
                    onClick={() => handleCategoryClick()}
                    className={`block py-2 px-4 rounded text-dark w-full
           ${
             selectedCategory === "All"
               ? "bg-red-400 text-white"
               : "bg-red-100 hover:bg-red-200"
           }
    `}
                  >
                    All
                  </button>
                </li>
                {categories.map((category, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleCategoryClick(category)}
                      className={`block py-2 px-4 rounded text-dark w-full 
           ${
             selectedCategory === category.title
               ? "bg-red-400 text-white"
               : "bg-red-100 hover:bg-red-200"
           }
      `}
                    >
                      {category.title}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            <section className="md:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {!currentProducts.length ? (
                <div className="h-full w-full col-span-full bg-white rounded-md flex justify-center items-center text-xl font-semibold">
                  No Products to show for this Category
                </div>
              ) : (
                currentProducts.map((product) => (
                  <div
                    className="bg-white p-4 rounded-lg shadow-md h-72 flex flex-col"
                    key={product.id}
                  >
                    <img
                      src={`${
                        import.meta.env.VITE_SERVER
                      }/${product.image.replace(/\\/g, "/")}`}
                      alt="Product Image"
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-1">
                      <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                      <div className="flex space-x-2">
                        <Link to={`/product/${product._id}`}>
                          <button className="bg-green-200 text-sm text-dark px-2 py-1 rounded-lg shadow hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                            View Details
                          </button>
                        </Link>
                        <button
                          onClick={() => openModal(product.name)}
                          className="bg-green-200 text-sm text-dark px-2 py-1 rounded-lg shadow hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                          Get Quote
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
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
              pageClassName={"bg-white border border-gray-300 rounded"}
              pageLinkClassName={
                "hover:text-white hover:bg-blue-700 px-3 pb-2 text-blue-500"
              }
              previousClassName={"bg-red-400 text-white px-3 py-1 rounded"}
              previousLinkClassName={"text-white"}
              nextClassName={"bg-red-400 text-white px-3 py-1 rounded"}
              nextLinkClassName={"text-white"}
              breakClassName={"bg-white border border-gray-300 rounded"}
              breakLinkClassName={"text-blue-600"}
              activeClassName={"bg-blue-600"}
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
