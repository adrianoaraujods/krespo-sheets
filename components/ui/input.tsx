import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export interface DebounceInputProps
  extends Omit<
    InputProps,
    "id" | "onChange" | "onBlur" | "onKeyDown" | "onFocus"
  > {
  // eslint-disable-next-line no-unused-vars
  onDebounce: (value: string | number | readonly string[] | undefined) => void;
  id: string;
  delay?: number;
}

function DebounceInput({
  onDebounce,
  id,
  value,
  delay = 500,
  ...props
}: DebounceInputProps) {
  const [inputValue, setInputValue] = React.useState(value);
  const debounceTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (localStorage.getItem(id) === "true" && inputRef.current) {
      inputRef.current.focus();
    }

    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [id]);

  return (
    <Input
      ref={inputRef}
      value={inputValue}
      onChange={({ target }) => {
        setInputValue(target.value);

        if (debounceTimeout.current) {
          clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(() => {
          onDebounce(target.value);
        }, delay);
      }}
      onBlur={() => {
        localStorage.removeItem(id);

        if (debounceTimeout.current) {
          clearTimeout(debounceTimeout.current);
        }

        onDebounce(inputValue);
      }}
      onKeyDown={({ key }) => {
        if (key === "Enter") {
          if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
          }

          onDebounce(inputValue);
        }
      }}
      onFocus={() => {
        localStorage.setItem(id, "true");
      }}
      {...props}
    />
  );
}

export { Input, DebounceInput };
