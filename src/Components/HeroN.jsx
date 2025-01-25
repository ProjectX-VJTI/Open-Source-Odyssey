const HeroN = () => {
    return(
        <div className="relative min-h-[94vh] w-full grid place-items-center bg-[url('./assets/stacked-waves-haikei.svg')] bg-no-repeat bg-center bg-cover">
            <div>
                <p className="font-poppins text-[var(--rich-black)] text-2xl font-semibold">Welcome to</p>
                <h1 className="font-poppins font-bold text-[var(--rich-black)] text-9xl">PROJECT X</h1>
                <button href="#about" className="font-poppins font-med text-2xl border-[3px] border-[var(--rich-black)] px-4 py-2 mt-4 rounded-md">Learn More</button>
            </div>
        </div>
    );
};

export default HeroN;