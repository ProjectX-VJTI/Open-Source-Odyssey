import { Link } from "react-router-dom";

const ProjectCard = ({title, desc, color, link}) => {
    return (
        <div className="w-full rounded-xl shadow-md text-neutral-50 min-h-[15rem] p-3 flex flex-col justify-between" style={{ backgroundColor: color }}>
            <div>
                <div className="font-poppins text-2xl font-semibold mb-2">{title}</div>
                <div className="font-monts font-medium w-3/4">{desc}</div>
            </div>
            <div className="flex items-center justify-between">
                <Link to={link} className="border-2 font-semibold border-neutral-50 font-poppins px-6 py-2 font-poppins rounded-full">Learn More</Link>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-[var(--platinum)] py-10" id="projects">
            <div className="w-3/4 mx-auto">
                <p className="font-poppins text-4xl mb-1 font-bold">Our Projects</p>
                <div className="flex gap-5">
                    <ProjectCard key={0} title="Upcoming Projects" desc="Click on the button to learn more" color="var(--pastel-blue)" link="/upcoming-projects"/>
                    <ProjectCard key={1} title="Past Projects" desc="Click on the button to learn more" color="var(--chilli-red)" link="/past-projects"/>
                </div>
            </div>
        </div>
    );
};

export default Projects;