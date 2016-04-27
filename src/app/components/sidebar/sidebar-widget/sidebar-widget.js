import React,{Component} from 'react';

class SidebarWidget extends React.Component{
	render(){
		return (
			<div className="sidebar-widget">
				<h4>{this.props.title}</h4>
				<ul className="list-group">
					{this.props.children}
				</ul>
			</div>
		);
	}
};

export default SidebarWidget;