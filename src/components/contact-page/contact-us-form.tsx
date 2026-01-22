import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const signInSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email().min(1, "Email is required"),
  message: z.string().min(1, "A message is required")
});

const ContactUsForm = () => {

  const { handleSubmit, control, formState: { errors } } = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    console.log(values);
  };


  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} id="contact-us-form">
        <div className="flex flex-col gap-6">
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <div className="flex flex-col gap-2">
                <label className="text-white text-[16px] font-medium leading-[150%]">Name <span className="text-red-500">*</span></label>
                <input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                  placeholder="Your name"
                  className="outline outline-[#606060] bg-[#1010] rounded-md px-2 py-2 placeholder:text-sm w-full"
                />
                {errors.name && <span className="text-red-500 text-[12px] mt-2">{errors.name.message}</span>}
              </div>
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <div className="flex flex-col gap-2">
                <label className="text-white text-[16px] font-medium leading-[150%]">Business Email Address<span className="text-red-500">*</span></label>
                <input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder="your@company.com"
                  autoComplete="off"
                  className="outline outline-[#606060] bg-[#1010] rounded-md px-2 py-2 placeholder:text-sm w-full"
                />
                {errors.email && <span className="text-red-500 text-[12px] mt-2">{errors.email.message}</span>}
              </div>
            )}
          />
          <Controller
            name="message"
            control={control}
            render={({ field, fieldState }) => (
              <div className="flex flex-col gap-2">
                <label className="text-white text-[16px] font-medium leading-[150%]">Message</label>
                <textarea
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder="Input message"
                  className="outline outline-[#606060] rounded-md bg-[#1010]  px-2 py-2 placeholder:text-sm w-full md:h-[186px] h-[100px] placeholder:p-4"
                />
                {errors.message && <span className="text-red-500 text-[12px]">{errors.message.message}</span>}
              </div>
            )}
          />
        </div>
        <button form="contact-us-form" className="mt-5 px-3 py-2 rounded-md w-full button-gradient text-white" type="submit">Submit</button>
        <p className="text-[#c2c2c2] text-sm mt-[16px]">By submitting this form you agree to our friendly privacy policy.</p>
      </form>
    </div>
  )
}

export default ContactUsForm