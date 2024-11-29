"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  HiOutlinePlusCircle,
  HiOutlineTrash,
  HiOutlineUpload
} from "react-icons/hi";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const DragAndDrop = ({
  onChange,
  errorMessage,
  removeItemFn
}: {
  onChange: (file: File) => void;
  errorMessage: string;
  removeItemFn: () => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [dragOver, setDragOver] = useState<boolean>(false);

  const [fileUploaded, setFileUploaded] = useState<File | null>(null);

  function handleOpenInput() {
    inputRef.current.click();
  }

  function handleFileInput(
    event: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>
  ) {
    event.preventDefault();

    const maxSizeInBytes = 30 * 1024 * 1024;

    const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];

    let file: File | undefined;

    if ("files" in event.target) {
      file = event.target.files?.[0];
    } else if ("dataTransfer" in event) {
      file = event.dataTransfer.files[0];
    }

    if (file) {
      if (!allowedTypes.includes(file.type)) {
        alert("Only PDF, JPEG , and PNG files are allowed.");
        return;
      }

      if (file.size > maxSizeInBytes) {
        alert("File size exceeds the 30 MB limit.");
        return;
      }

      setFileUploaded(file);

      onChange(file);
    }
  }

  return (
    <>
      {fileUploaded ? (
        <div className="px-8 py-12 border-2 shadow-md rounded-md flex items-center justify-between gap-6 bg-white">
          <div className="flex items-center gap-8">
            <Image
              src={
                fileUploaded.type.includes("pdf")
                  ? "/images/pdfIcon.png"
                  : "/images/imageIcon.png"
              }
              alt="image"
              width={40}
              height={40}
            />
            <div>
              <h2 className="font-semibold text-xl">{fileUploaded.name}</h2>
              <p className="text-textMuted text-[1.2rem] mt-3 ">
                {(fileUploaded.size / 1024).toFixed(2)} of 30 MB{" "}
              </p>
            </div>
          </div>
          <span
            className="text-3xl text-red-500 cursor-pointer "
            onClick={() => {
              setFileUploaded(null);
              removeItemFn();
            }}
          >
            <HiOutlineTrash />
          </span>
        </div>
      ) : (
        <>
          <div
            onDrop={(e) => {
              handleFileInput(e);
              setDragOver(false);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onClick={handleOpenInput}
            className={`px-8 py-12 border-2 border-dashed rounded-md flex items-center gap-6  cursor-pointer transition-all duration-150 ${
              dragOver ? "bg-white" : " bg-secondary"
            } `}
          >
            <span className="text-[2rem] text-textMuted ">
              {dragOver ? <HiOutlinePlusCircle /> : <HiOutlineUpload />}
            </span>
            <div>
              <h2 className="font-semibold text-xl tracking-wide">
                {dragOver
                  ? "Drop your file here"
                  : "Click to upload or drag and drop"}
              </h2>
              <p className="text-textMuted text-[1.2rem] mt-3">PDF, JPG, PNG</p>
            </div>
            <input
              ref={inputRef}
              type="file"
              className="hidden"
              onChange={handleFileInput}
              accept=".pdf, .jpeg, .jpg, , .png"
            />
          </div>
          {errorMessage && <ErrorMessage message={errorMessage} />}
        </>
      )}
    </>
  );
};

export default DragAndDrop;
