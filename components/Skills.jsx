import Image from "next/image";

export default function Skills() {
  return (
    <section className="skills_section py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My <span className="text-indigo-600">Skills</span>
        </h1>

        <div className="my_skills grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          {/* React */}
          <div className="img_box group w-20 h-20 md:w-24 md:h-24 relative transition-transform duration-300 hover:scale-110">
            <Image
              src="/react.svg"
              alt="React"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>

          {/* HTML */}
          <div className="img_box group w-20 h-20 md:w-24 md:h-24 relative transition-transform duration-300 hover:scale-110">
            <Image
              src="/html.svg"
              alt="HTML"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* CSS */}
          <div className="img_box group w-20 h-20 md:w-24 md:h-24 relative transition-transform duration-300 hover:scale-110">
            <Image
              src="/css3.svg"
              alt="CSS"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* JavaScript */}
          <div className="img_box group w-20 h-20 md:w-24 md:h-24 relative transition-transform duration-300 hover:scale-110">
            <Image
              src="/js.svg"
              alt="JavaScript"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* Bootstrap */}
          <div className="img_box group w-20 h-20 md:w-24 md:h-24 relative transition-transform duration-300 hover:scale-110">
            <Image
              src="/bootstrap.svg"
              alt="Bootstrap"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* Tailwind CSS */}
          <div className="img_box group w-20 h-20 md:w-24 md:h-24 relative transition-transform duration-300 hover:scale-110">
            <Image
              src="/tailwind.svg"
              alt="Tailwind CSS"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
