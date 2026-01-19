import { FcGoogle } from "react-icons/fc";
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const signUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email().min(1, "Email is required"),
  password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters"),
});

const SignUpForm = () => {

  const { handleSubmit, control, formState: { errors } } = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    console.log(values);
  };



  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <div className="text-white xl:mt-20 md:mt-[56px] mt-10 lg:mx-[56px] md:mx-10 mx-6">
        <h2 className="text-white xl:text-[48px] text-[32px] font-medium leading-[120%] lg:text-start text-center">Create Your Account</h2>
        <p className="mt-4 text-[16px] text-[#c2c2c2] md:text-start text-center">Welcome to a smarter way of managing tasks and products. Our comprehensive suite is designed to streamline your workflow</p>
        <button className="mt-[16px] inline-flex items-center justify-center gap-2 bg-[#242424] text-white border border-[#878787] px-3 py-2 rounded-lg w-full">
          <FcGoogle />
          <span className="text-white text-[16px] leading-[150%]">Register with Google</span>
        </button>
        <div className="inline-flex items-center gap-2 mt-[16px]">
          <div className="h-[1px] xl:w-[200px] lg:w-[105px] md:w-[260px] w-[115px] bg-[#606060]" /> <span className="text-white text-[14px] whitespace-nowrap">register with your email</span> <div className="h-[1px] xl:w-[200px] lg:w-[105px]  md:w-[260px] w-[115px] bg-[#606060]" />
        </div>
        <div className="mt-4">
          <form onSubmit={handleSubmit(onSubmit)} id="sign-up-form">
            <div className="flex flex-col gap-5">
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                  <div className="flex flex-col gap-2">
                    <label className="text-white text-[16px] font-medium leading-[150%]">Full Name</label>
                    <input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      placeholder="Enter your name"
                      className="outline outline-[#606060] bg-[#1010] rounded-md px-2 py-2 placeholder:text-sm w-full"
                    />
                    {errors.name && <span className="text-red-500 text-sm mt-2">{errors.name.message}</span>}
                  </div>
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <div className="flex flex-col gap-2">
                    <label className="text-white text-[16px] font-medium leading-[150%]">Email</label>
                    <input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter your email"
                      autoComplete="off"
                      className="outline outline-[#606060] bg-[#1010] rounded-md px-2 py-2 placeholder:text-sm w-full"
                    />
                    {errors.email && <span className="text-red-500 text-sm mt-2">{errors.email.message}</span>}
                  </div>
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <div className="flex flex-col gap-2">
                    <label className="text-white text-[16px] font-medium leading-[150%]">Password</label>
                    <input
                      {...field}
                      type="password"
                      aria-invalid={fieldState.invalid}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      className="outline outline-[#606060] rounded-md bg-[#1010]  px-2 py-2 placeholder:text-sm w-full"
                    />
                    {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                  </div>
                )}
              />
            </div>
            <button form="sign-up-form" className="mt-5 px-3 py-2 rounded-md w-full button-gradient text-white" type="submit">Register</button>
            <p className="text-center text-white text-[16px] mt-[16px]">By clicking the button, you agree to our Terms, Privacy Policy and Security Policy.</p>
          </form>
        </div>
      </div>
      <div className="mt-10">
        <img src="/sign-up-form-image.png" alt="" className="w-full h-full" />
      </div>
    </div>
  )
}

export default SignUpForm