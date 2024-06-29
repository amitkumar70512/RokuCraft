import React, { useEffect, useState } from 'react'
import './MyProfileSubSection.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/store';

interface MyProfileSubSectionProps {
    hideProfile: () => void;
  }
  
  const MyProfileSubSection: React.FC<MyProfileSubSectionProps> = ({ hideProfile }) => {
    const botData = useSelector((state: RootState) => state.bot.botData);

    
    return (
        <div className=" mt-5 d-flex usersubsection"  onMouseLeave={hideProfile}>
            <div className="profileCard p-3">
                <div className="d-flex align-items-center">
                    <div className="ml-3 w-100">
                        <div className="image">
                            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" className="rounded" width="155" />
                        </div>
                        <h4 className="mb-0 mt-0">{botData?.userName??"Unknown"}</h4>
                        <span>Senior Journalist</span>
                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                            <div className="d-flex flex-column">
                                <span className="articles">Articles</span>
                                <span className="number1">38</span>
                            </div>
                            <div className="d-flex flex-column">
                                <span className="followers">Followers</span>
                                <span className="number2">980</span>
                            </div>
                            <div className="d-flex flex-column">
                                <span className="rating">Rating</span>
                                <span className="number3">8.9</span>
                            </div>
                        </div>
                        <div className="button mt-2 d-flex flex-row align-items-center">
                            <button className="btn btn-sm btn-outline-primary w-100">Chat</button>
                        </div>
                        <div className="button mt-2 d-flex flex-row align-items-center">
                            <button className="btn btn-sm btn-primary w-100 ml-2">Follow</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfileSubSection