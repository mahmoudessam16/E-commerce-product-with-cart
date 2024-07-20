import close from '../images/icon-close.svg';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function Lightbox({products, slideIndex, nextSlide, previousSlide, setShowLightBox}) {
    return (
        <>
            <article className="bg-black fixed top-0 left-0 right-0 bottom-0 z-50 bg-opacity-75">
                <button onClick={() => setShowLightBox(false)}>
                    <img src={close} alt="close-icon" className="w-5 absolute top-10 right-1/4 md:right-1/3 " />
                </button>
                <div className="flex items-center justify-center h-screen">
                    {products.map((item, index) => (
                    <div key={index} className={slideIndex === index + 1 ? "relative" : "hidden"}>
                        <img src={item.mainImage} alt="mainImage" className="big-image lg:w-full lg:rounded-2xl" />
                        <ul>
                            <li>
                            <button className="bg-white rounded-full p-3 shadow absolute left-3 top-1/2 -translate-y-1/2" onClick={previousSlide}>
                                <FaChevronLeft />
                            </button>
                            </li>
                            <li>
                            <button className="bg-white rounded-full p-3 shadow absolute right-3 top-1/2 -translate-y-1/2" onClick={nextSlide}>
                                <FaChevronRight />
                            </button>
                            </li>
                        </ul>
                    </div>
                    ))}
                </div>
            </article>
        </>
    )
}

export default Lightbox;
