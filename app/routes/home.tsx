import { faBell as Bell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "~/Button";
import { Portrait } from "~/Portrait";
import { Landscape } from "~/Landscape";

export default function () {
  return (
    <>
      <div className="mt-[50px] ml-[181px] pr-[246px]">
        <div className="mb-24">
          <h1 className="bg-primary-20 font-bold inline-block text-[40px] mb-[40px]">
            button
          </h1>
          <div className="text-neutral-60 ">
            <p>
              <b>Primary:</b> One per page, represents the main action of a page
            </p>
            <p>
              <b>Secondary:</b> Non critical actions, multiple per page if
              needed.
            </p>
            <p>
              <b>Tertiary:</b> Always visible page actions (like Edit)
            </p>
          </div>

          <hr className="border-b-4 border-neutral-70 mt-5"></hr>

          <div>
            <h2 className="text-neutral-50 mb-[18px] mt-[50px] text-title-medium">
              primary
            </h2>
            <div className="flex gap-[36px]">
              <Button variant="primary"></Button>
              <Button variant="primary" state="hover"></Button>
              <Button variant="primary" state="focused"></Button>
              <Button variant="primary" state="pressed"></Button>
              <Button variant="primary" state="disabled"></Button>
            </div>

            <h2 className="text-neutral-50 mb-[18px] mt-[50px] text-title-medium">
              secondary
            </h2>
            <div className="flex gap-[36px]">
              <Button variant="secondary"></Button>
              <Button variant="secondary" state="hover"></Button>
              <Button variant="secondary" state="focused"></Button>
              <Button variant="secondary" state="pressed"></Button>
              <Button variant="secondary" state="disabled"></Button>
            </div>

            <h2 className="text-neutral-50 mb-[18px] mt-[50px] text-title-medium">
              tertiary
            </h2>

            <div className="flex gap-[36px]">
              <Button variant="tertiary"></Button>
              <Button variant="tertiary" state="hover"></Button>
              <Button variant="tertiary" state="focused"></Button>
              <Button variant="tertiary" state="pressed"></Button>
              <Button variant="tertiary" state="disabled"></Button>
            </div>
            <div className="flex gap-[100px] text-neutral-50 mt-[30px] mb-[30px] text-title-medium ">
              <p>default</p>
              <p>hover</p>
              <p>focused</p>
              <p>pressed</p>
              <p>disabled</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="bg-primary-20 font-bold inline-block text-[40px] mb-[40px]">
            notificationBell
          </h1>
          <p className="text-neutral-60 ">
            Provides access to notifications and informs users of severity.
          </p>
          <hr className="border-b-4 border-neutral-70 mt-5"></hr>
          <div className="my-7 mb-24">
            <div className="flex items-center justify-center h-[62px] w-[62px] rounded-[8px] bg-neutral-10 border-neutral-70 border-2">
              <div className="relative">
                <FontAwesomeIcon
                  icon={Bell}
                  className="w-[var(--icon-size-24)] h-[var(--icon-size-24)]"
                />
                <div className="absolute left-[16px] top-[-2px] w-[10px] h-[10px] rounded-full bg-primary-20 "></div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="bg-primary-20 font-bold inline-block text-[40px] mb-[40px]">
              actionCard
            </h1>
            <p className="text-neutral-60 ">Card element that is actionable.</p>
            <hr className="border-b-4 border-neutral-70 mt-5 mb-7"></hr>
            <div className="flex flex-col items-center  ">
              <div className="flex gap-[164px] mb-[81px] ml-[221px]">
                <Portrait></Portrait>
                <Portrait state="hover"></Portrait>
                <Portrait state="focused"></Portrait>
                <Portrait state="pressed"></Portrait>
              </div>
              <div className=" flex gap-[24px] ml-[162px]">
                <Landscape></Landscape>
                <Landscape state="hover"></Landscape>
                <Landscape state="focused"></Landscape>
                <Landscape state="pressed"></Landscape>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
