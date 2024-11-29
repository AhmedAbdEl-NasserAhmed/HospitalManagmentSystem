import RegisterDocumentsForm from "@/components/Forms/Doctor/RegisterDocumentsForm";

const RegisterDocuments = () => {
  return (
    <div className=" px-[4rem] py-[3.5rem]">
      <div className="flex flex-col gap-8 items-start m-auto w-[55rem]">
        <div>
          <h3 className="text-[2.4rem] font-extrabold">
            Registration of documents
          </h3>
          <p className="text-textMuted text-[1.4rem]">
            We need to verify your information
          </p>
        </div>
        <RegisterDocumentsForm />
      </div>
    </div>
  );
};

export default RegisterDocuments;
