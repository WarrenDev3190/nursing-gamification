import React from 'react';


class Header extends React.Component{
    adjustMainContentHeight() {
      var docHeight = jQuery(document).height();
      if(docHeight > jQuery('.body-content').height()){
               jQuery('.body-content').height(docHeight);
      }
    }

    toggleSidebar(){
      const body = jQuery('body'),
            bodyposition = body.css('position');

      if(bodyposition != 'relative') {
         if(!body.hasClass('sidebar-collapsed')) {
            body.addClass('sidebar-collapsed');
            jQuery('.side-navigation ul').attr('style','');
         } else {
            body.removeClass('sidebar-collapsed chat-view');
            jQuery('.side-navigation li.active ul').css({display: 'block'});
         }
      }else{
         if(body.hasClass('sidebar-open'))
            body.removeClass('sidebar-open');
         else
            body.addClass('sidebar-open');
            this.adjustMainContentHeight();
      }
    }
    
	render(){
		return(
            <div className="header-section">
                <div className="logo dark-logo-bg hidden-xs hidden-sm">
                    <a href="#">
                        <img src="img/andro.png" style={{width:30}} alt=""/>
                        <span className="brand-name">Andromeda</span>
                    </a>
                </div>

                <div className="icon-logo dark-logo-bg hidden-xs hidden-sm">
                    <a href="#">
                        <img src="img/andro.png" style={{width:30}} alt=""/>
                    </a>
                </div>

                <a className="toggle-btn" onClick={this.toggleSidebar}><i className="fa fa-outdent"></i></a>

                <div className="notification-wrap">
                    <div className="left-notification">
                        <ul className="notification-menu">
                            <li className="d-none">
                                <a href="javascript:;" className="btn btn-default dropdown-toggle info-number" data-toggle="dropdown">
                                    <i className="fa fa-tasks"></i>
                                    <span className="badge bg-success">9</span>
                                </a>

                                <div className="dropdown-menu dropdown-title">
                                    <div className="title-row">
                                        <h5 className="title green">
                                            You have 9 task
                                        </h5>
                                        <a href="javascript:;" className="btn-success btn-view-all">View all</a>
                                    </div>
                                    <div className="notification-list task-list">
                                        <a href="javascript:;">
                                            <span className="icon ">
                                                <i className="fa fa-paw green-color"></i>
                                            </span>
                                            <span className="task-info">
                                            Smith Doe
                                            <small> Assigned new task 10 min ago</small>
                                                </span>
                                        </a>
                                        <a href="javascript:;">
                                            <span className="icon ">
                                                <i className="fa fa-line-chart blue-color"></i>
                                            </span>
                                            <span className="task-info">Anthony Jones
                                            <small> Done 60% of his task</small>

                                            <div className="progress progress-striped">
                                                <div style={{width:(66+"%")}} aria-valuemax="100" aria-valuemin="0" aria-valuenow="66"
                                                     role="progressbar" className="progress-bar progress-bar-info"></div>
                                            </div>

                                            </span>
                                        </a>
                                        <a href="javascript:;">
                                            <span className="icon ">
                                                <i className="fa fa-heart purple-color"></i>
                                            </span>
                                            <span className="task-info">Tawseef
                                            <small> Like your task 10 min ago</small>
                                                </span>

                                        </a>
                                        <a href="javascript:;">
                                            <span className="icon ">
                                                <i className="fa fa-check green-color"></i>
                                            </span>
                                            <span className="task-info">Anjelina Gomez
                                            <small>completed his task Yesterday</small>
                                                </span>
                                        </a>
                                        <a href="javascript:;">
                                            <span className="icon ">
                                                <i className="fa fa-comments-o"></i>
                                            </span>
                                            <span className="task-info">Franklin Anderson
                                            <small>commented on your task 3 Days ago</small>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:;" className="btn btn-default dropdown-toggle info-number" data-toggle="dropdown">
                                    <i className="fa fa-bell-o"></i>
                                    <span className="badge bg-warning">4</span>
                                </a>

                                <div className="dropdown-menu dropdown-title ">

                                    <div className="title-row">
                                        <h5 className="title yellow">
                                            You have 4 New Notification
                                        </h5>
                                        <a href="javascript:;" className="btn-warning btn-view-all">View all</a>
                                    </div>
                                    <div className="notification-list-scroll sidebar">
                                        <div className="notification-list mail-list not-list">
                                            <a href="javascript:;" className="single-mail">
                                                <span className="icon bg-primary">
                                                    <i className="fa fa-envelope-o"></i>
                                                </span>
                                                <strong>New Task Registration</strong>

                                                <p>
                                                    <small>Just Now</small>
                                                </p>
                                                <span className="un-read tooltips" data-original-title="Mark as Read" data-toggle="tooltip" data-placement="left">
                                                    <i className="fa fa-circle"></i>
                                                </span>
                                            </a>
                                            <a href="javascript:;" className="single-mail">
                                                <span className="icon bg-success">
                                                    <i className="fa fa-comments-o"></i>
                                                </span>
                                                <strong> Private message Send</strong>

                                                <p>
                                                    <small>30 Mins Ago</small>
                                                </p>
                                                <span className="un-read tooltips" data-original-title="Mark as Read" data-toggle="tooltip" data-placement="left">
                                                    <i className="fa fa-circle"></i>
                                                </span>
                                            </a>
                                            <a href="javascript:;" class="single-mail">
                                                <span className="icon bg-warning">
                                                    <i className="fa fa-warning"></i>
                                                </span> Patient Moved to Bed 
                                                <p>
                                                    <small> 2 Days Ago</small>
                                                </p>
                                                <span className="read tooltips" data-original-title="Mark as Unread" data-toggle="tooltip" data-placement="left">
                                                    <i className="fa fa-circle-o"></i>
                                                </span>
                                            </a>
                                            <a href="javascript:;" class="single-mail">
                                                <span className="icon bg-dark">
                                                   <i className="fa fa-database"></i>
                                                </span> Database Overloaded 24%
                                                <p>
                                                    <small>1 Week Ago</small>
                                                </p>
                                                <span className="read tooltips" data-original-title="Mark as Unread" data-toggle="tooltip" data-placement="left">
                                                    <i className="fa fa-circle-o"></i>
                                                </span>
                                            </a>
                                            <a href="javascript:;" class="single-mail">
                                                <span className="icon bg-danger">
                                                    <i className="fa fa-warning"></i>
                                                </span>
                                                <strong>Server Failed Notification</strong>

                                                <p>
                                                    <small>10 Days Ago</small>
                                                </p>
                                                <span className="un-read tooltips" data-original-title="Mark as Read" data-toggle="tooltip" data-placement="left">
                                                    <i className="fa fa-circle"></i>
                                                </span>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="right-notification">
                        <ul className="notification-menu">
                            <li>
                                <form className="search-content" action="index.html" method="post">
                                    <input type="text" className="form-control" name="keyword" placeholder="Search..."/>
                                </form>
                            </li>

                            <li>
                                <a href="javascript:;" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                    <img src="img/img4.jpg" alt=""/>Nurse Joy
                                    <span className=" fa fa-angle-down"></span>
                                </a>
                                <ul className="dropdown-menu dropdown-usermenu purple pull-right">
                                    <li><a href="javascript:;">  Profile</a></li>
                                    <li>
                                        <a href="javascript:;">
                                            <span className="badge bg-danger pull-right">40%</span>
                                            <span>Settings</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <span className="label bg-info pull-right">new</span>
                                            Help
                                        </a>
                                    </li>
                                    <li><a href="login.html"><i className="fa fa-sign-out pull-right"></i> Log Out</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
		);
	}
};

export default Header;