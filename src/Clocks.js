import React from 'react';
import Clock from './Clock';


export default  Clocks = () => {
  return (
		<>
	
			<div>
						<Clock/>
						<Clock timeZone={"Asia/Tokyo"}/>
						<Clock timeZone={"Europe/London"}/>
						<Clock timeZone={"Australia/Adelaide"}/>
			</div>
			
		</>
  )
}

