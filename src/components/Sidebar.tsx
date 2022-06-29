import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

interface SidebarProps {
  data: {
    lessons: Lesson[] | undefined;
  };
}

interface Lesson {
  id: string;
  lessonType: "class" | "live";
  slug: string;
  availableAt?: any;
  title: string;
}

export function Sidebar({ data }: SidebarProps) {
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600 hidden md:block">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma das aulas
      </span>

      <div className="flex flex-col gap-8">
        {data.lessons?.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
}
