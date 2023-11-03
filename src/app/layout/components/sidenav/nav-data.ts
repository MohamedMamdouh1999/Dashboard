import { INavbarData } from "../../interfaces/inavbar-data";

export const navbarData: INavbarData[] = [
  { routeLink: 'dashboard', icon: 'fa-solid fa-house', label: 'sidenav.dashboard.dashboard', items: [
    { routeLink: 'dashboard/home', label: 'sidenav.dashboard.mainDashboard'},
    { routeLink: 'dashboard/training-courses', label: 'sidenav.dashboard.coursesNumbers'},
    { routeLink: 'dashboard/trainees', label: 'sidenav.dashboard.trainees'},
    { routeLink: 'dashboard/groups', label: 'sidenav.dashboard.groups'}]
  },
  { routeLink: 'usersManagement', icon: 'fa-solid fa-users', label: 'sidenav.usersManagement.usersManagement', items: [
    { routeLink: 'usersManagement/structureManagement', label: 'sidenav.usersManagement.structureManagement'},
    { routeLink: 'usersManagement/roleManagement', label: 'sidenav.usersManagement.roleManagement'},
    { routeLink: 'usersManagement/users', label: 'sidenav.usersManagement.users'}]
  },
  { routeLink: 'categoryManagement', icon: 'fa-solid fa-layer-group', label: 'sidenav.categoryManagement' },
  { routeLink: 'nominationPermissionsManagement', icon: 'fa-solid fa-user-group', label: 'sidenav.nominationPermissionsManagement' },
  { routeLink: 'trainingPlan', icon: 'fa-solid fa-user-plus', label: 'sidenav.trainingPlan' },
  { routeLink: 'courses', icon: 'fa-solid fa-tornado', label: 'sidenav.courses' },
  { routeLink: 'approvementRequests', icon: 'fa-solid fa-suitcase', label: 'sidenav.approvementRequests' },
  { routeLink: 'certificates', icon: 'fa-solid fa-arrow-trend-up', label: 'sidenav.certificates' },
  { routeLink: 'onlineServices', icon: 'fa-solid fa-keyboard', label: 'sidenav.onlineServices' },
  { routeLink: 'location', icon: 'fa-solid fa-location-dot', label: 'sidenav.location.location', items: [
    { routeLink: 'location/country', label: 'sidenav.location.country'},
    { routeLink: 'location/region', label: 'sidenav.location.region'},
    { routeLink: 'location/city', label: 'sidenav.location.city'}]
  },
  { routeLink: 'frequentlyAskedQuestions', icon: 'fa-solid fa-circle-question', label: 'sidenav.frequentlyAskedQuestions' },
  { routeLink: 'enrollmentManagement', icon: 'fa-solid fa-user-check', label: 'sidenav.enrollmentManagement' },
  { routeLink: 'contact', icon: 'fa-solid fa-phone', label: 'sidenav.contact.contactUs', items: [
    { routeLink: 'contact/contactSettings', label: 'sidenav.contact.contactSettings'},
    { routeLink: 'contact/contactMessages', label: 'sidenav.contact.contactMessages'}]
  },
  { routeLink: 'pagesManagement', icon: 'fa-solid fa-pager', label: 'sidenav.pagesManagement.pagesManagement', items: [
    { routeLink: 'pagesManagement/integrityIntellectual', label: 'sidenav.pagesManagement.integrityIntellectual'},
    { routeLink: 'pagesManagement/privacy', label: 'sidenav.pagesManagement.privacy'},
    { routeLink: 'pagesManagement/about', label: 'sidenav.pagesManagement.about'},
    { routeLink: 'pagesManagement/courseTabs', label: 'sidenav.pagesManagement.courseTabs'},
    { routeLink: 'pagesManagement/attendancePolicy', label: 'sidenav.pagesManagement.attendancePolicy'},
    { routeLink: 'pagesManagement/userGuide', label: 'sidenav.pagesManagement.userGuide'}]
  },
  { routeLink: 'platformSettings', icon: 'fa-solid fa-tv', label: 'sidenav.platformSettings.platformSettings', items: [
    { routeLink: 'platformSettings/identitySettings', label: 'sidenav.platformSettings.identitySettings'},
    { routeLink: 'platformSettings/localizationSettings', label: 'sidenav.platformSettings.localizationSettings'}]
  },
  { routeLink: 'homeSettings', icon: 'fa-solid fa-screwdriver-wrench', label: 'sidenav.homeSettings.homeSettings', items: [
    { routeLink: 'homeSettings/mainBanner', label: 'sidenav.homeSettings.mainBanner'},
    { routeLink: 'homeSettings/middleBanner', label: 'sidenav.homeSettings.middleBanner'},
    { routeLink: 'homeSettings/statistics', label: 'sidenav.homeSettings.statistics'},
    { routeLink: 'homeSettings/recordedCourses', label: 'sidenav.homeSettings.recordedCourses'},
    { routeLink: 'homeSettings/learningPaths', label: 'sidenav.homeSettings.learningPaths'},
    { routeLink: 'homeSettings/trainingCenters', label: 'sidenav.homeSettings.trainingCenters'},
    { routeLink: 'homeSettings/partners', label: 'sidenav.homeSettings.partners'},
    { routeLink: 'homeSettings/testimonials', label: 'sidenav.homeSettings.testimonials'},
    { routeLink: 'homeSettings/advertisements', label: 'sidenav.homeSettings.advertisements'},
    { routeLink: 'homeSettings/instructors', label: 'sidenav.homeSettings.instructors'}]
  },
  { routeLink: 'messagesSettings', icon: 'fa-solid fa-bell', label: 'sidenav.messagesSettings.messagesNotificationSettings', items: [
    { routeLink: 'messagesSettings/messagesConfigurations', label: 'sidenav.messagesSettings.messagesConfigurations'},
    { routeLink: 'messagesSettings/emailConfigurations', label: 'sidenav.messagesSettings.emailConfigurations'},
    { routeLink: 'pagesManagement/emailTemplate', label: 'sidenav.pagesManagement.emailTemplate'}]
  },
  { routeLink: 'videoConferences', icon: 'fa-solid fa-video', label: 'sidenav.videoConferences' },
  { routeLink: 'dynamicFormSettings', icon: 'fa-solid fa-gear', label: 'sidenav.dynamicFormSettings' }
];
