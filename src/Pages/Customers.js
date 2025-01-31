import React from 'react';
import '../Styles/Customers.css';
import { FaPlus } from 'react-icons/fa';
import importIcon from '../Images/ImportIcon.png';
import exportIcon from '../Images/ExportIcon.png';
import Icon1 from '../Images/icon1.png';
import Icon2 from '../Images/icon2.png';
import Icon3 from '../Images/icon3.png';
import Icon4 from '../Images/icon4.png';
import searchIcon from '../Images/search.png';

import EnhancedTable from '../Components/Table';

const Customers = () => {
    return (
        <div className="customer-page-container">
            <div className="customer-left-bar"></div>
            <div className="customer-right-content">
                <div className="customer-top-bar">
                    <div className="customer-top-bar-left">
                        <img src={searchIcon} alt="Search" className="search-icon" />
                    </div>
                    <div className="customer-right-icons">
                        <img src={Icon1} alt="Icon 1" className="icon" />
                        <img src={Icon2} alt="Icon 2" className="icon" />
                        <img src={Icon3} alt="Icon 3" className="icon" />
                        <img src={Icon4} alt="Icon 4" className="icon" />
                    </div>
                </div>
                <div className="content-area">
                    <div className="header-section">
                        <div className="header-section-top"> 
                            <div className="title-search">
                                <h4>Customers</h4>
                            </div>
                            <div className="import-export-container"> 
                                <div className="import-export">
                                    <img src={importIcon} alt="Import" className="iicon" /> Import
                                </div>
                                <div className="import-export">
                                    <img src={exportIcon} alt="Export" className="iicon" /> Export
                                </div>
                            </div>
                        </div>
                        <div className="header-section-bottom"> 
                            <button className="add-button">
                                <FaPlus /> Add
                            </button>
                        </div>
                    </div>
                    <div className="dashboard">
                        <EnhancedTable />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customers;
