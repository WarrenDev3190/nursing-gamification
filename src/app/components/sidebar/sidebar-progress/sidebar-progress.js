import React,{Component} from 'react';

class SidebarProgress extends React.Component{
	render(){
		const toolTipClassNames = [...['label','pull-right'],(`label-${this.props.status}`)].join(' '),
			  barClassNames     = [...['progress-bar'],`progress-bar-${this.props.status}`].join(' ');
		return (
			<div>
				<li>
					<span className={toolTipClassNames}>{this.props.percent}</span>
					<p>{this.props.title}</p>
					<div className="progress progress-xs">
					<div className={barClassNames} style={{width:this.props.percent}}>
		                    <span className="sr-only">{this.props.percent}</span>
		                </div>
		            </div>
				</li>
			</div>
		);
	}
};


export default SidebarProgress;