"use client";

import { useAppSelector } from "@/lib/hooks";
import DoctorOperationalHours from "./DoctorOperationalHours";

import DoctorPracticeStaff from "./DoctorPracticeStaff";
import Menus from "@/components/CustomizedContextMenu/CustomizedContextMenu";

const DoctorInitialApplicationStep = () => {
  const currentStep = useAppSelector((state) => state.stepper.currentStep);

  switch (currentStep) {
    case 0: {
      return <DoctorOperationalHours />;
    }
    case 1: {
      return (
        <Menus>
          <DoctorPracticeStaff />
        </Menus>
      );
    }
    case 2: {
      return <p>Third Step</p>;
    }
    case 3: {
      return <p>Fourth Step</p>;
    }
    case 4: {
      return <p>Congratulations Now you are a member in Tiryaaq</p>;
    }
    default:
      return <p>First Step</p>;
  }
};

export default DoctorInitialApplicationStep;

{
  /* <Menus>
              <Menus.Menu>
                <Menus.Toggle id="edit" />
                <Menus.List id="edit">
                  <Modal button={<button className="text-xl">Edit</button>}>
                    <p>Are you sure that you want to Edit this item</p>
                  </Modal>
                  <Modal button={<button className="text-xl">Delete</button>}>
                    <p>Are you sure that you want to delete this item</p>
                  </Modal>
                </Menus.List>
              </Menus.Menu>
            </Menus> */
}
