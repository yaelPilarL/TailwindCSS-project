import { Button } from "~/Button";

export default function () {
  return (
    <>
      <div className="mt-[114px] ml-[181px] pr-[246px]">
        <div>
          <h1 className="bg-primary-20 font-bold inline-block text-[40px] mb-[50px]">
            button
          </h1>
          <div className="flex items-start gap-[64px]">
            <div className="w-2/3 space-y-[36px]">
              <div>
                <h2 className="text-neutral-50 mb-[18px] mt-[50px]">primary</h2>
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

                <h2 className="text-neutral-50 mb-[18px] mt-[50px]">
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

                <h2 className="text-neutral-50 mb-[18px] mt-[50px]">
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
          </div>
        </div>
      </div>
    </>
  );
}
