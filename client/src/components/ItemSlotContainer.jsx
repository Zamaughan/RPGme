import ItemSlot from "./ItemSlot"

export default function ItemSlotContainer({ className, ...props }) {
    const handleItemClick = (itemNumber) => {
      console.log(`Item ${itemNumber} clicked!`);
    };

    return (
        <div id="item-slots-container" className={className}>
          {[1, 2, 3, 4].map((item) => ( <ItemSlot key={item} onClick={() => handleItemClick(item)} /> ))}
        </div>
    )
}