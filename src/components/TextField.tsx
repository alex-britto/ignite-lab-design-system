import { ReactNode, InputHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextFieldRootProps {
  children?: ReactNode;
}

function TextFieldRoot({ children }: TextFieldRootProps) {
  return (
    <div
      className={
        "flex items-center gap-3 h-12  font-sans bg-gray-800 w-full rounded py-4 px-3 focus-within:ring-2 ring-cyan-300"
      }
    >
      {children}
    </div>
  );
}

TextFieldRoot.displayName = "TextField.Root";

export interface TextFieldIconProps {
  children?: ReactNode;
}

function TextFieldIcon({ children }: TextFieldIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

TextFieldIcon.displayName = "TextField.Icon";

export interface TextFieldInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextFieldInput(props: TextFieldInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}

TextFieldInput.displayName = "TextField.Input";

export const TextField = {
  Root: TextFieldRoot,
  Input: TextFieldInput,
  Icon: TextFieldIcon,
};
