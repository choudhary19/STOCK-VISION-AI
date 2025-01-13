import React, { useEffect, useRef } from 'react';

const TradingViewChart = ({ symbol }) => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const scriptId = 'tradingview-widget-script';
    const existingScript = document.getElementById(scriptId);

    const createWidget = () => {
      if (chartContainerRef.current && window.TradingView) {
        new window.TradingView.widget({
          container_id: chartContainerRef.current.id,
          width: '100%',
          height: 550,
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          allow_symbol_change: true,
          details: true,
          hotlist: true,
          calendar: true,
          studies: ['MACD@tv-basicstudies'],
        });
      }
    };

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://s3.tradingview.com/tv.js';
      script.async = true;
      script.onload = createWidget;
      document.body.appendChild(script);
    } else {
      createWidget();
    }

    return () => {
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, [symbol]);

  return <div className='ml-2 rounded-md' id="tradingview-widget" ref={chartContainerRef} />;
};

export default TradingViewChart;