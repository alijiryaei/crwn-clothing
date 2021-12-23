import React from "react";
import './directory.styles.scss'
import  MenuItem  from "../menu-item/menu-item.component";
import {selectDirectorySections} from "../../redux/directory/directory.selctor"
import { useSelector } from "react-redux";


const DirectoryMenu = () => {
  const sections = useSelector( state => selectDirectorySections(state))
  return (
    <div className="directory-menu">
      {sections.map( ({title , imageUrl , id , linkUrl , size}) => <MenuItem key={id} title={title} imageUrl={imageUrl} linkurl={linkUrl} size={size} />)}
    </div>
  )
}

export default DirectoryMenu;