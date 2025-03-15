import React, { useEffect, useState } from 'react';
import { GitBranch, Wifi, Bell } from 'lucide-react';

const StatusBar = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
  }, []);

  return (
    <div className="flex justify-between items-center px-4 py-1 bg-[#1f2428] text-white text-xs border-t border-[#414246] font-[JetBrains_Mono]">
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
      {!isMobile && <span>All rights reserved © {new Date().getFullYear()} | Made with ❤︎ by Harshana </span>}

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