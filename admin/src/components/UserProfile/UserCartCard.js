import UserCartTable from "./UserCartTable"

import ServicePopover from "../ServicePopover"

const UserCartCard = ({ cart }) => {

	const dateOptions = { 
		year: 'numeric',
		month: '2-digit',
		day: '2-digit'
	}

	return (
		
		<div className="block col-span-2 bg-white rounded-2xl shadow-lg hover:shadow-2xl shadow-gray-400">
			
			<div className="text-lg font-bold mx-10 mt-10">
				User's Cart
				<div className="h-px bg-gray-400"></div>
			</div>

			<div className="mx-10">
				<UserCartTable cartServices={cart.services}/>
			</div>

			<div className="flex mx-20 mb-10 text-sm">
				<div className="w-full">
					<label className="font-bold">
						TimeStamp: 
					</label>
					<label className="pl-5">
						{new Date(cart.timestamp).toLocaleDateString('en-US', dateOptions)}
					</label>
				</div>
				<div className="w-full">
					<label className="font-bold" >
						Total Price: 
					</label>
					<label className="pl-5">
						{cart.totalPrice}
					</label>
				</div>
			</div>

		</div>
	)

}

export default UserCartCard