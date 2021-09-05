import React from 'react'

const Footer: React.FC = ({children}) => {
    return (
       <div className="sidebar-footer hidden-small">
  <a href="/#" data-toggle="tooltip" data-placement="top" title="Settings">
    <span className="glyphicon glyphicon-cog" aria-hidden="true" />
  </a>
  <a href="/#" data-toggle="tooltip" data-placement="top" title="FullScreen">
    <span className="glyphicon glyphicon-fullscreen" aria-hidden="true" />
  </a>
  <a href="/#" data-toggle="tooltip" data-placement="top" title="Lock">
    <span className="glyphicon glyphicon-eye-close" aria-hidden="true" />
  </a>
  <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
    <span className="glyphicon glyphicon-off" aria-hidden="true" />
  </a>
</div>


    )
}

export default Footer
