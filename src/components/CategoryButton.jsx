import { useNavigate, useParams } from "react-router-dom"

/* eslint-disable react/prop-types */
function CategoryButton({category, setSelectedCategory}) {
    let {categoryName}= useParams(); 
    categoryName = categoryName !== undefined ? categoryName : ''
    
    const navigate = useNavigate()

    function handleClick() {
        setSelectedCategory(category)
        if(category) {
            navigate(`/category/${category}`)
        } else {
            navigate('/')
        }
        
    }
    return (
        <button onClick={() => handleClick()} className={`${category ? 'category-btn':'all-btn'} ${category === categoryName ? 'category-btn-active':''}`}>
            {category ? category: 'All'}
        </button>
    )
}

export default CategoryButton
