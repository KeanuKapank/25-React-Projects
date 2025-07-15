const menu = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "/profile/details",
        children: [
          {
            label: "Location",
            to: "/profile/details/location",
            children: [
              {
                label: "City",
                to: "/profile/details/location",
              },
              {
                label: "Country",
                to: "/profile/details/location",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        children: [
          {
            label: "Login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
          },
        ],
      },
      {
        label: "Consulting",
        to: "consulting",
      },
    ],
  },
  {
    label: "Blog",
    to: "blog",
  },
  {
    label: "Contact",
    to: "contact",
  },
];

export default menu;
