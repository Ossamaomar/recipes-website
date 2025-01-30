import { useNavigate } from "react-router-dom";
import CategoryButton from "./CategoryButton";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
function Filter({ categories, selectedCategory, setSelectedCategory }) {
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Assuming 'sm' breakpoint is at 768px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial size on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  

  function handleFilter(e) {
    setSelectedCategory(e.target.value);
    navigate(`/category/${e.target.value}`);
  }

  return (
    <>
      {!isSmallScreen &&
        <div className="categories-btns flex flex-wrap gap-x-6 gap-y-4 mt-10">
          <CategoryButton
            category={""}
            setSelectedCategory={setSelectedCategory}
          />
          {categories.map((category) => (
            <CategoryButton
              key={category.strCategory}
              category={category.strCategory}
              setSelectedCategory={setSelectedCategory}
            />
          ))}
        </div>
      }

      {isSmallScreen &&
        <select
          value={selectedCategory}
          onChange={handleFilter}
          className="select-list"
          id="categories"
        >
          {categories.map((category) => (
            <option key={category.idCategory} value={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
        </select>
      }
    </>
  );
}

export default Filter;
