import Projects from "@/components/projects";

export const metadata = {
  title: "Projects | Mahmoud Elbalhi Portfolio",
  description: "Explore selected web development projects by Mahmoud Elbalhi, including landing pages, online stores, and more. Built with React.js, Tailwind CSS, and modern UI/UX principles.",
  openGraph: {
    title: "Projects | Mahmoud Elbalhi Portfolio",
    description: "Explore selected web development projects by Mahmoud Elbalhi, including landing pages, online stores, and more. Built with React.js, Tailwind CSS, and modern UI/UX principles.",
    url: "https://your-portfolio-url.com/projects_",
    siteName: "Mahmoud Elbalhi Portfolio",
    images: [
      {
        url: "/portfolio.webp",
        width: 1200,
        height: 630,
        alt: "Mahmoud Elbalhi Portfolio Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Mahmoud Elbalhi Portfolio",
    description: "Explore selected web development projects by Mahmoud Elbalhi, including landing pages, online stores, and more. Built with React.js, Tailwind CSS, and modern UI/UX principles.",
    images: ["/portfolio.webp"],
  },
};

const ProjectsPage = () => {
    return <div>
        <Projects/>
    </div>;
}


export default ProjectsPage;