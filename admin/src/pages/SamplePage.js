const SamplePage = ({title}) => {

	console.log('Sample page works for ', title)

	return (
		<div className="flex w-full h-full items-center justify-center text-4xl font-bold">
			{title}
		</div>
	)

}

export default SamplePage