import { useEffect } from "react";

const Categories = () => {
    useEffect(() => {
        console.log('Categories')
    }, [])

    const categories = [
        {
            name: 'Electronics',
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'Clothing',
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'Furniture',
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'Toys',
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'Jewelry',
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'Sports',
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'Home Decor',
            image: 'https://via.placeholder.com/150',
        }
    ]

    return (
        <div className="w-full p-8 flex flex-col items-center text-gray-800"    >
            <h1 className="text-2xl font-semibold">Categories</h1>
            <div className="flex flex-wrap gap-4 justify-center items-center">

                {categories.map((category, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg">
                        <img src={category.image} alt={category.name}
                            className="w-24 h-24 object-cover rounded-3xl shadow-md"
                        />
                        <h2 className="text-sm font-semibold text-center text-gray-500">{category.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories;
