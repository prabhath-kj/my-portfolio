import NavLink from "./NavLink";
const MobileOverLay = ({titles}) => {
  return (
         <ul className="flex flex-col items-center py-4">
            {titles.map((title, index) => {
              return <li key={index}>{NavLink(title)}</li>;
            })}
          </ul>
  )
}

export default MobileOverLay