"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLingoLocale, setLingoLocale } from "lingo.dev/react/client";

export default function LocaleSwitcher() {
  const currentLocale = useLingoLocale();

  return (
    <Select
      value={currentLocale || "en"}
      onValueChange={setLingoLocale}
      defaultValue="en"
    >
      <SelectTrigger className="w-22 h-8 px-2 text-sm rounded-md border border-border bg-background focus:ring-2 focus:ring-primary">
        <SelectValue placeholder="EN" />
      </SelectTrigger>
      <SelectContent className="w-20 rounded-md bg-background border border-border shadow-md text-sm z-100">
        <SelectItem value="en" className="py-1 px-2">
          English
        </SelectItem>
        <SelectItem value="fr" className="py-1 px-2">
          French
        </SelectItem>
        <SelectItem value="ar" className="py-1 px-2">
          Arabic
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
