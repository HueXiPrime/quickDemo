"use client";

import { Input } from "@/components/ui/input";

interface PinInputProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export function PinInput({ value, onChange }: PinInputProps) {
  const handleChange = (index: number, digit: string) => {
    if (!/^\d*$/.test(digit)) return;

    const newValue = [...value];
    newValue[index] = digit;
    onChange(newValue);

    // Auto-focus next input
    if (digit && index < 5) {
      const nextInput = document.querySelector<HTMLInputElement>(
        `#pin-${index + 1}`
      );
      nextInput?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      const prevInput = document.querySelector<HTMLInputElement>(
        `#pin-${index - 1}`
      );
      prevInput?.focus();
    }
  };

  return (
    <div className="flex justify-center gap-2">
      {value.map((digit, index) => (
        <Input
          key={index}
          id={`pin-${index}`}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className="w-14 h-14 text-center text-2xl border-2 rounded-lg"
        />
      ))}
    </div>
  );
}
