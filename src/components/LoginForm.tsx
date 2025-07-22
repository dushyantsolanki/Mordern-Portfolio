'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { XInputField } from '@/components/custom/XInputField';
import { Eye, EyeOff, Mail } from 'lucide-react';
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';
// import { toast } from "sonner"
import { useState } from 'react';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password too short')
    .required('Password is required'),
});

export default function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'form'>) {
  const [showPassword, setShowPassword] = useState(false);

  // const handleSubmit = async (values: any) => {
  //     try {
  //         const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL || 'https://task-mate-full-stack.onrender.com/api/v1'}/auth/login`, values, { withCredentials: true });
  //         const data = await response.data;
  //         if (response.status === 200) {
  //             toast.success("Login successful");
  //             console.log("User data:", data.user);
  //         }
  //     } catch (error: any) {
  //         toast.error(error.response.data.message || "Login failed");

  //     }
  // };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    // onSubmit: handleSubmit
    onSubmit: () => {},
  });
  return (
    <>
      <div className="px-8 py-14 w-1/3 border border-white/20 bg-black rounded-2xl">
        <FormikProvider value={formik}>
          <Form className={cn('flex flex-col gap-12', className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-2xl font-bold">Welcom Back To Login </h1>
              <p className="text-balance text-sm text-muted-foreground ">
                Enter your email below to login to your account
              </p>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <XInputField
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  className="h-11 border-white/10 "
                  placeholder="m@example.com "
                  icon={<Mail size={20} />}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && formik.errors.email}
                />
              </div>
              <div className="grid gap-2">
                <XInputField
                  id="password"
                  name="password"
                  label="Password"
                  className="h-11 border-white/10"
                  type={showPassword ? 'text' : 'password'}
                  icon={
                    <div className="flex items-center justify-center">
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className=""
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>
                  }
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && formik.errors.password}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-800 cursor-pointer"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? (
                  <>
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                    Please wait...
                  </>
                ) : (
                  'Login'
                )}
              </Button>
            </div>
          </Form>
        </FormikProvider>
      </div>
    </>
  );
}
