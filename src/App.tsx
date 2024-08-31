import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const App = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="title">
              <span className="text">
                제목제목제목제목제목제목제목제목제목제목제목제목 제목제목제목
              </span>
            </DialogTitle>
            <DialogDescription>내용내용</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
};
