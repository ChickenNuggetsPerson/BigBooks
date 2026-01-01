import BigBooksSidebar from "@/components/Decorative/Sidebar/BigBooksSidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/Decorative/shadcn/ui/sidebar";



export default function OrganizationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarProvider>
        <BigBooksSidebar />

        <SidebarInset>
          <main className="px-2 py-6">
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}




