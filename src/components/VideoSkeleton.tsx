export function VideoSkeleton() {
  return (
    <div className="flex-1 mt-[59px] md:mt-0 animate-pulse">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[618px] aspect-video bg-gray-600"></div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start flex-col gap-6 md:flex-row md:gap-16">
          <div className="w-full md:flex-1">
            <h1 className="bg-gray-600 h-6 rounded-md" />
            <p className="mt-4 text-gray-200 leading-relaxed text-sm md:text-[1rem]">
              <div className="w-full bg-gray-600 h-4 rounded-md inline-block" />
              <div className="w-full bg-gray-600 h-4 rounded-md mt-[5px] inline-block" />
              <div className="w-full bg-gray-600 h-4 rounded-md mt-[5px] inline-block" />
              <div className="w-full max-w-[150px] bg-gray-600 h-4 rounded-md mt-[5px] inline-block" />
            </p>

            <div className="flex items-center gap-4 mt-6">
              <div className="h-16 w-16 rounded-full bg-gray-600" />

              <div className="flex-1">
                <strong className="inline-block w-full max-w-[185px] bg-gray-600 h-6 rounded-md" />
                <span className="block w-full max-w-[210px] bg-gray-600 h-4 rounded-md" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto">
            <div className="p-4 flex items-center rounded gap-2 justify-center transition-colors bg-gray-600 w-full md:w-[238px]">
              &nbsp;
            </div>

            <div
              className="p-4 flex items-center rounded gap-2 justify-center transition-colors
             border-2 border-gray-600 w-full md:w-[238px]"
            >
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
