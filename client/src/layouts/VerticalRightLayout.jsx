import Character from "../components/Character";
import CharacterStats from "../components/CharacterStats";
import ItemSlotContainer from "../components/ItemSlotContainer";

export default function VerticalRightLayout() {
    return (
            <div className="flex w-full h-full">
                <div className="flex flex-col w-3/5 overflow-hidden divide-lr-gray-900">
                    <Character className="flex flex-col h-4/5"/>
                    <CharacterStats className="collapse grid bg-amber-50 text-black  h-1/5 border border-4 border-black/[0.1]" />
                </div>
                <div className="flex flex-col w-2/5 overflow-hidden divide-lr-gray-900">
                    <ItemSlotContainer className="flex flex-col gap-1 h-full bg-gray-400 text-black overflow-y-auto border border-4 border-black/[0.1]"/>
                </div>
            </div>
        )
}