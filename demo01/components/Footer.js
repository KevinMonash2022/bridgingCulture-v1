import React from 'react';



export default () => {

  const footerNavs = [
      {
          label: "Resources",
          items: [
              {
                  href: 'javascript:void()',
                  name: 'contact'
              },
              {
                  href: 'javascript:void()',
                  name: 'Support'
              },
              {
                  href: 'javascript:void()',
                  name: 'Documentation'
              },
              {
                  href: 'javascript:void()',
                  name: 'Pricing'
              },
          ],
      },
      {
          label: "About",
          items: [
              {
                  href: 'javascript:void()',
                  name: 'Terms'
              },
              {
                  href: 'javascript:void()',
                  name: 'License'
              },
              {
                  href: 'javascript:void()',
                  name: 'Privacy'
              },
              {
                  href: 'javascript:void()',
                  name: 'About US'
              },
          ]
      },
      {
          label: "Explore",
          items: [
              {
                  href: 'javascript:void()',
                  name: 'Showcase'
              },
              {
                  href: 'javascript:void()',
                  name: 'Roadmap'
              },
              {
                  href: 'javascript:void()',
                  name: 'Languages'
              },
              {
                  href: 'javascript:void()',
                  name: 'Blog'
              },
          ]
      },
      {
          label: "Company",
          items: [
              {
                  href: 'javascript:void()',
                  name: 'Partners'
              },
              {
                  href: 'javascript:void()',
                  name: 'Team'
              },
              {
                  href: 'javascript:void()',
                  name: 'Careers'
              },
          ],
      }
  ]

  return (
      <footer className="main-footer bg-gray-800">
          <div className="footer-inner">
             
             
                  <p className="copy-right">Copyright © 2024 Bridge Beyond Borders. All rights reserved.</p>
                 
          </div>
      </footer>
  )
}
  