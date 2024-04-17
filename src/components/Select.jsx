import { useState } from "react";
import { ArrowIcon } from "./Icons/Icons";


export const Select = ({ options, onChange, pagesNumbers, updatePageNumbers }) => {

    const [isOpen, setIsOpen] = useState(false);



    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleSelect = (value) => {
        updatePageNumbers(value);
        setIsOpen(false);
    }

    return (
        <div className="relative ">
            <div onClick={handleOpen} className="z-10  bg-default-100 hover:bg-rickBlue transition-all cursor-pointer border border-default-300 rounded-lg shadow w-16 gap-1  h-9 flex justify-center items-center ">
                {pagesNumbers}
                <div className={`${isOpen && ' rotate-180 '} transition-all`}>
                    <ArrowIcon />
                </div>
            </div>
            {
                isOpen && (
                    <div id="dropdown-states" className=" absolute w-full  border border-default-300  top-[120%] overflow-hidden  z-10  bg-default-100 divide-y  rounded-lg shadow-2xl ">
                        <ul className=" relative  text-sm text-gray-700  w-full  " aria-labelledby="states-button">
                            <div className="overflow-y-auto h-auto max-h-56  scrollbar-hide">
                                {
                                    Array.from({ length: options }, (_, i) => (
                                        <li onClick={() => { handleSelect(i + 1) }} className="relative py-2  w-full  hover:bg-rickBlue transition-all cursor-pointer" key={i}>
                                            <div className="block text-center w-full">
                                                {i + 1}
                                            </div>
                                        </li>
                                    ))
                                }
                            </div>
                            <div className=" w-full absolute h-16 -bottom-5 bg-gradient-to-t  from-background/50 pointer-events-none ">
                                {/* backdrop  */}
                            </div>
                        </ul>
                    </div>
                )
            }

        </div>
    )
}