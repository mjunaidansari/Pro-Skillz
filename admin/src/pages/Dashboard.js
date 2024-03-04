
import CountCard from "../components/CountCard"

const Dashboard = () => {

	const entityCounts = [
		{
			name: "Users",
			count: 10,
		},
		{
			name: "Providers",
			count: 10,
		},
		{
			name: "Categories",
			count: 10,
		},
		{
			name: "Services",
			count: 10,
		},

		
	]

	return (
		<div className="bg-gray-200">
			<div className="flex justify-between my-5 mx-16">
				{entityCounts.map(entity => (
					<CountCard name={entity.name} count={entity.count}/>
				))}
			</div>
		</div>
	)

}

export default Dashboard