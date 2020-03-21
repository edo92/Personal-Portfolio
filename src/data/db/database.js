import Mock from "../mock";

const database = {
  information: {
    name: 'Eduard Jacobs',
    aboutContent: "I am a Full stack software engineer. I’m interested in applying technology to make a smarter world that is more streamlined and offers greater human possibilities.",
    age: 27,
    phone: '',
    language: 'English, Armenian, Russian',
    email: '',
    address: 'Los Angeles, California, 91401',
    socialLinks: {
      facebook: 'facebook.com',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/the-ej/',
      dribbble: '',
      github: 'https://github.com/edo92'
    },
    brandImage: 'https://unit-images.s3-us-west-1.amazonaws.com/photo.png',
    aboutImage: 'https://unit-images.s3-us-west-1.amazonaws.com/photo.png',
    aboutImageLg: 'https://unit-images.s3-us-west-1.amazonaws.com/photo.png',
    cvfile: '/files/empty.pdf'
  },
  services: [
    {
      title: "Full stack website",
      icon: 'color-pallet',
      details: "Full stack application using React, Angular, Vue."
    },
    {
      title: "Backend Development",
      icon: 'code',
      details: "Backend development using Node.js Django"
    },
    {
      title: "Mobile Application",
      icon: 'mobile',
      details: "Mobile app development using React native, node.js, aws"
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "Node JS",
      value: 99
    },
    {
      title: "Javascript",
      value: 99
    },
    {
      title: "Django",
      value: 99
    },
    {
      title: "React",
      value: 95
    },
    {
      title: "Python",
      value: 95
    },
    {
      title: "React Native",
      value: 90
    },
    {
      title: "MongoDB",
      value: 99
    },
    {
      title: "Postgres",
      value: 90
    },
    {
      title: "MySQL",
      value: 85
    },
    {
      title: "AWS (S3, EC2, lambda, Elastic Beanstalk, IOT, hosting)",
      value: 90
    },
    {
      title: "Google Cloude",
      value: 90
    },
    {
      title: "IOT (Balena)",
      value: 90
    },
    {
      title: "CI/CD Pipeline (aws)",
      value: 90
    },
    {
      title: "Docker",
      value: 90
    },
    {
      title: "GraphQL",
      value: 90
    },
    {
      title: "Typescript",
      value: 90
    },
    {
      title: "Postman",
      value: 90
    },
    {
      title: "SASS",
      value: 90
    },
    {
      title: "C#",
      value: 45
    },
    {
      title: "JAVA",
      value: 45
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2019 - Present",
        position: "Software Engineer",
        company: "InHouse-Produce",
        details: "Developed IOT software for vertical farming, with full stack web application."
      },
      {
        id: 2,
        year: "2018 - 2019",
        position: "Full Stack Web Developer",
        company: "upwork.com",
        details: "Build full stack application for clients, and work on node.js backend mobile apps"
      },

    ],
    educationExperience: [
      {
        id: 1,
        year: "2018 - 2018",
        graduation: "Full Stack Web Developer",
        university: "University of California, Los Angeles Extention",
      },
      {
        id: 2,
        year: "2015 - 2017",
        graduation: "Computer Science",
        university: "Los Angeles Valley Collage",
      },
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'InHouse-produce vertical farming',
      featuredImage: 'https://inhouseproduce.com/img/inhouse-icon.png',
      filesource: '../../blog/inhouse.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['(818) 404-3185'],
    emailAddress: ['edoter92@gmail.com'],
    address: "Los Angeles, California, 91401"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});