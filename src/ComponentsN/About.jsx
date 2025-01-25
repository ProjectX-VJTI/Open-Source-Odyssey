import Pointer from "./Pointer";
import Pic from "./../assets/vjti.jpg";

const About = () => {
    return (
        <div className="min-h-[100vh] w-full block bg-gradient-to-b from-[#d7824a] to-[var(--vanilla)]">
            <div className="block content-center text-[var(--rich-black)] w-3/4 mx-auto pt-5 mb-8">
                <h2 className="text-5xl font-poppins font-semibold mb-4">About <span className="underline">Project X</span></h2>
                <p className="text-lg font-monts font-med mx-auto mt-7 text-balanced">
                    We are an exclusive club at Veermata Jijabai Technological Institute, Mumbai. We provide a collaborative environment for students to learn, grow, and build projects together under mentorship. Explore our achievements, past projects, and upcoming events!
                </p>
            </div>
            <div className="grid w-3/4 mx-auto w-3/4 grid-cols-2 gap-10 py-3">
                <img src={Pic} className="rounded-md" />
                <div className="mx-auto text-pretty">
                    <Pointer key={1}
                        id={1}
                        title="Foster a supportive and inclusive community"
                        desc="We create a welcoming space for all students interested in coding, regardless of their experience level." />
                    <Pointer key={2}
                        id={2}
                        title="Provide comprehensive learning opportunities"
                        desc="We offer a wide range of activities, including workshops, hackathons, and coding challenges, to enhance your programming skills" />
                    <Pointer key={3}
                        id={3}
                        title="Connect students with industry and career paths"
                        desc="We bridge the gap between academia and industry by providing opportunities to network with professionals and gain valuable real-world experience" />
                </div>
            </div>
        </div>
    );
};

export default About;