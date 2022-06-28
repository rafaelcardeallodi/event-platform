import classNames from "classnames";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

interface MobileMenuProps {
  isOpen: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  const { data } = useGetLessonsQuery();

  return (
    <div
      className={classNames(
        "w-full fixed top-[59px] left-0 right-0 bottom-0 bg-gray-700 border-l border-gray-600 z-[999] md:hidden",
        {
          hidden: !isOpen,
        }
      )}
    >
      <div className="overflow-scroll overflow-x-hidden p-6 h-full">
        <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
          Cronograma das aulas
        </span>

        <div className="flex flex-col gap-8">
          {data?.lessons.map((lesson) => (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
