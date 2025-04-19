export default function ItemSlot({ item, onClick }) {
    return (
        <div className="p-4 flex w-full h-full items-center bg-gray-400 justify-center transition-all duration-300
          hover:bg-gray-300 hover:border-blue-500 hover:scale-95 hover:shadow hover:shadow-[0_0_15px_5px_rgba(0,0,0,1)]"
            onClick={onClick}
         >
            <div>
                <div className="text-lg text-black">
                    <div><span>Test Key</span> <span>Test Value</span></div>                    
                </div>
            </div>

        </div>
    )
}