"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface Props {
  onChange?: (e) => void;
}

const UploadImagePreview = ({ onChange }: Props) => {
  const [imageSrc, setImageSrc] = useState(null);

  const fileInputRef = useRef<HTMLInputElement>();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target.result);
      };
      reader.readAsDataURL(file);
    }
    onChange(e.target.files[0]);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col gap-6 mt-10">
      <div
        onClick={triggerFileInput}
        className="flex justify-center items-center relative h-48 w-48 rounded-full border-2 border-borderLight border-solid cursor-pointer"
      >
        {imageSrc && (
          <Image className="rounded-full" src={imageSrc} alt="profile" fill />
        )}
        <span className="text-4xl">+</span>
      </div>

      <input
        style={{ display: "none" }}
        ref={fileInputRef}
        type="file"
        accept=".jpg, .png"
        onChange={(e) => {
          handleFileChange(e);
        }}
      />
    </div>
  );
};

export default UploadImagePreview;
