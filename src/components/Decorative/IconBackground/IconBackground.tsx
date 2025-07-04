import { File, FileCheck, FileCode, FileOutput, FilePlus2, FileText, FileX2, ScrollText, Book, Files, BookText, FileSliders, SquarePen, Pencil, Folder, FolderClosed, FolderOpen, Folders, AppWindow, Archive, BookCheck, Bookmark, BookType, Calendar, CalendarCheck2, ClipboardCheck, ClipboardList } from "lucide-react";
import FloatingBackground from "./FloatingBackground";



export default function IconBackground() {
    return (
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
    )
}