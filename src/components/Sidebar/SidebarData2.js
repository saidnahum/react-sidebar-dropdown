import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
   {
      title: 'Overview',
      path: '/overview',
      icon: <AiIcons.AiFillHome/>,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav : [
         {
            title: 'Users',
            path: '/overview/users',
            icon: <IoIcons.IoIosPaper />
         },
         {
            title: 'Revenue',
            path: '/overview/revenue',
            icon: <IoIcons.IoIosPaper />
         }
      ]
   },
   {
      title: 'Reports',
      path: '/reports',
      icon: <AiIcons.AiFillHome/>,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav : [
         {
            title: 'Report 1',
            path: '/reports/reports1',
            icon: <IoIcons.IoIosPaper />
         },
         {
            title: 'Report 2',
            path: '/reports/reports2',
            icon: <IoIcons.IoIosPaper />
         },
         {
            title: 'Report 3',
            path: '/reports/reports3',
            icon: <IoIcons.IoIosPaper />
         }
      ]
   },
   {
      title: 'Products',
      path: '/products',
      icon: <FaIcons.FaCartPlus />
   },
   {
      title: 'Catedral',
      path: '/catedral',
      icon: <AiIcons.AiFillHome/>,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav : [
         {
            title: 'PPI',
            path: '/catedral/ppi',
            icon: <IoIcons.IoIosPaper />
         },
         {
            title: 'PPI ANIMACION',
            path: '/catedral/ppi_gif',
            icon: <IoIcons.IoIosPaper />
         }
      ]
   }
]

