import { File, FileCheck, FileCode, FileOutput, FilePlus2, FileText, FileX2, ScrollText, Book, Files, BookText, FileSliders, SquarePen, Pencil, Folder, FolderClosed, FolderOpen, Folders, AppWindow, Archive, BookCheck, Bookmark, BookType, Calendar, CalendarCheck2, ClipboardCheck, ClipboardList } from "lucide-react";
import FloatingBackground from "./FloatingBackground";



export default function IconBackground() {
    return (
        <div className="absolute -z-50 w-full h-full">
            <FloatingBackground
                dt={4000}
                duration={2}

                // dt={100}
                // duration={.2}
                jitter

                padding={50}
                boundaryNudgeForce={.3}
                
                radius={80}
                reactForce={5}

                dragSpeed={50}
                dragFac={.9}
            >

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