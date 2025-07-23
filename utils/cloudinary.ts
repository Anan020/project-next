'server'
import cloudinary from "@/lib/cloudinary";
import { NextRequest, NextResponse } from "next/server"
import type { UploadApiResponse } from "cloudinary";

export async function uploadFile(image: File) {
    try {
        const bytes = await image.arrayBuffer()
        const buffer = Buffer.from(bytes);

        const uploadResult = await new Promise<UploadApiResponse>((resolve, rejects) => {
            cloudinary.uploader.upload_stream({
                resource_type: "auto",
                folder: 'uploads',
                public_id: `${Date.now()}_${image.name}`,
                context:'cache-control=public, max-age=3600'
            }, (error, result) => {
                if (error) rejects(error)
                else resolve(result as UploadApiResponse)
            }).end(buffer)
        })
        // console.log(uploadResult)
        // return  uploadResult.url
        return NextResponse.json({
            message: "Upload successful",
            url: uploadResult.secure_url,
            public_id: uploadResult.public_id,
            asset_id: uploadResult.asset_id,
            width: uploadResult.width,
            height: uploadResult.height,
            format: uploadResult.format,
            resource_type: uploadResult.resource_type,
        });
    }
    catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json(
            { error: 'Upload failed' },
            { status: 500 }
        );
    }
}