import style from "./Nav.module.scss"
import { NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";


export const Nav = () => {

  // const [inputText, setInputText] = useState("");
  // const [searchData, setSearchData] = useState();

    const navArray = [
      { Link: "/", page: "Home" },
      { Link: "/views", page: "Views" },
      { Link: "/test2", page: "Test2" },
      { Link: "/test3", page: "Test3" },
      {
        page: (
          <div>
            <CiSearch className={style.icon} />
            <input
              placeholder="Search"
              // value={inputText}
              // onChange={(event) => setInputText(event.target.value)}
            />
          </div>
        ),
      },
    ];  

    return (
        <nav className={style.nav}>
            <ul>
            {navArray.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.Link}
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#ffa96a" : "#000",
                    };
                  }}
                >
                  {item.page}
                </NavLink>
              </li>
            );
          })}
            </ul>
            
        </nav>

        
    )
}