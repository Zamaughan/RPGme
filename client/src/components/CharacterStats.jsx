export default function CharacterStats({ className, user, ...props }) {
    return (
        <div className={className}>
            <div className="text-xl flex flex-col gap-4">
                <span>Username Stats</span>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div >
                        <div className="grid grid-cols-2 w-full">        
                            <div className="text-right">Str</div>
                            <div className="text-center">80</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="text-right">Dex</div>
                            <div className="text-center">60</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="text-right">Int</div>
                            <div className="text-center">40</div>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-2">
                            <div className="text-right">Health</div>
                            <div className="text-center">100</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="text-right">Mana</div>
                            <div className="text-center">100</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="text-right">Stam</div>
                            <div className="text-center">100</div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}