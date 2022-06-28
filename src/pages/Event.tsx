import { useState } from "react";
import { useParams } from "react-router-dom";

import { Header } from "../components/Header";
import { MobileMenu } from "../components/MobileMenu";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState<boolean>(false);

  const { slug } = useParams<{ slug: string }>();

  function toggleMenuMobileOpen() {
    document.body.style.overflow = isMenuMobileOpen ? "unset" : "hidden";

    setIsMenuMobileOpen(!isMenuMobileOpen);
  }

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header
          onToggleIsMenuMobileOpen={toggleMenuMobileOpen}
          isMenuMobileOpen={isMenuMobileOpen}
        />
        <main className="flex flex-1">
          {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
          <Sidebar />
        </main>
      </div>
      <MobileMenu isOpen={isMenuMobileOpen} />
    </>
  );
}
