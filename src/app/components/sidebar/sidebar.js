import React from 'react';
import SidebarWidget from './sidebar-widget/sidebar-widget';
import SidebarProgress from './sidebar-progress/sidebar-progress';


const data = [{title:'Catheter Checks',percent:'30%',status:'warning'}
			 ,{title:'Documenation',percent:'100%',status:'danger'}];
const progressMeters = data.map((d,i)=><SidebarProgress key={i} title={d.title} percent={d.percent} status={d.status}/>);

class Sidebar extends React.Component{
	render(){
		return(
			<div className="sidebar-left">
				<div className="logo dark-logo-bg visible-xs-* visible-sm-*">
	                <a href="#">
	                    <img src="img/logo_inline.png" style={{width:50}} alt=""/>
	                    <span className="brand-name">Andromeda</span>
	                </a>
            	</div>
            	<div className="sidebar-left-info">
	                <SidebarWidget title="Current Progress">
	                	{progressMeters}
	                </SidebarWidget>
            	</div>
			</div>
		);
	}
};

export default Sidebar