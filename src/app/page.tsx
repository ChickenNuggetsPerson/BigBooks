import AnimateChildren from "@/components/Decorative/AnimateChildren";
import FloatingBackground from "@/components/Decorative/FloatingBackground";
import UserGreetingCard from "@/components/User/UserGreetingCard";
import { File, FileCheck, FileCode, FileOutput, FilePlus2, FileText, FileX2, ScrollText, Book, Files, BookText, FileSliders, SquarePen, Pencil, Folder, FolderClosed, FolderOpen, Folders, AppWindow, Archive, BookCheck, Bookmark, BookType, Calendar, CalendarCheck2, ClipboardCheck, ClipboardList } from "lucide-react";

import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '800'
})


export const dynamic = 'force-dynamic';

export default async function Home() {

  return (
    <div>


      <div className="bg-primary w-full shadow-lg h-15 flex flex-row justify-end"></div>

      <div className="h-120 flex flex-row justify-between relative">

        <div className="absolute -z-50 w-full h-full">
          <FloatingBackground>

            <File />
            <FileCheck />
            <FileCode />
            <FileOutput />
            <FilePlus2 />
            <FileText />
            <FileX2 />
            <ScrollText />
            <Book />
            <Files />
            <BookText />
            <FileSliders />
            <SquarePen />
            <Pencil />
            <Folder />
            <FolderClosed />
            <FolderOpen />
            <Folders />

            <AppWindow />
            <Archive />
            <BookCheck />
            <BookType />
            <Bookmark />
            <Calendar />
            <CalendarCheck2 />
            <ClipboardCheck />
            <ClipboardList />

          </FloatingBackground>
        </div>

        <div className="w-1/2 flex flex-row justify-center">
          <div className="h-full flex flex-col justify-center">

            <AnimateChildren x={-50} fade duration={1} dt={0.25} className="card">
              <p className={'text-9xl text-left w-fit select-none text-primary-up ' + openSans.className}>
                BIG
              </p>
              <p className={'text-9xl text-left w-fit select-none text-primary-up ' + openSans.className}>
                Books
              </p>
            </AnimateChildren>

          </div>
        </div>

        <div className="w-1/2 flex flex-row justify-center">
          <div className="h-full flex flex-col justify-center">
            <AnimateChildren fade y={-10}>
              <UserGreetingCard />
            </AnimateChildren>
          </div>
        </div>

      </div>

      <div className="bg-primary w-full shadow-lg h-screen"></div>

    </div>
  );
}
