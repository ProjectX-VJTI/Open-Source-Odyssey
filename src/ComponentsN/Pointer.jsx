const Pointer = ({title, desc, id}) => {
    return (
        <div>
            <div className="font-poppins text-[var(--rich-black)]">
                <div className="text-[20px] font-bold mb-1 text-balanced">{title}</div>
            </div>
            <div className="font-monts text-[18px] mb-4 font-md">
                {desc}
            </div>
        </div>
    );
};

export default Pointer;