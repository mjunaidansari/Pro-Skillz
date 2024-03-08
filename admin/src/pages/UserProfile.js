import { useParams } from "react-router-dom"

const UserProfile = () => {

	const { id } = useParams();

	return (

		<div className="flex items-center justify-center text-xl">
			{id}
		</div>

	)

}

export default UserProfile