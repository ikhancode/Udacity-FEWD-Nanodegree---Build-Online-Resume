var bio = {
    "name": "Muzamil Khan",
    "role": "Web Developer",
    "contacts": [{
        "mobile": "+64123456789",
        "email": "mkha537@gmail.com",
        "github": "ikhancode",
        "location": "Hamilton, New Zealand"
    }],
    "welcomeMessage": "Hello! I am a Computer Science student from Auckland, New Zealand",
    "skills": ["hacking", " programming", " coding", "debugging"],
    "bioPic": "images/bioPic.jpg"
}

var education = {
    "schools": [{
            "name": "Whangaparaoa College",
            "location": "Auckland, New Zealand",
            "degree": "High School Completion Certificate",
            "majors": ["Compsci", " Calculus", " Accounting"],
            "dates": "January, 2010 - December, 2013"
        },
        {
            "name": "The University of Auckland",
            "location": "Auckland, New Zealand",
            "degree": "BSc.",
            "majors": ["Compsci"],
            "dates": "January 2014 - December 2016"
        }
    ],
    "onlineCourses": [{
        "title": "Front End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "December 2016 - Future",
        "url": "https://www.udacity.com/"
    }]
}

var work = {
    "jobs": [{
            "employer": "The University of Auckland",
            "title": "Teaching Assistant",
            "location": "Auckland, New Zealand",
            "dates": "May 5th 2016 - Future",
            "description": "Undergraduate teaching assistant for Infosys 322. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "employer": "Bunnings Warehouse",
            "title": "Team Member",
            "location": "Christchurch, New Zealand",
            "dates": "20th September, 2015 - 4th Ferbruary, 2016",
            "description": "Worked as a part-time team member at Bunnings Warehouse.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ]
}

var projects = {
    "projects": [{
            "title": "Portfolio - Muzamil Khan",
            "dates": "25th December, 2016 - 2nd January, 2017",
            "description": "I made this as part of Udacity's Front End Web Development course. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images": ["images/project-portfolio.png", "images/project-portfolio-2.png"]
        },
        {
            "start": "July, 2016",
            "title": "TextYield",
            "dates": "28th September, 2016 - 2nd November, 2016",
            "description": "This is a web application that extracts text from images. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images": ["images/project-textyield.png", "images/project-textyield-2.png"]
        }
    ]
}

bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var email = HTMLemail.replace("%data%", bio.contacts[0].email);
    $("#topContacts, #footerContacts").append(email);

    var mobile = HTMLmobile.replace("%data%", bio.contacts[0].mobile);
    $("#topContacts, #footerContacts").append(mobile);

    var github = HTMLgithub.replace("%data%", bio.contacts[0].github);
    $("#topContacts, #footerContacts").append(github);

    var loc = HTMLlocation.replace("%data%", bio.contacts[0].location);
    $("#topContacts, #footerContacts").append(loc);

    var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedPic);

    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#header").append(formattedSkill);
        });
    }

    //$("#footerContacts").append(internationalizeButton);
};
bio.display();

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        formattedEmp = HTMLworkEmployer.replace("%data%", job.employer);
        formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        empTitle = formattedEmp + formattedTitle;
        $(".work-entry:last").append(empTitle);

        formattedDate = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDate);

        formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);

        formattedDesc = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDesc);
    });
};
work.display();

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDesc = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDesc);

        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });
};
projects.display();

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        nameDegree = formattedSchoolName + formattedSchoolDegree;
        $(".education-entry:last").append(nameDegree);

        formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedSchoolDates);

        formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedSchoolLocation);

        formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedSchoolMajor);
    });

    education.onlineCourses.forEach(function(course) {
        $(".education-entry:last").append(HTMLonlineClasses);

        formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
        formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        titleSchool = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(titleSchool);

        formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
        $(".education-entry:last").append(formattedOnlineDates);

        formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url);
        $(".education-entry:last").append(formattedOnlineURL);
    });
};
education.display();

$("#mapDiv").append(googleMap);