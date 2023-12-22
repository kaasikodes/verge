import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { CalenderIcon } from "~~/assets";
import Calendar from "react-calendar";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const CalenderBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(); //TODO: fix type
  return (
    <>
      <button ref={btnRef as any} onClick={onOpen}>
        <Image src={CalenderIcon} alt="schedule" height={24} width={24} />
      </button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef as any}
      >
        <DrawerOverlay />
        <DrawerContent className="text-white" color={"#fff"} bg={"#121212"}>
          <div className="flex justify-between items-center bg-[#171717] mb-4">
            <DrawerHeader>Calender</DrawerHeader>
            <DrawerCloseButton />
          </div>

          <DrawerBody>
            <Scheduler />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const Scheduler = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        className={``}
        tileClassName={`border-t-[#222] border-t py-6 border`}
        // nextLabel={<ChevronRightIcon />} TODO: Use fill icons to overide and match design
      />
    </div>
  );
};
