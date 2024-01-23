import { AppButton } from "../../ui/button";
import { AppInput } from "../../ui/input";

export const EducationForm = () => {
  return (
    <section>
      <form className="flex flex-col gap-4 ">
        <fieldset className="flex gap-4">
          <label className="flex flex-col gap-2">
            <p className="text-titles font-bold"> Place</p>
            <AppInput type="university of the street" />
          </label>
          <div className="flex gap-4 items-center">
            <label className="flex flex-col gap-2">
              <p className="text-titles font-bold">Start and finish date</p>
              <div className="flex items-center gap-2 text-titles">
                <AppInput placeholder="2020" />-<AppInput placeholder="2024" />
              </div>
            </label>
          </div>
        </fieldset>

        <label className="flex flex-col gap-2">
          <p className="text-titles font-bold">Title</p>

          <AppInput />
        </label>
        <AppButton text="add" />
      </form>
    </section>
  );
};
