'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Map = () => {
  return (
    <div className="relative w-full h-[350px] overflow-hidden rounded-lg">
      <div 
        className="absolute inset-0"
        dangerouslySetInnerHTML={{
          __html: `
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.3987532580054!2d-8.634828524282536!3d41.125820371334356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd246530cd054073%3A0xd52f534652e26b69!2sVista%20Nova%2C%20Lda.!5e0!3m2!1spt-PT!2spt!4v1734740206494!5m2!1spt-PT!2spt"
              width="100%"
              height="100%"
              style="border:0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          `
        }}
      />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Map), {
  ssr: false
});
