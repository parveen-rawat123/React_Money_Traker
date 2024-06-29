import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import Person2Icon from '@mui/icons-material/Person2';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialSite = [
    {
        id: 1,
        icon: <Person2Icon />,
        link: "https://praveensingh.vercel.app/",
        color: "blue"
    },
    {
        id: 2,
        icon: <LinkedInIcon />,
        link: "https://www.linkedin.com/in/praveen-singh-8902a4265/",
        color: "blue"
    },
    {
        id: 3,
        icon: <TwitterIcon />,
        link: "https://x.com/princeR74930066",
        color: "blue"
    },
    {
        id: 4,
        icon: <GitHubIcon />,
        link: "https://github.com/parveen-rawat123",
        color: "black"
    },
    {
        id: 5,
        icon: <InstagramIcon />,
        link: "https://www.instagram.com/praveen_rawat477/?igsh=YzljYTk1ODg3Zg%3D%3D",
        color: "red"
    },
];

const SocialSites = () => {
    return (
        <ul className="flex gap-4 cursor-pointer">
            {SocialSite.map((item) => (
                <li key={item.id} className="transition-transform transform hover:scale-110">
                    <a 
                        href={item.link} 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        style={{ color: item.color }}
                        className={`hover:text-${item.color.replace('#', '')}`}
                    >
                        {item.icon}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default SocialSites;
