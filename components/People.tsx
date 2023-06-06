'use client';

export default function People() {

    const getServerSideProps = async () => {
        try {
            const res = await fetch(`https://randomuser.me/api/?results=5`);
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    return(
        <div className="flex w-64 h-64 border-2 rounded-sm border-solid items-center justify-center flex-col">
            <h1 className='absolute top-2'> People </h1>
            <button className='border-2 border-black' onClick={getServerSideProps}>
                Fetch Data
            </button>
        </div>
    )
}