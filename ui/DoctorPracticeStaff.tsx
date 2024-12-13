import CustomizedButton from "@/components/CustomizedButton";
import Menus from "@/components/CustomizedContextMenu/CustomizedContextMenu";
import CustomizedTable from "@/components/CustomizedTable/CustomizedTable";
import AddPracticeStaffForm from "@/components/Forms/Doctor/AddPracticeStaffForm";
import Modal from "@/components/Modal/Modal";
import { doctorStaffTableColumns } from "@/constants/constants";
import { nextStep } from "@/lib/features/slices/stepper/stepperSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const DoctorPracticeStaff = () => {
  const dispatch = useAppDispatch();

  const staffDoctors = useAppSelector(
    (state) => state.doctorProcess.staffDoctors
  );

  function generateDoctorStaffTableColumns(doctor: {
    id: string;
    name: string;
    mobileNumber: string;
    emailAddress: string;
    specialty: string;
  }) {
    return (
      <tr
        key={doctor.id}
        className="even:bg-secondaryBackground even:bg-opacity-50"
      >
        <td className="px-4 py-2 text-left text-lg">{doctor.name}</td>
        <td className="px-4 py-2 text-left text-lg">{doctor.specialty}</td>
        <td className="px-4 py-2 text-left text-lg">{doctor.mobileNumber}</td>
        <td className="px-4 py-2 text-left text-lg">{doctor.emailAddress}</td>
        <td className="px-4 py-2 text-left text-lg">
          <Menus.Menu>
            <Menus.Toggle id={doctor.id} />
            <Menus.List id={doctor.id}>
              <Modal button={<button>Edit</button>}>
                <p>Do you want to edit {doctor.id}</p>
              </Modal>
              <Modal button={<button>Delete</button>}>
                <p>Do you want to delete {doctor.id}</p>
              </Modal>
            </Menus.List>
          </Menus.Menu>
        </td>
      </tr>
    );
  }

  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex flex-col gap-2 ">
        <h2 className="font-semibold text-xl ">Add Doctors </h2>
        <p className="text-textMuted ">
          Add Doctors who practice in your clinic
        </p>
      </div>
      <CustomizedTable
        data={staffDoctors}
        columns={doctorStaffTableColumns}
        generateRows={generateDoctorStaffTableColumns}
      />
      <Modal
        button={
          <button className="text-xl border-borderLight border-[1px] shadow-sm px-4 py-3 rounded-md ">
            + Add a doctor
          </button>
        }
      >
        <AddPracticeStaffForm />
      </Modal>

      <div className="flex items-center justify-between border-borderLight border-t-2 p-4">
        <button
          onClick={() => dispatch(nextStep(0))}
          type="button"
          className="px-8 py-4 border-[0.5px] border-borderLight rounded-lg font-medium text-lg self-start"
        >
          Back
        </button>
        <div>
          <CustomizedButton
            onClick={() => dispatch(nextStep(2))}
            size="large"
            type="button"
          >
            Next
          </CustomizedButton>
        </div>
      </div>
    </div>
  );
};

export default DoctorPracticeStaff;
