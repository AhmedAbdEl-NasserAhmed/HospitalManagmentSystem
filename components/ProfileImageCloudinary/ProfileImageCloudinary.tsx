import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import Image from "next/image";
import { HiOutlinePlusSm } from "react-icons/hi";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const ProfileImageCloudinary = ({
  onChange,
  imageSrc,
  errorMessage
}: {
  onChange: (imageSrcCloudinary: string) => void;
  imageSrc: string;
  errorMessage: string;
}) => {
  return (
    <CldUploadWidget
      onSuccess={(results, { close }) => {
        const { secure_url } = results.info as CloudinaryUploadWidgetInfo;
        onChange(secure_url);
        close();
      }}
      uploadPreset="Tiryaaq"
    >
      {({ open }) => {
        return (
          <div className="flex flex-col gap-4 ">
            <h2 className="text-xl">Profile Photo</h2>
            <div
              onClick={() => open()}
              className="relative cursor-pointer text-3xl text-textMuted flex items-center justify-center w-32 h-32 rounded-full border-2 border-borderLight "
            >
              {imageSrc ? (
                <Image
                  className="object-contain rounded-full"
                  src={imageSrc || ""}
                  alt="photo"
                  fill
                />
              ) : (
                <HiOutlinePlusSm />
              )}
            </div>
            {errorMessage && <ErrorMessage message={errorMessage} />}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ProfileImageCloudinary;
