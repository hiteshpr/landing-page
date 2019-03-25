export const adminLteConf = {
  skin: 'blue',
  // isSidebarLeftCollapsed: false,
  // isSidebarLeftExpandOnOver: false,
  // isSidebarLeftMouseOver: false,
  // isSidebarLeftMini: true,
  // sidebarRightSkin: 'dark',
  // isSidebarRightCollapsed: true,
  // isSidebarRightOverContent: true,
  // layout: 'normal',
  sidebarLeftMenu: [
    {label: 'Actions', separator: true},
    {label: 'View Job Description', route: 'view_job_description'},
    {label: 'Create New Job Description', route: 'create_job_description'},
    {label: 'View Applicant Status' , route: 'view_application_status'},
    {label: 'View Particular JD Status', route: 'view_status'},
    {label: 'Take Notes', route: 'take_notes'}
    // {label: 'Dropdown', route: 'dropdown', iconClasses: 'fa fa-arrows-v'},
    // {label: 'Form', iconClasses: 'fa fa-files-o', children: [
    //     {label: 'Input Text', route: 'form/input-text'}
    // ]},
  ]
};
