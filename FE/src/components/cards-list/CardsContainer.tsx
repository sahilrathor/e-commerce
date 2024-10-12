// import React, { useState } from 'react'
// import { Item } from '../../interfaces/item'
// import Card from './Card'
// import PaginationComponent from '../pagination/Pagination'


// const CardsContainer: React.FC<{ items: Item[], title: string }> = ({ items, title }) => {
//     if (items.length === 0) {
//         return (
//             <div className='w-[90%] mt-10 mx-auto bg-white pt-5 pb-8 px-12 rounded-lg '>
//                 <h2 className='text-2xl font-semibold text-left mb-3'>
//                 {title}
//                 </h2>
//                 <p className='text-lg text-center'>No items found</p>
//             </div>
//         )
//     }

//     const [currentPage, setCurrentPage] = useState(1);
//     const pageSize = 10;
    
//     return (
//         <div className='w-[90%] mt-10 mx-auto bg-white pt-5 pb-8 px-12 rounded-lg '>
//             <h2 className='text-2xl font-semibold text-left mb-3'>
//                 {title}
//             </h2>
//             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
//                 {items.map((item) => (
//                     <Card key={item._id} item={item} />
//                 ))}
//             </div>
//             <PaginationComponent totalItems={items.length} pageSize={pageSize} current={currentPage} />
//         </div>
//     )
// }

// export default CardsContainer




import React, { useState } from 'react';
import { Item } from '../../interfaces/item';
import Card from './Card';
import PaginationComponent from '../pagination/Pagination';

const CardsContainer: React.FC<{ items: Item[], title: string }> = ({ items, title }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 10;

    // Calculate the items to display based on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    if (items.length === 0) {
        return (
            <div className='w-[90%] mt-10 mx-auto bg-white pt-5 pb-8 px-12 rounded-lg'>
                <h2 className='text-2xl font-semibold text-left mb-3'>
                    {title}
                </h2>
                <p className='text-lg text-center'>No items found</p>
            </div>
        );
    }

    return (
        <div className='w-[90%] mt-10 mx-auto bg-white py-5 px-12 rounded-lg flex flex-col gap-5'>
            <h2 className='text-2xl font-semibold text-left mb-3'>
                {title}
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
                {paginatedItems.map((item) => (
                    <Card key={item._id} item={item} />
                ))}
            </div>

            {/* Pagination component */}
            <PaginationComponent totalItems={items.length} onPageChange={handlePageChange} />
        </div>
    );
};

export default CardsContainer;
