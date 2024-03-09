const fs = require("fs");
const { Upload } = require("@aws-sdk/lib-storage");
const AWS = require("aws-sdk");

const { s3Client } = require("../config");

const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

async function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);

  const upload = new Upload({
    client: s3Client,
    params: {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: file.originalname,
      Body: fileStream,
      ACL: "public-read",
    },
  });

  try {
    const result = await upload.done();
    console.log("File Uploaded", result);
    return result;
  } catch (error) {
    console.error("Upload error", error);
    throw error;
  }
}

const { fromIni } = require("@aws-sdk/credential-provider-ini");
const S3Client = require("@aws-sdk/client-s3");

async function getObjectFromS3(key) {
  const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: fromIni(),
  });

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key,
  };

  try {
    if (!s3Client.config.region) {
      throw new Error("A region must be set for the S3 client");
    }
    console.log("!!!!!!!!");
    const getObjectUrl = await getSignedUrl(s3Client, {
      ...params,
      Expires: 60,
    }); // Устанавливаем время действия ссылки (в секундах)
    console.log("Object URL:", getObjectUrl);
    return getObjectUrl;
  } catch (error) {
    console.error("Failed to get signed URL:", error);
    throw error;
  }
}

module.exports = { uploadFile, getObjectFromS3 };
