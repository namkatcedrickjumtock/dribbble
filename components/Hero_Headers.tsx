
function Hero_Headers({ data }: any) {
    return (
        <div className="max-w-fit max-h-fit rounded-[40px] bg-gray-800 text-sm text-white hover:bg-white cursor-pointer hover:text-black">
            <p className="p-4">{data}</p>
        </div>
    )
}

export default Hero_Headers
