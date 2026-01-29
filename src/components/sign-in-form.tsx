import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "./common/card";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const signInSchema = z.object({
  email: z.email().min(1, "Email is required"),
  password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters"),
});

const SignInForm = () => {
  const { handleSubmit, control, formState: { errors } } = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    console.log(values);
  };

  return (
    <div className="bg-[#0a0c16] w-full xl:h-full h-screen">
      <div className="xl:py-12 md:py-12 py-4">
        <Card className="wrapper mx-auto lg:w-[740px] md:w-[650px] w-[327px] rounded-[30px]">
          <CardContent>
            <div>
              <div className="flex flex-col items-center gap-[16px] md:mt-[44px] mt-10">
                <h1 className="lg:text-5xl text-headingMedium text-white font-bold text-center leading-lg">Sign In to Your Account</h1>
                <span className="text-md text-lightGray text-center">Welcome to a smarter way of managing tasks and products. Our comprehensive suite is designed to streamline your workflow, enhance collaboration</span>
                <button className="mt-[16px] inline-flex items-center justify-center gap-2 bg-[#242424] text-white border border-[#878787] px-3 py-2 rounded-lg w-full">
                  <FcGoogle />
                  <span className="text-white text-md leading-xl">or Sign in with Google</span>
                </button>
                <div className="inline-flex items-center gap-2">
                  <div className="h-[1px] md:w-[304px] w-[115px] bg-[#606060]" />
                  <span className="text-white text-md">Or</span>
                  <div className="h-[1px] md:w-[304px] w-[115px] bg-[#606060]" />
                </div>
              </div>
              <div className="mt-7">
                <form onSubmit={handleSubmit(onSubmit)} id="sign-in-form">
                  <div className="flex flex-col gap-5">
                    <Controller
                      name="email"
                      control={control}
                      render={({ field, fieldState }) => (
                        <div className="flex flex-col gap-2">
                          <label className="text-white text-md font-medium leading-xl">Email</label>
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
                          <label className="text-white text-md font-medium leading-xl">Password</label>
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
                  <button form="sign-in-form" className="mt-5 px-3 py-2 rounded-md w-full button-gradient text-white" type="submit">Sign in</button>
                  <div className="pt-5 inline-flex gap-2">
                    <p>Don't have an account?</p>
                    <Link to="/sign-up" className="underline hover:text-white/80">Sign up</Link>
                  </div>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SignInForm