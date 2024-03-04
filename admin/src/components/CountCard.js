const CountCard = ({name, count}) => {

	return (
		<div class="bg-white rounded-md border border-gray-100 px-16 py-5 shadow-lg shadow-black/5">
			<div class="flex justify-between mb-6">
				<div>
					<div class="text-2xl font-semibold mb-1">{count}</div>
					<div class="text-sm font-medium text-gray-400">{name}</div>
				</div>
			</div>
			<a href="" class="text-[#f84525] font-medium text-sm hover:text-red-800">View</a>
		</div>
	)

}

export default CountCard