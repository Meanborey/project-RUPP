import React, { useState } from "react";

export default function MultipleImg() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
 

    if (!file) {
      alert("Please select a file");
      return;
    }

    const formdata = new FormData();
    formdata.append("file", file);
    

    try {
      const fileUploadResponse = await fetch(
        "http://localhost:8081/api/v1/files/single-file",
        {
          method: "POST",
          body: formdata,
          redirect: "follow",
        }
      );
      const result = await fileUploadResponse.json();

      const url = result.data.url;

      const productResponse = await fetch(
        "http://localhost:8081/api/v1/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: title,
            type: type,
            description: description,
            price: price,
            image: url,
          }),
        }
      );

      console.log()
      if (productResponse.ok) {
        alert("Product uploaded successfully");
      } else {
        alert("Failed to upload product");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while uploading the product");
    }
  };
  return (
    <div className=''>
      <div className='flex justify-center items-center h-[100vh]'>
        <div className='w-2/6 rounded-md p-10'>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor='name'
                className='block mb-3 text-sm font-medium text-gray-900 dark:text-black'>
                Title
              </label>
              <input
                type='text'
                name='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Title'
                className='border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500'
              />
            </div>
            <div>
              <label
                htmlFor='price'
                className='block mb-3 text-sm font-medium text-gray-900 dark:text-black'>
                Price
              </label>
              <input
                type='number'
                name='price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder='Price'
                className='border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500'
              />
            </div>

            <div className='my-4'>
              <label htmlFor='description' className='my-5 text-gray-900'>
                Description
              </label>
              <textarea
                name='description'
                id='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows='4'
                placeholder='Description'
                className='form-textarea mt-4 block w-full rounded-xl p-4 border'
                spellCheck='false'></textarea>
            </div>


            {/* type product */}
            <div className='flex my-5'>
              <input
                type='radio'
                name='type'
                value='phone'
                checked={type === "phone"}
                onChange={handleTypeChange}
                className='mx-3'
              />{" "}
              Phone
              <input
                type='radio'
                name='type'
                value='computer'
                checked={type === "computer"}
                onChange={handleTypeChange}
                className='mx-3'
              />{" "}
              Computer
            </div>

            {/* postImage */}
            <div className='flex justify-center items-center'>
              <label
                htmlFor='dropzone-file'
                className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-5'>
                <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                  <input
                    id='dropzone-file'
                    type='file'
                    className='hidden'
                    onChange={handleFileChange}
                    accept='.svg, .png, .jpg'
                  />
                  <svg
                    className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 16'>
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                    />
                  </svg>
                  <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                    <span className='font-semibold'>Click to upload</span> or
                    drag and drop
                  </p>
                  <p className='text-xs text-gray-500 dark:text-gray-400'>
                    SVG, PNG, JPG
                  </p>
                </div>
              </label>
            </div>

            <button
              type='submit'
              className='bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
