// Enhanced Navigation component with updated styles
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/X_Logo.png';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

class Completed extends Component {
  render() {
    return <span className="text-white">The countdown is complete</span>;
  }
}

class RenderByUsingCallback extends Component {
  constructor(props) {
    super(props);
    // Set the end time to the end of January 25th, 23:59:59
    const endTime = new Date(2025, 0, 25, 23, 59, 59).getTime();
    this.state = {
      isCompleted: false,
    };
    this.handleComplete = this.handleComplete.bind(this);
    this.endTime = endTime;
  }

  handleComplete() {
    this.setState({ isCompleted: true });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isCompleted ? <Completed /> : (
          <FlipClockCountdown
            onComplete={this.handleComplete}
            to={this.endTime}
            labels={['Days', 'Hours', 'Minutes', 'Seconds']}
            labelStyle={{ fontSize: '10px', color: '#ffffff' }}
            digitBlockStyle={{
              width: '40px',
              height: '60px',
              borderRadius: '5px',
              spacing: '5px',
              backgroundColor: 'black',
              digitColor: 'white',
              fontSize: '30px',
            }}
            dividerStyle={{
              height: '1px',
              color: 'black',
            }}
            separatorStyle={{
              size: '6px',
              color: 'white',
            }}
          />
        )}
      </React.Fragment>
    );
  }
}

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r bg-slate-900 border-b-2 border-gray-700">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 w-12 mr-3 rounded-full" />
        <span className="text-3xl font-mono font-bold text-white shadow-md">ProjectX</span>
      </div>
      <div className="flex items-center">
        <RenderByUsingCallback />
      </div>
      <div className="flex font-mono space-x-6">
        <Link to="/" className="text-xl text-white hover:text-gray-200 transition-colors duration-300">Home</Link>
        <Link to="/events" className="text-xl text-white hover:text-gray-200 transition-colors duration-300">Events</Link>
        <Link to="/projects" className="text-xl text-white hover:text-gray-200 transition-colors duration-300">Projects</Link>
        <Link to="/achievements" className="text-xl text-white hover:text-gray-200 transition-colors duration-300">Achievements</Link>
        {/* <Link to="/staff" className="text-xl text-white hover:text-gray-200 transition-colors duration-300">Staff</Link> */}
      </div>
    </nav>
  );
};

export default Navigation;
