import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';


export interface UploadOptions {
  name?: string;
  expirationDays?: number;
}

class IbbUploader {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async upload(image: string | Buffer, options: UploadOptions = {}): Promise<any> {
    const url = 'https://api.imgbb.com/1/upload';
    const formData = new FormData();

    // Convert days to seconds, with a cap of 180 days
    let expirationSeconds = options.expirationDays ? Math.min(options.expirationDays, 180) * 86400 : undefined;

    // Add the API key and other form data
    formData.append('key', this.apiKey);  // Here's where the API key is used
    if (expirationSeconds) formData.append('expiration', expirationSeconds.toString());
    if (options.name) formData.append('name', options.name);

    // Determine the type of the image and append it to the form data
    if (typeof image === 'string' && (image.startsWith('http://') || image.startsWith('https://'))) {
      formData.append('image', image);
    } else if (typeof image === 'string') {
      formData.append('image', fs.createReadStream(image));
    } else {
      formData.append('image', image, { filename: 'upload.jpg' });
    }

    try {
      const response = await axios.post(url, formData, {
        headers: formData.getHeaders(),
      });
      return response.data;
    } catch (error) {
      console.error('Failed to upload image:', error);
      return null;
    }
  }
}

export default IbbUploader;