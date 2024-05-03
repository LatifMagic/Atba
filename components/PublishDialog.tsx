import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Loader } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
  loading: boolean;
  publishBtnHandler: () => Promise<void>;
}

const PublishDialog = ({ loading, publishBtnHandler }: Props) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button type="button" disabled={loading} className="">
          {loading ? <Loader className="animate-spin" /> : "Submit & Publish"}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Ready to Publish?</AlertDialogTitle>
          <AlertDialogDescription>
            Do you really want to publish the listing?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => publishBtnHandler()}>
            {loading ? <Loader className="animate-spin" /> : "Continue"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PublishDialog;
