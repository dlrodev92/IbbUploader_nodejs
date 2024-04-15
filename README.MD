# IbbUploader 0.0.1

IbbUploader is a Node.js library for uploading images to ImgBB via their API. This library simplifies the process of uploading images from local file paths, in-memory file-like objects (Buffers), or directly via URLs.

## Features

- **Upload images** from local file paths.
- **Upload images** from in-memory file-like objects (Buffers).
- **Upload images** directly via image URLs.
- **Configure image storage duration** through an optional expiration setting.
- **Specify a custom name** for the uploaded image.

## Installation

To install IbbUploader, run the following command in your Node.js project directory:

npm install ibb-uploader

## Usage

### Uploading an Image from a File Path

`import IbbUploader from 'ibb-uploader';

const uploader = new IbbUploader('YOUR_API_KEY');
async function uploadImage() {
  const response = await uploader.upload('path/to/your/image.jpg');
  console.log(response);
}
uploadImage();`

### Uploading an Image via URL

`async function uploadFromURL() {
  const response = await uploader.upload('http://example.com/image.jpg');
  console.log(response);
}
uploadFromURL();`

### Uploading an Image from a File-like Object

`import { Buffer } from 'buffer';
const imageData = Buffer.from('your-image-data-here', 'binary');

async function uploadFromBuffer() {
  const response = await uploader.upload(imageData);
  console.log(response);
}
uploadFromBuffer();`

### Additional params

`async function uploadWithParams() {
  const response = await uploader.upload(imageData, {
    name: 'image_name',
    expirationDays: 10
  });
  console.log(response);
}
uploadWithParams(); `

## Configuration

To use IbbUploader, you will need to provide:

API Key: Your personal API key from ImgBB.
Expiration: Optionally, set an expiration time in days for the uploaded image, up to a maximum of 180 days.
Name: Optionally, specify the name of the image to be uploaded.


## Acknowledgments

-Thanks to ImgBB for providing the API used in this library.

-This library is free software: you can redistribute it and/or modify

-This library is distributed in the hope that it will be useful, by **dlrodev92**.

### Notes:

- This README assumes you're using modern JavaScript with ES6 imports. If your users typically use CommonJS (`require`), you might want to provide those examples as well.
- I used a more conventional approach with async/await for demonstrating usage as it's standard in modern Node.js applications.
- Adjust the package name in the `npm install` command according to your actual npm package name.
- If the package is not yet published or is hosted in a private npm registry, additional instructions may be necessary for access or alternative installation methods (like installing directly from a Git repository).

This README should now be suitable for Node.js developers looking to integrate the IbbUploader into their projects.# IbbUploader_nodejs
