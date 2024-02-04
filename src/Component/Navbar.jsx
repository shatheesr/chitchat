import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar bg-neutral text-neutral-content'>
            <div className=" containerWrap flex  justify-between py-4">
                <button className="btn btn-ghost text-xl">ChitChat</button>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar