import { Inputs } from "@/utils/Types";
import { useForm, SubmitHandler } from "react-hook-form";
export default function CreateFood() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  // console.log(watch("category"));

  return (
    <div className="w-[320px] mx-auto p-[16px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="w-full p-[16px]"
          placeholder="Name"
          {...register("foodname")}
        />
        <input
          className="w-full p-[16px]"
          placeholder="Description"
          {...register("desc")}
        />
        <select
          className="w-full py-[16px] border rounded-md"
          {...register("category", { required: true })}
        >
          <option value="" disabled selected>
            Select Category
          </option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
        <input
          className="w-full p-[16px]"
          placeholder="Price"
          {...register("price", { required: true })}
        />

        {errors.exampleRequired && <span>This field is required</span>}
        <input
          className="w-full border mt-[16px] p-[8px] rounded-md bg-purple-600 text-white"
          type="submit"
        />
      </form>
    </div>
  );
}