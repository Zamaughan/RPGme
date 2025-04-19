import Character from "../components/Character"
import CharacterStats from "../components/CharacterStats"
import ItemSlotContainer from "../components/ItemSlotContainer"

export default function DefaultLayout() {
    return (
        <div className="h-full">
            <div className="flex flex-1 h-3/4">
                <Character className="flex w-full justify-center bg-blue-700/[0.9] border border-4 border-black/[0.1] " />
                <CharacterStats className=" grid h-full align-content-center bg-amber-50 w-2/5 text-black text-sm border border-4 border-black/[0.1]" />
            </div>
            <div className="flex flex-1 h-1/4">
                <ItemSlotContainer className="flex gap-1 h-full w-full bg-gray-500 text-black overflow-y-auto border border-4 border-black/[0.1]" />
            </div>
        </div>
    )
}