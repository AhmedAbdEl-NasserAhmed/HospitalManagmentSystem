import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import Image from "next/image";
import { HiOutlinePlusSm } from "react-icons/hi";

const ProfileImageCloudinary = ({
  onChange,
  imageSrc
}: {
  onChange: (imageSrcCloudinary: string) => void;
  imageSrc: string;
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
            <span
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
            </span>
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ProfileImageCloudinary;
