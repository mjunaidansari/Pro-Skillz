const sampleImageRouter = require('express').Router()

const { GridFSBucket } = require('mongodb')
const multer = require('multer')
const fs = require('fs')
const mongoose = require('mongoose')

const ServiceProvider = require('../../mongodb/model/serviceProvider')
const SampleImage = require('../../mongodb/model/sampleImage')

// setting up multer storage to store uploaded files temporarily
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads/')
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname)
	}
})
// const storage = multer.memoryStorage()
const upload = multer({ storage })

sampleImageRouter.get('/:id', async (req, res) => {

	const image = await SampleImage.findById(req.params.id)

	const imageBase64  = {
		data: image.file.toString('base64'),
		contentType: image.contentType
	}

	if(image) {
		res.json(imageBase64)
		// const imageBase64 = image.data.toString('base64');
		// console.log(imageBase64)
	} else {
		res.status(404)
	}

	// try {
	// 	const bucket = new GridFSBucket(mongoose.connection.db, {
	// 		bucketName: 'SampleImage'
	// 	})
	// 	const downloadStream = bucket.openDownloadStream(new mongoose.Types.ObjectId(imageId))
		
	// 	downloadStream.on('data', (chunks) => {
	// 		res.write(chunk)
	// 	})

	// 	downloadStream.on('end', () => {
	// 		res.end()
	// 	})

	// 	downloadStream.on('error', (error) => {
	// 		console.log('Error in fetching image')
	// 		console.log(error)
	// 		res.status(404).send('Image not found')
	// 	})
	// } catch (error) {
	// 	console.log('Error fetching image')
	// 	console.log(error)
	// 	res.status(500).send('Internal Server Error')
	// }

})

sampleImageRouter.post('/upload', async (req, res) => {

	const { imageBase64, contentType } = req.body
	console.log(imageBase64)

	const imageBuffer = Buffer.from(imageBase64, 'base64');

	const image = new SampleImage({
		file: imageBuffer,
		contentType
		// contentType: 'image/jpeg',
	})

	try {
		const savedImage = await image.save()
		res.status(201).send(savedImage)
	}
	catch (error) {
		console.log('Error: ', error)
	}


	// console.log(req.file)
	// const file = req.file
	// const filePath = req.file.path

	// try {
	// 	console.log('File Original Name: ', req.file.originalname)
	// 	console.log('File Path: ', filePath)

	// 	await saveProfilePicture(filePath, req.file.originalname)

	// 	fs.unlinkSync(filePath)

	// 	res.status(200).json({
	// 		message: 'Image Uploaded'
	// 	})
	// } catch (error) {
	// 	console.log('Error in Try-Catch')
	// 	console.log(error)
	// 	res.status(500).json({
	// 		message: 'Failure.'
	// 	})
	// }

})

const saveProfilePicture = async (filePath, fileName) => {

	const bucket = new GridFSBucket(mongoose.connection.db, {
		bucketName: 'SampleImage'
	})

	const readStream = fs.createReadStream(filePath)
	const uploadStream = bucket.openUploadStream(fileName)

	readStream.pipe(uploadStream)

	// callback function when document is uploaded
	uploadStream.on('finish', async () => {
		console.log('FileID: ', uploadStream.id)
		console.log('Length: ', uploadStream.bytesWritten)
	})

	console.log('FileID: ', uploadStream.id)
}

module.exports = sampleImageRouter