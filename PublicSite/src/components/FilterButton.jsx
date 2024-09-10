import { useState } from 'react';

const FilterButton = (props) => {
    const { selectCategory, setSelectCategory } = props

    const categories = [
        { id: undefined, name: 'All' },
        { id: 1, name: 'Tops' },
        { id: 2, name: 'Bottoms' },
        { id: 3, name: 'Outerwear' },
        { id: 4, name: 'Dresses' },
        { id: 5, name: 'Accessories' },
    ];

    const [selectedCategory, setSelectedCategory] = useState(selectCategory);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectCategory(category);
    };

    return (
        <div className="font-[sans-serif] w-max mx-auto border-2 border-[#333] rounded-full overflow-hidden flex m-4">
            {categories.map((category, index) => (
                <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    type="button"
                    className={`px-5 py-1.5 text-xs tracking-wider font-semibold outline-none transition-all ${
                        selectedCategory === category.id ? 'bg-[#333] text-white' : 'text-[#333] hover:bg-[#333] hover:text-white'
                    } ${index < categories.length - 1 ? 'border-r-2 border-[#333]' : ''}`}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default FilterButton;
