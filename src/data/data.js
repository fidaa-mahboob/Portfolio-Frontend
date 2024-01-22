export const data = () => {
    return [
        {
            title: "Financial Record RESTful API",
            subtitle: "Java / Springboot / AWS / Terraform",
            description:
          "This backend RESTful API I'm currently building is for personal use and learning purposes. In this project, I am building a Spring Boot REST API that will store complex financial data in a backend DynamoDB database in AWS. Click to find out more.",
            image: "./aws.png",
            link: "https://github.com/fidaa-mahboob/Financial-Record-API-MVP",
        },
        {
            title: "Weather Sense Full Stack App",
            subtitle: "ReactJS / Javascript / NodeJS / GraphQL",
            description:
          "A weather app that will give three hourly forecast and current weather for a given or present location. The backend uses a proxy server to serve the frontend React app weather data from OpenWeather API. Click to find out more.",
            image: "./weathersense.png",
            link: "https://github.com/fidaa-mahboob/weathersense",
        },
        {
            title: "Note Encryption API v1",
            subtitle: "Java / Spring Boot / MySQL",
            description:
          "This app encrypts notes added to the database and only someone who knows the encryption key can decrypt notes from the MySQL database. The project makes use of the caesar cypher algorithm to encrypt notes.",
            image: "./NoteEncryptorSnapshot.png",
            link: "https://github.com/fidaa-mahboob/Note-Encryptor-API-v1",
        },
    ];
};

export const skills_data = () => {
    return [
        { name: "Javascript", icon: "./Javascript-icon.png" },
        { name: "React JS", icon: "./React-icon.png" },
        { name: "Node JS", icon: "./nodejs-icon.png" },
        { name: "Java", icon: "./Java.png" },
        { name: "Spring Boot", icon: "./springboot.png" },
        { name: "Terraform", icon: "./terraform.png" },
        { name: "AWS", icon: "./AWS_icon.png" },
        { name: "Github Actions CI/CD", icon: "./github.png" },
        { name: "Docker", icon: "./docker.png" },
        { name: "MySQL", icon: "./mysql.png" },
        { name: "Python", icon: "./python.png" },
        { name: "GraphQL", icon: "./graphql-logo.png" },
    ];
};
