import Image from 'next/image';

const Loader = () => {
    return (
        <div className="flex-center w-full">
            <Image src="/icons/loading-circle.svg" alt="Loading Image" width={50} height={50} />
        </div>
    );
};

export default Loader;