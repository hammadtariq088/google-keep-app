import React from 'react';

const Header = () => {
    return (
        <>
            <header className="p-2 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-center">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <img src='logo192.png' width="50px" height="50px" />
                            <span className="fw-bold lead ms-2" >Google Keep App</span>
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;
