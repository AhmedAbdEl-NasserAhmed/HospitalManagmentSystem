import PersonalDetailsForm from "@/components/Forms/Doctor/PersonalDetailsForm";

const PersonalDetails = () => {
  return (
    <div className=" px-[4rem] py-[3.5rem]">
      <div className="flex flex-col gap-8  m-auto w-[55rem]">
        <div>
          <h3 className="text-[2.4rem] font-extrabold">Personal Details</h3>
          <p className="text-textMuted text-[1.4rem]">This is a description</p>
        </div>
        <PersonalDetailsForm />
      </div>
    </div>
  );
};

export default PersonalDetails;
