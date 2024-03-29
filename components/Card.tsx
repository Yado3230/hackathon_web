import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

const Cards = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Rate the user</CardTitle>
          <CardDescription>some description?</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 items-center justify-center">
          <Image
            width={100}
            height={40}
            src="data:image/png;base64,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"
            alt={""}
          />
        </CardContent>
        <CardFooter className="justify-between space-x-2">
          <div className="grid gap-2">
            <Select defaultValue="like">
              <SelectTrigger id="area">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="like">Like</SelectItem>
                <SelectItem value="billing">Billing</SelectItem>
                <SelectItem value="account">Account</SelectItem>
                <SelectItem value="deployments">Deployments</SelectItem>
                <SelectItem value="support">Support</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cards;
