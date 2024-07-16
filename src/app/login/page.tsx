import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Logo } from "@/components/ui/Logo";

export default function Login() {
  return (
    <>
      <div className="flex min-h-dvh w-dvw items-center justify-center">
        <div className="flex w-full max-w-xs flex-col items-start">
          <div className=" bg-white ring-1 ring-black/5 shadow-lg relative flex items-center justify-center rounded-lg p-3">
            <Logo className="size-8 text-blue-500" />
          </div>
          <div className="mt-6 flex flex-col">
            <h1 className=" font-medium text-lg text-gray-900">Log in to Insights</h1>
            <p className="text-sm text-gray-700">
            Don&rsquo;t have an account?{" "}
            <a className="text-blue-500 hover:text-blue-600" href="#">
            Sign up
            </a>
          </p>
          </div>
          <div className="flex mt-12 w-full flex-col gap-y-3">
            <form className="flex w-full flex-col gap-y-6">
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-col space-y-2">
                  <Label id="email-form-item-label" htmlFor="email-form-item">
                    Email
                  </Label>

                  <Input
                    autoComplete="email"
                    name="email"
                    id="email-form-item"
                    aria-describedby="email-form-item-description"
                    aria-invalid="false"
                    aria-labelledby="email-form-item-label"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <Label
                    id="password-form-item-label"
                    htmlFor="password-form-item"
                  >
                    Password
                  </Label>
                  <Input
                    type="password"
                    autoComplete="current-password"
                    name="password"
                    id="password-form-item"
                    aria-describedby="password-form-item-description"
                    aria-invalid="false"
                    aria-labelledby="password-form-item-label"
                  />
                </div>
              </div>
              <Button type="submit">Continue</Button>
            </form>
          </div>
          <Divider />
          <p className="text-sm text-gray-700">
            Forgot your password?{" "}
            <a className="text-blue-500 hover:text-blue-600" href="#">
              Reset password
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
