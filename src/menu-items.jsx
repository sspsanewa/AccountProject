const menuItems = {
  items: [
    {
      id: 'dashboard',
      title: 'dashboard',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: 'feather icon-home',
          url: '/dashboard'
        }
      ]
    },
    {
      id: 'inbox',
      title: 'inbox',
      type: 'group',
      icon: 'icon-group',
      children: [
        {
          id: 'Inbox',
          title: 'Inbox',
          type: 'item',
          icon: 'feather icon-mail',
          url: '/inbox'
        }
      ]
    },
    {
      id: 'client',
      title: 'client',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'client',
          title: 'Clients',
          type: 'collapse',
          icon: 'feather icon-users',
          children: [
            {
              id: 'client',
              title: 'Client List',
              type: 'item',
              url: '/client/client-list'
            },
            {
              id: 'Portals',
              title: 'Manage Client Portals',
              type: 'item',
              url: '/client/portals'
            },
            {
              id: 'dashboard',
              title: 'Dashboard',
              type: 'item',
              url: '/client/dashboard'
            }
          ]
        }
      ]
    },

    {
      id: 'files',
      title: 'Files',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'files',
          title: 'Files',
          type: 'collapse',
          icon: 'feather icon-folder',
          children: [
            {
              id: 'client-files',
              title: 'Client Files',
              type: 'item',
              url: '/files/client-files'
            },
            {
              id: 'internal-files',
              title: 'Internal Files',
              type: 'item',
              url: '/files/internal-files'
            },
            {
              id: 'my-files',
              title: 'My Files',
              type: 'item',
              url: '/files/my-files'
            },
            {
              id: 'recently-viewed',
              title: 'Recently Viewed',
              type: 'item',
              url: '/files/recently-viewed'
            },
            {
              id: 'transcript',
              title: 'Transcript',
              type: 'item',
              url: '/files/transcript'
            }
          ]
        }
      ]
    },
    {
      id: 'work',
      title: 'work',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'work',
          title: 'Work',
          type: 'collapse',
          icon: 'feather icon-check-circle',
          children: [
            {
              id: 'task-list',
              title: 'Task List',
              type: 'item',
              url: '/work/task-list'
            },
            {
              id: 'engagement-list',
              title: 'Engagement List',
              type: 'item',
              url: '/work/engagement-list'
            },
            {
              id: 'resolution-cases',
              title: 'Resolution Cases',
              type: 'item',
              url: '/work/resolution-cases'
            },
            {
              id: 'tax-organizers',
              title: 'Tax Organizers',
              type: 'item',
              url: '/work/tax-organizers'
            },
            {
              id: 'dashboard',
              title: 'Dashboard',
              type: 'item',
              url: '/work/dashboard'
            }
          ]
        }
      ]
    },

    {
      id: 'time',
      title: 'time',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'time',
          title: 'Time',
          type: 'collapse',
          icon: 'feather icon-watch',
          children: [
            {
              id: 'time-entries',
              title: 'Time Entries',
              type: 'item',
              url: '/time/time-entries'
            },
            {
              id: 'wip-report',
              title: 'Wip Report',
              type: 'item',
              url: '/time/wip-report'
            },
            {
              id: 'productivity',
              title: 'Productivity',
              type: 'item',
              url: '/time/productivity'
            },
            {
              id: 'reports',
              title: 'Reports',
              type: 'item',
              url: '/time/reports'
            }
          ]
        }
      ]
    },

    {
      id: 'billing',
      title: 'billing',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'billing',
          title: 'Billing',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'dashboard',
              title: 'Dashboard',
              type: 'item',
              url: '/billing/dashboard'
            },
            {
              id: 'invoices',
              title: 'Invoices',
              type: 'item',
              url: '/billing/invoices'
            },
            {
              id: 'payments',
              title: 'Payments',
              type: 'item',
              url: '/billing/payments'
            },
            {
              id: 'expenses',
              title: 'Expenses',
              type: 'item',
              url: '/billing/expenses'
            },
            {
              id: 'credits',
              title: 'Credits',
              type: 'item',
              url: '/billing/credits'
            },
            {
              id: 'statement',
              title: 'Statement',
              type: 'item',
              url: '/billing/statement'
            },
            {
              id: 'reports',
              title: 'Reports',
              type: 'item',
              url: '/billing/reports'
            }
          ]
        }
      ]
    },

    {
      id: 'templates',
      title: 'templates',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'templates',
          title: 'Templates',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'task',
              title: 'Task',
              type: 'item',
              url: '/templates/task'
            },
            {
              id: 'folder',
              title: 'Folder',
              type: 'item',
              url: '/templates/folder'
            },
            {
              id: 'email',
              title: 'Email',
              type: 'item',
              url: '/templates/email'
            },
            {
              id: 'latter',
              title: 'Latter',
              type: 'item',
              url: '/templates/latter'
            },
            {
              id: 'eign',
              title: 'eSign',
              type: 'item',
              url: '/templates/esign'
            },
            {
              id: 'client-record',
              title: 'Client Record',
              type: 'item',
              url: '/templates/client-record'
            },
            {
              id: 'boilerplate-letter',
              title: 'Boilerplate Letter',
              type: 'item',
              url: '/templates/boilerplate-letter'
            },
            {
              id: 'client-portal-invitation',
              title: 'Client Portal Invitation',
              type: 'item',
              url: '/templates/client-portal-invitation'
            },
            {
              id: 'engagement-item',
              title: 'Engagement Item',
              type: 'item',
              url: '/engagement-item'
            },
            {
              id: 'resolution-case',
              title: 'Resolution-case',
              type: 'item',
              url: '/templates/resolution-case'
            },
            {
              id: 'notice',
              title: 'Notice',
              type: 'item',
              url: '/templates/notice'
            }
          ]
        }
      ]
    },

    {
      id: 'insights',
      title: 'insights',
      type: 'group',
      icon: 'icon-group',
      children: [
        {
          id: 'insights',
          title: 'InSights',
          type: 'item',
          icon: 'feather icon-file-text',
          url: '/insights'
        }
      ]
    },
    {
      id: 'calenders',
      title: 'calender',
      type: 'group',
      icon: 'icon-group',
      children: [
        {
          id: 'calender',
          title: 'Calender',
          type: 'item',
          icon: 'feather icon-calendar',
          url: '/calender'
        }
      ]
    },

    {
      id: 'settings',
      title: 'settings',
      type: 'group',
      icon: 'icon-group',
      children: [
        {
          id: 'settings',
          title: 'Settings',
          type: 'item',
          icon: 'feather icon-settings',
          url: '/settings'
        }
      ]
    }
  ]
};

export default menuItems;
