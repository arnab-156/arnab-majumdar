import type { NextPage } from 'next';

const btnValues = [
    ["9", "8", "7", "+"],
    ["6", "5", "4", "-"],
    ["3", "2", "1", "x"],
    ["C", "0", "=", "/"],
    ["+/-"],
];

export const Calculator: NextPage = () => {
    return (
        <div className="m-4 p-2 rounded content-center">
            <h1 className='flex w-full justify-end mx-4'>Calculator</h1>
            <input className="block w-full px-3 py-2 my-4 rounded-md border border-gray-300 shadow-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
            <div className="grid grid-cols-4 grid-rows-5 gap-2">
                {btnValues.map((el, i) => (
                    el.map(elem => <button
                        className={
                            `px-4 py-2 font-medium text-center rounded-lg shadow-md 
                            ${elem === "=" ? "text-black text-bold" : "text-white"} 
                            ${elem === "+/-" ? "bg-black hover:text-yellow-500" : "bg-yellow-500 hover:bg-yellow-700"}
                            ${elem && ""}
                    
                            `}
                        key={i}>{elem}
                    </button>)))}
            </div>
        </div>
    );
}
