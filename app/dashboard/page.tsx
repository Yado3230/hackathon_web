"use client";

import { updateFinantialStatus } from "@/actions/user-action";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const formSchema = z.object({
  financialStatus: z.string().min(1),
});

type LevelFormValues = z.infer<typeof formSchema>;

export default function DashboardPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<LevelFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      financialStatus: "",
    },
  });

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const response = await updateFinantialStatus(data);
      if (response) {
        router.push("/dashboard/profile");
        router.refresh();
        toast.success("Registration success");
      }
    } catch (error: any) {
      console.error("Error is this:", error.message);

      if (error.message === "Please check your username and password.") {
        toast.error("Invalid username or password");
      } else if (
        error.message === "Network error: Unable to connect to the server."
      ) {
        toast.error("Network error: Unable to connect to the server");
      } else {
        toast.error("Something went wrong!");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="financialStatus"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Username:</FormLabel> */}
                  <FormControl>
                    {/* <Input
                      type="text"
                      className="ring-1"
                      placeholder="username"
                      disabled={loading}
                      {...field}
                    /> */}
                    <Select
                      disabled={loading}
                      onValueChange={field.onChange}
                      value={field.value.toString()}
                      defaultValue={field.value}
                    >
                      <div className="flex w-full items-center space-x-3">
                        <div>
                          <Label>Why are you here?</Label>
                        </div>
                        <div className="flex space-x-2 w-1/3">
                          <SelectTrigger id="area">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="BORROWER">To Borrow</SelectItem>
                            <SelectItem value="LENDER">To Lend</SelectItem>
                            <SelectItem value="GROUPLEND">
                              To Borrow By Group
                            </SelectItem>
                          </SelectContent>
                          <Button disabled={loading}>
                            {" "}
                            {loading ? "Loading..." : "Submit"}
                          </Button>
                        </div>
                      </div>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </div>
  );
}
