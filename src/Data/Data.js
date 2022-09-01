import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt
} from "@iconscout/react-unicons";


export const SideBarData =[
    {
        icon:UilEstate,
        heading: "Dashboard"
    },
    {
        icon:UilUsersAlt,
        heading: "Students"
    }, 
    {
        icon: UilPackage,
        heading: 'Metrics'
      },
      {
        icon: UilChart,
        heading: 'Analytics'
      },

];

export const CardsData =[

    {
        title:"Total Students",
        color:{
            background: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        barValue:70,
        value:"10000",
        series:[
            {
                name:"Total Students",
                data:[100,200,300,400,500,600,700,800,900,1000]
            },
        ],
    },
    {
        title:"Total Students",
        color:{
            background: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        barValue:70,
        value:"10000",
        series:[
            {
                name:"Total Students",
                data:[100,200,300,400,500,600,700,800,900,1000]
            },
        ],
    }
];


export const UpdatesData = [
    {
      name: "IIT Srinagar",
      noti: "This college has launched a new course",
      time: "25 seconds ago",
    },
    {
      name: "VIT University",
      noti: "2022 Intake has been completed",
      time: "30 minutes ago",
    },
    {
      name: "SRM University",
      noti: "From next year it will increase its intake",
      time: "2 hours ago",
    },
  ];