import { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import searchItems from "../services/search";
import { Dropdown, message } from "antd";
import { Link } from "react-router-dom";

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [suggestions, setSuggestions] = useState<{ label: React.ReactNode, key: string }[]>([]);
    const [loading, setLoading] = useState(false);


    const handleSearch = async () => {
        if (search === '' || search.length < 3) return setSuggestions([]);

        setLoading(true);
        try {
            const searchQuery = search.trim();
            const items = await searchItems({ query: searchQuery });
            if (items.length) {
                setSuggestions(items.map(item => ({
                    // label: item.name,
                    label:
                        <Link
                            target="_blank"
                            onClick={() => setSearch('')}
                            to={`/product/${item._id}`}
                            className="flex items-center gap-2"
                        >
                            {item.name}
                        </Link>,
                    key: item._id
                })));
            } else {
                setSuggestions([{ label: "No results found", key: "-1" }]);
            }
        } catch (error) {
            message.error("Error fetching suggestions.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            handleSearch();
        }, 300); // Adjust debounce time as needed

        return () => clearTimeout(delayDebounceFn);
    }, [search]);

    return (
        <form onSubmit={(e) => { e.preventDefault(); handleSearch();}}
            className={`h-8 bg-white flex justify-between items-center gap-1 px-2 py-0.5 cursor-pointer rounded-full tracking-wider w-56 hover:w-80 focus:w-80 transition-all duration-300 ${search ? 'sm:w-80' : 'sm:w-56'} w-fit absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`}
        >
            <Dropdown
                menu={{ items: suggestions }}
                trigger={['click']}
            >
                <div className="flex items-center w-full">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search'
                        aria-label='Search bar'
                        className='bg-transparent border-none text-slate-500 focus:outline-none w-full'
                    />
                    {loading ? <span>Loading...</span> : <MdSearch size={20} color='gray' className='cursor-pointer drop-shadow-lg' />}
                </div>
            </Dropdown>
        </form>
    );
};

export default SearchBar;
