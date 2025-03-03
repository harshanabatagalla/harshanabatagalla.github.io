import React, { useEffect, useState } from 'react';
import { GitBranch, Wifi, Bell } from 'lucide-react';

const StatusBar = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
  }, []);

  return (
    <div className="flex justify-between items-center px-4 py-1 bg-[#007ACC] text-white text-xs">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <GitBranch size={14} />
          <span>main</span>
        </div>
        {!isMobile && <>
          <div>JavaScript</div>
          <div>UTF-8</div>
        </>}
      </div>
      {!isMobile && <div>Made with ❤︎ by Harshana </div>}

      {!isMobile && <div className="flex items-center space-x-4">
        <div>Ln 42, Col 18</div>
        <div>Spaces: 2</div>
        <div className="flex items-center space-x-2">
          <Wifi size={14} />
          <Bell size={14} />
        </div>
      </div>}

      {isMobile && <div className='flex items-center space-x-2'>
        <Wifi size={14} />
        <Bell size={14} />
      </div>}
    </div>
  );
};

export default StatusBar;