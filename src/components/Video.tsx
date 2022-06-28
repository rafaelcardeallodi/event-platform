import { DefaultUi, Player, Youtube } from "@vime/react";
import { useGetLessonBySlugQuery } from "../graphql/generated";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from "phosphor-react";

import "@vime/core/themes/default.css";
import { Button } from "./Button";
import { Card } from "./Card";

interface VideoProps {
  lessonSlug: string;
}

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="flex-1 mt-[59px] md:mt-0">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start flex-col gap-6 md:flex-row md:gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL}
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto">
            <Button
              href="#"
              leftIcon={<DiscordLogo size={24} />}
              variant="primary"
            >
              Comunidade do Discord
            </Button>

            <Button
              href="#"
              leftIcon={<Lightning size={24} />}
              variant="secondary"
            >
              Acesse o desafio
            </Button>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-1 md:grid-cols-2">
          <Card
            href="#"
            title="Material complementar"
            description="Acesse o material complementar para acelerar o seu desenvolvimento"
            icon={<FileArrowDown size={40} />}
          />

          <Card
            href="#"
            title="Wallpapers exclusivos"
            description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
            icon={<Image size={40} />}
          />
        </div>
      </div>
    </div>
  );
}
