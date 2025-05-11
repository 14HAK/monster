import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

// demo ShadCN UI "Card" all components

const Example: React.FC = () => {
  return (
    <>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Confirm Action</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Are you sure you want to delete this item?</p>
        </CardContent>
        <CardFooter>
          <CardAction>
            <Button variant="outline">Cancel</Button>
            <Button variant="destructive">Delete</Button>
          </CardAction>
        </CardFooter>
      </Card>
    </>
  );
};

export default Example;
