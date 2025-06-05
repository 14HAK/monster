import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

// demo ShadCN UI "Card" all components

const Example: React.FC = () => {
  return (
    <>
      <Card className="w-full max-w-sm border-0 shadow-2xl outline-0">
        <CardHeader className="p-0">
          <CardTitle className="p-0">Confirm Action</CardTitle>
          <CardDescription className="p-0">Confirm Action</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <p>Are you sure you want to delete this item?</p>
        </CardContent>
        <CardFooter className="p-0">
          <CardAction className="p-0">
            <Button variant="outline">Cancel</Button>
            <Button variant="destructive">Delete</Button>
          </CardAction>
        </CardFooter>
      </Card>
    </>
  );
};

export default Example;
