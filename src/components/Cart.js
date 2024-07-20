import React from 'react'
import shoe from '../images/image-product-1-thumbnail.jpg'
import remove from '../images/icon-delete.svg';

function Cart({ counter, onClick }) {
    return (
        <div className='cart shadow rounded-xl bg-white'>
            <h3 className='p-5 font-bold'>Cart</h3>
            <hr />
            <div className='flex flex-col items-center justify-center h-60'>
                {counter > 0 ? 
                        <div className='flex items-center justify-between gap-2 md:gap-8'>
                            <img src={shoe} alt="shoe" className='w-14 rounded-md' />
                            <div>
                                <h4 className='text-sm text-slate-500'>Fall Limited Edition Sneakers</h4>
                                <p className='text-slate-500'>$125.00 x {counter} <span className='text-black font-bold ml-2'>${(counter * 125.00).toFixed(2)}</span></p>
                            </div>
                            <button onClick={onClick}>
                                <img src={remove} alt='remove-icon' />
                            </button>
                        </div>    
                        : <p>Your cart is empty</p>
                }
            </div>
        </div>
    )
}

export default Cart
