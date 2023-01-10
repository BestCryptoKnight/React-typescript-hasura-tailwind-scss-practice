import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: {
    children: any;
}) => {
    return (
        <div className="layout px-3 text-white">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;