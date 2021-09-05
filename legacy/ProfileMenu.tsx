import React from 'react'

const ProfileMenu: React.FC = ({children}) => {
    return (
       <div className="profile clearfix">
  <div className="profile_pic">
    <img src="images/img.jpg" alt="..." className="img-circle profile_img" />
  </div>
  <div className="profile_info">
    <span>Welcome,</span>
    <h2>John Doe</h2>
  </div>
</div>


    )
}

export default ProfileMenu
