import { FaBars, FaReact } from 'react-icons/fa'
import { TbGridDots } from 'react-icons/tb'
import { AiFillAppstore } from 'react-icons/ai'
const data = [
    { 
        id: 1, 
        title: "UI/UX Design", 
        desc: "The Ui/UX design description",
        icon:< FaBars />
    },
    {
        id: 2,
        title: "Frontend Development",
        desc: "The Frontend Development description",
        icon:< FaReact />
    },
    {
        id: 3,
        title: "Backend Development",
        desc: "The Backend Development description",
        icon: < TbGridDots />
    },
    {
        id: 4,
        title: "App Development", 
        desc: "The App Development description",
        icon: <AiFillAppstore />
    },
];

export default data;