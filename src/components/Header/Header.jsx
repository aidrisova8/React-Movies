import { Link } from "react-router-dom";
 import  styles from "./Header.module.css"
 import user from "../../common/images/user.png"
const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/"> <div className={styles.logo}>
Movie App
     </div>
     </Link>
    
     <div className={styles.userImage}>
      <img src={user} alt="user" />
     </div>
      </div>
  )
}

export default Header