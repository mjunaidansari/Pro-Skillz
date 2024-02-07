const deg2rad = (degrees) => {
	return degrees * (Math.PI/180)
}

const getDistance = (coordinates1, coordinates2) => {

	var lat1 = coordinates1[0]
	var lon1 = coordinates1[1]
	var lat2 = coordinates2[0]
	var lon2 = coordinates2[1]

	// Radius of Earth in KMs
	R = 6371

	// calculate the distance between lats and lons and convert it to radians
	var dLat = deg2rad(lat2-lat1)
	var dLon = deg2rad(lon2-lon1)

	// convert the lattitudes to radians
	var radLat1 = deg2rad(lat1)
	var radLat2 = deg2rad(lat2)

	// calculate Haversine Formula
	const a = 
		Math.sin(dLat/2) * Math.sin(dLat/2) +
		Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(radLat1) * Math.cos(radLat2)
	
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
	
	// Disance in KMs
	const distance = R * c; 

	return distance
}

module.exports = getDistance