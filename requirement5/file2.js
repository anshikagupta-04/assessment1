const response = [
    {
        "name": "Amit",
        "city": "Mumbai",
        "skills": [
            "Acting",
            "Singing",
            "Dancing"
        ],
        "vehicle": {
            "model": "BMW",
            "year": 2021
        }
    },
    {
        "name": "Rahul",
        "city": "Jaipur",
        "skills": [
            "Swimming",
            "Walking",
            "Dancing"
        ],
        "vehicle": {
            "model": "Scoda",
            "year": 2019
        }
    },
    {
        "name": "Vijay",
        "city": "Pune",
        "skills": [
            "Sarcasm",
            "Debate",
            "RTI"
        ],
        "vehicle": {
            "model": "M80",
            "year": 1999
        }
    }
  ];
  
  
  const nameAndYearArray = response.map(person => ({
    name: person.name,
    year: person.vehicle.year
  }));
  
  const filteredArray = nameAndYearArray.filter(person => person.year > 2020);
  
  
  console.log(filteredArray);