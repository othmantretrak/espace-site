import React from 'react'


import Footer from './Footer'
import ProfileMenu from './ProfileMenu'
const Sidebar: React.FC = ({children}) => {
    return (
        <div className="col-md-3 left_col">
      <div className="left_col scroll-view">
        <div className="navbar nav_title" style={{border: 0}}>
          <a href="index.html" className="site_title"><i className="fa fa-paw" /> <span>Gentelella Alela!</span></a>
        </div>
        <div className="clearfix" />
        <ProfileMenu/>
        <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
  <div className="menu_section">
    <h3>General</h3>
    <ul className="nav side-menu">
      <li><a href="/#"><i className="fa fa-home" /> Home <span className="fa fa-chevron-down" /></a>
        <ul className="nav child_menu">
          <li><a href="index.html">Dashboard</a></li>
          <li><a href="index2.html">Dashboard2</a></li>
          <li><a href="index3.html">Dashboard3</a></li>
        </ul>
      </li>
      <li><a href="/#"><i className="fa fa-edit" /> Forms <span className="fa fa-chevron-down" /></a>
        <ul className="nav child_menu">
          <li><a href="form.html">General Form</a></li>
          <li><a href="form_advanced.html">Advanced Components</a></li>
          <li><a href="form_validation.html">Form Validation</a></li>
          <li><a href="form_wizards.html">Form Wizard</a></li>
          <li><a href="form_upload.html">Form Upload</a></li>
          <li><a href="form_buttons.html">Form Buttons</a></li>
        </ul>
      </li>
      <li><a href="/#"><i className="fa fa-desktop" /> UI Elements <span className="fa fa-chevron-down" /></a>
        <ul className="nav child_menu">
          <li><a href="general_elements.html">General Elements</a></li>
          <li><a href="media_gallery.html">Media Gallery</a></li>
          <li><a href="typography.html">Typography</a></li>
          <li><a href="icons.html">Icons</a></li>
          <li><a href="glyphicons.html">Glyphicons</a></li>
          <li><a href="widgets.html">Widgets</a></li>
          <li><a href="invoice.html">Invoice</a></li>
          <li><a href="inbox.html">Inbox</a></li>
          <li><a href="calendar.html">Calendar</a></li>
        </ul>
      </li>
    </ul></div></div>
    <Footer/>
    </div></div>


    )
}

export default Sidebar
