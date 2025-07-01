import { faBell as Bell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "~/Button";

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
              <Button variant="primary">button</Button>
              <Button variant="primary" state="hover">
                button
              </Button>
              <Button variant="primary" state="focused">
                button
              </Button>
              <Button variant="primary" state="pressed">
                button
              </Button>
              <Button variant="primary" state="disabled">
                button
              </Button>
            </div>

            <h2 className="text-neutral-50 mb-[18px] mt-[50px] text-title-medium">
              secondary
            </h2>
            <div className="flex gap-[36px]">
              <Button variant="secondary">button</Button>
              <Button variant="secondary" state="hover">
                button
              </Button>
              <Button variant="secondary" state="focused">
                button
              </Button>
              <Button variant="secondary" state="pressed">
                button
              </Button>
              <Button variant="secondary" state="disabled">
                button
              </Button>
            </div>

            <h2 className="text-neutral-50 mb-[18px] mt-[50px] text-title-medium">
              tertiary
            </h2>

            <div className="flex gap-[36px]">
              <Button variant="tertiary">button</Button>
              <Button variant="tertiary" state="hover">
                button
              </Button>
              <Button variant="tertiary" state="focused">
                button
              </Button>
              <Button variant="tertiary" state="pressed">
                button
              </Button>
              <Button variant="tertiary" state="disabled">
                button
              </Button>
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
          <div className="my-7">
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
        </div>
      </div>
    </>
  );
}
