import { Link } from "react-router-dom"
const CountCard = ({name, count}) => {

	return (
		<div className="bg-white rounded-md border border-gray-100 w-1/5 max-sm:w-full pl-5 py-5 shadow-lg shadow-black/5 hover:shadow-2xl h-fit">
			<div className="flex justify-between mb-6">
				<div>
					<div className="text-2xl font-semibold mb-1">{count}</div>
					<div className="text-sm font-medium text-gray-400">{name}</div>
				</div>
			</div>
			<Link to={`/main/${name.toLowerCase()}`} className="text-[#f84525] font-medium text-sm hover:text-red-800">View</Link>
			{/* <Link to={`/main/${name.toLowerCase()}`} className="text-indigo-800 font-medium text-sm hover:text-indigo-950">View</Link> */}
		</div>
	)

}

export default CountCard