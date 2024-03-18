import { useState, useEffect } from "react"

import categoriesServices from "../services/api/categories"

import CategoryCard from "../components/Categories/CategoryCard"
import AddCategoryBox from "../components/Categories/AddCategoryBox"
import Loading from "../components/Loading"


const Categories = () => {

	const [categories, setCategories] = useState(null)

	useEffect(() => {

		categoriesServices
			.getAll()
			.then(result => setCategories(result.data))
			.catch(error => console.log(error))

	}, [])

	if(categories) {
		console.log(categories)
	}

	return (
		// <div className="h-full">
		<>
			{categories?(
				<div className="h-full grid grid-cols-3 grid-flow-row gap-10 p-10 overflow-y-auto">
					{categories.map(category => <CategoryCard key={category.id} category={category}/>)}
					<AddCategoryBox/>
					{/* {categories.map(category => <CategoryCard/>)}
					{categories.map(category => <CategoryCard/>)}
					{categories.map(category => <CategoryCard/>)} */}
					{/* <CategoryCard/> */}
				</div>
			):(
				<Loading/>
			)}
		</>
		// </div>
		
	)

}

export default Categories