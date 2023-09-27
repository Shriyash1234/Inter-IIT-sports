import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import './CSS/caraousel.css';

const data = [
    {
        id: 1,
        title: 'IIT Kharagpur (IITKGP)',
        image: require('./Assests/IITs/img1.jpg'),
    },
    {
        id: 2,
        title: 'IIT Bombay (IITB)',
        image: require('./Assests/IITs/img2.jpg'),
    },
    {
        id: 3,
        title: 'IIT Madras (IITM)',
        image: require('./Assests/IITs/img3.jpg'),
    },
    {
        id: 4,
        title: 'IIT Kanpur (IITK)',
        image: require('./Assests/IITs/img4.jpg'),
    },
    {
        id: 5,
        title: 'IIT Delhi (IITD)',
        image: require('./Assests/IITs/img1.jpg'),
    },
    {
        id: 6,
        title: 'IIT Guwahati (IITG)',
        image: require('./Assests/IITs/img2.jpg'),
    },
    {
        id: 7,
        title: 'IIT Roorkee (IITR)',
        image: require('./Assests/IITs/img3.jpg'),
    },
    {
        id: 8,
        title: 'IIT Ropar (IITRPR)',
        image: require('./Assests/IITs/img4.jpg'),
    },
    {
        id: 9,
        title: 'IIT Bhubaneswar (IITBBS)',
        image: require('./Assests/IITs/img1.jpg'),
    },
    {
        id: 10,
        title: 'IIT Gandhinagar (IITGN)',
        image: require('./Assests/IITs/img2.jpg'),
    },
    {
        id: 11,
        title: 'IIT Hyderabad (IITH)',
        image: require('./Assests/IITs/img3.jpg'),
    },
    {
        id: 12,
        title: 'IIT Jodhpur (IITJ)',
        image: require('./Assests/IITs/img4.jpg'),
    },
    {
        id: 13,
        title: 'IIT Patna (IITP)',
        image: require('./Assests/IITs/img1.jpg'),
    },
    {
        id: 14,
        title: 'IIT Indore (IITI)',
        image: require('./Assests/IITs/img2.jpg'),
    },
    {
        id: 15,
        title: 'IIT Mandi (IITMD)',
        image: require('./Assests/IITs/img3.jpg'),
    },
    {
        id: 16,
        title: 'IIT Varanasi (IIT BHU)',
        image: require('./Assests/IITs/img4.jpg'),
    },
    {
        id: 17,
        title: 'IIT Palakkad (IITPKD)',
        image: require('./Assests/IITs/img1.jpg'),
    },
    {
        id: 18,
        title: 'IIT Tirupati (IITT)',
        image: require('./Assests/IITs/img2.jpg'),
    },
    {
        id: 19,
        title: 'IIT Dhanbad (IIT ISM)',
        image: require('./Assests/IITs/img3.jpg'),
    },
    {
        id: 20,
        title: 'IIT Bhilai (IITBH)',
        image: require('./Assests/IITs/img4.jpg'),
    },
    {
        id: 21,
        title: 'IIT Dharwad (IITDH)',
        image: require('./Assests/IITs/img1.jpg'),
    },
    {
        id: 22,
        title: 'IIT Jammu (IITJMU)',
        image: require('./Assests/IITs/img2.jpg'),
    },
    {
        id: 23,
        title: 'IIT Goa (IIT GOA)',
        image: require('./Assests/IITs/img3.jpg'),
    },
];



const Caraousel = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(4);

    const totalCards = data.length;
    const totalPages = Math.ceil(totalCards / cardsPerPage);

    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const displayedCards = data.slice(startIndex, endIndex);

    const showNextPage = () => {
        setCurrentPage((prevPage) => (prevPage === totalPages ? 1 : prevPage + 1));
    };

    const showPreviousPage = () => {
        setCurrentPage((prevPage) => (prevPage === 1 ? totalPages : prevPage - 1));
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 991 && cardsPerPage !== 1) {
                setCardsPerPage(1);
            } else if (window.innerWidth >= 991 && cardsPerPage !== 5) {
                setCardsPerPage(4);
            }
        };

        window.addEventListener('resize', handleResize);

        // Handle initial resize logic if needed

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [cardsPerPage]);

    return (
        <div
            style={{
                width: '100vw',
                padding: '30px 5%',
                marginBottom: '100px',
                display: 'flex',
                flexDirection: 'column',
            }}
        >

            <div className="carousel-container">
            <h2 className='about-us'>Participating IITs</h2>
                <div className="carousel-cards">
                    {displayedCards.map((item) => (
                        <div key={item.id} className="carousel-card">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="card-image"
                            />
                            <h2 className="card-title">{item.title}</h2>
                            <p className="card-content">{item.content}</p>
                            {item.info ? <p className="card-info">{item.info}</p> : ""}
                        </div>
                    ))}
                </div>
                <div className='buttons-carousel'>
                    <button onClick={showPreviousPage} className='previous-carousel-button'><ArrowLeft /></button>
                    <button onClick={showNextPage} className='next-carousel-button'><ArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default Caraousel;
