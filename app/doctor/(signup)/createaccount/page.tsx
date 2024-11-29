import CreateAccount from "@/components/Forms/Doctor/CreateAccount";

const CreateAccountPage = () => {
  return (
    <div className=" px-[4rem] py-[3.5rem]">
      <div className="flex flex-col gap-8 items-start m-auto w-[55rem]">
        <div>
          <h3 className="text-[2.4rem] font-extrabold">Create an account</h3>
          <p className="text-textMuted text-[1.4rem]">This is a description.</p>
        </div>
        <CreateAccount />
      </div>
    </div>
  );
};

export default CreateAccountPage;
