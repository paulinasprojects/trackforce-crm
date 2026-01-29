import { z } from 'zod';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Card, CardContent } from "./common/card";
import { zodResolver } from '@hookform/resolvers/zod';

const resetPasswordSchema = z.object({
  email: z.email().min(1, "Email is required"),
});

const ResetPasswordForm = () => {
  const { handleSubmit, control, formState: { errors } } = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof resetPasswordSchema>) => {
    console.log(values);
  }

  return (
    <div className='bg-[#0a0c16] w-full xl:h-full h-screen'>
      <div className="py-[158px]">
        <Card className='lg:w-[740px] md:w-[650px] w-[327px] wrapper mx-auto rounded-[30px]'>
          <CardContent>
            <div className="text-white">
              <div className='flex flex-col items-center gap-[16px] mt-[44px]'>
                <h1 className="lg:text-5xl text-headingMedium text-white font-bold text-center leading-lg">Reset Password</h1>
                <p className='text-md text-lightGray text-center'>We'll send you password reset instructions.</p>
              </div>
              <div className="md:m-10">
                <form onSubmit={handleSubmit(onSubmit)} id='reset-password'>
                  <div>
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
                  </div>
                  <button className='mt-8 px-3 py-2 rounded-md w-full button-gradient text-white' form='reset-password' type='submit'>
                    Send Reset Email
                  </button>
                  <p className='pt-8 text-center text-md text-white inline-flex gap-2'>
                    Remember your password?
                    <Link to="/sign-in" className='underline'>
                      Sign in
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ResetPasswordForm