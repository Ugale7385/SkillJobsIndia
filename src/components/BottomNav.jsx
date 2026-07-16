import { Link } from "react-router-dom"


function BottomNav(){


return(

<div className="bottom-nav">


<Link to="/">
🏠
<br/>
Home
</Link>


<Link to="/saved-jobs">
⭐
<br/>
Saved
</Link>


<Link to="/profile">
👤
<br/>
Profile
</Link>


<Link to="/admin">
⚙️
<br/>
Admin
</Link>


</div>

)


}


export default BottomNav
