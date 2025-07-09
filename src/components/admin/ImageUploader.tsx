import { useState } from "react";
import axios from "axios";

export default function ImageUploader({
  images,
  setImages,
}: {
  images: string[];
  setImages: (urls: string[]) => void;
}) {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    setUploading(true);
    const res = await axios.post("/api/admin/upload/product", formData);
    setUploading(false);
    setImages([...images, res.data.url]);
  };

  return (
    <div className="space-y-2">
      <input type="file" onChange={handleUpload} />
      {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
      <div className="flex flex-wrap gap-2 mt-2">
        {images.map((url) => (
          <img
            key={url}
            src={url}
            className="w-20 h-20 object-cover rounded"
            alt="Product"
          />
        ))}
      </div>
    </div>
  );
}
