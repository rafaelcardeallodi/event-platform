import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Header } from "../components/Header";
import { MobileMenu } from "../components/MobileMenu";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

import { useGetLessonsQuery } from "../graphql/generated";

export function Event() {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const { data } = useGetLessonsQuery();
  const { slug } = useParams<{ slug: string }>();

  function toggleMenuMobileOpen() {
    document.body.style.overflow = isMenuMobileOpen ? "unset" : "hidden";

    setIsMenuMobileOpen(!isMenuMobileOpen);
  }

  if (data && !slug) {
    navigate(`/event/lesson/${data.lessons[0].slug}`);
  }

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header
          onToggleIsMenuMobileOpen={toggleMenuMobileOpen}
          isMenuMobileOpen={isMenuMobileOpen}
        />
        <main className="flex flex-1">
          {slug ? (
            <Video lessonSlug={slug} onIsMenuMobileOpen={setIsMenuMobileOpen} />
          ) : (
            <div className="flex-1" />
          )}
          <Sidebar
            data={{
              lessons: data?.lessons,
            }}
          />
        </main>
      </div>
      <MobileMenu
        isOpen={isMenuMobileOpen}
        data={{
          lessons: data?.lessons,
        }}
      />
    </>
  );
}
