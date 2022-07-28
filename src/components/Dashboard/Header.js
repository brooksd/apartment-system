import React from 'react'

const Header = ({ setIsAdding }) => {
  return (
    <header>
        <h1>Apartment Residents</h1>
        <div style={{ marginTop: '30px', marginBottom: '18px' }}>
            <button onClick={() => setIsAdding(true)} className='round-bottom'>
                Add Button
            </button>
        </div>
    </header>
  )
}

export default Header;