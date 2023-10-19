import React, { useState, useContext, Fragment, useEffect } from 'react';
import Loader from './Loader'; // Import your Loader component
import CartContext from '../Store/Cart-Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cartElements = [
  // Your cart elements data...
];

function Product() {
  const [isLoading, setIsLoading] = useState(false);
  const [retrying, setRetrying] = useState(false);
  const CartCtx = useContext(CartContext);
  const enterEmail = localStorage.getItem('email');
  const updatedEmail = enterEmail ? enterEmail.replace('@', '').replace('.', '') : '';

  const fetchCartItems = async (retry = false) => {
    setIsLoading(true); // Set isLoading to true when fetching data

    try {
      const response = await fetch(
        `https://crudcrud.com/api/0ed66e763e514d1694874aeb2bc60775/${updatedEmail}`
      );

      if (response.ok) {
        const data = await response.json();
        // Assuming you want to add the item to the API's data
        data.push(...cartElements);

        // Make a PUT request to update the data on the API
        await fetch(
          `https://crudcrud.com/api/0ed66e763e514d1694874aeb2bc60775/${updatedEmail}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          }
        );

        toast.success('Data Fetched Successfully');
      } else {
        toast.error('Something went wrong. Retrying...');
        if (retry) {
          setTimeout(() => {
            fetchCartItems(true);
          }, 5000); // Retry after 5 seconds
        }
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while fetching data. Retrying...');
      if (retry) {
        setTimeout(() => {
          fetchCartItems(true);
        }, 5000); // Retry after 5 seconds
      }
    } finally {
      setIsLoading(false); // Set isLoading to false once the data has been fetched
    }
  };

  const handleRetryClick = () => {
    setRetrying(true);
    fetchCartItems(true);
  };

  const handleCancelRetryClick = () => {
    setRetrying(false);
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <Fragment>
      <h2 style={{ textAlign: 'center', padding: '10px', marginTop: '10px' }}>Music</h2>
      <div className='mainContent'>
        {cartElements.map((item) => (
          <div className='Content' key={item.id}>
            {/* Your item display code... */}
          </div>
        ))}
      </div>
      {isLoading ? <Loader /> : null} {/* Display the Loader component conditionally */}
      {retrying && (
        <div>
          <button onClick={handleRetryClick}>Retry</button>
          <button onClick={handleCancelRetryClick}>Cancel</button>
        </div>
      )}
      <div className='btn3'>
        <button className='btn4'>Purchase</button>
      </div>
      <ToastContainer
        position='bottom-right'
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </Fragment>
  );
}

export default Product;
