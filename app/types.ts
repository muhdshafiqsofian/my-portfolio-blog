export type Resume = {
  basics: {
    name: string;
    label: string;
    image: string; // Use string for URLs
    email: string;
    summary: string;
    location: {
      city: string;
      countryCode: string;
      region: string;
    };
    profiles: {
      network: string; // Example: LinkedIn, GitHub
      username: string;
      url: string; // Use string for the profile link
    }[];
  };
  work: {
    name: string;
    position: string;
  }[];
  education: {
    institution: string;
    url: URL;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    _score: string;
    _courses: string[];
  }[];
  certificates: {
    name: string;
    date: string;
    issuer: string;
    url: URL;
  }[];
};
