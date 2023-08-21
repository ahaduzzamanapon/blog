import './assets/header.css'
import Logo from './assets/logo.png' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you want to use
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you want to use
import { useRef } from 'react';



const Top_Header = () => {
    const search_box_input = useRef(null);
    const search_box_btn = useRef(null);
    const list_box = useRef(null);
    const handleClick = () => {
        search_box_input.current.classList.toggle('inline-block');
        search_box_btn.current.classList.toggle('search_box_btns');
      };
    return (
        <div className='main_top_header col-md-12 col-lg-12 col-sm-12  m-0 bg-white'>
            <div className='top_heder_logo col-md-6 col-lg-6 col-sm-6'>
                <img className='logo_img' src={Logo} alt="Logo" />
            </div>
            <div className='top_heder_link col-md-6 col-lg-6 col-sm-6'>
                <div className='col-md-6 col-lg-6 col-sm-6 top_heder_ul'>
                    <ul className='top_header_ul'>
                        <li className='top_header_li'>Home</li>
                        <li className='top_header_li'>Contact</li>
                    </ul>
                </div>
                <div className='col-md-6 col-lg-6 col-sm-6 search_box'>
                    <input ref={search_box_input} className='search_box_input' type="text" />
                    <button ref={search_box_btn} className='btn search_box_btn btn-primary btn-sm m-0'>Search</button>
                    <a className='search_icon' onClick={handleClick}>
                    <FontAwesomeIcon icon={faSearch} size="lg" />
                    </a>
                </div>
            </div>
            <div className='box list_box' ref={list_box}>
                <div>
                    <ul className='list_box_ul p-0 m-0'>
                        <li className='list_box_li'>
                            Home
                        </li>
                        <li className='list_box_li'>
                            Contact
                        </li>
                    </ul>
                </div>
            </div >
            <div className='linkmenuicon col-md-6 col-lg-6 col-sm-6' onClick={() => {
                    list_box.current.classList.toggle('inline-block');
                }
            }>
                <FontAwesomeIcon icon={faEllipsis} />
            </div>
        </div>
    );
};
export default Top_Header;